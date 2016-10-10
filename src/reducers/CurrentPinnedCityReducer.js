const currentPinnedCityReducer = ( state = {}, action ) => {
  switch(action.type) {
    case "CURRENT_PINNED_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};


export default currentPinnedCityReducer;
