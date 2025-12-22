import React from 'react'
import { useProductContext } from '../context/ProductContext'

const Category = () => {
    const {products} = useProductContext();

    const productCategories = ["All" , ...new Set(products.map((item )=> item.category))]
    console.log(productCategories);
  return (
    <>
    <div className='px-5 md:px-15 pb-4 md:pb-10'>
        <h2 className='text-center md:text-2xl font-semibold text-daraz-primary text-xl md:text-2xl'>Shop By Category</h2>
        <div className='flex justify-between mt-3 md:mt-10 md:justify-center md:gap-30'>
        {
          productCategories.map((curElem, index) => {
            const categoryProduct = curElem === "All" ? products[19] : products.find((item) => curElem === item.category)
            return (
              <>
             <div className='flex flex-col items-center gap-2'>
             <div className='bg-gray-200 cursor-pointer group transition-all hover:scale-105 duration-100  border-2 md:border-4 border-gray-300 p-2 md:p-6 rounded-full w-12 h-12 md:h-30 md:w-30' key={index}>
                <img className='w-full h-full object-cover group-hover:scale-110' src={categoryProduct && categoryProduct.image} alt="" />
                
              </div>
              <h3 className='text-[10px] md:text-lg  md:font-bold] font-semibold font-sans uppercase'>{curElem.slice(0,10)}</h3>
             </div>
              </>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Category