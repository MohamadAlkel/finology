import React, { useState } from 'react';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  margin: 10px;
  width: 278px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  img {
    width: 260px;
    border-radius: 3px;
  }
  p {
    font-weight: bold;
    margin: 5px;
    font-size: 18px;

    span {
      font-weight: 100;
      font-size: 18px;
      padding-left: 3px;
      margin-top: 5px;
    }
  }
`;

const Card = ({ item }) => {
  const { carType, models, price, fuelType, condition, color, chargingTime } =
    item;
  return (
    <CardWrapper>
      {carType && (
        <p>
          Car Type: <span>{carType}</span>
        </p>
      )}
      {models && (
        <p>
          Model: <span>{models}</span>
        </p>
      )}
      {price && (
        <p>
          Price: <span>{price}</span>
        </p>
      )}
      {fuelType && (
        <p>
          Fuel Type: <span>{fuelType}</span>
        </p>
      )}
      {condition && (
        <p>
          Condition: <span>{condition}</span>
        </p>
      )}
      {color && (
        <p>
          Color: <span>{color}</span>
        </p>
      )}
      {chargingTime && (
        <p>
          Charging Time: <span>{chargingTime}</span>
        </p>
      )}
    </CardWrapper>
  );
};

export default Card;
