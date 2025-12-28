import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-50 py-14 px-5 md:px-15">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl text-daraz-primary md:text-2xl font-semibold">
          Stay Updated
        </h2>

        <p className="text-sm font-sans text-gray-600 mt-2">
          Subscribe to receive updates on new products, special offers, and store news.
        </p>

        <div className="flex  sm:flex-row gap-3 mt-6">
          <input 
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 font-sans text-sm py-2 border rounded "
          />

          <button className="px-6 py-2 font-sans font-semibold bg-daraz-primary text-white rounded hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
