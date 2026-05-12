import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import SectionHeader from '../section/SectionHeader';

const BookingFrom = () => {

     const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div className="bg-white p-5 md:p-8 lg:p-10 shadow-lg z-[110] relative max-w-full md:max-w-[630px] mx-auto overflow-hidden">
    
      <SectionHeader 
      subtitle=" Book Now"
      title=" Restoring your peace of the mind"
      />

      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 pt-6 md:pt-8 lg:pt-15">
        {[
          { name: "name", placeholder: "Name", type: "text" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
        ].map((field) => (
          <input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="border rounded-md border-gray-200 focus:border-orange-500 outline-none py-3 md:py-4 px-4 md:px-5 text-xs md:text-sm text-gray-800 placeholder-gray-400 bg-transparent transition-colors w-full"
          />
        ))}

        <textarea
          name="message"
          placeholder="Message here.."
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="border border-gray-200 focus:border-orange-500 outline-none py-3 md:py-4 px-4 md:px-5 text-xs md:text-sm text-gray-800 placeholder-gray-400 bg-transparent transition-colors resize-none w-full"
        />

        <button
          onClick={handleSubmit}
          className="mt-6 md:mt-8 lg:mt-10 w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white text-xs font-bold tracking-widest uppercase py-3 md:py-4 flex items-center justify-center gap-2 transition-all duration-200"
        >
          {sent ? "Sent!" : "Send Message"}
          {!sent && <ArrowRight size={15} strokeWidth={2.5} />}
        </button>
      </div>
    </div>
  );
}

export default BookingFrom

// function BookingForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = () => {
//     if (!form.name || !form.email) return;
//     setSent(true);
//     setTimeout(() => setSent(false), 3000);
//     setForm({ name: "", email: "", phone: "", message: "" });
//   };


// }