import React from 'react'
import Hero from '../components/Hero'
import FeatureProduct from '../components/FeatureProduct'
import Category from '../components/Category'
import TrustSection from '../components/TrustSection'
import Newsletter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className=''>
     <Hero/>
     <TrustSection/>
     <FeatureProduct/>
     <Category/>
     <Newsletter/>
    </div>
  )
}

export default Home