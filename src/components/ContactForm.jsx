import React from "react";

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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
