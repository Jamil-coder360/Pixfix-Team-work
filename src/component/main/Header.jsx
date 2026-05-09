import React from "react";
import Container from "../section/Container";
import { Clock, Mail, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Navber from "./Navber";

const Header = () => {
  const data = [
    {
      icon: <Mail size={18} />,
      text: "info@example.com",
    },
    {
      icon: <MapPin size={18} />,
      text: "6391 Elgin St. Celina, 10299",
    },
    {
      icon: <Clock size={18} />,
      text: "Sunday - Friday: 9 am - 8 pm",
    },
  ];

  return (
    <header className="bg-home shadow-xl">
      <Container>
        <div className="flex justify-between items-center gap-10 py-4.5">
          <div className="flex items-center justify-center gap-7.5">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[16px] leading-normal font-normal font-archivo text-white"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </Container>
      <Navber />
    </header>
  );
};

export default Header;
