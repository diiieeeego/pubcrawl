import Image from "next/image"
export default function Details() {
    return (
        <>
        <section className="max-w-6xl mx-auto text-white md:pt-12 px-5">
      <div className="flex flex-col md:flex-row items-start md:items-start md:gap-10 overflow-x-hidden">
        {/* Left Image */}
        <div className="w-full md:w-1/3 h-150 relative translate-y-30 md:translate-y-0">
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
        <div className="w-full md:w-2/3 space-y-8 -translate-y-30 md:translate-y-0">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
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
    <div className="w-full h-[450px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.0584250893744!2d15.223486749695995!3d44.115251108643626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa6de8461883%3A0x6a0096312587a124!2sRimski%20forum%2C%20Zadar!5e0!3m2!1shr!2shr!4v1749210796703!5m2!1shr!2shr" 
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    </>
    )
}