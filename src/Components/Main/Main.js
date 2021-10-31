import React from 'react';
import styled from 'styled-components';

import ProductList from './ProductList';

const MainContainer = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    text-align: center;
    padding: 70px 170px;
    position: relative;
`;

const ButtonSeeMore = styled.p`
    width: 199px;
    height: 60px;
    border: solid 3px #020001;
    background-color: #fff;
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 800;
    color: #222;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = () => {
    return (
        <>
            <MainContainer>
                <ProductList />
                <ButtonSeeMore>
                    see more
                </ButtonSeeMore>
            </MainContainer>
        </>
    )
}

export default Main
