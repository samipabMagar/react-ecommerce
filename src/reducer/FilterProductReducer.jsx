export const reducer = (state, action) => {
    switch(action.type) {
        case "LOAD_PRODUCTS": 
        return {
            ...state, all_products:action.payload
        }

        default:
            return state;
    }
}