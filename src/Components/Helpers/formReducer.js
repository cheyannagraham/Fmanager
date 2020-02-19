const formReducer = (state, value) => {
  return {
    ...state,
    [value.input]: value.value
  };
};

export default formReducer;
