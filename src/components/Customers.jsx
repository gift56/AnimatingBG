import React from "react";
import PageSection from "./PageSections";
import { facts, companies } from "../utils/customersData";

const Customers = () => {
  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={`Still bird made so and more the desolate soul fearing door, maiden fowl suddenly is get on and my.`}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg"
              key={id}
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
          {companies.map(({ id, icon, title }) => (
            <div
              key={id}
              className="flex items-center p-4 capitalize rounded-lg"
            >
              <span>{icon}</span>
              <p className="ml-2">{title}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
