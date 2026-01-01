import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import { reducer } from "../reducer/FilterProductReducer";

export const FilterProductContext = createContext();

const initialState = {
    filterProducts:[],
    all_products: [],
}

const FilterProductProvider = ({children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {products}=useProductContext();
    
    useEffect(() => {
        dispatch({type: "LOAD_PRODUCTS", payload:products})
    }, [products])
    return(
        <FilterProductContext.Provider value={{...state }}> 
            {
                children
            }
        </FilterProductContext.Provider>
    )
}

export const useFilterProductContext = () => {
    return useContext(FilterProductContext);
}

export default FilterProductProvider