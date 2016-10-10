const cardReducer = ( state = {}, action ) => {
  switch(action.type) {
    case "PINNED_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};

export default cardReducer;
