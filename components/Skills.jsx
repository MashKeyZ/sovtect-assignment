import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Skills = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <div id="Skills" className='mb-8'>
        <div className="containerCus my-3">
            <h1 className='w-full text-center skillsHeader py-4 text-[#ecf0f3]'>
                My Skills
            </h1>
        <div className="flex justify-center w-full sm:mx-auto sm:w-[60%]">
            <div className="iconsContainer w-full grid grid-cols-5 gap-10 fromLeft mt-7">
            <div>
            <img className='Icons w-20 'data-aos="fade-up" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div><div>
            <img className='Icons w-20  ' data-aos="fade-left"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            </div><div>
            <img className='Icons w-20 'data-aos="fade-left" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-up"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="zoom-in"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-right"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-up"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-right"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="zoom-in"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-right"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-up"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-right"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-plain.svg" />
          </div><div>
            <img className='Icons w-20 ' data-aos="fade-up"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          
          <img className='Icons w-20 ' data-aos="fade-down"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          
        </div>
        </div>
        </div>
    </div>
  )
}
