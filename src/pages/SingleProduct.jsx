import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { formatPrice } from "../helpers/FormatPrice";
import PageNavigation from "../components/PageNavigation";

const SingleProduct = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const { getSingleProducts, isSingleLoading, singleProducts, isSingleError } =
    useProductContext();

  useEffect(() => {
    getSingleProducts(id);
  }, [id]);
  if (isSingleLoading) {
    return <h2>Loading single products....</h2>;
  }

  if (!singleProducts) {
    return <h2>No product found!</h2>;
  }
  const { title, price, image, category, description, rating } = singleProducts;

  const sliceTitle = title && title.slice(0, 10);

  return (
    <>
      <div className="px-5 md:px-15 md:py-5  py-2 mb-10">
        <PageNavigation sliceTitle={sliceTitle} />
        <div className="mt-5 bg-white md:flex md:px-30 md:py-15 rounded-lg py-6 px-6">
          <h2 className="text-lg md:hidden font-bold">{sliceTitle}</h2>
          <div className="flex gap-2 md:hidden">
            <div className="flex gap-1 items-center justify-center text-yellow-500">
              <FaStar /> <FaStar />
              <FaStar />
              <FaStarHalfAlt /> <AiOutlineStar />
            </div>
            <p className="tracking-tighter">(4 customer reviews)</p>
          </div>
          <div className="flex items-center md md:block m-4 md:w-300 justify-center">
            <img className="w-30 md:w-50" src={image} alt="" />
          </div>
          <div className="bg-zinc-50 md:px-10 md:py-5 md:w-400 py-2 px-2">
            <h2 className="text-2xl md:block hidden  font-bold">{sliceTitle}</h2>
            <div className=" gap-2 md:flex hidden">
              <div className="flex gap-1 items-center justify-center text-yellow-500">
                <FaStar /> <FaStar />
                <FaStar />
                <FaStarHalfAlt /> <AiOutlineStar />
              </div>
              <p className="tracking-tighter font-semibold">(4 customer reviews)</p>
            </div>
            <p
              className={`md:text-[17px] text-sm  text-gray-700 font-sans md:mt-4 ${
                isExpanded
                  ? "   text-justify"
                  : "line-clamp-4 text-justify "
              }`}
            >
              {description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600  text-sm "
            >
              {isExpanded ? "read less" : "read more..."}
            </button>

            <h2 className="mt-3 md:text-sm">
              <span className="font-semibold md:text-lg">Category:</span> {category}
            </h2>
            <h2 className="mt-3 md:text-sm">
              <span className="font-semibold md:text-lg">Price: </span>NPR.
              <span className="text-[12px] text-daraz-primary md:text-sm">
                {formatPrice(price)}
              </span>
            </h2>
            <hr className="text-zinc-300 my-2 md:m-4" />
            <div className="flex justify-between mt-3">
              <button className="bg-daraz-dark md:text-lg text-white rounded py-2 md:w-40 px-4 w-33 font-semibold">
                Buy Now
              </button>
              <button className="bg-daraz-primary md:text-lg md:w-40 text-white rounded py-2 px-4 w-33 font-semibold">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
