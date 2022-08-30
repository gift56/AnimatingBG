import React from "react";
import GradientBtn from "./GradientBtn";

const ContactForm = () => {
  return (
    <div className="p-4 text-left">
      <form action="" method="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">Name</label>
            <input
              type="text"
              className="border-2 text-gray-900 rounded-lg p-3 flex outline-none focus:border-gray-600 font-medium"
              name="name"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">Phone</label>
            <input
              type="tel"
              className="border-2 text-gray-900 rounded-lg p-3 flex outline-none focus:border-gray-600 font-medium"
              name="phone"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">Email</label>
            <input
              type="email"
              className="border-2 text-gray-900 rounded-lg p-3 flex outline-none focus:border-gray-600 font-medium"
              name="email"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">
              Message
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex outline-none focus:border-gray-600 font-medium"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <GradientBtn className="ml-4 mt-4 capitalize" title="send message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
