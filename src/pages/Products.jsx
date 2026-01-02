import React from "react";
import Sort from "../components/Sort";
import Product from "../components/Product"
import { useFilterProductContext } from "../context/FilterProductContext";

const Products = () => {
  const {filter_products} = useFilterProductContext();
  
  return (
    <>
      <div className="py-5 px-5">
        <Sort/>
        <div className="grid my-6 grid-cols-2 gap-3 ">
        {
          filter_products.map((curElem, index) => {
            return (
              <Product key={index} {...curElem}/>
            )
          })
        }
        </div>
      
      </div>
    </>
  );
};

export default Products;
