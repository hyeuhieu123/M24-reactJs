import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import "./App.css";
import Signin from "./components/Signin";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
