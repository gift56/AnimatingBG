import React from "react";

const PageSections = ({ name, title, subtitle, children }) => {
  return (
    <div name={name} className="max-w-screen-xl mx-auto h-fit">
      <div className="my-32 mx-8 text-center lg:text-left">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageSections;
