import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
    <div id="About" className='About text-[#ecf0f3]'>
        <div className="containerCus sm:flex w-full justify-between mt-5 items-center">
            <div className='sm:w-[40%] ' data-aos="zoom-in">
                <img src="/assets/developer.png" alt='/' width={400} height={100}/>
            </div>
            <div className='mx-auto sm:w-[60%]'>
                <h1>About Me</h1>
                <p className='my-5 paragraph py-3 px-2 ' data-aos="fade-right">
                    Aspiring Software developer/Engineer. 
                    <br/>I started teaching myself how to code 3 years ago, 
                    I then enrolled for Bachelor's of Engineering Technology in Computer Engineering where 
                    I will be doing my final year next year(2023).
                    Throughout the years, I've been constantly exposing myself to different Software Development Technologies for both front-end and back-end Development.
                    As much as I enjoy developing the visuals that people can interact with in an application, 
                    I Also love developing the back-end logic. I am undecided on which one to pick between the two because i really love doing both. 
                    <br/><br/></p>
                    
            </div>
        </div>
    </div>
  )
}
