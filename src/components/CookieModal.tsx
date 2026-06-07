"use client";

import { useState, useEffect } from "react";
import { X, Cookie, ChevronDown, ChevronUp, Shield, BarChart2, Megaphone, Settings2 } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  statistical: boolean;
  marketing: boolean;
};

export const STORAGE_KEY = "pubcrawl_cookie_consent";

const categories = [
  {
    key: "necessary" as const,
    label: "Necessary",
    icon: Shield,
    description:
      "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.",
    required: true,
  },
  {
    key: "functional" as const,
    label: "Functional",
    icon: Settings2,
    description:
      "Functional cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, more personal features.",
    required: false,
  },
  {
    key: "statistical" as const,
    label: "Statistical",
    icon: BarChart2,
    description:
      "Statistical cookies help us understand how visitors interact with the website by collecting and reporting information anonymously, so we can improve the experience.",
    required: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    icon: Megaphone,
    description:
      "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
    required: false,
  },
];

export default function CookieModal() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    statistical: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setTimeout(() => setVisible(true), 600);
    }

    const handleOpen = () => {
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  const save = (preferences: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...preferences, timestamp: Date.now() })
    );
    setVisible(false);
    setShowDetails(false);
  };

  const acceptAll = () =>
    save({ necessary: true, functional: true, statistical: true, marketing: true });

  const rejectAll = () =>
    save({ necessary: true, functional: false, statistical: false, marketing: false });

  const saveCustom = () => save(prefs);

  const toggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      {showDetails && (
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          onClick={() => setShowDetails(false)}
        />
      )}

      {/*
        Mobile:  w-full, anchored to left/right/bottom, rounded-t-2xl
        Desktop: max-w-2xl, centred, mb-4, rounded-2xl (all sides)
        When details open: max-h-[90vh] so it never overflows the screen
      */}
      <div
        className={[
          "relative w-full pointer-events-auto",
          "flex flex-col",
          "bg-[#1a1718] border border-white/10 shadow-2xl overflow-hidden",
          // height cap only when settings panel is open
          showDetails ? "max-h-[90vh]" : "",
          // desktop: float above bottom edge, constrain width, round all corners
          "sm:max-w-2xl sm:mx-4 sm:mb-4 sm:rounded-2xl",
          // mobile: full-width sheet, only top corners rounded
          "rounded-t-2xl",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Top accent line — always visible, never scrolls away */}
        <div className="flex-shrink-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#1AB3E6] to-transparent" />

        {/* Drag handle — mobile hint that the sheet is scrollable */}
        {showDetails && (
          <div className="flex-shrink-0 flex justify-center pt-2.5 pb-0 sm:hidden">
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
        )}

        {/* ── Header — sticky, never scrolls away ───────────────────── */}
        <div className="flex-shrink-0 flex items-start justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1AB3E6]/15 flex items-center justify-center flex-shrink-0">
              <Cookie size={18} className="text-[#1AB3E6]" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm leading-tight">
                Cookie Preferences
              </h2>
              <p className="text-gray-400 text-xs mt-0.5">
                We use cookies to enhance your experience.
              </p>
            </div>
          </div>
          <button
            onClick={rejectAll}
            className="text-gray-500 hover:text-gray-300 transition-colors p-1.5 -mr-1 -mt-0.5 rounded-lg hover:bg-white/5"
            aria-label="Close and reject all"
          >
            <X size={17} />
          </button>
        </div>

        {/* ── Compact banner description ─────────────────────────────── */}
        {!showDetails && (
          <p className="flex-shrink-0 px-5 pb-3 text-gray-400 text-xs leading-relaxed">
            We and our partners use cookies to personalise content, provide social media
            features, and analyse traffic.{" "}
            <button
              onClick={() => setShowDetails(true)}
              className="text-[#1AB3E6] hover:underline font-medium"
            >
              Manage preferences
            </button>
          </p>
        )}

        {/* ── Scrollable categories (details only) ──────────────────── */}
        {showDetails && (
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-3">
            <p className="text-gray-400 text-xs mb-3 leading-relaxed">
              Choose which categories to allow. Necessary cookies are always on.
            </p>
            <div className="space-y-2">
              {categories.map(({ key, label, icon: Icon, description, required }) => (
                <div
                  key={key}
                  className="border border-white/8 rounded-xl overflow-hidden bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3 px-3 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1AB3E6]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#1AB3E6]" />
                    </div>
                    <span className="text-white text-sm font-medium flex-1">{label}</span>

                    {required ? (
                      <span className="text-[10px] text-[#1AB3E6] bg-[#1AB3E6]/10 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide flex-shrink-0">
                        Always on
                      </span>
                    ) : (
                      <button
                        onClick={() => toggle(key)}
                        className={`relative w-10 h-5 rounded-full transition-colors duration-200 flex-shrink-0 ${
                          prefs[key] ? "bg-[#1AB3E6]" : "bg-white/15"
                        }`}
                        aria-checked={prefs[key]}
                        role="switch"
                        aria-label={`Toggle ${label}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                            prefs[key] ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    )}

                    <button
                      onClick={() =>
                        setExpandedCategory(expandedCategory === key ? null : key)
                      }
                      className="text-gray-500 hover:text-gray-300 transition-colors ml-1 flex-shrink-0"
                      aria-label={`Expand ${label}`}
                    >
                      {expandedCategory === key ? (
                        <ChevronUp size={15} />
                      ) : (
                        <ChevronDown size={15} />
                      )}
                    </button>
                  </div>

                  {expandedCategory === key && (
                    <div className="px-3 pb-3 border-t border-white/5">
                      <p className="text-gray-400 text-xs leading-relaxed pt-3">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Actions — sticky, never scrolls away ──────────────────── */}
        <div
          className={`flex-shrink-0 px-5 pt-3 pb-3 flex gap-2 ${
            showDetails
              ? "flex-col sm:flex-row-reverse border-t border-white/8"
              : "flex-wrap"
          }`}
        >
          {showDetails ? (
            <>
              <button
                onClick={acceptAll}
                className="flex-1 bg-[#1AB3E6] hover:bg-[#17a0cf] active:bg-[#1490be] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={saveCustom}
                className="flex-1 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-sm font-medium py-3 px-4 rounded-xl transition-colors border border-white/10"
              >
                Save Preferences
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 text-gray-400 hover:text-white text-sm py-3 px-4 rounded-xl transition-colors hover:bg-white/5 active:bg-white/8"
              >
                Reject All
              </button>
            </>
          ) : (
            <>
              <button
                onClick={acceptAll}
                className="flex-1 min-w-[100px] bg-[#1AB3E6] hover:bg-[#17a0cf] active:bg-[#1490be] text-white text-sm font-semibold py-3 px-3 rounded-xl transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 min-w-[100px] bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-sm font-medium py-3 px-3 rounded-xl transition-colors border border-white/10"
              >
                Manage
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 min-w-[100px] text-gray-400 hover:text-white text-sm py-3 px-3 rounded-xl transition-colors hover:bg-white/5"
              >
                Reject All
              </button>
            </>
          )}
        </div>

        {/* Privacy note */}
        <div className="flex-shrink-0 px-5 pb-4 text-center">
          <p className="text-[10px] text-gray-600">
            By using this site you agree to our{" "}
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-[#1AB3E6] transition-colors underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
