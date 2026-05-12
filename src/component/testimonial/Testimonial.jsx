import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import test from "../../assets/test.png";
import test_1 from "../../assets/test_1.png";
import SectionHeader from "../section/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

// s;ide import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const bgImage = {
    background: `url(${test})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Section style={bgImage} className={"pt-30"}>
      <Container>
        <div className="grid grid-cols-[620px_1fr] gap-15 overflow-hidden">
          <div className="h-[715px] overflow-hidden">
            <img
              src={test_1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              subtitle="Clients Testimonial"
              title="Restoration experts at your the best service"
            />

<Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper mt-10"
>
  {[...Array(4)].map((_, index) => (
    <SwiperSlide key={index}>
      <TestimonialCard />
    </SwiperSlide>
  ))}
</Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
