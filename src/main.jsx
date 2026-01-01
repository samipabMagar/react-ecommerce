import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  ProductProvider  from './context/ProductContext.jsx'
import FilterProductProvider from './context/FilterProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProductProvider>
      <FilterProductProvider>
         <App />
      </FilterProductProvider>
   </ProductProvider>
  </StrictMode>,
)
