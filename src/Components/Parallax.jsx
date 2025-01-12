import React from 'react';
import { Parallax } from 'react-parallax';
import img from "../Components/assets/groupPic.png"

const ParallaxSection = () => {
  return (
    <Parallax
      blur={0}
      bgImage= {img}
      bgImageAlt="Group"
      strength={200}
      className="relative"
    >
      <div 
        className="h-[60vh] md:h-[80vh] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff5f3]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff5f3]/20 to-transparent" />
        
      </div>
    </Parallax>
  );
};

export default ParallaxSection;