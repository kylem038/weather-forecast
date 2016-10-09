export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const TEST_ACTION = 'TEST_ACTION';

export const receiveForecast = (location, forecastData) => ({
  type: RECEIVE_FORECAST,
  location,
  forecastData
});

export const selectLocation = (location) =>({
  type: SELECT_LOCATION,
  location
});

export const invalidateLocation = (location) => ({
  type: INVALIDATE_LOCATION,
  location
});

export const fetchForecast = options => dispatch => {
};

export const testAction = () => {
  type: 'TEST_ACTION'
}
