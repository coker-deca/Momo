import { FunctionComponent } from 'react';

import elipse from '../../resources/elipse.svg';
import rectangle from '../../resources/rectangle.svg';
import unsplash from '../../resources/unsplash.png';
import Form from '../Form/Form';
import { Logo } from '../ui/Logo';
import { Container, Row, Wrapper } from './style';

export interface FormProps {
  title?: string;
  details?: string;
  path?: string;
}

const AuthTemplate: FunctionComponent<FormProps> = ({
  title,
  details,
  path,
  children,
}) => {
  return (
    <Wrapper>
      <div className="logo">
        <Logo />
      </div>
      <Row className="with-background">
        <div className="wrapper">
          <div className="form-container">
            <Form path={path} title={title} details={details}>
              {children}
            </Form>
          </div>
          <Container className="hide">
            <img
              className="images"
              id="unsplash"
              src={unsplash}
              alt="Unsplashed Image of a lady"
            />
            <img
              className="images"
              id="rectangle"
              src={rectangle}
              alt="a rectangle"
            />
            <img className="images" id="elipse" src={elipse} alt="an elipse" />
          </Container>
        </div>
      </Row>
    </Wrapper>
  );
};

export default AuthTemplate;
