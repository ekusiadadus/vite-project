import React from "react";

import ReactDOM from "react-dom/client";
import { Button } from "./Button";

//@ts-ignore
globalThis.run = ({ id }: { id: string }) => {
  if (document.getElementById("test-bot")) {
    return;
  }
  const root = document.createElement("div");
  root.id = "test-bot";

  document.body.appendChild(root);
  ReactDOM.createRoot(root as HTMLElement).render(
    <div>
      <Button id={id} />
    </div>
  );
};
