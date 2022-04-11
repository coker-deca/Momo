import React, { FunctionComponent, useState } from 'react';

import { Bar, HamburgerDiv } from './style';

const HamBurger: FunctionComponent = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <HamburgerDiv
      className={toggle ? "change" : ""}
      onClick={() => setToggle(!toggle)}
    >
      <Bar className="bar1"></Bar>
      <Bar className="bar2"></Bar>
      <Bar className="bar3"></Bar>
      {toggle ? children : null}
    </HamburgerDiv>
  );
};

export default HamBurger;
