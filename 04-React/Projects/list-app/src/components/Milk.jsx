import React from "react";

const Milk = (products) => {
  const milkProducts = products.filter(
    (product) => product.category === "milk",
  );
  return (
    <div>
      {milkProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Milk;
