import { ActionTypes } from "../constants/Action-Types";

const initalState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
