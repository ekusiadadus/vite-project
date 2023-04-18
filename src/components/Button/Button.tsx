import React from "react";

export const Button = ({ id }: { id: string }) => {
  const [message, setMessage] = React.useState("Hello");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
            alert(message);
          }}
        >
          This button id is {id}
        </button>
      </form>
    </div>
  );
};

export default Button;
