import Image from "next/image"

export default function Stop2(){
    return(
        <section className="py-16">
        <div className="max-w-6xl pt-16 h-screen ms-auto bg-[url('/stop2.jpg')] bg-cover bg-no-repeat bg-center p-32 pt-40 opacity-80">
            <span className="rounded-full px-5 py-2 bg-red-500/80 text-neutral-50 text-2xl font-bold">STOP 2</span>
            <div className="flex items-center justify-between flex-wrap">
            <h1 className="text-4xl md:text-8xl font-bold text-neutral-50 my-8 xs:mt-0">
              FREE <br/> DRINK
            </h1>
            <div>
            <h1 className="text-3xl md:text-5xl font-bold text-red-500/80 my-8 xs:mt-0">
              ... AAAND 
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-50 my-4">20% <br /> DISCOUNT</h2>
            </div>
            </div>
            <p className="w-2/3 text-xl mt-8">
            At the second stop with Pub Crawl Crew from Zadar, enjoy a free welcome drink and a 20% discount on all drinks. Keep the party going with great deals and even better vibes!
            </p>

        </div>
        </section>
    )
}