import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";
import Error404 from "./Pages/Error404";
import Cart from "./Pages/Cart";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from "./Components/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
