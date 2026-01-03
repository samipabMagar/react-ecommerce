export const reducer = (state, action) => {
    switch(action.type) {
        case "LOAD_PRODUCTS": 
        return {
            ...state, filter_products:action.payload, all_products: action.payload
        }

        case "SORT_PRODUCTS" :
            const sortValue = action.payload;
            let newSortData;
            let tempSortData = [...state.filter_products]

            const sortProduct = (a, b) => {
                switch(sortValue) {
                    case "Price(low→high)":
                        return a.price - b.price;
                    
                    case "Price(high→low)":
                        return b.price - a.price;

                    case "Name (A-Z)" :
                        return a.title.localeCompare(b.title);

                    case "Name (Z-A)" :
                        return b.title.localeCompare(a.title);
                }
            }

            newSortData = tempSortData.sort(sortProduct)

            return {
                ...state, filter_products:newSortData
            }
        
        case "SEARCH_PRODUCTS" :
            const searchValue = action.payload;

            let searchProducts = state.all_products.filter((curElem) => {
                return curElem.title.toLowerCase().includes(searchValue.toLowerCase());
            })

            return {
                ...state, filter_products:searchProducts
            }
        default:
            return state;
    }
}