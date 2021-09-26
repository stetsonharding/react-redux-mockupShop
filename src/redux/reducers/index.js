import { combineReducers } from "redux";
import { productReducer } from "../reducers/productReducer";
import { selectedProductReducer } from "../reducers/productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});
