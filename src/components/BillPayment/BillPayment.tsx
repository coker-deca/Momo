import { FunctionComponent } from 'react';

import billPayment from '../../resources/bill-payment.png';
import { Container, Divider, HomeRow } from '../templates/style';
import { Bullet } from '../ui/Bullet';
import { Capsule } from '../ui/Capsule';
import { Details } from '../ui/Details';
import { Splash } from '../ui/Splash';

const BillPayment: FunctionComponent = () => {
  return (
    <HomeRow className="with-background">
      <div className="wrapper">
        <Container size="40%">
          <img
            className="splash-image"
            src={billPayment}
            alt="Image of Bill Payment"
          />
        </Container>
        <Divider />
        <Container size="40%">
          <Capsule>BILL PAYMENT</Capsule>
          <Splash>
            Take advantage of seamless payments at a low or no cost.
          </Splash>
          <Details>
            With only a few clicks on your smartphone, you can pay all of your
            bills and top up your airtime at the lowest possible price.
          </Details>
          <div className="bullets">
            <Bullet />
            <Details>
              Purchase airtime and data for all networks you can get 10%
              discount.
            </Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>
              Pay for your cable television, power and water bills and save up
              to 100% on fees
            </Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>
              You can get up to 10% discount when you pay your bills
            </Details>
          </div>
        </Container>
      </div>
    </HomeRow>
  );
};

export default BillPayment;
