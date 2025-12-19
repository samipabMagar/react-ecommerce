export const productReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS" :
            let featureData = action.payload.slice(0,4);
            return {
                ...state,products: action.payload, featureProducts: featureData,
            }
        default:
            return state;
    }
}