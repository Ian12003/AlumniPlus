//achievement.jsx
import React from 'react'
import Card from './Card'
import Avatar from '../../../../assets/Avatar.jpg'

const Achievement = () => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <Card className="ml-10"
        image={Avatar}
        name="Mr. Prthivi Malla"
        position="NCC Caret"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio temporibus voluptatum maiores, pariatur magni consequatur officia provident sit necessitatibus mollitia voluptatibus repellat natus ut iste cum, sint quisquam commodi aperiam. Aperiam excepturi nam dicta debitis expedita ab optio tempora, delectus minus aspernatur porro odio ex libero officiis numquam ea veritatis!"
      />
      <Card 
        image={Avatar}
        name="Mr. Prthivi Malla"
        position="NCC Caret"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio temporibus voluptatum maiores, pariatur magni consequatur officia provident sit necessitatibus mollitia voluptatibus repellat natus ut iste cum, sint quisquam commodi aperiam. Aperiam excepturi nam dicta debitis expedita ab optio tempora, delectus minus aspernatur porro odio ex libero officiis numquam ea veritatis!"
      />
      <Card 
        image={Avatar}
        name="Mr. Prthivi Malla"
        position="NCC Caret"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio temporibus voluptatum maiores, pariatur magni consequatur officia provident sit necessitatibus mollitia voluptatibus repellat natus ut iste cum, sint quisquam commodi aperiam. Aperiam excepturi nam dicta debitis expedita ab optio tempora, delectus minus aspernatur porro odio ex libero officiis numquam ea veritatis!"
      />
      <Card 
        image={Avatar}
        name="Mr. Prthivi Malla"
        position="NCC Caret"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio temporibus voluptatum maiores, pariatur magni consequatur officia provident sit necessitatibus mollitia voluptatibus repellat natus ut iste cum, sint quisquam commodi aperiam. Aperiam excepturi nam dicta debitis expedita ab optio tempora, delectus minus aspernatur porro odio ex libero officiis numquam ea veritatis!"
      />
    </div>
  )
}

export default Achievement
