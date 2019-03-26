import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "addFruit":
      return state.fruits
        ? { fruits: [...state.fruits, action.payload] }
        : { fruits: [action.payload] };
    case "deleteFruit":
      return {
        fruits: state.fruits.filter((fruit, idx) => idx !== action.payload)
      };
    default:
      throw new Error(`Action type must be defined`);
  }
};

export default reducer;
