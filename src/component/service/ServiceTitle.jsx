import React from 'react'

const ServiceTitle = ({heading="Repairing your problem restoring your peace",description="Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Repair services are  maintaining the longevity of various products equipment and infrastructure" ,className=""}) => {
  return (
    <div className={className}>
        <h2 className="text-[30px] text-black-900 leading-[36px] font-bold pb-5">{heading}</h2>
    <p className="text-[16px] text-black-800 leading-[28.8px] font-archivo font-normal pb-10">{description}</p>
    </div>
  )
}

export default ServiceTitle