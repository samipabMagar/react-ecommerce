import React from "react";
import {
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";

const TrustSection = () => {
  return (
    <>
      <div className="py-2 px-5 md:px-15">
        <h2 className="text-daraz-primary text-xl md:text-2xl font-semibold text-center">
          Why Choose Roka Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 m-5 md:my-8 ">
          <div className="flex  flex-col justify-center items-center  bg-white py-5 px-3 rounded-xl">
            <FaShieldAlt className="text-6xl md:text-5xl" />
            <h2 className="font-semibold text-gray-700 text-lg mt-3">
              Secure Shopping
            </h2>
            <p className="text-center text-gray-500 w-60 font-sans">
              Safe and trusted checkout experience.
            </p>
          </div>
          <div className="flex  flex-col justify-center items-center  bg-white py-5 px-3 rounded-xl">
            <FaShippingFast className="text-6xl md:text-5xl" />
            <h2 className="font-semibold text-gray-700 text-lg mt-3">
              Fast Delivery
            </h2>
            <p className="text-center text-gray-500 font-sans w-60">
              Reliable and timely delivery services.
            </p>
          </div>
          <div className="flex  flex-col justify-center items-center  bg-white py-5 px-3 rounded-xl">
            <FaHeadset className="text-6xl md:text-5xl" />
            <h2 className="font-semibold text-gray-700 text-lg mt-3">
              Customer Support
            </h2>
            <p className="text-center text-gray-500 font-sans w-60">
              Friendly assistance whenever you need help.
            </p>
          </div>
          <div className="flex  flex-col justify-center items-center  bg-white py-5 px-3 rounded-xl">
            <FaCheckCircle className="text-6xl md:text-5xl" />
            <h2 className="font-semibold text-gray-700 text-lg mt-3">
            Quality Products
            </h2>
            <p className="text-center text-gray-500 font-sans w-60">
            Carefully selected products for reliability and value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustSection;
