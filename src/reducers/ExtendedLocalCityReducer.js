const initialState = {
  defaultState: []
};

const ExtendedLocalCityReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "EXTENDED_LOCAL_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};

export default ExtendedLocalCityReducer;
