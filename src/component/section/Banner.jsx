// Banner.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";  

/*
USAGE:
<Banner
  bgImage={aboutBanner}
  title="About Us"
  subtitle="Learn more about our journey"
/>

<Banner
  bgImage={contactBanner}
  title="Contact Us"
  subtitle="Get in touch today"
/>
*/

const Banner = ({
  bgImage,
  title,
  page,
  height = "h-[300px] md:h-[400px] lg:h-[500px]",
  overlay = "bg-black/50",
}) => {
  return (
    <Section className="p-0">
      <div
        className={`relative w-full bg-cover bg-center bg-no-repeat ${height}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={`absolute inset-0 ${overlay}`}></div>

        <Container className="relative z-10 py-50">
          {title && (
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
          )}

          {page && (
            <p className="text-white/90 mt-3 text-sm md:text-lg lg:text-xl max-w-2xl flex items-center gap-2">
              <Link to="/">Home</Link> 
              <ChevronRight  className="text-home"/>
              <Link to="/about">{page}</Link>
            </p>
          )}
        </Container>
      </div>
    </Section>
  );
};

export default Banner;