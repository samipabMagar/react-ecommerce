import React from 'react'
import { useProductContext } from '../context/ProductContext';
import Product from './Product';

const FeatureProduct = () => {
  const {featureProducts, isLoading} = useProductContext();

  if(isLoading) {
    return <h2>Loading products.....</h2>
}
  return (
    <>
    <div className='md:px-15 px-5 py-2 mb-10 '>

    <h2 className='text-xl font-bold font-mono text-daraz-primary md:text-2xl md:font-extrabold text-center my-5'> Featured Products</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6'>
     {
        featureProducts.map((curElem) => {
          return <Product isLoading={isLoading} {...curElem} key={curElem.id}/>
        })
      }
     </div>
    </div>
    </>
  )
}

export default FeatureProduct;