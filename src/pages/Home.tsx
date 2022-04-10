import { FunctionComponent } from 'react';

import BillPayment from '../components/BillPayment/BillPayment';
import DigitalBank from '../components/DigitalBank/DigitalBank';
import HomeTemplate from '../components/templates/HomeTemplate';

const Home: FunctionComponent = () => {
  return (
    <HomeTemplate>
      <DigitalBank />
      <BillPayment />
    </HomeTemplate>
  );
};

export default Home;
