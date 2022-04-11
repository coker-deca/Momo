import { FunctionComponent } from 'react';

import billPayment from '../../resources/bill-payment.png';
import { Container, Divider, HomeRow } from '../templates/style';
import { Bullet } from '../ui/Bullet';
import { Capsule } from '../ui/Capsule';
import { Details } from '../ui/Details';
import { Splash } from '../ui/Splash';

const TransferFunds: FunctionComponent = () => {
  return (
    <HomeRow>
      <Container size="40%" className="with-background">
        <Capsule>TRANSFER FUNDS</Capsule>
        <Splash>Send money to friends and family in a flash.</Splash>
        <Details>
          Transfers to the Mollo account are free, and you can send money to any
          bank account in Nigeria.
        </Details>
        <div className="bullets">
          <Bullet />
          <Details>
            There are no conversion fees and the exchange rates are straight
            forward
          </Details>
        </div>
        <div className="bullets">
          <Bullet />
          <Details>
            Pay for your cable television, power and water bills and save up to
            100% on fees
          </Details>
        </div>
        <div className="bullets">
          <Bullet />
          <Details>
            You can get up to 10% discount when you pay your bills
          </Details>
        </div>
      </Container>
      <Divider />
      <Container size="40%">
        <img
          className="splash-image"
          src={billPayment}
          alt="Image of Bill Payment"
        />
      </Container>
    </HomeRow>
  );
};

export default TransferFunds;
