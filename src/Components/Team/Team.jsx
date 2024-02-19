import React from 'react'
import Harshita from '../../Components/assets/harshita.jpg';
import Abhi from '../../Components/assets/abhi.jpg';
import Tarushi from '../../Components/assets/tarushi.png';
import '../../Pages/RegisterAndLoginforNGO/RegisterAndLogin.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Team = () => {
  return (
    <div className='h-[90vh] bg-[white]' >
        <Navbar/>
      <div className='container mx-auto px-6 md:px-12 lg:px-8'>
        <div className='mb-12 space-y-4 text-center'>
            <h1 className='mt-[100px] text-5xl font-bold text-gray-900 md:text-5xl'>Our Team </h1>
            <p className='text-xl text-gray-600'>We are a team of passionate individuals who believe in the power of technology to transform the world. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe repellendus aperiam quo cum. Corrupti nam quod nobis cum soluta doloribus sequi praesentium asperiores odio odit!</p>
        </div>

        <div className="py-20 grid gap-28 md:grid-cols-3">
            <div className="border-t-4 space-y-8 group text-center">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                    <img src={Harshita} alt='Harshita picture' loading='lazy' className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group- hover:scale-[1.4]' />
                </div>
                <div className='text-center'>
                    <h5 className='text-xl text-gray-800 font-semibold'>Harshita</h5>
                   <span className='text-sm text-gray-500'>Backend Developer</span>
                </div>
            </div>
            <div className="border-t-4 space-y-8 group text-center">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                    <img src={Abhi} alt='Harshita picture' loading='lazy' className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group- hover:scale-[1.4]' />
                </div>
                <div className='text-center'>
                    <h5 className='text-xl text-gray-800 font-semibold'>Abhiruchi Sarswat</h5>
                   <span className='text-sm text-gray-500'>Frontend Developer</span>
                </div>
            </div>
            <div className="border-t-4 space-y-8 group text-center">
                <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                    <img src={Tarushi} alt='Harshita picture' loading='lazy' className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group- hover:scale-[1.4]' />
                </div>
                <div className='text-center'>
                    <h5 className='text-xl text-gray-800 font-semibold'>Tarushi</h5>
                   <span className='text-sm text-gray-500'>Project Manager</span>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default Team
