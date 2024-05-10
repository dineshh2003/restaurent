import React from 'react'
import Image from 'next/image'
import { featuredProduct } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-rred-500'> 
        {/* wrapper */}
      <div className='w-max flex'>
        {/* single item */}

        {featuredProduct.map(item =>(            
            <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
            {/* image container */}
        {   item.img &&
            <div className='relative flex-1 w-full'>
            <Image src={item.img} alt=" " fill className='object-contain'/>
            </div>
        }
                 
            {/* Text container  */}
        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-xl uppercase font-bold'>{item.title}</h1>
            <p >{item.desc}</p>
            <span className='text-xl font-bold'>{item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
        </div> 
        </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
