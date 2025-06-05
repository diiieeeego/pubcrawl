"use client"
import { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedPeople, setSelectedPeople] = useState<number>(1);

  const handleContinue = () => {
    console.log("Continue with:", {
      date: selectedDate,
      people: selectedPeople,
    });
  };

  return (
    <div className="max-w-md w-full p-6 bg-neutral-400/90 shadow-xl rounded-2xl space-y-6 shadow-lg">
      <h2 className="text-xl font-semibold text-neutral-900">Reserve your spot</h2>

      <div className="space-y-4">
        {/* Date Picker */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2">
          <FaCalendarAlt className="text-gray-50" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full focus:outline-none text-neutral-50"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        {/* Person Selector */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2">
          <FaUser className="text-gray-50" />
          <select
            value={selectedPeople}
            onChange={(e) => setSelectedPeople(parseInt(e.target.value))}
            className="w-full bg-transparent focus:outline-none text-neutral-50"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-[#1ab3e6] hover:shadow-lg cursor-pointer text-white font-semibold py-2 rounded-lg transition"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

