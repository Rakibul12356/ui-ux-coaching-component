"use client"; 
import React from 'react'
import SinglePathCard from './SinglePathCard';
const paths = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Learn the fundamentals of user interface and user experience design.",
    image: "/image/46781712.jpg"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Master HTML, CSS, JavaScript, and React to build amazing web apps.",
    image: "/image/about_30542444.jpg"
  },
  {
    id: 3,
    title: "Strategy Coaching",
    description: "Get guidance on UX strategy, product design, and business planning.",
    image: "/image/46781712.jpg"
  }
]


const PathCard = () => {
  return (
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 px-4'>
        
        {
            paths.map(path=><SinglePathCard key={path.id} path={path}/>)
        }
    
    </div>
  )
}

export default PathCard