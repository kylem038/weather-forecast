import ExtendedLocalCityReducer from './ExtendedLocalCityReducer';
import CurrentCityReducer from './CurrentCityReducer';

describe('ExtendedLocalCityReducer', () => {

  it('should return the initial state', () => {
    expect(ExtendedLocalCityReducer(undefined, {})).toEqual(
       {"defaultState":[]}
    );
  });
});

describe('CurrentCityReducer', () => {

  it('should return the initial state', () => {
    expect(CurrentCityReducer(undefined, {})).toEqual(
       {localForecast: {
         temp: 0,
         outlook: 'normal',
       }}
    );
  });
});
