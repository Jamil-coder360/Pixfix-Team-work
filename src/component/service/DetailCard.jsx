import React from "react";
import detail_1 from "../../assets/detail_1.png";
import detail_2 from "../../assets/detail_2.png";
import detail_3 from "../../assets/detail_3.png";
import detail_4 from "../../assets/detail_4.png";

const DetailCard = () => {
  const detailCardData = [
    {
      id: 1,
      image: detail_1,
      title: "Repairing with care",
      description:
        "Repair is a specialized field that focuses on fixing and restoring object.",
    },
    {
      id: 2,
      image: detail_2,
      title: "Trust us with your repair ",
      description:
        "Professional repair services designed to restore performance and extend product life.",
    },
    {
      id: 3,
      image: detail_3,
      title: "Reliable repairs seamless",
      description:
        "Expert technicians delivering trusted repair solutions with precision and care.",
    },
    {
      id: 4,
      image: detail_4,
      title: "Restoration experts at your",
      description:
        "Quick turnaround repair services to minimize downtime and maximize convenience.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 ">
      {detailCardData.map((data) => (
        <div key={data.id} className="pl-11 max-w-[410px] ">
          <div className="relative border border-black_800 rounded py-5 pl-15.25 pr-5 max-w-[363px] min-h-[144px]">
            <div className="absolute -left-11 top-0 w-22 h-22">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="tracking-[-0.72px] text-2xl font-bold text-black_900">
              {data.title}
            </h3>

            <p className="font-archivo font-normal text-sm sm:text-base leading-relaxed text-black_800">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailCard;