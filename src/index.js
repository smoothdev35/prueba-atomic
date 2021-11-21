import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./routes/Signup";
import Footer from "./components/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<Signup />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
