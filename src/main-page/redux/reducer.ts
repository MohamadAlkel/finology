import { FETCH_CARS } from './constants';
import { InitialStateModule } from '../helper/typeHelper';

export const initialState: InitialStateModule = {
  cars: [],
  isFetching: false,
};

export default function carStateReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case `${FETCH_CARS}_START`:
      return {
        ...state,
        isFetching: true,
      };
    case `${FETCH_CARS}_SUCCESS`:
      return {
        ...state,
        cars: payload,
        isFetching: false,
      };
    case `${FETCH_CARS}_ERROR`:
      return {
        ...state,
        isFetching: false,
      };
  }
  return state;
}
