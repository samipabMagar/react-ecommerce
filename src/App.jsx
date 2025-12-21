import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Errorpage from './pages/Errorpage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}></Route>
        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App