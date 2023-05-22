/**
 * @jest-environment jsdom
 */

import reducer from '../../../main-page/redux/reducer';
import { FETCH_CARS } from '../../../main-page/redux/constants';

const carState = {
  cars: [
    {
      id: 1,
      carType: 'electrical',
      models: 'Tesla',
      price: '200k',
      chargingTime: '170/30min',
      fuelType: 'electric',
      condition: 'new',
      color: 'white',
    },
    {
      id: 2,
      carType: '2 wheels',
      models: 'BMW',
      price: '100k',
      fuelType: 'petrol',
      condition: 'used',
      color: 'gray',
    },
  ],
  isFetching: false,
};

describe('main-page reducer', () => {
  const initalState = {
    cars: [],
    isFetching: false,
  };

  test('should return passed state by default', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(initalState, action)).toEqual(initalState);
  });

  test('should return initial state ', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(undefined, action)).toEqual({
      cars: [],
      isFetching: false,
    });
  });

  test('should handle FETCH_CARS_START', () => {
    const action = {
      type: `${FETCH_CARS}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetching: true,
    });
  });

  test('should handle FETCH_CARS_SUCCESS', () => {
    const action = {
      type: `${FETCH_CARS}_SUCCESS`,
      payload: [],
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetching: false,
    });
  });

  it('should handle FETCH_CARS_ERROR', () => {
    const action = {
      type: `${FETCH_CARS}_ERROR`,
      payload: [],
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetching: false,
    });
  });
});
