import { ActionTypes } from "../constants/Action-Types";

const initalState = {
  products: [
    {
      id: 1,
      title: "stetson",
      category: "programmer",
    },
  ],
};

 export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
    default:
      return state;
  }
};


