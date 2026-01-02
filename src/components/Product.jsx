import React from "react";
import { formatPrice } from "../helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, image } = props;

  return (
    <>
      <div className="">
        <div
          className="bg-white gap-2 cursor-pointer  flex rounded-2xl hover:scale-105 transition-all duration-300 flex-col items-center  py-5 px-5 "
          
        >
          <h2 className="font-semibold text-[15px]">
              {title.slice(0,10)}
            </h2>
          <div className="md:h-50 h-25">
            <img className="w-20 md:w-35" src={image} alt="" />
          </div>
          <div>
            
            <NavLink to={`/singleproduct/${id}`}>
              <h4 className="text-blue-600 md:text-sm hover:text-blue-800 mt-5  text-[10px] mb-2">
                Details
              </h4>
            </NavLink>
            <h4>
              <span className="font-semibold md:text-xl text-[15px]">NPR.</span>
              <span className="text-red-400 md:text-lg">
                {formatPrice(price)}
              </span>
            </h4>
            <button className="py-2 md:px-6 md:text-lg hover:cursor-pointer px-4 bg-daraz-primary hover:text-zinc-300 text-white font-semibold rounded-lg mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
