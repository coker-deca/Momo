import styled from 'styled-components';

export const Bar = styled.div`
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
    transition: all 0.4s ease-in-out;

    @media (max-width: 400px) {
        width: 25px;
    }
`;

export const HamburgerDiv = styled.div`
    cursor: pointer;

    &.change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-7px, 5px);
    }
    &.change .bar2 {
        opacity: 0;
    }

    &.change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -6px);
    }
`;
