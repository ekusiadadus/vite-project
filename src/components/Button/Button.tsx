import React from "react";

export const Button = ({ id }: { id: string }) => {
  return (
    <button
      id={id}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onClick={() => {
        alert("Button clicked");
      }}
    >
      This button id is {id}
    </button>
  );
};

export default Button;
