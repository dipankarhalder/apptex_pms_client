import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import { AppRoute } from "./routers/AppRoute";
import { queryClient } from "./config/queryClient";
import { ToastProvider } from "./shared/Toast";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalFonts } from "./styles/GlobalFonts";
import { theme } from "./styles/theme";

const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("The document does not contain an element with ID 'root'.");
}

const root = createRoot(rootElem);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <GlobalFonts />
          <GlobalStyle />
          <AppRoute />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
