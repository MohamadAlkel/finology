import React, { useState } from 'react';
import styled from 'styled-components';

type MultipleSelectProps = {
  options: Array<string>;
  getVal: (val: string) => void;
};

export const MultipleSelectRatingWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  label {
    margin: 10px;
  }

  & input[type='radio'] {
    position: absolute;
    opacity: 0;
  }

  label input[type='radio'] + span {
    width: fit-content;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }

  label input[type='radio']:checked + span {
    background-color: #fff;
    width: fit-content;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const MultipleSelect: React.FunctionComponent<MultipleSelectProps> = ({
  options,
  getVal,
}: MultipleSelectProps): React.ReactElement<void> => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const handleRadioChange = (e) => {
    setSelectedItem(e.target.value);
    getVal(e.target.value);
  };

  return (
    <MultipleSelectRatingWrapper>
      {options.map((option, i) => (
        <label key={i}>
          <input
            type="radio"
            name="item"
            value={option}
            checked={selectedItem === option}
            onChange={handleRadioChange}
          />
          <span>{option}</span>
        </label>
      ))}
    </MultipleSelectRatingWrapper>
  );
};

export default MultipleSelect;
