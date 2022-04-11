import { FunctionComponent } from 'react';

import virtualCards from '../../resources/virtual-cards.png';
import { Container, Divider, HomeRow } from '../templates/style';
import { Bullet } from '../ui/Bullet';
import { Capsule } from '../ui/Capsule';
import { Details } from '../ui/Details';
import { Splash } from '../ui/Splash';

const VirtualCards: FunctionComponent = () => {
  return (
    <HomeRow>
      <div className="wrapper">
        <Container size="40%">
          <img
            className="splash-image"
            src={virtualCards}
            alt="Image of Payment Channels"
          />
        </Container>
        <Divider />
        <Container size="40%">
          <Capsule>VIRTUAL CARDS</Capsule>
          <Splash>Get an authentic card that pays you back.</Splash>
          <Details>
            The Mollo debit card gives you more financial control, security, and
            access to deals.
          </Details>
          <div className="bullets">
            <Bullet />
            <Details>You can make as many cards as you want</Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>
              For your transactions, we offer a transparent and dependable
              exchange rate
            </Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>
              With our cashback loyalty scheme you will be able to pay smarter
              and earn more
            </Details>
          </div>
          <div className="bullets">
            <Bullet />
            <Details>
              Compatible with Apple Pay, Google Pay, Paypal, Netflix, Amazon,
              Spotify and other famous websites.
            </Details>
          </div>
        </Container>
      </div>
    </HomeRow>
  );
};

export default VirtualCards;
