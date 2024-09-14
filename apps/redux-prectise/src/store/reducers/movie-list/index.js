const initialState = {
  cart: [],
  movie: [],
};

function movieListReducers(state = initialState, action) {
  switch (action?.type) {
    case 'update_loader': {
      const oldState = { ...state };
      oldState.isloading = action.value;
      return oldState;
    }
    case 'update_error': {
      const oldState = { ...state };
      oldState.isError = action.value;
      return oldState;
    }
    case 'update_Data': {
      const oldState = { ...state };
      oldState.movie = action.value;
      return oldState;
    }
    case 'update_cart': {
      const oldState = { ...state };
      oldState.cart.push(action.value);
      return oldState;
    }

    default:
      return state;
  }
}

export default movieListReducers;
