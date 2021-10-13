const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'ADD_TODO':
      newState.list = [...newState.list, action.payload];
      break;
    case 'REMOVE_TODO':
      newState.list = newState.list.filter((value) => {
        return action.payload.id !== value.id;
      });
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
