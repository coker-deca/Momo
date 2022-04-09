import styled from 'styled-components';

export const StyledNavbar = styled.header`
  display: flex;
  align-items: center;

  font-family: "Gilroy-Bold";
  font-weight: 400;
`;

export const NavbarItem = styled.div`
  display: flex;
  position: relative;
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #3C1D59;


  button{
    min-width: 150px;
  }
  
  :last-child {
    margin-left: auto;
  }
  :first-child {
    margin-right: auto;
    font-size: 150%;
    padding: 12px 16px;
  }
`;