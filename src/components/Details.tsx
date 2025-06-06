import Image from "next/image"
export default function Details() {
    return (
        <section className="max-w-6xl mx-auto text-white pt-12 px-5">
      <div className="flex flex-col md:flex-row items-start md:items-start md:gap-10 overflow-x-hidden">
        {/* Left Image */}
        <div className="w-full md:w-1/3 h-150 relative ">
          <Image
            src="/details.jpg" // Replace with your image path
            alt="Party scene"
            width={200}
            height={400}
            className="rounded-lg ms-auto lg:me-auto"
            priority
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-2/3 space-y-8 -translate-y-60 md:translate-y-0">
          <h2 className="text-5xl md:text-8xl font-extrabold leading-tight">
            THE <br /> DETAILS
          </h2>

          <div className="space-y-6 text-base md:text-lg">
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
                <span className="font-bold">35 €/person</span> but{' '}
                <span className="text-blue-400 font-bold">FREE</span> if it&apos;s your birthday.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}