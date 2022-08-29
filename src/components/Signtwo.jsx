import React, { useState, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Signtwo = () => {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    width: "600px",
    height: "370px",
  };
  const canvas = createRef();

  const [image, setImage] = useState();

  const Success = () => {
    canvas.current
      .exportImage("png")
      .then((data) => {
        console.log(data);
        setImage(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const Remove = () => {
    canvas.current.clearCanvas();
    setImage();
  };

  return (
    <div className="d-flex flex-column gap-4 align-items-center justify-content-center">
      <ReactSketchCanvas
        style={styles}
        strokeWidth={4}
        strokeColor="black"
        ref={canvas}
        className="mt-4"
      />
      <div className="d-flex align-items-center">
        <button className="m-1 btn btn-primary px-5" onClick={Success}>
          Get Image
        </button>
        <button className="m-1 btn btn-danger px-5" onClick={Remove}>
          Clear Image
        </button>
      </div>
      {image && (
        <img
          src={image}
          style={{
            width: "300px",
            aspectRatio: "1/1",
            border: "1px solid gray",
          }}
          alt="solid"
        />
      )}
    </div>
  );
};

export default Signtwo;
