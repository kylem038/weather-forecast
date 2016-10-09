export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const TEST_ACTION = 'TEST_ACTION';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const INVALIDATE_LOCATION = 'INVALIDATE_LOCATION';

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
  return { type: TEST_ACTION }
}
