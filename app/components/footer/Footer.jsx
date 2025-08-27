import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import SvgIcon from './SvgIcon';
const Footer = () => {
  return (
       <footer className="bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a] text-gray-300 py-10 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold flex text-white"><SvgIcon/> Radison</h2>
          <p className="mt-3 text-sm">
            Building modern web solutions with passion and creativity.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            <button className="text-3xl cursor-pointer bg-gray-500 rounded-lg p-2 text-white"><CiLinkedin/></button>
            <button className="text-3xl cursor-pointer bg-gray-500 rounded-lg p-2 text-white"><RiTwitterXFill/></button>
            <button className="text-3xl cursor-pointer bg-gray-500 rounded-lg p-2 text-white"><FaInstagram/></button>
            <button className="text-3xl cursor-pointer bg-gray-500 rounded-lg p-2 text-white"><CiFacebook/></button>
            <button className="text-3xl cursor-pointer bg-gray-500 rounded-lg p-2 text-white"><MdAlternateEmail/></button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row max-w-[1380px] gap-8">
          <div>
            <h3 className="font-semibold text-white">Section</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white">E-commerce</a></li>
              <li><a href="#" className="hover:text-white">SEO Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Pages</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Coming soon</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-3 px-6">
        <div>Use template</div>
        <div>Visioned and Crafted by Kanishk Dubey</div>
        <div>© All right reserved</div>
      </div>
    </footer>
  )
}

export default Footer