import React,{useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const Education = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <>
    <div id="Education" className='containerCus sm:flex  my-5'>
        
        <div className='Educatio sm:w-[60%] my-3 sm:my-0'>
        <h1 className='w-full text-center skillsHeader py-4 text-[#ecf0f3]'>Education</h1>
        <div className='Educomp mt-2 fromLeft border-gray-400 border rounded-md'>
            <h2 data-aos="flip-right" className=' text-[#329ef1e7]'>Bachelor's of Engineering Technology Computer Engineering</h2><hr/>
            <div data-aos="fade-down" className="Detailed mt-2 ">
            <h3 className='text-1xl sm:text-2xl md:text-3xl text-[#3a4247]'>Institution : Cape Peninsula Universuty of Technology</h3>
            <h3 className='text-1xl sm:text-2xl md:text-3xl text-[#3a4247]'>Year : 2021 - Current</h3>
            </div>
        </div>
        </div>
        <img data-aos="zoom-in" className='fromRight' src="/assets/education.png" alt='/' width={400} height={100}/>
    </div>
         
    </>
  )
}
