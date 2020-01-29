export const increment = () => {
  return {
    type: "INCREMENT"
  };
};
export const decrement = myNumber => {
  return {
    type: "DECREMENT",
    payLoad: myNumber
  };
};
