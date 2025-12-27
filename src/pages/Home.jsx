import React from 'react'
import Hero from '../components/Hero'
import FeatureProduct from '../components/FeatureProduct'
import Category from '../components/Category'
import TrustSection from '../components/TrustSection'

const Home = () => {
  return (
    <div className=''>
     <Hero/>
     <FeatureProduct/>
     <Category/>
     <TrustSection/>
    </div>
  )
}

export default Home