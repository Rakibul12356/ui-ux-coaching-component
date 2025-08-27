"use client";
import React from 'react'
import ContactHeader from './ContactHeader'
import ContactInfo from './ContactInfo'

const Contacts = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-6 py-6 bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a]">
     
            <ContactHeader/>
      
            <ContactInfo/>
        
    </div>
  )
}

export default Contacts