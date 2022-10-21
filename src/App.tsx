import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { products } from "./services/mocks/products.mocks";

function App() {
  return (
    <div className="container">
      <Carousel items={products} />
    </div>
  );
}

export default App;
