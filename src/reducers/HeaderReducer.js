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
    case "RECEIVE_FORECAST":
      return {
        localForecast: {
          temp: action.main.temp,
          outlook: action.weather[0].description
        }
      }
    default:
      return state;
  }
};

export default cityReducer;
