"use client"
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaTripadvisor, FaFacebookF } from 'react-icons/fa';
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Toggle body scroll
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    // Cleanup scroll lock when component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <nav className="w-full absolute top-0 left-0 bg-none">
            <div className="max-w-6xl mx-auto py-5 pt-10 px-3 flex items-center justify-between">
                <div onContextMenu={(e) => e.preventDefault()} className="flex items-center gap-2 text-neutral-50 uppercase font-bold">
                    <Image
                        src={"/PubCrawlLogo.png"}
                        alt={"logo"}
                        width={90}
                        height={75}
                        draggable={false}
                        priority
                    />
                    
                </div>
                <div className="hidden md:flex items-center gap-4 uppercase ">
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="/">Home</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="#stops">Stops</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="#details">Details</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="#gallery">Gallery</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#1AB3E6] text-neutral-800" href="#contact">Contact</Link>
                </div>
                <div className="md:hidden relative">
                    <button onClick={toggleMenu} className="text-3xl p-2 text-white">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={toggleMenu}
                    />
                )}
                {/* Sliding Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-neutral-800 text-neutral-50 shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-4 mt-10">
                        <button onClick={toggleMenu} className="text-3xl p-2 text-white float-right">
                            <FiX />
                        </button>
                    </div>
                    <nav className='flex flex-col items-start mt-16'>
                        <Link
                            className='w-full p-4 hover:bg-[#1AB3E6] transition-colors duration-200'
                            href="/"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            className='w-full p-4 hover:bg-[#1AB3E6] transition-colors duration-200'
                            href="#stops"
                            onClick={toggleMenu}
                        >
                            Stops
                        </Link>
                        <Link
                            className='w-full p-4 hover:bg-[#1AB3E6] transition-colors duration-200'
                            href="#details"
                            onClick={toggleMenu}
                        >
                            Details
                        </Link>
                        <Link
                            className='w-full p-4 hover:bg-[#1AB3E6] transition-colors duration-200'
                            href="#gallery"
                            onClick={toggleMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            className='w-full p-4 hover:bg-[#1AB3E6] transition-colors duration-200'
                            href="#contact"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </nav>
                    {/* Social Icons */}
                    <div className='text-center mt-16'>
                        <span className='font-bold text-xl'>Follow Us</span>

                        <div className="flex justify-center gap-6 mt-8">
                            <Link
                                href="https://www.instagram.com/pubcrawlzadar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#1AB3E6] transition-colors duration-200"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#1AB3E6] transition-colors duration-200"
                            >
                                <FaTiktok />
                            </Link>
                            <Link
                                href="https://www.tripadvisor.com/Attraction_Review-g295374-d12538014-Reviews-Pub_Crawl_Zadar-Zadar_Zadar_County_Dalmatia.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#1AB3E6] transition-colors duration-200"
                            >
                                <FaTripadvisor />
                            </Link>
                            <Link
                                href="https://www.facebook.com/PubCrawlZadar/?locale=hr_HR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-[#1AB3E6] transition-colors duration-200"
                            >
                                <FaFacebookF />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}