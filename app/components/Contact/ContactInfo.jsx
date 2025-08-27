"use client"; // 👈 Add this

import React from "react";

const ContactInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form= e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    console.log("Form submitted!",name,email,message);
  };

  return (
    
      <div className="  p-6 rounded-md sm:p-10   text-[#ffffffb3] w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Youe name"
                className="w-full px-3 py-2 border rounded-md bg-[#FFFFFF0F]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md bg-[#FFFFFF0F]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message here..."
                className="w-full px-3 py-2 border rounded-md bg-[#FFFFFF0F] "
                rows={4}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 mt-4 text-white bg-purple-600 rounded-md hover:bg-black"
          >
        Submit  
          </button>
        </form>
      </div>
    
  );
};

export default ContactInfo;
