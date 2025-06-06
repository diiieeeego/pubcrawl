
import Link from "next/link"
import { BsArrowDownCircle } from "react-icons/bs"
export default function Stops() {
    return (
        <section id="stops" className="max-w-6xl mx-auto py-16 px-5">
            <h1 className="text-4xl font-bold text-neutral-50 mb-8 text-start sm:text-center">Our Stops</h1>
            <p className="max-w-2xl me-auto mb-16 sm:mx-auto text-start sm:text-center">
                Pub Crawl Crew from Zadar is your ticket to a wild and wacky night out! Join this fun-loving crew to hit the best bars and clubs, score awesome drink specials, play hilarious games, and meet a bunch of new party pals. Whether you&apos;re a tourist or a local, get ready for a night of crazy fun and unforgettable shenanigans!
            </p>
            <div className=" relative w-full h-[400px] rounded-lg overflow-hidden bg-[url('/stops.jpg')] bg-cover bg-no-repeat">
                <h2 className="text-4xl font-bold absolute top-1/2 left-1/2 -translate-1/2 text-shadow">3 Stops + Bonus Stop</h2>
                <Link href="#stop1" className="absolute bottom-5 left-1/2 -translate-x-1/2 bounce flex flex-col gap-2 items-center">
                    <span>1. stop</span>
                    <BsArrowDownCircle className="" size={32} />
                </Link>
                <span className="w-screen p-2 bg-[#1AB3E6] absolute top-10 md:top-20 -left-2 rotate-5 font-bold uppercase text-neutral-900 text-md md:text-3xl text-center shadow-xl px-10 md:pe-30 lg:pe-80 xl:pe-130">
                every friday & saturday 
                </span>
            </div>
        </section>
    )
}