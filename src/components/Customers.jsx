import React from "react";
import PageSection from "./PageSections";

const Customers = () => {
  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={`Still bird made so and more the desolate soul fearing door, maiden fowl suddenly is get on and my.`}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          <div className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">Bla</h1>
            <p>blal</p>
          </div>
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
