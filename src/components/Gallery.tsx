"use client"
import { FaFacebookF } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from "next/link"
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  { src: "/gallery/gallery1.webp", alt: "Gallery Image 1" },
  { src: "/gallery/gallery2.webp", alt: "Gallery Image 2" },
  { src: "/gallery/gallery3.webp", alt: "Gallery Image 3" },
  { src: "/gallery/gallery4.webp", alt: "Gallery Image 4" },
];

export default function Gallery(){
    const [index, setIndex] = useState(-1);

    return(
        <section id="gallery" className="relative text-white py-20 px-4 md:px-20">
            <span className='w-64 sm:w-100 absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-neutral-50 rounded-full'></span>
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">See Our Gallery</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-4">
                    Peek at the wild moments, epic laughs, and unforgettable memories that await you.
                </p>
                <div className="flex justify-center space-x-6 text-xl text-white">
                    <Link href="#" className="hover:text-gray-400" aria-label="Tripadvisor">
                        <FaInstagram />
                    </Link>
                    <Link href="#" className="hover:text-gray-400" aria-label="Tripadvisor">
                        <FaTripadvisor />
                    </Link>
                    <Link href="#" className="hover:text-gray-400" aria-label="Facebook">
                        <FaFacebookF />
                    </Link>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, idx) => (
                        <div 
                            key={idx} 
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => setIndex(idx)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 728px)"
                            />
                        </div>
                    ))}
                </div>

                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Zoom, Thumbnails]}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 2,
                        doubleTapDelay: 300,
                        doubleClickDelay: 300,
                        doubleClickMaxStops: 2,
                        keyboardMoveDistance: 50,
                        wheelZoomDistanceFactor: 100,
                        pinchZoomDistanceFactor: 100,
                        scrollToZoom: true,
                    }}
                    thumbnails={{
                        width: 120,
                        height: 80,
                        padding: 4,
                        border: 2,
                        borderRadius: 4,
                        gap: 8,
                        imageFit: "contain",
                    }}
                />
            </div>
        </section>
    )
}