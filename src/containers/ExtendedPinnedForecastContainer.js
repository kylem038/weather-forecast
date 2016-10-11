import { connect } from 'react-redux';
import ExtendedForecast from '../components/ExtendedForecast';

const mapStateToProps = state => {
  if (state.extendedPinnedCityReducer.length < 1) return {};
  else { const minTemp1  = state.extendedPinnedCityReducer.list[3].main.temp_min;
         const minTemp2  = state.extendedPinnedCityReducer.list[11].main.temp_min;
         const minTemp3  = state.extendedPinnedCityReducer.list[19].main.temp_min;
         const minTemp4  = state.extendedPinnedCityReducer.list[27].main.temp_min;
         const minTemp5  = state.extendedPinnedCityReducer.list[35].main.temp_min;

         const maxTemp1  = state.extendedPinnedCityReducer.list[3].main.temp_max;
         const maxTemp2  = state.extendedPinnedCityReducer.list[11].main.temp_max;
         const maxTemp3  = state.extendedPinnedCityReducer.list[19].main.temp_max;
         const maxTemp4  = state.extendedPinnedCityReducer.list[27].main.temp_max;
         const maxTemp5  = state.extendedPinnedCityReducer.list[35].main.temp_max;

         const date1  = state.extendedPinnedCityReducer.list[3].dt_txt;
         const date2  = state.extendedPinnedCityReducer.list[11].dt_txt;
         const date3  = state.extendedPinnedCityReducer.list[19].dt_txt;
         const date4  = state.extendedPinnedCityReducer.list[27].dt_txt;
         const date5  = state.extendedPinnedCityReducer.list[35].dt_txt;

         const weather1  = state.extendedPinnedCityReducer.list[3].weather[0].main;
         const weather2  = state.extendedPinnedCityReducer.list[11].weather[0].main;
         const weather3  = state.extendedPinnedCityReducer.list[19].weather[0].main;
         const weather4  = state.extendedPinnedCityReducer.list[27].weather[0].main;
         const weather5  = state.extendedPinnedCityReducer.list[35].weather[0].main;

  return {
    minTemp1, minTemp2, minTemp3, minTemp4, minTemp5,
    maxTemp1, maxTemp2, maxTemp3, maxTemp4, maxTemp5,
    date1, date2, date3, date4, date5,
    weather1, weather2, weather3, weather4, weather5
  };
}
};

export default connect(mapStateToProps, null)(ExtendedForecast);
