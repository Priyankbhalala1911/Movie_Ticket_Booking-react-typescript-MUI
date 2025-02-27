import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
