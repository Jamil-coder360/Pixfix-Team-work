
import HeroBg from '../assets/homepage-bg.jpg'
import Car1 from '../assets/BL-car.jpg'; 
import Car2 from '../assets/R-car.jpg';
import Car3 from '../assets/W-car.jpg';
import Car4 from '../assets/P-car.jpg';
import Car5 from '../assets/B-car.jpg';
import Car6 from '../assets/G-car.jpg';
import righticon from '../assets/icon/righticon.svg';
const ProjectPage = () => {


 
  const projectItems = [
    { id: 1, image: Car1,  },
    { id: 2, image: Car2,  },
    { id: 3, image: Car3, },
    { id: 4, image: Car4, },
    { id: 5, image: Car5, },
    { id: 6, image: Car6, },
  ];

  return (
    <main className="homepage-wrapper">

<section 
  className="relative bg-black text-white py-24 px-10 bg-cover bg-center h-100"
style={{ backgroundImage: `url(${HeroBg})` }}
>

  <div className="relative z-10 max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold">Project</h1>
    <nav className="text-sm mt-3 flex items-center gap-1.5">
      <span className="text-gray-300">HOME</span> 
      <span className="text-gray-400"> <img src={righticon} alt="icon"className='w-3 h-3' /> </span> 
      <span>PROJECT</span>
    </nav>
  </div>
</section>


      <section className="bg-white py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
        
          {projectItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden bg-gray-100 aspect-[4/3] shadow-md hover:shadow-xl transition-shadow duration-300">
              
          
              <img 
                src={item.image} 
                
                className="w-410px h-490px object-cover group-hover:scale-105 transition-transform duration-500" 
              />
         
            
            </div>
          ))}

        </div>
      </section>
    </main>
  );
};



export default ProjectPage