const ExtendedPinnedCityReducer = ( state = [], action ) => {
  switch(action.type) {
    case "EXTENDED_PINNED_CITY":
      return state.concat(action.weather);
    default:
      return state;
  }
};


export default ExtendedPinnedCityReducer;
