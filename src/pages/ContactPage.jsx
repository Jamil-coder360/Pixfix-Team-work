import { useState } from "react";
import React from "react";
import Section from "../component/section/Section";
import Container from "../component/section/Container";
import { ChevronRight } from "lucide-react";

// Icons as inline SVGs to avoid external dependencies


// ─── Topbar ───────────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MailSmall />
            info@example.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin />
            2964 Royal Ln. Mesa, New Jersey
          </span>
        </div>
        <div className="flex items-center gap-2">
          {["f", "in", "𝕏", "▶"].map((icon, i) => (
            <button
              key={i}
              className="w-6 h-6 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-[9px] transition-colors duration-200"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const navItems = ["HOME", "ABOUT US", "SERVICES", "PROJECTS", "BLOG", "PAGE", "CONTACT"];
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">PixFix</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item}>
              <button className="flex items-center text-xs font-semibold text-gray-600 hover:text-orange-500 px-3 py-2 transition-colors duration-200">
                {item}
                {["ABOUT US", "SERVICES", "PROJECTS", "PAGE", "CONTACT"].includes(item) && (
                  <ChevronDown />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded transition-colors duration-200 tracking-wide">
          GET A QUOTE →
        </button>
      </div>
    </nav>
  );
}

// ─── Hero Banner ──────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <div className="bg-gray-700 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl font-bold mb-3">Contact</h1>
        <p className="text-gray-400 text-sm">
          <span className="hover:text-orange-400 cursor-pointer transition-colors">HOME</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-orange-400">CONTACT</span>
        </p>
      </div>
    </div>
  );
}

// ─── Contact Info Card ────────────────────────────────────────────────────────
function InfoCard({ icon, title, lines, iconBg }) {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        <span className="text-white">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-500 text-xs leading-relaxed">{line}</p>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
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

// ─── Main Contact Section ─────────────────────────────────────────────────────
function ContactSection() {
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

// ─── Footer Strip ─────────────────────────────────────────────────────────────
function FooterStrip() {
  return (
    <div className="bg-orange-500 py-3">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <p className="text-white text-xs font-semibold">
          © 2024 PixFix. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <button key={item} className="text-white text-xs hover:underline">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── App Root ──────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Topbar />
      <Navbar />
      <HeroBanner />
      <ContactSection />
      <FooterStrip />
    </div>
  );
}
