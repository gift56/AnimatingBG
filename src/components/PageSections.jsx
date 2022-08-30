import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div name={name} className="max-w-screen-xl mx-auto h-fit">
      <div className="my-20 mx-8 d-flex flex-col items-center lg:items-start">
        <h1 className="text-5xl">{title}</h1>
        <p className="mt-3 mb-16">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default PageSection;
