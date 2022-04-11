import React, { useState } from 'react';

import { Bar, HamburgerDiv } from './style';

const HamBurger: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HamburgerDiv
      className={toggle ? "change" : ""}
      onClick={() => setToggle(!toggle)}
    >
      <Bar className="bar1"></Bar>
      <Bar className="bar2"></Bar>
      <Bar className="bar3"></Bar>
    </HamburgerDiv>
  );
};

export default HamBurger;
