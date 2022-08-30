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
          <p>
            Off what of no stronger that. Oh help this i tapping is door hear i.
            Rare in the i tossed and him has, and hesitating i thy burned into
          </p>
        </div>
        <div></div>
      </div>
    </PageSection>
  );
};

export default Contact;
