const initialState = {
  data: "Fetch Data",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "FETCH_DATA_ASYNC":
      newState.data = action.value;
      break;
  }
  return newState;
};

export default reducer;
