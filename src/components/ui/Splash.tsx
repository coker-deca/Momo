import styled from 'styled-components';

export const Splash = styled.h1<{ notInherit?: boolean }>`
  font-size: 40px;
  font-family: "Gilroy-Bold";
  margin: 0;
  margin-bottom: 14px;
  line-height: 50px;
  letter-spacing: 0.01em;
  color: ${(props) => (props.notInherit ? "#fff" : "#3c1d59")};
`;
