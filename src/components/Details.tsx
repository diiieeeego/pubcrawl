import Image from "next/image"
export default function Details() {
    return (
        <>
        <section id="details" className="max-w-6xl h-fit mx-auto text-white py-16 px-5">
      <div className="relative flex flex-col md:flex-row items-start md:items-start md:justify-between overflow-x-hidden">
       
        <div className="absolute z-1 right-1/2 translate-x-1/2 top-8 -rotate-20 md:hidden">
          <Image
            src="/detailsDark.jpg" // Replace with your image path
            alt="Party scene"
            width={200}
            height={300}
            className="rounded-lg max-h-[400px]"
            priority
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/details.jpg" // Replace with your image path
            alt="Party scene"
            width={200}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
        
        {/* Right Text */}
        <div className="w-full md:w-2/3 space-y-8 z-50 py-16">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-shadow">
            THE <br /> DETAILS
          </h2>

          <div className="space-y-6 text-base text-lg text-shadow">
            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-semibold">When do we work?</span>
              <span>
                Every Friday and Saturday starting at 10 PM <br />
                <span className="text-gray-400">(contact us for other days)</span>
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-semibold">Where do we meet?</span>
              <span>
                The meeting point is at 10 PM in front of the Archaeological Museum at the Roman Forum.
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-semibold">Whats the price?</span>
              <span>
                <span className="font-bold">40 €/person</span> but{' '}
                <span className="text-blue-400 font-bold">FREE</span> if it&apos;s your birthday.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
    )
}