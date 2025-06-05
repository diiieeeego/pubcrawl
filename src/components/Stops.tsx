
import Link from "next/link"
import { BsArrowDownCircle } from "react-icons/bs"
export default function Stops() {
    return (
        <section id="stops" className="max-w-6xl mx-auto py-32">
            <h1 className="text-4xl font-bold text-neutral-50 mb-8">Our Stops</h1>
            <p className="max-w-2xl me-auto mb-16">
                Pub Crawl Crew from Zadar is your ticket to a wild and wacky night out! Join this fun-loving crew to hit the best bars and clubs, score awesome drink specials, play hilarious games, and meet a bunch of new party pals. Whether you&apos;re a tourist or a local, get ready for a night of crazy fun and unforgettable shenanigans!
            </p>
            <div className=" relative w-full h-[400px] rounded-lg overflow-hidden bg-[url('/stops.jpg')] bg-cover bg-no-repeat">
                <h2 className="text-5xl font-bold absolute top-1/2 left-1/2 -translate-1/2">3 Stops + Bonus Stop</h2>
                <Link href="#stops" className="absolute bottom-5 left-1/2 -translate-x-1/2 bounce flex flex-col gap-2 items-center">
                    <span>1. stop</span>
                    <BsArrowDownCircle className="" size={32} />
                </Link>
            </div>
        </section>
    )
}