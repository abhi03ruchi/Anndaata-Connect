import React from 'react'
import img1 from '../Components/assets/2.png';
import img2 from '../Components/assets/3.png';
import img3 from '../Components/assets/12.png';
import img4 from '../Components/assets/13.png';

export default function SustainableGoals() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Sustainable Development Goals
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="col-span-2  w-full object-contain lg:col-span-1"
              src={img1}
              alt="Transistor"
             
            />
            <img
              className="col-span-2  w-full object-contain lg:col-span-1"
              src={img2}
              alt="Reform"
            
            />
            <img
              className="col-span-2  w-full object-contain lg:col-span-1"
              src={img3}
              alt="Tuple"
             
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={img4}
              alt="SavvyCal"
             
            />
          </div>
        </div>
      </div>
    )
  }
  