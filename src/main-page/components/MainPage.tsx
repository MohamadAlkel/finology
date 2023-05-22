import React, { FC, ReactElement, useEffect, useState } from 'react';
import Card from '../../ui/card/Card';
import MultipleSelect from '../../ui/multi-select/MultiSelect';
import { fetchCars } from '../redux/action';
import { connect, ConnectedComponent } from 'react-redux';
import { MainPageWrapper, MainPageTitle } from './MainPage.style';

const carType = ['Electrical', '2 Wheels', 'Sport'];

const mapStateToProps = ({ carState }) => ({
  cars: carState?.cars,
  isFetching: carState?.isFetching,
});

const mapDispatchToProps = {
  fetchCars,
};

export const MainPage: ConnectedComponent<any, any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ cars, isFetching, fetchCars }) => {
  const [filter, setFilter] = useState<string>(carType[0]);

  useEffect(() => {
    fetchCars(filter);
  }, [filter]);

  return (
    <MainPageWrapper>
      <MainPageTitle>Car Type</MainPageTitle>
      <MultipleSelect options={carType} getVal={(val) => setFilter(val)} />
      <MainPageTitle>Available Car</MainPageTitle>
      {!isFetching && isFetching != null && !cars?.length && (
        <p>Opss! Sorry, no results found.</p>
      )}
      {cars?.map((car, i) => (
        <Card key={i} item={car} />
      ))}
    </MainPageWrapper>
  );
});
