import React from "react";
import Container from "../section/Container";
import footerBg from "../../assets/footer.png";
import footerLogo from "../../assets/footer_logo.svg";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5l8 7-8 7" />
  </svg>
);

const socialLinks = [
  { id: 1, icon: <InstagramIcon />, href: "#" },
  { id: 2, icon: <LinkedInIcon />, href: "#" },
  { id: 3, icon: <PinterestIcon />, href: "#" },
  { id: 4, icon: <TwitterIcon />, href: "#" },
];

const companyLinks = [
  { id: 1, label: "About Us", href: "#" },
  { id: 2, label: "Our Services", href: "#" },
  { id: 3, label: "Our Team", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

const resourceLinks = [
  { id: 1, label: "Support Center", href: "#" },
  { id: 2, label: "Documentation", href: "#" },
  { id: 3, label: "Changelog", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#171717] text-white px-5 lg:px-0">
      <div
        className="absolute right-0 top-0 bottom-0 w-[35%] opacity-15 pointer-events-none bg-no-repeat bg-right-bottom bg-contain"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <Container className="relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pt-12 pb-7">
          <img src={footerLogo} alt="PixFix Logo" className="h-9" />

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-[#FF6600]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1.2fr_2fr] gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12">
          <div>
            <h3 className="mb-4 text-[18px] font-bold">About Us</h3>
            <p className="text-[#6E777D] text-sm leading-7">
              Yes, there are many notable ma corporate businesses Informati worldwide,
              such as Google the man design ever
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-bold">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-[#6E777D] transition-colors duration-300 hover:text-[#FF6600]"
                  >
                    <span className="text-[#FF6600] text-base font-bold">»</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-bold">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6E777D] transition-colors duration-300 hover:text-[#FF6600]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-bold">Subscribe</h3>
            <p className="mb-5 text-sm leading-7 text-[#6E777D]">
              Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
            </p>
            <div className="flex items-stretch gap-0">
              <input
                type="email"
                placeholder="Your e-mail"
                className= "w-full flex-1 rounded-l-sm border border-white/10 bg-white/7 px-4 py-3 text-sm text-white outline-none placeholder:text-[#6E777D]"
              />
              <button className="flex items-center justify-center rounded-r-sm bg-[#FF6600] px-4 py-3 text-white transition-colors duration-300 hover:bg-[#e55a00]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-5 pb-7">
          <p className="text-xs text-[#6E777D]">© Yoursitename 2023 | All Rights Reserved</p>
          <div className="flex gap-7">
            {['Trams & Condition', 'Privacy Policy', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#6E777D] transition-colors duration-300 hover:text-[#FF6600]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
