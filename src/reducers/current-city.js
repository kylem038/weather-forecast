const initialState = {
  localForecast: {
    temp: 0,
    outlook: 'amaze',
  }
}


const cityReducer = ( state = initialState, action ) => {
  // console.log(state)
  switch(action.type) {
    case "CURRENT_CITY":
      // console.log('Mikes a nice guy');
      return state;
    case "TAKE":
      // console.log(action.type)
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


// state = {
//   localForecast: {
//     temp: Number,
//     outlook: String,
//   }
// }
