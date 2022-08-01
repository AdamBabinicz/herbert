import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Services from "./components/Services/Services";
// import Work from "./components/Work/Work";
// import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/piosenki" element={<Services />} />
      <Route path="/fototeka" element={<Work />} />
      <Route path="/poeta" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);
