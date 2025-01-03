import React from "react";
import img1 from "../Components/assets/2.png";
import img2 from "../Components/assets/3.png";
import img3 from "../Components/assets/12.png";
import img4 from "../Components/assets/13.png";

export default function SustainableGoals() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
          Sustainable Development Goals
        </h2>
        <div className="mx-auto mt-10 flex max-w-full md:flex-row flex-col items-center justify-center gap-x-8 gap-y-10">
          <img
            className="col-span-2  w-lg object-contain lg:col-span-1"
            src={img1}
            alt="Transistor"
          />
          <img
            className="col-span-2  w-lg object-contain lg:col-span-1"
            src={img3}
            alt="Tuple"
          />
        </div>
      </div>
    </div>
  );
}
