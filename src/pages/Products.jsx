import React from "react";
import Sort from "../components/Sort";
import Product from "../components/Product";
import { useFilterProductContext } from "../context/FilterProductContext";

const Products = () => {
  const { filter_products } = useFilterProductContext();

  return (
    <>
      <div className="py-5 md:px-15 px-5 md:flex md:flex-col md:mt-4 md:gap-8 ">
        <Sort />
        <div className="grid my-6 grid-cols-2 md:gap-10 gap-3 md:grid-cols-4 ">
          {filter_products.length == 0 ? (
            <p className="font-sans font-semibold">No products available</p>
          ) : (
            filter_products.map((curElem, index) => {
              return <Product key={index} {...curElem} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
