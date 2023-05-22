/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render } from '@testing-library/react';
import { MainPage } from '../../main-page/components/MainPage';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MainPage />', () => {
  const mockStoreBase = {
    carState: {
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
    },
  };

  const component = (mockStore) => {
    const store = createMockStore(mockStore ? mockStore : mockStoreBase);
    return render(
      <Provider store={store}>
        <Router>
          <MainPage />
        </Router>
      </Provider>
    );
  };

  beforeEach(() => {
    component();
  });

  test('renders a main page with correct filter text and main page title', () => {
    expect(screen.getByText('Electrical')).toBeInTheDocument();
    expect(screen.getByText('2 Wheels')).toBeInTheDocument();
    expect(screen.getByText('Sport')).toBeInTheDocument();
    expect(screen.getByText('Available Car')).toBeInTheDocument();
    expect(screen.getByText('Car Type')).toBeInTheDocument();
  });

  test('renders a list with correct card data', () => {
    // expect to have 2 cards as every card has "Car Type" text
    const cardNumber = screen.getAllByText('Car Type:');

    expect(cardNumber.length).toBe(2);
  });

  test('renders a table with friendly error message', () => {
    component({
      carState: { cars: [], isFetching: false },
    });
    expect(
      screen.getByText('Opss! Sorry, no results found.')
    ).toBeInTheDocument();
  });
});
