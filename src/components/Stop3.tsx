import Image from "next/image"
export default function Stop3() {
    return (
        <section className="relative py-16 md:py-32 space-y-8 max-w-6xl mx-auto px-5 h-fit md:h-screen">
            <div className="absolute z-[999] right-10 lg:right-2/3 -top-20 ">
                <Image
                    src={"/arrow.png"}
                    width={250}
                    height={400}
                    alt="arrow"
                    className="w-30 md:w-50 hidden lg:block"
                />
                <Image
                    src={"/arrowl.png"}
                    width={250}
                    height={400}
                    alt="arrow"
                    className="w-50 block lg:hidden"
                />
            </div>
            <div className="w-full lg:w-3/5 ms-auto">
                <span className="rounded-full px-5 py-2 bg-red-500/80 text-neutral-50 text-lg font-bold">STOP 3</span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-50 my-8 xs:mt-0 text-shadow">
                    SKIPPING <br /> LINE AT <br /> THE CLUB
                </h1>
                <p className="w-full md:w-2/3 lg:w-full text-lg md:text-xl mb-10">
                    A variety of world-class music performed by renowned Djs, attractive dancers and friendly staff, generate a perfect nightlife experience in a fascinating club interior at the very heart of Zadar.
                </p>
            </div>
            <div className="bg-[url('/bstop1.jpg')] bg-cover bg-center bg-no-repeat w-full h-100"></div>
        </section>
    )
}