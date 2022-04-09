import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 4% 10%;
    height: 100vh;
`;

export const Container = styled.div`
    @media only screen and (max-width: 992px){
        width: 100%;
    }
    position: relative;
    flex-grow: 1;
    width: 60%;
    height: 100vh;

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
