import React,{useEffect} from 'react'
import Typed from 'react-typed'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Projects = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div id="Projects">
        <div className='projectBack h-[10rem] sm:h-[20rem] w-full items-center mx-auto py-5'>
            <h1 className='text-center py-2 sm:py-6 md:py-8 bg-gradient-to-r from-[#00aeff8f] to-[#00bfa693]' data-aoc="zoom-in">My Projects</h1>
            <h2 className='text-center pt-5' data-aos="zoom-in">
            <Typed
                strings={
                    [`Here is some of the projects i've been working on `]
                    }
                    typeSpeed={100}
                   />
            </h2>
        </div>

        {/**Container */}
        <div className='containerCus sm:pr-[0rem] sm:flex gap-5 justify-center'>
            {/**Projetc */}
            <div data-aos="flip-right" className='project fromRight sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >PDF Scanner <span className='bg-gray-400 rounded-3xl p-1 font-semibold text-[#fdffff] ' >In Progress...</span></h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>Android applition that allows users to scan documents, convert images to .pdf and View Pdf files</p>
                <div className='flex mt-3'>
                    <p data-aos="flip-up" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>ReactNative</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Java</p>
                </div>
                <div className='flex justify-between mt-2 border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2022</p>
                    <p><a href="https://github.com/MashKeyZ/PDF-reader" className='font-bold text-[#00BFA6]'>See project</a></p>
                </div>
            </div>

             {/**Projetc */}
             <div data-aos="fade-up" className='project fromLeft sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >ATM</h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>This is an Object Oriented ATM built with Java. It demonstrate the knowledge of the fundamental conceptsof Object-Oriented Software Design</p>
                <div className='flex mt-3'>
                    <p data-aos="fade-down" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Java</p>
                </div>
                <div className='flex justify-between mt-2 border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2022</p>
                    <p><a href="https://github.com/MashKeyZ/oo-atm" className='font-bold text-[#00BFA6]'>See project</a></p>
                </div>
            </div>
        </div>

        {/**Container */}
        <div className='containerCus sm:pr-[0rem] sm:flex gap-5 justify-center'>
            {/**Projetc */}
            <div data-aos="flip-up" className='project fromRight sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >Khongis Decor</h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>Web application that i built for a local bussiness woman from my home town. Clients are able to make bookings of the services offered through the website</p>
                <div className='flex mt-3'>
                    <p data-aos="fade-up" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>React.js</p>
                    <p data-aos="flip-right" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>HTML</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>CSS</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>TailwindCSS</p>
                </div>
                <div className='flex justify-between mt-2 border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2022</p>
                    <p><a href="https://khongisdeco.netlify.app/" className='font-bold text-[#00BFA6]'>See Demo</a></p>
                </div>
            </div>

             {/**Projetc */}
             <div data-aos="flip-right" className='project fromLeft h-fit sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >HostitMp3.com <span className='bg-gray-400 rounded-3xl p-1 font-semibold text-[#fdffff] ' >In Progress...</span></h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>A website that allows users to upload and download music(mp3) </p>
                <div className='flex mt-5 sm:mt-8'>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Bootstrap</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>HTML</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>CSS</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Javascript</p>
                </div>
                <div className='flex justify-between mt-2  border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2021</p>
                    <p><a href="https://hostitmp3.netlify.app/" className='font-bold text-[#00BFA6]'>See Demo</a></p>
                </div>
            </div>
        </div>

        
        {/**Container */}
        <div className='containerCus sm:pr-[0rem] sm:flex gap-5 justify-center'>
            {/**Projetc */}
            <div data-aos="fade-right" className='project sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >User Registering System</h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>A web application that allows users to register or login to the system. The application is able to perfom various validations in real-time while the user is registering </p>
                <div className='flex mt-3'>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Bootstrap</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>HTML/CSS</p>
                    <p data-aos="zoom-in"  className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Javascript</p>
                </div>
                <div className='flex justify-between mt-2 border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2022</p>
                    <p><a href="https://user-register-system.netlify.app/" className='font-bold text-[#00BFA6]'>See Demo</a></p>
                </div>
            </div>

             {/**Projetc */}
             <div data-aos="flip-left" className='project  h-fit sm:w-[70%] rounded-xl shadow-xl shadow-gray-500 p-3 sm:p-3  my-5'>
                <h3 >REST API <span className='bg-gray-400 rounded-3xl p-1 font-semibold text-[#fdffff] ' >In Progress...</span></h3>
                
                <p className='font-semibold mt-1 border-t-2 border-t-[#2adcf3]'>A restful API built with Node.js. The API is able to handle POST, GET, PUT  and DELETE operations. The API also has server side Aunthetication where security is concerned</p>
                <div className='flex mt-5 sm:mt-8'>
                    <p data-aos="fade-up" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Node.js</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>Express</p>
                    <p data-aos="zoom-in" className='bg-[#90b4ae9c] rounded-2xl p-2 font-semibold text-[#f1f5f5] shadow-xl shadow-gray-500 mr-3'>MongoDB</p>
                </div>
                <div className='flex justify-between mt-2  border-t-2 border-t-[#2adcf3]'>
                    <p className='font-bold'>2022</p>
                    <p><a href="https://github.com/MashKeyZ/rest-api" className='font-bold text-[#00BFA6]'>See Project</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
