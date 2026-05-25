import React from 'react'
import Button from '../section/Button';
import { ArrowRight } from 'lucide-react';
import sideinfo from "../../assets/sideinfo.jpg";
const ServiceSideber = () => {
  const  btn_data=[
        {
            id:1,
            text:"Restoring functionality, one repair"
        },
        {
            id:2,
            text:"Repairing your problems restoring"
        },
        {
            id:3,
            text:"Quality repair services you can"
        },
        {
            id:4,
            text:" Repairing with care exceeding expectations"
        },
        {
            id:5,
            text:"Reliable Repair"
        },
        {
            id:6,
            text:"Perfect Restorer"
        },
    ]
 const bgImage = {
    background: `url(${sideinfo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="flex flex-col items-start gap-10">

    <div className="grid grid-cols-1 gap-3.75">
        {btn_data.map((data)=>

         (  <button key={data.id} className='w-[410px]  py-3.75 bg-white text-black_800 text-[16px] leading-normal  font-archivo font-normal border border-black_800 hover:border-home rounded-sm'>{data.text}</button>

         )
        )}

    </div>

    <div style={bgImage} className="w-full h-[407px] flex items-end justify-center">
        <div className=" bg-black_900 flex flex-col items-center justify-end text-center w-full mx-10 mb-5 p-7.5">
            <p className="text-sm font-bold pb-2.5 text-white">Have any Qustion?</p>
            <p className="text-sm font-bold pb-5 text-white">Contact Us Now</p>
            <strong className="text-lg font-bold pb-2.5 text-white">+1 (123) 456-7890</strong>
            <p className="text-sm font-bold  text-white">nafiz123@gmail.com</p>

        </div>

    </div>



    <Button>
       Download pdf <ArrowRight />
    </Button>
    </div>
  )
}

export default ServiceSideber