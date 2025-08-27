import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const ContactHeader = () => {
  return (
    <div className="w-full md:w-[500px] p-6 md:p-12 text-center md:text-left mx-auto">
      <h1 className="text-3xl sm:text-4xl text-white font-bold">
        Ask whatever you have in your mind
      </h1>
      <p className="text-[#ffffffb3] mt-4 text-base sm:text-lg">
        Whether you have questions or are ready to discuss your business, we’re
        here to help. Reach out today.
      </p>
      <ul className="mt-6 space-y-2 text-sm text-[#ffffffb3]">
        <li>
          <a href="#" className="flex justify-center md:justify-start gap-2 items-center">
            <MdOutlineEmail className="text-xl" />
            Wadmin@raddision.com
          </a>
        </li>
        <li>
          <a href="#" className="flex justify-center md:justify-start gap-2 items-center">
            <BiPhoneCall className="text-xl" />
            (969) 819-8061
          </a>
        </li>
        <li>
          <a href="#" className="flex justify-center md:justify-start gap-2 items-center">
            <CiLocationOn className="text-xl" />
            43 Roselle St. New York
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactHeader;
