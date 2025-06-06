import Image from "next/image"
import Link from "next/link"
import {MoveRight} from "lucide-react"
export default function Stop1(){
    return(
        <section id="stop1" className="">
        <div  className="max-w-6xl mx-auto space-y-8 ">
        <div className="h-fit pb-32 md:py-32 flex flex-wrap gap-4 items-start justify-between px-5 overflow-x-hidden">
          <Image  
            src={"/stop1.jpg"}
            width={200}
            height={400}
            alt={"stop1"}
            className="rounded-lg -rotate-20 md:rotate-10 sm:translate-x-10 translate-y-30 mx-auto md:mx-0"
          />
          <div className="sm:w-1/2 md:2/3 sm:mx-20 z-[999]">
            <span className="rounded-full px-5 py-2 bg-red-500/80 text-neutral-50 text-lg font-bold">STOP 1</span>
            <h1 className="text-4xl md:text-7xl font-bold text-neutral-50 my-8 text-shadow">
              OPEN BAR
            </h1>
            <p>
            At the first stop with Pub Crawl Crew from Zadar, get ready for an epic start to your night with a 60-minute open bar! Enjoy unlimited drinks from a specially curated list, ensuring everyone finds their favorite beverage to kick off the fun. Cheers to an unforgettable night!
            </p>
            <Link href="/drinks" className="flex items-center gap-2 hover:underline text-[#1ab3e6]/80 mt-4"><MoveRight size={16} /> See drink list </Link>
          </div>
        </div>

      </div>
        </section>
    )
}