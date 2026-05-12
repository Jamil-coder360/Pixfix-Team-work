import React from "react";
import cta from "../../assets/cta.png";
import Container from "../section/Container";
import Button from "../section/Button";

const Cta = () => {
  const bgImage = {
    background: `url(${cta})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className="py-6 md:py-12 lg:py-30 lg:mt-30">
      <Container>
        <div
          style={bgImage}
          className="w-full px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row items-start md:items-center lg:items-end justify-start md:justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8"
        >
          <div className="max-w-full md:max-w-[350px] lg:max-w-[400px]">
            <h2 className="tracking-[-1.44px] font-semibold text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[44px] lg:leading-[58px] text-black_900">
              Subscribe to Our Newsletter
            </h2>
          </div>

          {/* Right Form */}
          <form className="w-full max-w-full md:max-w-[450px] lg:max-w-[500px] flex flex-col sm:flex-row gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 md:px-4 lg:px-6 py-3 md:py-4 outline-none bg-white text-black_900 text-xs md:text-sm"
            />

            <Button>Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
