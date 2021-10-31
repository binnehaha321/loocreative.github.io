import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    ${'' /* overflow-x: hidden; */}
}

html {
    display: flex;
    justify-content: center;
    align-self: center;
}

// export const Container = styled.div `
//     z-index: 1;
//     width: 100%;
//     margin: 0 auto;
//     padding: 0 50px;

//     @media screen and (max-width: 991px) {
//         padding: 0 30px;
//     }
// `;

export default GlobalStyle;