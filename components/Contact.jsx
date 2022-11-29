import React,{useEffect,useRef} from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'


export const Contact = () => {
    const form = useRef();
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    const handleSubmitt=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_9yax44k', 'template_capi3we', form.current, 'D_3hC3fuSShkFcdk9')
          .then((result) => {
            alert("Thank you for contacting me.\nWill get back to you soon!!")
           
          }, (error) => {
            alert("Could not send a message\nTyr again later")
            console.log(error)
          });
          e.target.reset();
        
    }
  return (
    <div id="Contact" className='flex justify-center w-full my-10'>
        <div className=' mx-auto self-center flex justify-center w-full sm:w-[80%] '>
            <div  className='overlayed'>
                <img src='/assets/send_.png'
                        alt='/'
                        width={500}
                        height={500}
                    />
            </div>
            <div data-aos="flip-right" className="formCont px-2 text-center  sm:w-[80%] lg:w-[60%] w-[80%] bg-[#33beff2f] rounded-lg">
                <h2 data-aos="fade-right" className='p-2 border-b-2 border-b-[#2adcf3] mb-5'>Contact Me</h2>

                <form  ref={form} onSubmit={handleSubmitt} data-aos="flip-left" action="/" method='post'>
                    <div className="formgroup my-4 w-full px-5">
                    <input
                     className='w-full sm:w-[80%] h-10 bg-inherit border-2 border-[#2adcf3] rounded-lg p-5 focus:outline-none focus:border-sky-500 text-lg' 
                     id="name" 
                     name="name" 
                     placeholder="Name" 
                      required/>
                    </div>
                    <div className="formgroup my-4 w-full px-5">
                    <input
                    className='w-full sm:w-[80%] h-10 bg-inherit border-2 border-[#2adcf3] rounded-lg p-5 focus:outline-none focus:border-sky-500 text-lg' 
                     id="email" 
                     name="email" 
                     placeholder="Email" 
                     type="email" required/>
                    </div>
                    <div className="formgroup my-4 w-full px-5">
                     <textarea rows = "5" cols = "60" 
                     className='w-full sm:w-[80%] bg-inherit border-2 border-[#2adcf3] rounded-lg p-5 focus:outline-none focus:border-sky-500 text-lg'
                     id="message" 
                     name="message" 
                     placeholder="Message" 
                      required></textarea>
                    </div>
                    <div className="formgroup my-4 w-[100%] flex justify-center ">

                        <button type='submit' className='p-3 px-5'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
       
    </div>
     
  )
}
