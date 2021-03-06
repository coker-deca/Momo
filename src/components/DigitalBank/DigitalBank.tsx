import { FunctionComponent } from 'react';

import digitalBankImage from '../../resources/digital-bank-image.png';
import { Container, Divider, HomeRow, Row } from '../templates/style';
import { AppStore } from '../ui/AppStore';
import { StyledButton } from '../ui/Button';
import { Capsule } from '../ui/Capsule';
import { Details } from '../ui/Details';
import { PlayStore } from '../ui/PlayStore';
import { Splash } from '../ui/Splash';

const DigitalBank: FunctionComponent = () => {
  return (
    <HomeRow bgColor="#FDFCFF">
      <div className="wrapper">
        <Container size="40%">
          <Capsule>DIGITAL BANK</Capsule>
          <Splash>All lifestyles can gain from digital banking.</Splash>
          <Details>
            With a free Mollo, you can unlock the power of money. All of your
            bills, money transfers, buy airtime can be done in one spot.
          </Details>
          <StyledButton>Get Started</StyledButton>
          <Row style={{ justifyContent: "left" }}>
            <PlayStore className="store" />
            <AppStore />
          </Row>
        </Container>
        <Divider />
        <Container size="40%">
          <img
            className="splash-image"
            src={digitalBankImage}
            alt="Welcome Image Man with Thumbs up"
          />
        </Container>
      </div>
    </HomeRow>
  );
};

export default DigitalBank;
