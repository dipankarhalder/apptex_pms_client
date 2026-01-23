/** node modules */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** custom module */
import { AppRoute } from "./app";

/** validate root element */
const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("The document does not contain an element with ID 'root'.");
}

/** render root element */
const root = createRoot(rootElem);
root.render(
  <StrictMode>
    <AppRoute />
  </StrictMode>,
);
