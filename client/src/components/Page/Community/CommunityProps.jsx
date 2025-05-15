import React from 'react';

const CommunityProps = (props) => {
  return (
    <div className='bg-indigo-200 p-4 mt-10'>
      <div className='flex items-center justify-center'>
        <p className='p-2 border bg-white rounded-2xl mt-5 text-center font-medium'>{props.title}</p>
      </div>
      <div className='py-8 flex flex-col md:flex-row h-auto md:h-[70vh] ml-0 md:ml-20 gap-10'>
        <div className='w-full md:w-1/2 h-auto md:h-full'>
          <img src={props.image} alt='Event Image' className='w-full h-auto md:h-full object-cover' />
        </div>
        <div className='w-full md:w-5/8'>
          <div className='mr-0 md:mr-20 mt-5'>{props.description}</div>
          <div className='flex bg-black p-2 text-white w-fit mt-5 md:mt-20 rounded-sm mx-auto'>
            <button className='cursor-pointer'>JOIN TODAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityProps;
