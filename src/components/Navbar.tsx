"use client"
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaTripadvisor, FaFacebookF } from 'react-icons/fa';
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // State za skrol

    // Prati skrol da bi dodao pozadinu
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Stops", href: "#stops" },
        { name: "Details", href: "#details" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        // Promenjeno: fixed umesto absolute, dodat transition i dinamička pozadina
        <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 bg-neutral-800/0 ${
            scrolled 
            ? "bg-neutral-800/90  shadow-lg" // Izgled kada se skroluje
            : " py-5 pt-5" // Početni izgled
        }`}>
            <div className="max-w-6xl mx-auto py-5 px-5 flex items-center justify-between transition-all duration-300 ">
                <div onContextMenu={(e) => e.preventDefault()} className="flex items-center gap-2 text-neutral-50 uppercase font-bold">
                    <Image
                        src={"/PubCrawlLogo.png"}
                        alt={"logo"}
                        width={scrolled ? 70 : 90} // Malo se smanji logo pri skrolu radi estetike
                        height={75}
                        className="transition-all duration-300"
                        draggable={false}
                        priority
                    />
                </div>
                
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4 uppercase">
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20 hover:bg-[#fff]/30 transition-colors" href="/">Home</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20 hover:bg-[#fff]/30 transition-colors" href="#stops">Stops</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20 hover:bg-[#fff]/30 transition-colors" href="#details">Details</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20 hover:bg-[#fff]/30 transition-colors" href="#gallery">Gallery</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#1AB3E6] text-neutral-800 font-bold" href="#contact">Contact</Link>
                </div>

                <div className="md:hidden relative">
                    <button onClick={toggleMenu} className="text-3xl p-2 text-white transition-transform active:scale-90">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                        onClick={toggleMenu}
                    />
                )}
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 w-full h-screen bg-neutral-50 dark:bg-[#0A0A0A] z-[110] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* X dugme unutar mobilnog menija da se može zatvoriti */}
                <button onClick={toggleMenu} className="absolute top-10 right-3 text-3xl p-2 text-white z-[120]">
                    <FiX />
                </button>

                <div className="flex flex-col h-full">
                    <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
                        {/* <p className="text-[10px] uppercase tracking-[0.5em] text-gold/50 mb-4 font-bold">Navigacija</p> */}
                        
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setIsOpen(false);
                                    document.body.style.overflow = 'auto';
                                }}
                                className="group flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2 overflow-hidden"
                            >
                                <span 
                                    className={`text-4xl font-philosopher uppercase tracking-tighter transition-all duration-500 group-hover:text-[#1AB3E6] group-hover:pl-4 ${
                                        isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {link.name}
                                </span>
                                <ArrowRight className="text-[#1AB3E6] opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                            </Link>
                        ))}
                    </div>

                    <div className='text-center mb-16'>
                        <span className='font-bold text-xl'>Follow Us</span>
                        <div className="flex justify-center gap-6 mt-8">
                            <Link href="https://www.instagram.com/pubcrawlzadar/" target="_blank" className="text-2xl hover:text-[#1AB3E6] transition-colors"><FaInstagram /></Link>
{/*                             <Link href="https://tiktok.com" target="_blank" className="text-2xl hover:text-[#1AB3E6] transition-colors"><FaTiktok /></Link>
 */}                            <Link href="https://www.tripadvisor.com/Attraction_Review-g295374-d12538014-Reviews-Pub_Crawl_Zadar-Zadar_Zadar_County_Dalmatia.html" target="_blank" className="text-2xl hover:text-[#1AB3E6] transition-colors"><FaTripadvisor /></Link>
                            <Link href="https://www.facebook.com/PubCrawlZadar/?locale=hr_HR" target="_blank" className="text-2xl hover:text-[#1AB3E6] transition-colors"><FaFacebookF /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}