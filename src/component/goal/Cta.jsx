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
    <section className=" py-30 mt-30">
      <Container>
        <div
          style={bgImage}
          className="w-full px-12 py-16 flex flex-col lg:flex-row items-end justify-end gap-8"
        >
          <div className="max-w-[400px]">
            <h2 className="tracking-[-1.44px] font-semibold text-[48px] leading-[58px] text-black_900">
              Subscribe to Our Newsletter
            </h2>
          </div>

          {/* Right Form */}
          <form className="w-full max-w-[500px] flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4  outline-none bg-white text-black_900"
            />

            <Button>Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
