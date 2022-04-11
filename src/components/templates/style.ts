import styled from 'styled-components';

import elipses from '../../resources/background-elipses.png';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 4% 0;

    .with-background{
        background: url(${elipses}) no-repeat;
        background-position: bottom 20% right 10px;
    }

    .logo{
        margin: 10px 10%;
    }
`;

export const Divider = styled.div`
    width: 20%;
    height: 100%;
    @media only screen and (max-width: 992px){
        display: none;
    }
`;

export const Container = styled.section<{size?:string}>`
    @media only screen and (max-width: 992px){
        width: 100%;
    }
    position: relative;
    flex-grow: 1;
    width: ${props=>props.size ? props.size : "60%"};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3%;

    .image-container{
        @media only screen and (max-width: 992px){
            height: 500px;
            width: auto;
            margin-bottom: 50px;
        }
        img{width:auto;max-height:100%}
    }

    .splash-image {
        width: 100%;
        height: auto;
    }

    .bullets {
        display: flex;

        svg {
            margin: 0;
            margin-right: 22px;
            min-width: 32px;
            min-height: 32px;
        }
    }

    .images{
        position: absolute;
    }

    #unsplash {
        width: 70%;
        min-width: 420px;
        height: auto;
        left: 20%;
        top: 10%;
        z-index: 2;
    }
    #rectangle {
        width: 20%;
        left: 30%;
        top: 13%;
    }
    #elipse {
        width: 15%;
        right: 10%;
        bottom: 25%;
        z-index: 3;
    }
    img{
        margin-top: 10%;
    }
    .last-image{
        height: 140%;
        img{
            height: 100%;
            @media only screen and (max-width: 992px){
                height: auto;
            }
        }
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    form-container{
        width: 38%;
        @media only screen and (max-width: 992px){
            width: 100%;
        }
    }
        
    .wrapper{
        border-radius: 10px;
        width: 100%;
        display: flex;
        margin: 10px 10%;

        @media only screen and (max-width: 992px){
            flex-direction: column-reverse;
        }
    }

    .reversed{
        @media only screen and (max-width: 992px){
            flex-direction: column;
    }}
`;

export const HomeRow = styled(Row)<{bgColor?: string}>`
    font-family: "Gilroy-Bold";
    padding-bottom: 200px;
    height: 575px;
    background: ${props => props.bgColor ? props.bgColor : "inherit"};

    section{
        display: static;
    }
    button{
        width: 50%;
        @media only screen and (max-width: 992px){
            width: 100%;
        }
    }

    svg{
        margin: 28px 12px 0 0;
    }

    @media only screen and (max-width: 992px){
        height: auto;
        padding-bottom: 30px;
    }
`;