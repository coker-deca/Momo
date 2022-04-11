import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../resources/facebook.svg';
import instagram from '../../resources/instagram.svg';
import linkedin from '../../resources/linkedin.svg';
import twitter from '../../resources/twitter.svg';
import youtube from '../../resources/youtube.svg';
import { Logo } from '../ui/Logo';
import { FooterContainer } from './style';

const categoryPlaceholder = ["Our Story", "Blog", "Careers", "Media Center"];

const Footer: FunctionComponent = () => (
  <FooterContainer>
    <div className="row">
      <div className="column">
        <Logo />
      </div>

      <div className="column">
        <div className="break"></div>
      </div>
      <div className="column">
        <p>COMPANY</p>
        {categoryPlaceholder.map((item, key) => (
          <Link to={`/`} key={key}>
            {item}
          </Link>
        ))}
      </div>

      <div className="column">
        <p>CONTACT</p>
        <Link to="/">Enquiry</Link>
      </div>

      <div className="column">
        <p>
          <img src={twitter} alt="twitter logo" />
          <img src={facebook} alt="face<img src={facebook logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={youtube} alt="youtube logo" />
          <img src={instagram} alt="instagram logo" />
        </p>
      </div>
    </div>
    <div className="row divider">
      <p>Copyright © 2021 Mollo Technology. All Rights Reserved.</p>
    </div>
  </FooterContainer>
);

export default Footer;
