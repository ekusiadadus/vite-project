import React from "react";

import ReactDOM from "react-dom/client";
import { Button } from "./Button";

//@ts-ignore
globalThis.run = ({ id }: { id: string }) => {
  ReactDOM.createRoot(document.body as HTMLElement).render(
    <div>
      <Button id={id} />
    </div>
  );
};
