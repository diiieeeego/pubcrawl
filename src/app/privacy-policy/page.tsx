import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Pub Crawl Zadar",
  description: "Learn how Pub Crawl Zadar collects, uses, and protects your personal information.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you book a tour or contact us, we may collect your name, email address, phone number, and number of attendees. This information is provided voluntarily by you and is necessary to process your reservation.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data helps us understand how visitors interact with our site.",
      },
      {
        subtitle: "Communication Data",
        text: "If you contact us via email or our contact form, we retain a record of that correspondence, including the content of your messages, to provide support and improve our service.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your personal information to process bookings, confirm reservations, send reminders, and communicate any changes to your tour details.",
      },
      {
        subtitle: "Improving Our Service",
        text: "Usage data and analytics help us understand which parts of our website are most useful and where we can improve the experience for future visitors.",
      },
      {
        subtitle: "Marketing",
        text: "With your consent, we may send occasional promotional emails about upcoming events, special offers, or news. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may use or disclose your information when required by law, court order, or governmental authority, or to protect our legal rights.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and deliver relevant content.",
      },
      {
        subtitle: "Types of Cookies We Use",
        text: "We use necessary cookies (required for site functionality), functional cookies (to remember your preferences), statistical cookies (to analyse traffic anonymously via tools like Google Analytics), and marketing cookies (to show relevant ads on third-party platforms).",
      },
      {
        subtitle: "Managing Cookies",
        text: "You can control your cookie preferences at any time using the Cookie Settings panel, accessible from the footer of every page. You may also configure your browser to refuse cookies, though some features of the site may not function correctly as a result.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: [
      {
        subtitle: "Google Analytics",
        text: "We use Google Analytics to analyse site traffic. Google may collect and process data in accordance with their own Privacy Policy. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
      },
      {
        subtitle: "Social Media",
        text: "Our website includes links to and integrations with social media platforms (Instagram, Facebook, TripAdvisor). These platforms have their own privacy policies, and we have no control over their data practices.",
      },
      {
        subtitle: "Email Service Providers",
        text: "We use trusted third-party email providers to send booking confirmations and communications. These providers are contractually obligated to keep your information secure and use it solely for the purpose of delivering our messages.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Booking records are typically retained for up to 3 years for accounting and legal purposes.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal data at any time by contacting us. We will delete your information within 30 days of a valid request, except where retention is required by law.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights (GDPR)",
    content: [
      {
        subtitle: "Right to Access",
        text: "You have the right to request a copy of the personal data we hold about you.",
      },
      {
        subtitle: "Right to Rectification",
        text: "You may request that we correct any inaccurate or incomplete information we hold about you.",
      },
      {
        subtitle: "Right to Erasure",
        text: "You have the right to request that we delete your personal data, subject to certain legal exceptions.",
      },
      {
        subtitle: "Right to Object",
        text: "You may object to our processing of your personal data for marketing purposes at any time.",
      },
      {
        subtitle: "Right to Data Portability",
        text: "You have the right to receive your personal data in a structured, commonly used, machine-readable format.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        subtitle: "Data Controller",
        text: "Pub Crawl Zadar is the data controller responsible for your personal information. If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at pubcrawlzadarinfo@gmail.com or by phone at +385 91 329 5113.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#231F20]">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1AB3E6]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1AB3E6]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-16">
          <div className="flex items-center gap-2 text-[#1AB3E6] text-xs font-medium uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-gray-500">Privacy Policy</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#1AB3E6]/10 border border-[#1AB3E6]/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Shield size={22} className="text-[#1AB3E6]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                We are committed to protecting your personal information and your right to privacy. This policy explains what information we collect, how we use it, and the choices you have.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                Last updated: <span className="text-gray-500">June 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* TOC — sticky sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mb-4">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2.5 text-xs text-gray-500 hover:text-[#1AB3E6] transition-colors py-1 group"
                  >
                    <span className="w-5 h-5 rounded-md bg-white/5 group-hover:bg-[#1AB3E6]/10 flex items-center justify-center text-[10px] text-gray-600 group-hover:text-[#1AB3E6] transition-colors flex-shrink-0 font-mono">
                      {i + 1}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-14">
            {sections.map((section, i) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-[#1AB3E6]/60 w-6">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="space-y-6 pl-9">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="text-sm font-semibold text-[#1AB3E6] mb-2 uppercase tracking-wide">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-14 h-px bg-white/5" />
                )}
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="mt-10 p-6 rounded-2xl border border-[#1AB3E6]/15 bg-[#1AB3E6]/5">
              <p className="text-sm text-gray-300 leading-relaxed">
                Have questions about your data or want to exercise your rights?{" "}
                <Link href="/#contact" className="text-[#1AB3E6] hover:underline font-medium">
                  Contact us
                </Link>{" "}
                and we will respond within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
