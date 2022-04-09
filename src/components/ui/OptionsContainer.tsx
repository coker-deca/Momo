import styled from 'styled-components';

export const OptionsContainer = styled.div`
  position: absolute;
  top: 32px;
  background: #ffffff;
  border: 1px solid #f5ebff;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2),
    0px 0px 4px 4px rgba(60, 29, 89, 0.06);
  border-radius: 4px;
  li {
    list-style: none;
    padding: 10px;
    white-space: nowrap;

    :hover {
      background: #f5ebff;
    }
  }
`;
