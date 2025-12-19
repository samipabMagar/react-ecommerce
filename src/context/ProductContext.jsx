import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";

export const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  featureProducts: [],
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async () => {
    
    try {
      const response = await axios.get("https://fakestoreapi.com/product");
      const data = response.data;
      dispatch({type: "FETCH_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "FETCH_ERROR"});
      console.log("Error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
    return useContext(ProductContext);
}

export default ProductProvider;
