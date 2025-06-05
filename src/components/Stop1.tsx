import Image from "next/image"
import Link from "next/link"
import {MoveRight} from "lucide-react"
export default function Stop1(){
    return(
        <>
        <div id="stop1" className="max-w-6xl mx-auto space-y-8 py-16">
        <div className="flex flex-wrap gap-4 items-start justify-between px-5">
          <Image  
            src={"/stop1.jpg"}
            width={150}
            height={300}
            alt={"stop1"}
            className="rounded-lg rotate-10 sm:translate-x-10 mx-auto md:mx-0"
          />
          <div className="mt-8 sm:mt-0 sm:w-1/2 md:2/3 sm:mx-20">
            <span className="rounded-full px-5 py-2 bg-red-500/80 text-neutral-50 text-lg font-bold">STOP 1</span>
            <h1 className="text-4xl md:text-7xl font-bold text-neutral-50 my-8 xs:mt-0">
              OPEN BAR
            </h1>
            <p>
            At the first stop with Pub Crawl Crew from Zadar, get ready for an epic start to your night with a 60-minute open bar! Enjoy unlimited drinks from a specially curated list, ensuring everyone finds their favorite beverage to kick off the fun. Cheers to an unforgettable night!
            </p>
            <Link href="/drinks" className="flex items-center gap-2 hover:underline text-[#1ab3e6]/80 mt-4"><MoveRight size={16} /> See drink list </Link>
          </div>
        </div>

      </div>
        </>
    )
}