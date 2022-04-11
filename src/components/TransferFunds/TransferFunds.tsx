import { FunctionComponent } from 'react';

import map from '../../resources/map.png';
import transferFund from '../../resources/transfer-fund.png';
import { Container, Divider, HomeRow } from '../templates/style';
import { Bullet } from '../ui/Bullet';
import { Capsule } from '../ui/Capsule';
import { Details } from '../ui/Details';
import ElipseBg from '../ui/ElipseBg';
import { Splash } from '../ui/Splash';

const TransferFunds: FunctionComponent = () => {
  return (
    <HomeRow
      bgColor="#FBFFF0"
      style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "80%",
      }}
    >
      <div className="wrapper">
        <Container size="40%">
          <Capsule>TRANSFER FUNDS</Capsule>
          <Splash>Send money to friends and family in a flash.</Splash>
          <Details>
            Transfers to the Mollo account are free, and you can send money to
            any bank account in Nigeria.
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
              Transfers to local bank accounts and Mollo mobile money accounts
              are completed quickly
            </Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>Transfer of funds are easy discreet and fast</Details>
          </div>
        </Container>
        <Divider />
        <Container size="40%">
          <ElipseBg>
            <img
              className="splash-image"
              src={transferFund}
              alt="Image of Bill Payment"
            />
          </ElipseBg>
        </Container>
      </div>
    </HomeRow>
  );
};

export default TransferFunds;
