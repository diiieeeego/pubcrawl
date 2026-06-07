import Link from "next/link";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { Calendar, Users } from "lucide-react";

const badges = [
  { label: "2 Bars",        bg: "bg-white/10 border border-white/15" },
  { label: "1 Club",        bg: "bg-white/10 border border-white/15" },
  { label: "Open Bar",      bg: "bg-[#1AB3E6]/20 border border-[#1AB3E6]/40 text-[#1AB3E6]" },
  { label: "20% Discount",  bg: "bg-[#EF472F]/20 border border-[#EF472F]/40 text-[#EF472F]" },
];

const stats = [
  { value: "500+",  label: "Happy Travellers" },
  { value: "3+",   label: "Venues Per Night" },
  { value: "100%", label: "Fun Guaranteed" },
];



export default function Header() {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/herobg.webp')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Layered overlays */}
      {/* Dark base for legibility */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      {/* Bottom fade into page bg — seamless transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#231F20] to-transparent" aria-hidden="true" />
      {/* Subtle left vignette on desktop */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/30 to-transparent hidden md:block" aria-hidden="true" />

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 pt-28 pb-16">
        <div className="max-w-2xl">

          

          {/* Headline */}
          <h1 className="text-shadow text-white font-extrabold leading-[1.05] tracking-tight mb-6
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl">
            The Best<br />
            Party Crew<br />
            <span className="text-[#1AB3E6]">in Zadar</span>
          </h1>

          

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {badges.map(({ label, bg }) => (
              <span
                key={label}
                className={`${bg} text-neutral-50 text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-1.5 backdrop-blur-sm`}
              >
                {label}
              </span>
            ))}
          </div>

          
        </div>

        {/* ── Stats row ──────────────────────────────────────────── */}
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-4">
              <div>
                <p className="text-white font-extrabold text-2xl leading-none">{value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ─────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center px-6 pb-6 max-w-6xl mx-auto w-full pb-20">

        

        {/* Scroll indicator */}
        <Link
          href="#stops"
          className="bounce flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to stops"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <BsArrowDownCircle size={22} />
        </Link>
      </div>
    </div>
  );
}
