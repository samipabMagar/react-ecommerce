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
  singleProducts: {},
  isSingleLoading: false,
  isSingleError: false,
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async () => {
    dispatch({type: "SET_LOADING"});
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      dispatch({type: "FETCH_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "FETCH_ERROR"});
      console.log("Error while fetching products", error);
    }
  };

  const getSingleProducts = async (id) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = response.data;
      dispatch({type: "SET_SINGLE_PRODUCT", payload: data});
    }
    catch(error) {
      dispatch({type: "SET_SINGLE_ERROR"});
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...state , getSingleProducts}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
    return useContext(ProductContext);
}

export default ProductProvider;
