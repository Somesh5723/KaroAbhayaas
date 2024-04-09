import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPage from "../src/pages/navbar/NavbarPage";
import HeaderPage from "../src/pages/header/HeaderPage";
import CardPage from "../src/pages/card/CardPage";
import ReviewPage from "../src/pages/review/ReviewPage";
import FooterPage from "../src/pages/footer/FooterPage";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <NavbarPage />
      <HeaderPage />
      <CardPage />
      <ReviewPage />
      <FooterPage />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
