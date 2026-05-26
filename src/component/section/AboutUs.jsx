import React from "react";
import Section from "./Section";
import Container from "./Container";

import aboutUsImage from "../../assets/about_us.png";
import Ok from "../../assets/icons/ok.png";

import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <Section className="py-12 md:py-16 lg:py-24">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          
          <div>
            <div className="w-full">
              <img
                src={aboutUsImage}
                alt="About Us"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div>
            
            <p className="text-home text-sm sm:text-base font-titillium font-semibold tracking-wide">
              ABOUT US
            </p>

            <h3 className="text-black_900 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mt-3">
              Quality Car Repair for a Stress-Free Future
            </h3>

            <p className="text-black_800 text-sm sm:text-base font-archivo mt-5 leading-relaxed">
              We are a team of experienced mechanics dedicated to providing
              top-quality car repair services. With our expertise and
              commitment to excellence, we ensure your vehicle runs smoothly
              and safely.
            </p>

            <div className="mt-8 md:mt-10 space-y-4 md:space-y-5">
              <Tik text="Installing a motion sensor light" />
              <Tik text="Replacing a faulty alternator" />
              <Tik text="Fixing a leaky radiator" />
            </div>

            <Button
              text="Learn More"
              link="/contact"
              className="mt-8 md:mt-10"
            />

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;


export const Tik = ({ text }) => {
  return (
    <div className="flex items-start sm:items-center gap-3 md:gap-4">
      
      <img
        src={Ok}
        alt="tick"
        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
      />

      <p className="text-black_800 font-titillium text-sm sm:text-base leading-relaxed">
        {text}
      </p>

    </div>
  );
};


export const Button = ({ text, link, className }) => {
  return (
    <Link
      to={link}
      className={`inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-3 sm:py-4 bg-home text-white text-sm sm:text-base font-semibold hover:opacity-90 transition duration-300 rounded-md w-fit ${className || ""}`}
    >
      <p>{text}</p>

      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </Link>
  );
};