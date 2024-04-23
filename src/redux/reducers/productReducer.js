import { actionTypes } from "../actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
}

const productReducer = (state = initialState, action) => {
    
    switch(action.type){
        case actionTypes.SET_LOADING:
            return {...state, isLoading: true}

        case actionTypes.SET_ERROR:
            return {...state, isLoading: false, isError: action.payload.message}

        case actionTypes.SET_PRODUCTS:
            return {...state, isLoading: false, isError: false, products: action.payload}

        default:
            return state    
    }
}

export default productReducer