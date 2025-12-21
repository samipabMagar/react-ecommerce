export const productReducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING" : 
            return {
                ...state, isLoading: true,
            }
        case "FETCH_SUCCESS" :
            let featureData = action.payload.slice(0,4);
            return {
                ...state,isLoading: false,products: action.payload, featureProducts: featureData,
            }
        
        case "SET_SINGLE_LOADING" :
            return {
                ...state, isSingleLoading: true,
            }
        case "SET_SINGLE_PRODUCT" :
            return {
                ...state, singleProducts: action.payload, isSingleLoading: false,
            }
        case "SET_SINGLE_ERROR" :
            return {
                ...state, isSingleError: true, isSingleLoading: false,
            }
        default:
            return state;
    }
}