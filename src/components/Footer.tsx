'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTripadvisor, FaInstagram } from 'react-icons/fa';
import { MapPin, Phone, Mail, Cookie } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Stops', href: '#stops' },
  { label: 'Details', href: '#details' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/PubCrawlZadar/?locale=hr_HR',
    label: 'Facebook',
    icon: FaFacebookF,
  },
  {
    href: 'https://www.instagram.com/pubcrawlzadar/',
    label: 'Instagram',
    icon: FaInstagram,
  }
];

export default function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="bg-[#1a1718] text-gray-400 relative overflow-hidden">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1AB3E6]/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#1AB3E6]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-start gap-6">
              <Image
              src="/pubcrawl_logo.png"
              alt="Pub Crawl Zadar Logo"
              width={90}
              height={90}
              className="mb-5 opacity-90"
            />
            <p className='text-lg md:text-xl'>PubCrawl Zadar</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mb-6">
              The ultimate nightlife experience in Zadar. Discover the best bars and clubs with
              local guides, exclusive drink deals, and fellow travellers from around the world.
            </p>

            {/* Contact info */}
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-gray-500">
                <MapPin size={14} className="text-[#1AB3E6] flex-shrink-0" />
                <span>Zadar, Croatia</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-500">
                <Phone size={14} className="text-[#1AB3E6] flex-shrink-0" />
                <a href="tel:+385913295113" className="hover:text-white transition-colors">
                  +385 91 329 5113
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-500">
                <Mail size={14} className="text-[#1AB3E6] flex-shrink-0" />
                <a href="mailto:pubcrawlzadarinfo@gmail.com" className="hover:text-white transition-colors">
                  pubcrawlzadarinfo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#1AB3E6] transition-all duration-200 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 group-hover:bg-[#1AB3E6]/15 group-hover:border-[#1AB3E6]/30 group-hover:text-[#1AB3E6] transition-all duration-200">
                    <Icon size={14} />
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} Pub Crawl Zadar. All rights reserved.
          </span>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={openCookieSettings}
              className="flex items-center gap-1.5 hover:text-[#1AB3E6] transition-colors group"
            >
              <Cookie size={12} className="group-hover:rotate-12 transition-transform duration-200" />
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
