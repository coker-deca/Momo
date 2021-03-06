import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HamBurger from '../HamburgerMenuIcon';
import MobileMenu from '../MobileMenu/MobileMenu';
import { StyledButton } from '../ui/Button';
import { DropdownOption } from '../ui/DropIcon';
import { Logo } from '../ui/Logo';
import { OptionsContainer } from '../ui/OptionsContainer';
import { NavbarItem, StyledNavbar } from './style';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const openDropdown = (value: string) => {
    setIsOpen(true);
    setActive(value);
  };
  const closeDropdown = () => {
    setIsOpen(false);
    setActive("");
  };
  const renderDropdown = (options: string[]) => (
    <OptionsContainer>
      {options.map((val, key) => (
        <li key={key}>{val}</li>
      ))}
    </OptionsContainer>
  );

  return (
    <StyledNavbar className="navbar">
      <NavbarItem>
        <NavbarItem className="mobile">
          <HamBurger>
            <MobileMenu />
          </HamBurger>
        </NavbarItem>
        <Logo />
      </NavbarItem>
      <NavbarItem className="desktop">
        Company &nbsp;
        <DropdownOption />
      </NavbarItem>
      <NavbarItem
        className="desktop"
        onMouseEnter={() => openDropdown("features")}
        onMouseLeave={() => closeDropdown()}
      >
        Features &nbsp;
        <DropdownOption />
        {isOpen && active === "features"
          ? renderDropdown(["Wallet", "Finance Manager", "Cards"])
          : null}
      </NavbarItem>
      <NavbarItem
        className="desktop"
        onMouseEnter={() => openDropdown("help")}
        onMouseLeave={() => closeDropdown()}
      >
        Help &nbsp;
        <DropdownOption />
        {isOpen && active === "help"
          ? renderDropdown(["FAQ", "Contact Us", "Help"])
          : null}
      </NavbarItem>
      <NavbarItem>
        <NavbarItem
          className="desktop"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Login
        </NavbarItem>
        <StyledButton
          className="desktop"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign Up
        </StyledButton>
      </NavbarItem>
    </StyledNavbar>
  );
};

export default NavBar;
