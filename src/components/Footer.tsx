'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer(){
  return (
    <footer className="bg-[#231F20] text-gray-300 py-10 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Logo & Message */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            
          </div>
          <p className="text-sm">
            Inspiring journeys, unforgettable memories. Let&apos;s explore the world together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="#stops" className="hover:text-white">Stops</Link></li>
            <li><Link href="#details" className="hover:text-white">Details</Link></li>
            <li><Link href="#gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Networks */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
              <Facebook />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-white">
              <Instagram />
            </Link>
            <Link href="https://tiktok.com" aria-label="TikTok" className="hover:text-white">
              <Youtube />
            </Link>
            <Link href="https://tripadvisor.com" aria-label="TripAdvisor" className="hover:text-white">
              <MapPin /> 
            </Link>
          </div>
        </div>

        {/* Optional Contact Info or Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm mb-2">Subscribe to get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md bg-gray-800 text-white text-sm w-full sm:w-auto"
            />
            <button className="bg-[#1AB3E6]/80 hover:bg-[#1AB3E6] cursor-pointer hover:shadow-lg text-white px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PubCrawlZadar. All rights reserved.
      </div>
    </footer>
  );
};

