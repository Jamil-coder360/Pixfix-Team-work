import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const Banner = ({
  bgImage,
  title,
  page,
  height = "h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]",
  overlay = "bg-black/50",
}) => {
  return (
    <Section className="p-0">
      
      <div
        className={`relative w-full bg-cover bg-center bg-no-repeat ${height}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className={`absolute inset-0 ${overlay}`}></div>

        <Container className="relative z-10 h-full">
          
          <div className="flex flex-col justify-center h-full py-16 sm:py-20 md:py-28 lg:py-36">
            
            {title && (
              <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
                {title}
              </h1>
            )}
            {page && (
              <div className="flex flex-wrap items-center gap-2 mt-4 text-sm sm:text-base md:text-lg text-white/90">
                
                <Link
                  to="/"
                  className="hover:text-home transition"
                >
                  Home
                </Link>

                <ChevronRight className="w-4 h-4 text-home flex-shrink-0" />

                <Link
                  to="/about"
                  className="hover:text-home transition"
                >
                  {page}
                </Link>

              </div>
            )}

          </div>

        </Container>
      </div>

    </Section>
  );
};

export default Banner;