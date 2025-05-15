import React from 'react'

const Upcomingprops = (props) => {
  return (
    <div className='mt-8'>
      <div className='bg-indigo-100 py-8 flex flex-col md:flex-row h-[70vh] gap-10'>
        <div className='w-full md:w-1/2 h-1/2 md:h-full'>
          <img src={props.eventImage} alt="Event Image" className='h-full w-full object-cover' />
        </div>
        <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col'>
          <div className='font-bold text-lg'>
            <p>{props.title}</p>
          </div>
          <div className='mt-4 flex items-center font-semibold'>
            <img src={props.location} alt="Location Icon" className='w-5 h-5 mr-2' />
            <p>{props.venue}</p>
          </div>
          <div className='font-semibold ml-7'>Date: {props.date}</div>
          <div className='font-semibold ml-7'>Time: {props.time}</div>
          <div className='bg-indigo-900 w-fit p-2 my-4 rounded-sm'>
            <span className='text-white font-semibold'>About the events</span>
          </div>
          <div className='w-7/8'>
            {props.description}
          </div>
          <div className='flex bg-black p-2 text-white w-fit mt-10 ml-auto mr-25 rounded-sm'>
            <button className='cursor-pointer'>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcomingprops
