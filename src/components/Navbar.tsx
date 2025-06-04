"use client"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="w-full absolute top-0 left-0 bg-none">
            <div className="max-w-6xl mx-auto py-5 pt-10 px-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-50 uppercase font-bold">
                    <Image src={"./vercel.svg"} alt={"logo"} width={50} height={50} />
                    <span>PubCrawlZadar</span>
                </div>
                <div className="hidden md:flex items-center gap-4 uppercase ">
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="#home">Home</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#fff]/20" href="#about">Stops</Link>
                    <Link className="rounded-full p-2 px-4 bg-[#1AB3E6]" href="#contact">Contact</Link>
                </div>
                <div className="md:hidden relative">
                    <button onClick={toggleMenu} className="text-3xl p-2">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute top-20 right-5 bg-neutral-800 text-neutral-50 shadow-lg rounded-lg w-48 z-50 md:hidden">
                        <nav className='flex flex-col items-start border-bottom '>
                            <Link className='w-full p-2 hover:bg-[#1AB3E6] rounded-lg' href="#home">Home</Link>
                            <Link className='w-full p-2 hover:bg-[#1AB3E6] rounded-lg' href="#stops">Stops</Link>
                            <Link className='w-full p-2 hover:bg-[#1AB3E6] rounded-lg' href="#contact">Contact</Link>
                        </nav>
                    </div>
                )}
            </div>
        </nav>
    )
}