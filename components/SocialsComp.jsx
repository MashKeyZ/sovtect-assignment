import React from 'react'
import Link from 'next/link'
import {AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'

const SocialsComp = () => {
  return (
    <div className='flex items-center rounded-full justify-center w-full h-[70px] mt-7 shadow-lg shadow-gray-400 '>
        <Link href="https://www.linkedin.com/in/vutlhari-mashimbyi-5017b91b7/" className='mx-2 p-2 social'>
            <AiOutlineLinkedin size={35}/>
        </Link>
        <Link href="https://www.instagram.com/mashkeyz_za/" className='mx-2 p-2 social '>
            <AiOutlineInstagram size={35}/>
        </Link>
        <Link href="https://github.com/MashKeyZ" className='mx-2 p-2 social'>
            <AiOutlineGithub size={35} />
        </Link>
    </div>

  )
}

export default SocialsComp



