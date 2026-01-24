import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRoute } from "./app";
import { queryClient } from "./config/queryClient";

const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("The document does not contain an element with ID 'root'.");
}

const root = createRoot(rootElem);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoute />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
