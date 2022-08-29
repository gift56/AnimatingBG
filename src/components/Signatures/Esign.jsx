import React from "react";
import { Signature, SignatureComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Esign = () => {
  let signObj = Signature | null;

  const OnSave = () => {
    signObj?.save();
  };

  const OnClear = () => {
    signObj?.clear();
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="buttons mb-3 d-flex gap-2">
        <ButtonComponent className="m-1 btn btn-primary px-5" onClick={OnSave}>
          Save
        </ButtonComponent>
        <ButtonComponent className="m-1 btn btn-danger px-5" onClick={OnClear}>
          Clear
        </ButtonComponent>
      </div>
      <SignatureComponent
        ref={(sign) => (signObj = sign)}
        backgroundColor="green"
        strokeColor="white"
        velocity={1}
        minStrokeWidth={1}
        maxStrokeWidth={3}
        style={{ width: "500px", border: "1px solid gray" }}
      ></SignatureComponent>
    </div>
  );
};

export default Esign;
