import React from "react";
import Section from "./Section";
import Container from "./Container";
import aboutUsImage from "../../assets/about_us.png";
import Ok from "../../assets/icons/ok.png";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <Section className="my-30">
      <Container>
        <div>
          <div className="flex gap-20.5 justify-between">
            <div>
              <div className="w-154 ">
                <img
                  src={aboutUsImage}
                  alt="About Us"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-home text-[16px] font-titillium">ABOUT US</p>
              <h3 className="text-black_900 text-5xl font-semibold mt-2.5">
                Quality Car repair for a Stress free future
              </h3>
              <p className="text-black_800 text-[16px] font-archivo mt-5 leading-[28.8px]">
                We are a team of experienced mechanics dedicated to providing
                top-quality car repair services. With our expertise and
                commitment to excellence, we ensure your vehicle runs smoothly
                and safely.
              </p>
              <div className="gap-4 mt-10 space-y-5">
                <Tik text="Installing a motion sensor light" />
                <Tik text="Replacing a faulty alternator" />
                <Tik text="Fixing a leaky radiator" />
              </div>
              <Button text="Learn More" link="/contact" className="mt-10"/>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;

export const Tik = ({text}) => {
  return (
    <div className="flex items-center gap-4">
      <img src={Ok} alt="" />
      <p className="text-black_800 font-titillium text-[15px]">
        {text}
      </p>
    </div>
  );
};


export const Button = ({text , link, className}) => {
  return (
    <Link to={link} className={`px-7.5 py-5 bg-home text-white text-[14px] font-semibold flex items-center gap-2.5 w-fit ${className || ''}`}>
        <p>{text}</p>
        <ArrowRight className="text-white" />
    </Link>
  );
};
 