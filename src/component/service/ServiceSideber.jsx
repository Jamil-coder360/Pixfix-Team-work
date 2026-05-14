import React from 'react'
import Button from '../section/Button';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div className="flex flex-col items-start gap-10">

    <div className="grid grid-cols-1 gap-3.75">
        {btn_data.map((data)=>

         (  <button key={data.id} className='w-[410px]  py-3.75 bg-white text-black_800 text-[16px] leading-normal  font-archivo font-normal border border-black_800 hover:border-home rounded-sm'>{data.text}</button>

         )
        )}

    </div>

    <Button>
       Download pdf <ArrowRight />
    </Button>
    </div>
  )
}

export default ServiceSideber