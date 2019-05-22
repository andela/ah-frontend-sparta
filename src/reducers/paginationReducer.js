const initialState = {
  next: null,
  prev: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PAGE_STATE_CHANGE':
      return { ...state, next: action.payload.next, prev: action.payload.prev };

    default:
      return state;
  }
};
