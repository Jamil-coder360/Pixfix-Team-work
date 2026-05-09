import React from "react";
import Container from "../section/Container";
import { Link } from "react-router";
import nav_chat from "../../assets/nav_chat.svg";
const menuData = [
  { id: 1, label: "Home", href: "/", hasDropdown: true },
  { id: 2, label: "About Us", href: "/about", hasDropdown: true },
  { id: 3, label: "Services", href: "/services", hasDropdown: true },
  { id: 4, label: "Projects", href: "/projects", hasDropdown: true },
  { id: 5, label: "Blog", href: "/blog", hasDropdown: true },
  { id: 6, label: "Page", href: "/page", hasDropdown: true },
  { id: 7, label: "Contact", href: "/contact", hasDropdown: true },
];

const Navber = () => {
  return (
    <nav className="bg-white py-6.5">
      <Container>
        <div className=" flex items-center justify-between">
          <div>
            <img src="./logo.svg" alt="pixfix" />
          </div>
          <div>
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
          <div className="flex items-center justify-center gap-3.75">
            <div>
              <img src={nav_chat} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-black_800">Need help?</span>
              <strong className="text-black_900">(307) 555-0133</strong>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
