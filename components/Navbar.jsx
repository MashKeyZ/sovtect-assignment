import React,{useState,useRef} from 'react'
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {findDOMNode} from 'react-dom'
import $ from 'jquery';
import {AiOutlineCloseCircle,AiOutlineMenu,AiOutlineProject,AiOutlinePhone,AiOutlineBook,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GiSkills} from 'react-icons/gi'
import {IoSchoolOutline} from 'react-icons/io'
import SocialsComp from './SocialsComp'

export const Navbar = () => {

    const [navigate,setNav] = useState(false)
    const drawer = useRef();
    const handleSetNav =()=>{
        setNav(!navigate)
    }
    const toggle = ()=>{
        setNav(!navigate)
        const el = findDOMNode(drawer.current);
        $(el).slideToggle();
    }

  return (
    <div className='flex justify-center w-full h-[60px] '>
        <div className='flex items-center justify-between containerCus w-full h-full'>
            <div className=''>
            <img src='/assets/logo.png'
                alt='/'
                width={100}
                height={55}
            />
            </div>
            {/**For PC */}
            <div className='hidden md:flex' >
                <ul className='flex justify-around'>
                    <Link href="/#About" >
                        <li className='text-sm ml-10 uppercase topnav' >
                          
                            About
                        </li>
                    </Link>
                    <Link href="/#Skills">
                        <li className='text-sm ml-10 uppercase topnav'>
                            
                            Skills
                        </li>
                    </Link>
                    <Link href="/#Education">
                        <li className='text-sm ml-10 uppercase topnav'>
                            
                            Education
                        </li>
                    </Link>
                    <Link href="/#Projects">
                        <li className='text-sm ml-10 uppercase topnav'>
                            
                            Projects
                        </li>
                    </Link>
                    <Link href="/#Contact">
                        <li className='text-sm ml-10 uppercase topnav'>
                            
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleSetNav} className='md:hidden'>
                     <AiOutlineMenu size={25}/>
                </div>
        </div>
        {/**For mobile */}
        <div  className={navigate? 'fixed z-50 left-0 top-0 w-full h-screen bg-black/60':''}>
            <div ref={drawer} className={navigate?
            'fixed left-0 top-0 w-[75%] sm:w-[50%] md:[30%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500 '
            :'hidden'
            }>
            <div className='w-full h-full'>
            <div className='flex justify-between'>
            <Image src='/../public/assets/logo.png'
                alt='/'
                width={100}
                height={55}
            />
             <div onClick={handleSetNav} className=' p-3 rounded-full shadow-lg shadow-gray-400'> 
                <AiOutlineCloseCircle size={25}/>
            </div>
            </div>
           
            <div className='' >
                <ul className=''>
                    <Link href="#About" >
                    
                        <li className='text-sm mt-10 uppercase topnav ' >
                        <div className='w-full h-[50px] flex items-center'>
                            <FcAbout size={35} />
                            <p className='pl-5'> About</p>
                        </div> 
                        </li>
                    </Link>
                    <Link href="#Skills">
                        <li className='text-sm mt-3 uppercase topnav'>
                        <div className='w-full h-[50px] flex items-center'>
                        <GiSkills size={35}/>
                            <p className='pl-5'> Skills</p>
                        </div> 
                            
                        </li>
                    </Link>
                    <Link href="#Education">
                        <li className='text-sm mt-3 uppercase topnav'>
                        <div className='w-full h-[50px] flex items-center'>
                            <AiOutlineBook size={35} />
                            <p className='pl-5'> Education</p>
                        </div> 
                            
                        </li>
                    </Link>
                    <Link href="#Projects">
                        <li className='text-sm mt-3 uppercase topnav'>
                        <div className='w-full h-[50px] flex items-center'>
                        <AiOutlineProject size={35}/>
                            <p className='pl-5'> Projects</p>
                        </div> 
                            
                        </li>
                    </Link>
                    <Link href="#Contact">
                        <li className='text-sm mt-3 uppercase topnav'>
                        <div className='w-full h-[50px] flex items-center'>
                            <AiOutlinePhone size={35} />
                            <p className='pl-5'> Contact</p>
                        </div> 
                            
                        </li>
                    </Link>
                </ul>
            </div>
            {/**Footer */}
            <SocialsComp/>
        </div>
            </div>
        </div>
    </div>
  
  )
}
