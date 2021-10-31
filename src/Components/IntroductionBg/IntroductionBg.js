import React from 'react'
import styled from 'styled-components'
import IntroBackgroundImage from '../../images/Introduction/introduction-bg.png'

const IntroContainer = styled.div`
    /* width: 1920px; */
    max-height: 576px;
`;

const IntroBackground = styled.div `
    max-width: inherit;
    max-height: inherit;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const IntroText = styled.div `
    position: absolute;
    top: 174px;
    left: 173px
`;

const IntroHeading = styled.div `
    
    h2 {
        font-weight: 800;
        font-size: 50px;
        letter-spacing: 5px;
        color: #ffffff;
        text-transform: uppercase;
        line-height: 1.2;
    }
`;

const IntroDesc = styled.div `
    width: 667px;
    height: 125px;
    margin: 44px 0 0 1px;

    p {
        font-weight: normal;
        font-size: 20px;
        line-height: 1.75;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const IntroductionBg = () => {
    return (
        <>
            <IntroContainer>
                <IntroBackground>
                    <img src = {IntroBackgroundImage} alt = "intro-background" />
                    <IntroText>
                        <IntroHeading>
                            <h2>What Happened!</h2>
                        </IntroHeading>

                        <IntroDesc>
                            <p>
                                How to create mobile-optimized videos in minutes. Not a designer, 
                                every team makes a lot of videos Can be trimmed. Take the first 
                                step to your brand's success. How to create 
                                mobile-optimized videos in minutes.
                            </p>
                        </IntroDesc>
                    </IntroText>
                </IntroBackground>
            </IntroContainer>
        </>
    )
}

export default IntroductionBg
