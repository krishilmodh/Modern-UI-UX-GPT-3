import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Navbar, Brands, Cta } from "./components";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
