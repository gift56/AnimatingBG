import React, { useState } from "react";
import { Signature, SignatureComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Esign = () => {
  const [image, setImage] = useState();
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
      style={{ height: "100vh" }}
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
        // backgroundImage="data:image/jpeg;base64,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"
        style={{ width: "500px", border: "1px solid gray" }}
      ></SignatureComponent>
    </div>
  );
};

export default Esign;
