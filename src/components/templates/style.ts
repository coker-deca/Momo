import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 4% 10%;
    height: 100vh;
`;

export const Divider = styled.div`
    width: 20%;
    height: 100%;
`;

export const Container = styled.section<{size?:string}>`
    @media only screen and (max-width: 992px){
        width: 100%;
    }
    position: relative;
    flex-grow: 1;
    width: ${props=>props.size ? props.size : "60%"};
    height: 100%;

    .splash-image {
        width: 100%;
        height: auto;
    }

    .bullets {
        display: flex;

        svg {
            margin: 0;
            margin-right: 22px;
        }
    }

    .images{
        position: absolute;
    }
    #elipses {
        width: 40%;
        min-width: 280px;
        height: auto;
        right: 0;
        bottom: 0;
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
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 992px){
        flex-direction: column-reverse;
    }

    form-container{
        width: 38%;
        @media only screen and (max-width: 992px){
            width: 100%;
        }
    }
`;

export const HomeRow = styled(Row)`
    font-family: "Gilroy-Bold";
    height: 575px;
    section{
        display: static;
    }
    .with-background{
        background: url("../../resources/background-elipses.png");
        background-position: bottom right;
    }
    button{
        width: 50%;
    }

    svg{
        margin: 28px 12px 0 0;
    }
`;