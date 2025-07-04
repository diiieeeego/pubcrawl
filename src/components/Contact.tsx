"use client"
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        attendees: '1',
        date: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          console.log(formData);
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });
        
            if (res.ok) {
              alert('Message sent!');
              setFormData({
                name: '',
                email: '',
                phone: '',
                attendees: '1',
                date: '',
                message: '',
              });
            } else {
              alert('Failed to send. Please try again later.');
            }
          } catch (error) {
            console.error('Submit error:', error);
            alert('Something went wrong.');
          }

        };
    return(
      <>
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
      
        <section id="contact" className="text-white py-20 px-4 md:px-20">
        

      <div className="relative max-w-4xl mx-auto">
      <div className="absolute z-[999] left-0 -top-26">
        <Image
          src={"/arrow.png"}
          width={100}
          height={300}
          alt="arrow"
        />
        </div>
        <h2 className="text-5xl font-bold uppercase mb-4 text-center">
          Contact <br /> <span className="text-white">Us</span>
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between text-gray-300 mb-10">
          <p className="max-w-md">
            Feel free to contact us if you have any questions! We&apos;re here to help make your experience in Zadar as awesome as possible.
          </p>
          <div className="mt-4 md:mt-0 text-left">
            <p>Phone: <Link href="tel:+385997729401" className="text-neutral-400 underline">+385 91 329 5113</Link></p>
            <p>Email: <Link href="mailto:pubcrawlzadarinfo@gmail.com" className="text-neutral-400 underline">pubcrawlzadarinfo@gmail.com</Link></p>
          </div>
        </div>

        <p className="text-center text-white mb-6 font-medium">...or use this form</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+01 234 56789"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of attendees</label>
            <select
              name="attendees"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.attendees}
              onChange={handleChange}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-xl mt-4 hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
    )
}