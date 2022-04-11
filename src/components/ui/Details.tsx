import styled from 'styled-components';

export const Details = styled.p<{ notInherit?: boolean }>`
  font-size: 16px;
  font-family: "Gilroy-Bold";
  margin: 0;
  margin-bottom: 32px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: ${(props) => (props.notInherit ? "#fff" : "#433d4a")};
`;
