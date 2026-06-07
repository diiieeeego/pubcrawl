import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Pub Crawl Zadar",
  description: "Read the terms and conditions governing participation in Pub Crawl Zadar tours.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement",
        text: "By booking a tour, using our website, or participating in any Pub Crawl Zadar event, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.",
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years of age to book or participate in a Pub Crawl Zadar tour. By completing a booking, you confirm that you meet this age requirement. We reserve the right to refuse entry or remove any participant who cannot verify their age.",
      },
    ],
  },
  {
    id: "booking-payment",
    title: "Booking & Payment",
    content: [
      {
        subtitle: "Reservations",
        text: "Bookings can be made via our website contact form, email, or phone. A booking is confirmed only once you receive a written confirmation from us. Availability is not guaranteed until confirmation is received.",
      },
      {
        subtitle: "Pricing",
        text: "All prices are quoted in Euros (€) and are per person. The current standard price is €40 per person. Special offers and birthday exemptions are subject to verification and may be withdrawn at our discretion.",
      },
      {
        subtitle: "Payment",
        text: "Payment is collected on the night of the event at the meeting point. We accept cash in Euros. Please ensure you have the correct amount ready. We do not accept card payments at the meeting point unless otherwise agreed in writing.",
      },
      {
        subtitle: "Group Bookings",
        text: "For groups of 8 or more, please contact us directly to arrange a group booking. Group rates and payment terms may differ from standard individual bookings.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation & Refunds",
    content: [
      {
        subtitle: "Cancellation by You",
        text: "As payment is made on the night, there is no pre-payment to refund in most cases. If a deposit has been agreed for a group booking, cancellations made more than 48 hours before the tour start time will receive a full refund. Cancellations within 48 hours of the tour are non-refundable.",
      },
      {
        subtitle: "Cancellation by Us",
        text: "Pub Crawl Zadar reserves the right to cancel or modify a tour due to insufficient participant numbers, severe weather conditions, force majeure, or other circumstances beyond our control. In such cases, you will be offered an alternative date or a full refund.",
      },
      {
        subtitle: "No-Shows",
        text: "Participants who fail to arrive at the meeting point within 15 minutes of the scheduled start time without prior notification will be considered a no-show. No refund will be issued for no-shows where advance payment has been made.",
      },
    ],
  },
  {
    id: "conduct",
    title: "Participant Conduct",
    content: [
      {
        subtitle: "Behaviour",
        text: "All participants are expected to behave in a respectful and responsible manner towards fellow participants, our guides, and venue staff. Aggressive, abusive, or disruptive behaviour will result in immediate removal from the tour without refund.",
      },
      {
        subtitle: "Alcohol Consumption",
        text: "Pub Crawl Zadar involves visiting multiple licensed premises. Participants are responsible for monitoring their own alcohol consumption. We reserve the right to refuse service or remove participants who appear to be intoxicated to a degree that poses a risk to themselves or others.",
      },
      {
        subtitle: "Venue Rules",
        text: "Participants must comply with the rules and dress codes of each venue visited. Entry to certain venues may be refused by venue staff. We are not responsible for any refused entry to venues.",
      },
      {
        subtitle: "Guide Instructions",
        text: "Participants must follow the instructions of the tour guide at all times. This is for the safety and enjoyment of the whole group. Failure to comply may result in removal from the tour.",
      },
    ],
  },
  {
    id: "liability",
    title: "Liability & Safety",
    content: [
      {
        subtitle: "Limitation of Liability",
        text: "Pub Crawl Zadar and its organisers are not liable for any loss, damage, injury, illness, death, or expense suffered by participants during a tour, except where caused by our direct negligence. Participation in a pub crawl tour carries inherent risks, particularly in connection with alcohol consumption.",
      },
      {
        subtitle: "Personal Belongings",
        text: "We are not responsible for the loss, theft, or damage of personal belongings during any tour. Participants are advised to keep valuables secure and carry only what is necessary.",
      },
      {
        subtitle: "Medical Conditions",
        text: "It is your responsibility to inform us in advance of any medical conditions, allergies, or physical limitations that may affect your participation. We may not be able to accommodate all medical needs.",
      },
      {
        subtitle: "Assumption of Risk",
        text: "By participating in a Pub Crawl Zadar tour, you acknowledge that you participate voluntarily and assume full responsibility for any risks associated with your own health, safety, and behaviour.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Website Content",
        text: "All content on the Pub Crawl Zadar website, including text, images, logos, graphics, and design elements, is the property of Pub Crawl Zadar and is protected by applicable copyright and trademark laws.",
      },
      {
        subtitle: "Photography",
        text: "Photos and videos taken by Pub Crawl Zadar during events may be used on our website and social media channels. If you appear in such media and wish to have an image removed, please contact us and we will act promptly.",
      },
      {
        subtitle: "Prohibited Use",
        text: "You may not reproduce, distribute, or create derivative works from our content without prior written permission from Pub Crawl Zadar.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: [
      {
        subtitle: "Modifications",
        text: "Pub Crawl Zadar reserves the right to update or modify these Terms of Service at any time without prior notice. The most current version will always be available on this page. Your continued use of our services following any changes constitutes your acceptance of the new terms.",
      },
      {
        subtitle: "Governing Law",
        text: "These Terms of Service are governed by and construed in accordance with the laws of the Republic of Croatia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zadar, Croatia.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      {
        subtitle: "Questions",
        text: "If you have any questions about these Terms of Service, please contact us at pubcrawlzadarinfo@gmail.com or by phone at +385 91 329 5113. We are happy to clarify anything before you book.",
      },
    ],
  },
];

export default function TermsPage() {
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
            <span className="text-gray-500">Terms of Service</span>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#1AB3E6]/10 border border-[#1AB3E6]/20 flex items-center justify-center flex-shrink-0 mt-1">
              <FileText size={22} className="text-[#1AB3E6]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                These terms govern your use of our website and participation in Pub Crawl Zadar events. Please read them carefully before booking.
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
                By booking a Pub Crawl Zadar tour, you confirm that you have read and accepted these Terms of Service. Ready to join us?{" "}
                <Link href="/#contact" className="text-[#1AB3E6] hover:underline font-medium">
                  Book your spot now
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
