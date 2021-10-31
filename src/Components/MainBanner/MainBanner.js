// shorthand: rafce
import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../images/MainBanner/main-banner.png';

const MainBannerContainer = styled.div`
    /* max-width: 1920px; */
    max-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainBannerImage = styled.div`
    max-width: inherit;
    max-height: inherit;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const MainBanner = () => {
    return (
        <>
            <MainBannerContainer>
                <MainBannerImage>
                    <img src = {BannerImage} alt = "mainbanner" />
                </MainBannerImage>
            </MainBannerContainer>
        </>
    )
}

export default MainBanner