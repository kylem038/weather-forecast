const initialState = {
  localForecast: {
    temp: 0,
    outlook: 'normal',
  }
}


const cityReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "CURRENT_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};

export default cityReducer;
