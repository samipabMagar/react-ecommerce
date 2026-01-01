import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const Category = () => {
  const { products } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productCategories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts = selectedCategory === "All" ? products : products.filter((curElem)=> curElem.category == selectedCategory)
  return (
    <>
      <div className="px-5 md:px-15 pb-4 md:pb-10">
        <h2 className="text-center md:text-2xl font-semibold text-daraz-primary text-xl md:text-2xl">
          Shop By Category
        </h2>
        <div className="flex justify-between mt-3 md:mt-10 md:justify-center md:gap-30">
          {productCategories.map((curElem, index) => {
            const categoryProduct =
              curElem === "All"
                ? products[19]
                : products.find((item) => curElem === item.category);
                
            return (
              
                <div onClick={() => setSelectedCategory(curElem)} key={index} className="flex flex-col items-center gap-2">
                  <div
                    className="bg-gray-200 cursor-pointer group transition-all hover:scale-105 duration-100  border-2 md:border-4 border-gray-300 p-2 md:p-6 rounded-full w-12 h-12 md:h-30 md:w-30"
                    
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-110"
                      src={categoryProduct && categoryProduct.image}
                      alt=""
                    />
                  </div>
                  <h3 className="text-[10px] md:text-lg  md:font-bold] font-semibold font-sans uppercase">
                    {curElem.slice(0, 10)}
                  </h3>
                </div>
              
            );
          })}
        </div>
        <div className="grid my-6 grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4 md:mt-10 mt-7">{
          filteredProducts.slice(0,8).map((curElem) => {
            return <Product key={curElem.id} {...curElem}/>
          })
          }</div>
      </div>
    </>
  );
};

export default Category;
