/**
 * @jest-environment jsdom
 */

import * as actions from '../../../main-page/redux/action';
import * as commonHelper from '../../../root/common/helper/commonHelper';
import { FETCH_CARS } from '../../../main-page/redux/constants';
import CarService from '../../../api/CarService';

describe('fetching all cars action', () => {
  test('creates FETCH_CARS action', () => {
    const sandbox = require('sinon').sandbox.create();
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      'fetchApiDataInAction'
    );
    actions.fetchCars();
    expect(
      fetchApiDataInAction.calledWith(FETCH_CARS, CarService.getCars())
    ).toBe(true);
    sandbox.restore();
  });
});
