import {
  ADD_TO_CART,
  DELETE_TO_CART,
  SET_CART,
  SET_TO_CART,
  UPDATE_TO_CART,
} from "../constent/Constent";

const initialState = {
  items: [],
  cartcounter: 0,
};

export default function CartReducer(state = initialState, action) {
  const { type, payload } = action;
  let updatedItems = state?.items;
  switch (type) {
    case ADD_TO_CART:
      updatedItems = [...state.items, payload];
      break;
    case UPDATE_TO_CART:
      updatedItems = [...state.items].map((item) => {
        if (payload?.id === item?.id) return payload;
        return item;
      });
      break;
    case DELETE_TO_CART:
      updatedItems = [...state?.items].filter((item) => item.id !== payload);
      break;
    case SET_TO_CART:
      updatedItems = payload;
    default:
      break;
  }
  return {
    ...state,
    items: updatedItems,
    cartcounter: updatedItems.length,
  };
}
