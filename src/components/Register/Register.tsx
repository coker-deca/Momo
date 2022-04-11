import { FunctionComponent } from 'react';

import elipsesbg from '../../resources/elipsesbg.png';
import registerImage from '../../resources/register-image.svg';
import { Container, Divider, HomeRow, Row } from '../templates/style';
import { AppStore } from '../ui/AppStore';
import { Details } from '../ui/Details';
import { PlayStore } from '../ui/PlayStore';
import { Splash } from '../ui/Splash';

const Register: FunctionComponent = () => {
  return (
    <HomeRow>
      <div
        className="wrapper"
        style={{
          background: `url(${elipsesbg}) no-repeat right 2% top 50%, url(${elipsesbg}) no-repeat left 67% top 5% #3C1D59`,
        }}
      >
        <Container size="40%">
          <div className="white-text">
            <Splash notInherit>Register For Free</Splash>
            <Details notInherit>
              Mollo is available on Google Play and the App Store.To enjoy
              ultimate financial security
            </Details>
            <Row style={{ justifyContent: "left" }}>
              <PlayStore className="store" />
              <AppStore />
            </Row>
          </div>
        </Container>
        <Divider />
        <Container size="40%">
          <div className="last-image">
            <img
              className="splash-image"
              src={registerImage}
              alt="Welcome Image Man with Thumbs up"
            />
          </div>
        </Container>
      </div>
    </HomeRow>
  );
};

export default Register;
