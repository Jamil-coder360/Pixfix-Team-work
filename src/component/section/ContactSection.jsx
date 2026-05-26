import React from 'react'

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  </svg>
);

const MailSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactSection = () => {
    const infoCards = [
    {
      icon: <PhoneIcon />,
      title: "Call us",
      lines: [
        "Mobile: +0623 - 890-54632",
        "Hotline: +1234 - 562 - 988",
      ],
      iconBg: "bg-orange-500",
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      lines: [
        "info@exampleyourmail.com",
        "info@example.com",
      ],
      iconBg: "bg-orange-500",
    },
    {
      icon: <LocationIcon />,
      title: "Location",
      lines: [
        "Dhaka 102, alt G20, road 45 next line",
        "bus street",
      ],
      iconBg: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-8">
                Repairing your pro restoring
                <br />
                your peace of mind
              </h2>
              <ContactForm />
            </div>

            {/* Right: Info Cards */}
            <div className="flex flex-col gap-4 justify-center">
              {infoCards.map((card, i) => (
                <InfoCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection

// function ContactSection() {
//   const infoCards = [
//     {
//       icon: <PhoneIcon />,
//       title: "Call us",
//       lines: [
//         "Mobile: +0623 - 890-54632",
//         "Hotline: +1234 - 562 - 988",
//       ],
//       iconBg: "bg-orange-500",
//     },
//     {
//       icon: <EmailIcon />,
//       title: "Email",
//       lines: [
//         "info@exampleyourmail.com",
//         "info@example.com",
//       ],
//       iconBg: "bg-orange-500",
//     },
//     {
//       icon: <LocationIcon />,
//       title: "Location",
//       lines: [
//         "Dhaka 102, alt G20, road 45 next line",
//         "bus street",
//       ],
//       iconBg: "bg-orange-500",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left: Form */}
//             <div>
//               <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
//                 GET IN TOUCH
//               </p>
//               <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-8">
//                 Repairing your pro restoring
//                 <br />
//                 your peace of mind
//               </h2>
//               <ContactForm />
//             </div>

//             {/* Right: Info Cards */}
//             <div className="flex flex-col gap-4 justify-center">
//               {infoCards.map((card, i) => (
//                 <InfoCard key={i} {...card} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Your Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
              <MailSmall />
            </span>
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Your Phone</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
              <PhoneIcon />
            </span>
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Your Address</label>
        <div className="relative">
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Your Address"
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition pr-8"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
            <LocationIcon />
          </span>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write Message..."
            rows={5}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition resize-none pr-8"
          />
          <span className="absolute right-3 top-3 text-orange-400">
            <EmailIcon />
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold py-3 rounded text-sm tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}