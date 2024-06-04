import { Route, Routes } from "react-router-dom";
import Home from "./components/B1+2/Home";

import Contact from "./components/B1+2/Contact";
import Main from "./components/B1+2/Main";
import "./components/scss/navbar.scss";
import "./components/scss/variable.scss";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
