import { FunctionComponent } from 'react';

import NavBar from '../components/NavBar/NavBar';
import { Wrapper } from '../components/templates/style';

const Home: FunctionComponent = () => {
  return (
    <Wrapper>
      <NavBar />
      <h1>Home Page</h1>
    </Wrapper>
  );
};

export default Home;
