import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
export default function Stop1() {
    return (
        <section id="stop1" className="relative z-50 max-w-6xl mx-auto px-5 h-screen py-10">
            <div className="relative">
                {/* Background Image */}
                <div className="absolute top-0 right-1/2 md:right-10 md:w-1/4">
                    <Image
                        src="/stop1dark.jpg"
                        alt="stop1"
                        width={200}
                        height={400}
                        className="w-full h-auto rotate-20 translate-x-20 rounded-lg md:hidden"
                    />
                    <Image
                        src="/stop11.jpg"
                        alt="stop11"
                        width={200}
                        height={400}
                        className="w-full h-auto rounded-lg hidden md:block"
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full md:w-2/3 py-16">
                    <span className="inline-block rounded-full px-5 py-2 bg-red-500/80 text-neutral-50 text-lg font-bold">STOP 1</span>
                    <h1 className="text-4xl md:text-7xl font-bold text-neutral-50 my-8 text-shadow">
                        OPEN BAR
                    </h1>
                    <p className="text-lg md:text-xl">
                        At the first stop with Pub Crawl Crew from Zadar, get ready for an epic start to your night with a 60-minute open bar! Enjoy unlimited drinks from a specially curated list, ensuring everyone finds their favorite beverage to kick off the fun. Cheers to an unforgettable night!
                    </p>
                    <Link href="/drinks" className="flex items-center gap-2 hover:underline text-[#1ab3e6]/80 mt-4">
                        <MoveRight size={16} /> See drink list
                    </Link>
                </div>
            </div>
        </section>
    )
}