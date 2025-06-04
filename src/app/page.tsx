

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/herobg.webp')] flex items-center justify-start">
        <section className="max-w-6xl mx-auto">
          <div className="px-5 flex flex-col items-start gap-10">
            <h1 className="text-5xl sm:text-7xl font-bold w-full text-center">THE BEST <br /> PARTY CREW <br /> <span className="font-light">IN ZADAR</span></h1>
            <div className="flex items-center flex-wrap gap-4 w-full">
              <span className="rounded-full px-4 py-2 bg-neutral-800/70 text-neutral-50">2 BARS</span>
              <span className="rounded-full px-4 py-2 bg-neutral-800/70 text-neutral-50">1 CLUB</span>
              <span className="rounded-full px-4 py-2 bg-[#1AB3E6]/80 text-neutral-50">OPEN BAR</span>
              <span className="rounded-full px-4 py-2 bg-[#EF472F]/80 text-neutral-50">20% DISCOUNT</span>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
