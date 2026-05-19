import React from 'react';
import HeroBg from '../assets/homepage-bg.jpg';
import detailsimg1 from '../assets/detailsimg1.jpg';
import detailsimg2 from '../assets/detailsimg2.jpg';
import detailsimg3 from '../assets/detailsimg3.jpg';
import righticon from '../assets/icon/righticon.svg';
import calendericon from '../assets/icon/calendericon.svg';
import markicon from '../assets/icon/markicon.svg';



const ProjectDetails = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header Section */}
<section 
  className="relative bg-black text-white py-24 px-10  bg-cover bg-center h-100"
  style={{ backgroundImage: `url(${HeroBg})` }}
>

  <div className="relative z-10 max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold">Project</h1>
    <nav className="text-sm mt-3 flex items-center gap-1.5">
      <span className="text-gray-300">HOME</span> 
      <span className="text-gray-400"> <img src={righticon} alt="icon"className='w-3 h-3' /> </span> 
      <span>Project_Details</span>
    </nav>
  </div>
</section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        
        {/* Main Image and Info Card Area */}
        <div className="relative mb-12">
          {/* Main Project Image Placeholder */}
          <div className="w-full h-[400px] bg-gray-300 rounded-sm">
             <img src={detailsimg1} alt="Project" className="w-full h-full object-cover" /> 
          </div>

          {/* Info Card (Positioned partly over the image) */}
          <div className="md:absolute bottom-[-10px] right-0 bg-gray-50 p-8  w-full md:w-80 mt-6 md:mt-0">
            <div className="text-xs mb-2 flex items-center">
              <span className="mr-2"><img src={calendericon} alt="icon" /></span> October 19, 2023
            </div>
            <div className="space-y-3 text-sm">
              <p><span className="font-bold">CLIENT:</span> Nafizul islam bhuiyan</p>
              <p><span className="font-bold">PROJECT:</span> Plumber</p>
              <p><span className="font-bold">CATEGORY:</span> RepairTechs</p>
            </div>
          </div>
        </div>

        {/* Project Description Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Project Details</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
            <p>
             Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It invo diagnosing issues, replacing faulty parts, and ensuring optimal functionality. Repair services are essential for maintaining the longevity 
            </p>
            <p>
              Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original 
            </p>
            <p>Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It invo diagnosing issues, replacing faulty parts, and ensuring optimal functionality. Repair services are essential for maintaining the longevity Repairs a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionalitep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It invo diagnosing issues</p>
          </div>
        </div>

        {/* Two Column Grid Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="h-64 bg-gray-300 rounded-sm">
             <img src={detailsimg2} alt="Project" className="w-full h-full object-cover" /> 
            
          </div>
          <div className="h-64 bg-gray-300 rounded-sm">
          <img src={detailsimg3} alt="Project" className="w-full h-full object-cover" /> 

          </div>

        </div>
          <p>Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It invo diagnosing issues, replacing faulty parts, and ensuring optimal functionality. Repair services are essential for maintaining the longevity </p>

        <p>Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their or</p>

        {/* Overview & Challenge Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Overview & Challenge</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original 
          </p>

          {/* Checklist */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1"><img src=
              {markicon} alt="icon" /></span>
              <span className="font-bold text-sm uppercase">Bringing back the functionality you need repair made easy, hassle-free solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1"><img src=
              {markicon} alt="icon" /></span>
              <span className="font-bold text-sm uppercase">Reliable repairs for a seamless experience Trust us with your repair needs</span>
            </li>
            <li className="flex items-start gap-3 left-1">
              <span className="text-orange-500 mt-1"><img src=
              {markicon} alt="icon" /></span>
              <span className="font-bold text-sm uppercase">Repairing with care, exceeding expectations Quality repair services you can count on</span>
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed text-justify">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their origi working condition It involves diagnosing issues replacing faulty parts  ensuri optimal functionality. Rep services are  maintaining  Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It invo diagnosing issues, replacing faulty parts, and ensuring optimal functionality. Repair services are essential for maintaining the longevity Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. It involves diagnosing issues, replacing faulty parts, and ensuring optimal functionality.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;