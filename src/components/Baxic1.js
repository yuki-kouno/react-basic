import React from "react";

const Baxic1 = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <h1>Hello {props.nema}</h1>
    </>
  );
};

export default Baxic1;
