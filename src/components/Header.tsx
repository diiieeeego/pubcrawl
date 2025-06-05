import Link from "next/link"
import { BsArrowDownCircle } from "react-icons/bs"

export default function Header() {
    return (
        <div className="w-full h-screen bg-[url('/herobg.webp')] bg-cover bg-no-repeat bg-center">
            <section className="w-6xl mx-auto grid grid-cols-12 gap-4 pt-64">
                <div className="px-5 col-span-8">
                    <h1 className="text-5xl text-start sm:text-7xl font-bold w-full sm:text-start">THE BEST <br /> PARTY CREW <br /> <span className="font-light text-4xl sm:text-6xl">IN ZADAR</span></h1>
                    <div className="mt-5 flex items-center gap-4">
                        <span className="rounded-full px-4 py-2 bg-neutral-800/70 text-neutral-50">2 BARS</span>
                        <span className="rounded-full px-4 py-2 bg-neutral-800/70 text-neutral-50">1 CLUB</span>
                        <span className="rounded-full px-4 py-2 bg-[#1AB3E6]/80 text-neutral-50">OPEN BAR</span>
                        <span className="rounded-full px-4 py-2 bg-[#EF472F]/80 text-neutral-50">20% DISCOUNT</span>
                    </div>
                </div>
                <div className="col-span-4">

                </div>

            </section>
            <Link href="#stops" className="absolute bottom-20 left-1/2 -translate-x-1/2 bounce flex flex-col gap-2 items-center">
                <span>See More</span>
                <BsArrowDownCircle className="" size={32} />
            </Link>
        </div>
    )
}