import { Profiler } from "react";
import {
  ADD_TO_CART,
  DELETE_TO_CART,
  SET_TO_CART,
  UPDATE_TO_CART,
} from "../constent/Constent";

export const add_to_cart = (product, qty) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { ...product, qty },
  });
};
export const update_to_cart = (product, qty) => (dispatch) => {
  dispatch({
    type: UPDATE_TO_CART,
    payload: { ...product, qty },
  });
};
export const delete_to_cart = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TO_CART,
    payload: id,
  });
};

export const set_cart = (items) => (dispatch) => {
  return dispatch({
    type: SET_TO_CART,
    payload: items,
  });
};
