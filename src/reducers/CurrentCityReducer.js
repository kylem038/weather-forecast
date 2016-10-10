const initialState = {
  localForecast: {
    temp: 0,
    outlook: 'normal',
  }
}


const currentCityReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "CURRENT_LOCAL_CITY":
      return Object.assign({}, state, action.weather);
    default:
      return state;
  }
};


export default currentCityReducer;
