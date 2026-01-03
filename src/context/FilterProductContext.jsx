import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import { reducer } from "../reducer/FilterProductReducer";

export const FilterProductContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

const FilterProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  const sortProducts = (sortValue) => {
    dispatch({ type: "SORT_PRODUCTS", payload: sortValue });
  };

  const onSearchChange = (e) => {
    let searchValue = e.target.value;
    dispatch({ type: "SEARCH_PRODUCTS", payload: searchValue });
  };
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterProductContext.Provider
      value={{ ...state, sortProducts, onSearchChange }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};

export default FilterProductProvider;
