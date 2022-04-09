import './style.css';

import { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  margin: 5px 0 15px 0;
  padding: 20px 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e1e0e2;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.02));
  border-radius: 4px;
  font-family: "Abhaya Libre Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const LabeledField: FunctionComponent<{
  label: string;
  type: string;
}> = ({ label, type }) => {
  return (
    <label>
      <p className="label">{label}</p>
      <StyledInput type={type} />
    </label>
  );
};
