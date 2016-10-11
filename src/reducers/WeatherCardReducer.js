const WeatherCardReducer = ( state = [], action ) => {
  switch(action.type) {
    case "CURRENT_PINNED_CITY":
      return state.concat(action.weather);
    default:
      return state;
  }
};

export default WeatherCardReducer;
