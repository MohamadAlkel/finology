import { fetchApiDataInAction } from '../../root/common/helper/commonHelper';
import { FETCH_CARS } from './constants';
import CarService from '../../api/CarService';

export function fetchCars(filter) {
  return fetchApiDataInAction(FETCH_CARS, CarService.getCars(filter));
}
