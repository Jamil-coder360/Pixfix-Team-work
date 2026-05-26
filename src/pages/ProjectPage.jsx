import HeroBg from "../assets/homepage-bg.jpg";
import Car1 from "../assets/BL-car.jpg";
import Car2 from "../assets/R-car.jpg";
import Car3 from "../assets/W-car.jpg";
import Car4 from "../assets/P-car.jpg";
import Car5 from "../assets/B-car.jpg";
import Car6 from "../assets/G-car.jpg";
import righticon from "../assets/icon/righticon.svg";

const ProjectPage = () => {
  const projectItems = [
    { id: 1, image: Car1, title: "Duct work Inspection" },
    { id: 2, image: Car2, title: "Engine Repair" },
    { id: 3, image: Car3, title: "Car Washing" },
    { id: 4, image: Car4, title: "Interior Cleaning" },
    { id: 5, image: Car5, title: "Wheel Alignment" },
    { id: 6, image: Car6, title: "Oil Change" },
  ];

  return (
    <main className="homepage-wrapper">
      {/* Hero Section */}
      <section
        className="relative bg-black text-white py-24 px-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Project</h1>

          <nav className="text-sm mt-3 flex items-center gap-2">
            <span className="text-gray-300">HOME</span>

            <img src={righticon} alt="icon" className="w-3 h-3" />

            <span>PROJECT</span>
          </nav>
        </div>
      </section>

      {/* Project Cards */}
      <section className="bg-white py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className=" opacity-0 absolute bottom-4 left-0  group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-2xl font-bold p-5 tracking-wide bg-black_900 text-white border-r-4 border-r-home">
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
