const INITIAL_STATE = { summary: { credit: 0, debt: 0 } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'a':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
