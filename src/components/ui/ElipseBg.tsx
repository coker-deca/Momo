import { Children, FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledAspectRatio = styled.div`
  width: 100%;
  position: relative;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
    /* initial ratio of 1:1*/
  }
  .content {
    position: absolute;
    border-radius: 50%;
    background: #f5ebff;
    border: 5px solid #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    img {
      margin: 12% 0 0 -12%;
    }
  }
`;

const ElipseBg: FunctionComponent = ({ children }) => (
  <StyledAspectRatio>
    <div className="content">{children}</div>
  </StyledAspectRatio>
);

export default ElipseBg;
