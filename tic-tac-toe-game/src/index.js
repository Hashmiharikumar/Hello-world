import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/Users/Hashmi Harikumar/CS615/assign3/tic-tac-toe-game/src/styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
