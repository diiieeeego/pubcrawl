import Header from "@/components/Header";
import Stops from "@/components/Stops";
import Stop1 from "@/components/Stop1"
import Stop2 from "@/components/Stop2";
import Stop3 from "@/components/Stop3";
import BonusStop from "@/components/BonusStop";
import Details from "@/components/Details";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

// app/page.tsx (ili app/layout.tsx ako želiš globalno)

export const metadata = {
  title: 'Pub Crawl Zadar | Ultimate Nightlife Experience',
  description: 'Join the ultimate pub crawl experience – discover the best bars, clubs and nightlife with local guides and fellow travelers.',
  keywords: ['pub crawl', 'nightlife', 'bars', 'clubs', 'Zagreb pub crawl', 'party tour', 'travel', 'events'],
  metadataBase: new URL('https://pubcrawl-pi.vercel.app'),
  openGraph: {
    title: 'Pub Crawl | Ultimate Nightlife Experience',
    description: 'Explore the city’s best bars and clubs with a local guide. Meet fellow travelers and enjoy exclusive drink deals!',
    url: 'https://pubcrawl-pi.vercel.app',
    siteName: 'Pub Crawl',
    images: [
      {
        url: '/logoPC.png', // Promijeni u stvarnu sliku ako postoji
        width: 1200,
        height: 630,
        alt: 'Pub Crawl Group Partying',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pub Crawl | Ultimate Nightlife Experience',
    description: 'Meet new people, explore nightlife, and party like a local with our guided pub crawl tours.',
    images: ['/logoPC.png'], // Isto kao gore
  },
};

export default function Home() {
  return (
    <div className="bg-[#231F20]">
      <Header />
      <Stops />
      <Stop1 />
      <Stop2 />
      <Stop3 />
      <BonusStop />
      <Details />
      <Contact />
      <Gallery />
    </div>
  );
}
