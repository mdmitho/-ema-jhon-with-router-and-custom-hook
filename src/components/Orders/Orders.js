import React from "react";
import useProducts from "../../Hooks/useProducts";

const Orders = () => {
  const [products, setProducts ] =useProducts()
  return (
    <div>
      <h2>This is Orders :  {products.length}</h2>
    </div>
  );
};

export default Orders;
