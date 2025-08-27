import Image from 'next/image';
import React from 'react'

const SingleServiceCard = ({service}) => {
     const { title, description, image } = service;
  return (
   <div className="flex border-2 border-[#FFFFFF19] flex-col max-w-md items-center justify-center  p-6 rounded-3xl  sm:p-10  bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a] -">
         <div className="mb-8 ">
           <Image
             src={image} 
             alt="My Photo"
             width={
               400} 
             height={100} className="rounded-2xl"/>
   
           <h1 className="my-3 text-white ">{title}</h1>
           <p className="text-sm text-[#ffffffb3]">{description}</p>
         </div>
       </div>
  )
}

export default SingleServiceCard