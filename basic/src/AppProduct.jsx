import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function AppProduct() {
  const [showProduct, setShowProduct] = useState(true);
  return (
    <>
      <button onClick={() => setShowProduct((prev) => !prev)}>
        {showProduct ? "close toggle" : "show toggle"}
      </button>
      {showProduct && <Product />}
    </>
  );
}

export default AppProduct;
