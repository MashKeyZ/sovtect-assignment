import React,{useEffect} from 'react'
import Image from 'next/image'
import Typed from 'react-typed'
import SocialsComp from './SocialsComp'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const BodyComp = () => {
    useEffect(()=>{
        AOS.init({duration:3000})
    },[])
    const gotoHireMe=()=>{
        window.location.href='#Contact';
      
    }
  return (
    <div id="Home" className='bodyCont w-full h-[91vh] flex items-center'>
        <div className='containerCus sm:mx-[3rem] w-full h-full flex items-center justify-between'>
            <div className='hidden sm:flex svgCont svgBackground items-center w-full sm:w-[85%] md:w-[50%] lg:w-[40%] h-[91vh]'>
                <Image src="/../public/assets/dev2.png" 
                alt='/'
                width={550}
                height={100}
                className="" data-aos="fade-up"/>
            </div>
            <div className=' z-40 wording '>
                <p className='font-bold text-2xl text-gray-600 '>Hi there,</p>
               <h1 className='Name py-2 text-gray-700'>
               <Typed
                    strings={[`I'm Vutlhari Mashimbyi `]}
                    typeSpeed={40}
                />
               </h1>
               <h2 className='py-2'>
               <Typed
                strings={[
                    'Software ',
                    'Full-Sack Web ',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                
                    loop /><span className='font-bold text-3xl text-gray-600'>Developer</span>
               </h2>
               <p className='font-bold text-xl text-gray-600 '>Let's build something together!!!</p>
               <div className='btnCont mt-2'>
                    <button onClick={gotoHireMe} className='p-2 scaledBtn '>👉 Hire Me</button>
                    <Link className='px-4 font-bold text-[#00BFA6]' href="#About">
                        Learn More
                    </Link>
               </div>
               <div className='w-[15rem]'>
                   <SocialsComp/>
               </div>
              
            </div>
          
        </div>
        
    </div>
  )
}
