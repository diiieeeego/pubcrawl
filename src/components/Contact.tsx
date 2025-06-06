"use client"
import { useState } from 'react';

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
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Implement form submission logic here
      };
    return(
        <section className="text-white py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold uppercase mb-4 text-center">
          Contact <br /> <span className="text-white">Us</span>
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between text-gray-300 mb-10">
          <p className="max-w-md">
            Feel free to contact us if you have any questions! We're here to help make your experience in Zadar as awesome as possible.
          </p>
          <div className="mt-4 md:mt-0 text-left">
            <p>Phone: <a href="tel:+385997729401" className="text-neutral-400 underline">+385 99 7729 401</a></p>
            <p>Email: <a href="mailto:pubcrawlzadarinfo@gmail.com" className="text-neutral-400 underline">pubcrawlzadarinfo@gmail.com</a></p>
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
    )
}