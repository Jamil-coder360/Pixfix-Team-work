import React, { useState } from "react";
import Container from "../section/Container";
import { Link } from "react-router";
import nav_chat from "../../assets/nav_chat.svg";
import { Menu, X } from "lucide-react";
const menuData = [
  { id: 1, label: "Home", href: "/", hasDropdown: true },
  { id: 2, label: "About Us", href: "/about", hasDropdown: true },
  { id: 3, label: "Services", href: "/services", hasDropdown: true },
  { id: 4, label: "Projects", href: "/projects", hasDropdown: true },
  { id: 5, label: "Blog", href: "/blog", hasDropdown: true },
  { id: 6, label: "Page", href: "/pricing", hasDropdown: true },
  { id: 7, label: "Contact", href: "/contact", hasDropdown: true },
];

const Navber = () => {
  const [open, setOpen] = useState();

  return (
    <nav className="bg-white py-6.5 relative px-5 px-0">
      <Container>
        <div className=" flex flex-wrap items-center justify-between">
          <div>
            <img src="./logo.svg" alt="pixfix" />
          </div>
          {/* open toggler */}

          <div onClick={(e) => setOpen(!open)} className="lg:hidden flex z-999">
            {open ? (
              <span className="absolute top-30 right-6 bg-black/20 backdrop-blur-3xl rounded-full p-2">

                <X className="text-home " size={20} />
              </span>
            ) : (
              <Menu className="text-black_700 " size={20} />
            )}
          </div>

          {/* desktop menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center justify-center gap-6.25">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-black_900 font-bold font-titillium text-[16px] leading-normal"
                  >
                    {item.label}
                    {item.hasDropdown && <span> &#8964;</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-3.75">
            <div>
              <img src={nav_chat} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-black_800">Need help?</span>
              <strong className="text-black_900">(307) 555-0133</strong>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden absolute left-0 top-[90px] bg-white/10 backdrop-blur-3xl w-full md:w-[350px] z-50 p-6 md:p-10 shadow-lg">
              <ul className="flex flex-col items-start gap-6.25">
                {menuData.map((item) => (
                  <li key={item.id} onClick={(e) => setOpen(!open)} >
                    <Link
                      to={item.href}
                      className="text-black_900 font-bold font-titillium text-[16px] leading-normal"
                    >
                      {item.label}
                      {/* {item.hasDropdown && <span> &#8964;</span>} */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
