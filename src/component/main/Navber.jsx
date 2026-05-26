import React, { useState } from "react";
import Container from "../section/Container";
import { Link } from "react-router";
import nav_chat from "../../assets/nav_chat.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const menuData = [
  {
    id: 1,
    label: "Home",
    // href: "/",
    hasDropdown: true,
    submenu: [
      { id: 11, label: "Home Page", href: "/" },
      { id: 12, label: "Home Layout", href: "/home-layout" },
      { id: 13, label: "Home Featured", href: "/home-featured" },
    ],
  },
  {
    id: 2,
    label: "About Us",
    // href: "/about",
    hasDropdown: true,
    submenu: [
      { id: 21, label: "About Company", href: "/about" },
      { id: 22, label: "Our Team", href: "/team" },
      { id: 23, label: "Our Story", href: "/story" },
    ],
  },
  {
    id: 3,
    label: "Services",
    // href: "/services",
    hasDropdown: true,
    submenu: [
      { id: 31, label: "services", href: "/service" },
      { id: 32, label: "service detail", href: "/service_detail" },
      { id: 33, label: "Mobile App", href: "/services/app" },
    ],
  },
  {
    id: 4,
    label: "Projects",
    // href: "/projects",
    hasDropdown: true,
    submenu: [
      { id: 41, label: "Recent Projects", href: "/projects" },
      { id: 42, label: "project details", href: "/project_detail" },
      { id: 43, label: "Portfolio", href: "/projects/portfolio" },
    ],
  },
  {
    id: 5,
    label: "Blog",
    // href: "/blog",
    hasDropdown: true,
    submenu: [
      { id: 51, label: "All Articles", href: "/blog" },
      { id: 52, label: "Categories", href: "/blog/categories" },
      { id: 53, label: "Latest News", href: "/blog/latest" },
    ],
  },
  {
    id: 6,
    label: "Page",
    // href: "/pricing",
    hasDropdown: true,
    submenu: [
      { id: 61, label: "Pricing Plans", href: "/pricing" },
      { id: 62, label: "FAQ", href: "/faq" },
      { id: 63, label: "Terms", href: "/terms" },
    ],
  },
  {
    id: 7,
    label: "Contact",
    // href: "/contact",
    hasDropdown: true,
    submenu: [
      { id: 71, label: "Contact Us", href: "/contact" },
      { id: 72, label: "Get Support", href: "/support" },
      { id: 73, label: "Locations", href: "/locations" },
    ],
  },
];

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="bg-white py-6.5 relative px-0">
      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <img src="./logo.svg" alt="pixfix" />
          </div>
          {/* open toggler */}

          <div onClick={(e) => setOpen(!open)} className="sm:hidden flex z-999">
            {open ? (
              <span className="absolute top-30 right-6 bg-black/20 backdrop-blur-3xl rounded-full p-2">
                <X className="text-home " size={20} />
              </span>
            ) : (
              <Menu className="text-black_700 " size={20} />
            )}
          </div>

          {/* desktop menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center justify-center gap-6.25">
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span
                    // to={item.href}
                    className="text-black_900 font-bold font-titillium text-[16px] leading-normal  transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && item.submenu && (
                    <div
                      className={`absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40`}
                    >
                      <div className="bg-white rounded-md shadow-lg border border-gray-200 min-w-50 py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.id}
                            to={subitem.href}
                            className="block px-4 py-2.5 text-black_900 font-medium text-sm hover:bg-home hover:text-white transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
            <div className="sm:hidden absolute left-0 top-22.5 bg-white/10 backdrop-blur-3xl w-full sm:w-87.5 z-50 p-6 sm:p-10 shadow-lg">
              <ul className="flex flex-col items-start gap-6.25">
                {menuData.map((item) => (
                  <li key={item.id} className="w-full">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="text-white font-bold font-titillium text-[16px] leading-normal  transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.id ? null : item.id
                            )
                          }
                          className="ml-2"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileDropdown === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.hasDropdown &&
                      item.submenu &&
                      mobileDropdown === item.id && (
                        <div className="mt-3 ml-4 pl-3 border-l border-black_900">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.id}
                              to={subitem.href}
                              onClick={() => {
                                setMobileDropdown(null);
                                setOpen(false);
                              }}
                              className="block py-2 text-white font-medium text-sm hover:text-white transition-colors"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
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
