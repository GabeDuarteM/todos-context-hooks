import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { TodoContextProvider } from "./context/TodoContext";
import { VisibilityFilterContextProvider } from "./context/VisibilityFilterContext";

render(
  <TodoContextProvider>
    <VisibilityFilterContextProvider>
      <App />
    </VisibilityFilterContextProvider>
  </TodoContextProvider>,
  document.getElementById("root")
);
