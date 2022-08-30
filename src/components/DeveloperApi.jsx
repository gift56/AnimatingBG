import React from "react";
import PageSection from "./PageSections";
import CodeImg from "../assets/code.jpg";

const DeveloperApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle={`Angels that with clasp dreams nepenthe on this of is. Said and a my the.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam songs faster get as followed sought many leave.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam songs faster get as followed sought many leave.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam songs faster get as followed sought many leave.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam songs faster get as followed sought many leave.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0 shadow-lg shadow-thBlue">
          <img src={CodeImg} alt="code" className="rounded-l shadow-lg shadow-thBlue" />
        </div>
      </div>
    </PageSection>
  );
};

export default DeveloperApi;
