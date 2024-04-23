import { actionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    case actionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    case actionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };

    case actionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((i) => i.id === action.payload ? {...i, amount: i.amount + 1} : i)
      return {...state, basket: newBasket}

    case actionTypes.REMOVE_ITEM:
        const updatedBasket = state.basket.filter(
            (i) => i.id !== action.payload
        )
        return {...state, basket: updatedBasket}

    default:
      return state;
  }
};

export default basketReducer;
