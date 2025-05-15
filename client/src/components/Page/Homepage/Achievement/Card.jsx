import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='w-full sm:w-80 overflow-hidden bg-indigo-200 shadow-xl shadow-indigo-400 mt-5 ml-8 p-2'>
      <div className='bg-white rounded-xl p-4 h-[30rem]'> 
        <div className='flex flex-wrap sm:flex-nowrap items-center'>
          <div className='mb-2 sm:mb-0'>
            <img className='w-24 rounded-full' src={props.image} alt="Profile Pic" />
          </div>
          <div className='mt-4 sm:mt-14 sm:ml-5 font-medium text-center sm:text-left'>
            <p>{props.name}</p>
            <p>{props.position}</p>
          </div>
        </div>
        <div className='font-serif mt-2 overflow-y-auto max-h-64'> 
          <p>{props.description}</p>
        </div>
        <div className='bg-blue-300 p-2 flex justify-center mt-8 gap-2 rounded-4xl w-26 mx-auto outline-1 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200'>
          <FaLinkedin />
          <FaFacebook />
        </div>
      </div>
    </div>
  )
}

export default Card
