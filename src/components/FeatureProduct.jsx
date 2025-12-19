import React from 'react'
import { useProductContext } from '../context/ProductContext';
import Product from './Product';

const FeatureProduct = () => {
  const {featureProducts} = useProductContext();
  return (
    <>
    <div className='md:px-15 px-5 py-2 mb-10 '>

    <h2 className='text-xl font-bold font-mono text-daraz-primary md:text-2xl md:font-extrabold text-center my-5'> Featured Products</h2>
      <Product featureProducts={featureProducts}/>
    </div>
    </>
  )
}

export default FeatureProduct;