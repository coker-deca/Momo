import styled from 'styled-components';

export const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  margin: 0 10%;

  font-family: "Gilroy-Bold";
  font-weight: 400;
  .desktop{
    @media only screen and (max-width: 992px){
    display: none;
    width: 0;
  }}

  .mobile{
    display: none;
    @media only screen and (max-width: 992px){
      display: flex;
    }
  }
`;

export const NavbarItem = styled.div`
  display: flex;
  justify-content: space-between;
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
