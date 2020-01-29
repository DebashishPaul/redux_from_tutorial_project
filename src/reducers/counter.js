const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - action.payLoad;
    default:
      return state;
  }
};

export default counterReducer;
