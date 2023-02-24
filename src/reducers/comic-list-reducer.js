const reducer = (state = {}, action) => {
  const { issues, year, comments, id } = action;
  switch (action.type) {
    case 'ADD_COMIC':
      return Object.assign({}, state, {
        [id]: {
          issues: issues,
          year: year,
          comments: comments,
          id: id
        }
      });
    case 'DELETE_COMIC':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
    }
};

export default reducer;