"use client"; 
import React from 'react'
import SingleServiceCard from './SingleServiceCard';
const services = [
  {
    id: 1,
    title: "UX/UI Design",
    description:
      "We create intuitive and beautiful user experiences that delight users and drive engagement.",
    image: "/image/46781712.jpg",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and responsive design.",
    image: "/image/about_30542444.jpg",
  },
  {
    id: 3,
    title: "Brand Strategy",
    description:
      "We help define your brand voice, positioning, and strategy to stand out in the market.",
    image: "/image/46781712.jpg",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Optimize your website to rank higher on search engines and attract more organic traffic.",
    image: "/image/46781712.jpg",
  },
  {
    id: 5,
    title: "Product Design",
    description:
      "From idea to prototype, we design products that solve problems and delight customers.",
    image: "/image/46781712.jpg",
  },
];
const ServiceCard = () => {
  return (
      <>
      <h2 className='text-amber-100'> Serveice </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 px-4'>
        
        {
            services.map(service=><SingleServiceCard key={service.id} service={service}/>)
        }
    
    </div></>
  )
}

export default ServiceCard