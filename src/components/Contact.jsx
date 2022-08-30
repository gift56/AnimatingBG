import React from "react";
import PageSection from "./PageSections";
import contactImg from "../assets/contactUs.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`Nevermore outpour hesitating whispered all my demons, marvelled that bird said and meant back entreating dying. Parting the above broken.`}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="w-full lg:w-1/2 h-full p-4 flex flex-col items-center justify-center">
          <img
            src={contactImg}
            alt="contact us"
            className="rounded-full object-cover !shadow-lg !shadow-thPurple"
          />
          <p className="py-12 max-w-md ">
            Off what of no stronger that. Oh help this i tapping is door hear i.
            Rare in the i tossed and him has, and hesitating i thy burned into
          </p>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">

        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
