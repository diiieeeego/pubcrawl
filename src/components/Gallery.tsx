import { FaFacebookF } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery(){
    return(
        <section className="relative text-white py-20 px-4 md:px-20">
            <span className='w-64 sm:w-100 absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-neutral-50 rounded-full'></span>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">See Our Gallery</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-4">
          Peek at the wild moments, epic laughs, and unforgettable memories that await you.
        </p>
        <div className="flex justify-center space-x-6 text-xl text-white">
        <a href="#" className="hover:text-gray-400" aria-label="Tripadvisor">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Tripadvisor">
            <FaTripadvisor />
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-xl">
        <img
          src="/gallery1.jpg"
          alt="Gallery preview"
          className="w-full object-cover rounded-xl"
        />

        <button
          className=" cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="text-neutral-800/80 hover:scale-[1.1]" />
        </button>

        <button
          className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="text-neutral-800/80 hover:scale-[1.1] " />
        </button>
      </div>
    </section>
    )
}