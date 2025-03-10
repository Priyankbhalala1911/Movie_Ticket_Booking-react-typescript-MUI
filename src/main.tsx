import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme/index.ts";
import { Provider } from "react-redux";
import { store } from "./Store/index.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
