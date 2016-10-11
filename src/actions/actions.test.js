import {
  currentLocalCity, CURRENT_LOCAL_CITY,
  extendedLocalCity, EXTENDED_LOCAL_CITY,
  currentPinnedCity, CURRENT_PINNED_CITY,
  extendedPinnedCity, EXTENDED_PINNED_CITY
} from './actions';

describe('actions', () => {
  it('should create an action to identify current local city forecast', () => {
    const weather = 'Cloudy';
    const expectedAction = {
      type: CURRENT_LOCAL_CITY,
      weather
    };
    expect(currentLocalCity(weather)).toEqual(expectedAction);
  });

  it('should create an action to identify current city extended forecast', () => {
    const weather = 'Sunny';
    const expectedAction = {
      type: EXTENDED_LOCAL_CITY,
      weather
    };
    expect(extendedLocalCity(weather)).toEqual(expectedAction);
  });

  it('should create an action to identify pinned city forecast', () => {
    const weather = 'Sunny';
    const expectedAction = {
      type: CURRENT_PINNED_CITY,
      weather
    };
    expect(currentPinnedCity(weather)).toEqual(expectedAction);
  });

  it('should create an action to identify extended pinned city forecast', () => {
    const weather = 'Rain';
    const expectedAction = {
      type: EXTENDED_PINNED_CITY,
      weather
    };
    expect(extendedPinnedCity(weather)).toEqual(expectedAction);
  });
});
