import React from 'react'

const Pastprops = (props) => {
  return (
    <div className='mt-8'>
      <div className='bg-indigo-100'>
        <div>
          <p className='underline font-semibold pt-5 pl-5 text-lg'>{props.title}</p>
        </div>
        <div className='py-8 flex flex-col md:flex-row gap-5 w-full'>
          <div className='w-full md:w-1/2 h-full'>
            <img src={props.image} alt="Event Image" className='h-full w-full object-cover' />
          </div>
          <div className='p-5 w-full md:w-1/2 h-full'>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pastprops
