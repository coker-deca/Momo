import { FunctionComponent } from 'react';

import NavBar from '../NavBar/NavBar';
import { Wrapper } from './style';

const HomeTemplate: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default HomeTemplate;
