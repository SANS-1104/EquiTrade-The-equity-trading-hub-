import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:username/*" element={<Home />} />
        <Route path="/*" element={<Home />} /> {/* Default route for other cases */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);