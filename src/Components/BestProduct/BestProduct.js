import React from 'react';
import styled from 'styled-components';
import BestProBg from '../../images/BestProduct/bes-bg.png';
import Production1 from '../../images/BestProduct/production/producticon-01.png';
import Production2 from '../../images/BestProduct/production/producticon-02.png';
import Production3 from '../../images/BestProduct/production/producticon-03.png';
import BestImg1 from '../../images/BestProduct/best-img/best-image-01.png';
import BestImg2 from '../../images/BestProduct/best-img/best-image-02.png';
import BestImg3 from '../../images/BestProduct/best-img/best-image-03.png';
import GoIcon from '../../images/BestProduct/go-icon.png';

const BestProContainer = styled.div`
    /* width: 1920px; */
    /* max-height: 1073px; */
`;

const BestProBackground = styled.div`
    /* max-width: inherit;
    max-height: inherit; */
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const BestProText = styled.div`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 670px;
    height: auto;
    
        h2 {
            font-size: 50px;
            font-weight: bold;
            line-height: 1.2;
            letter-spacing: 5px;
            text-align: center;
            color: #f96400;
            text-transform: uppercase;
        }  
    
        p {
            margin-top: 14px;
            font-size: 20px;
            line-height: 1.6;
            text-align: center;
            color: #f96400;
        }
`;

const BestProDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    position: absolute;
    top: 362px;
    width: 100%;
`;

const BestProTag = styled.div`
    position: relative;
    left: 90px;
    bottom: 45px;
    z-index: 2;
    min-width: 92px;
    height: 92px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const BestImageContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
`;

const BestProImage = styled.div`
    height: 514px;
`;

const BestProDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 369px;
    height: 79px;
    margin: 0 auto;
    padding: 7px 8px 6px 27px;
    border: solid 3px #020001;
    background-color: #fff;
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
`;

const BestProDetailDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 188px;

    p {
            font-size: 19px;
            font-weight: 800;
            line-height: 1.25;
            color: #222;
        }
`;

const BestProductGoIcon = styled.div`
    width: 65px;
    height: 66px;

    img {
        width: 100%;
        height: 100%;
    }
`;


const BestProduct = () => {
    return (
        <>
            <BestProContainer>
                <BestProBackground>
                <img src = {BestProBg} alt = "best-product-background" />
                    <BestProText>
                            <h2>Best Product</h2>    

                            <p>
                                How to create mobile-optimized videos in minutes. Not a designer, 
                                every team makes a lot of videos Can be trimmed. Take the first 
                            </p>
                    </BestProText>

                    <BestProDisplay>

                        {/* Start: product 1 */}
                        <BestProTag>
                                <img src = {Production1} alt = "production-1" />
                        </BestProTag>

                        <BestImageContent>
                            <BestProImage>
                                <img src = {BestImg1} alt = "best-1" />
                            </BestProImage>
                            <BestProDetail>
                                <BestProDetailDesc>
                                    <p>How to create mobile-optimized</p>
                                </BestProDetailDesc>
                                <BestProductGoIcon><img src = {GoIcon} alt = "go-icon" /></BestProductGoIcon>
                            </BestProDetail>
                        </BestImageContent>
                        {/* End: product 1 */}

                        {/* Start: product 2 */}
                        <BestProTag>
                                <img src = {Production2} alt = "production-1" />
                        </BestProTag>

                        <BestImageContent>
                            <BestProImage>
                                <img src = {BestImg2} alt = "best-2" />
                            </BestProImage>
                            <BestProDetail>
                                <BestProDetailDesc>
                                    <p>How to create mobile-optimized</p>
                                </BestProDetailDesc>
                                <BestProductGoIcon><img src = {GoIcon} alt = "go-icon" /></BestProductGoIcon>
                            </BestProDetail>
                        </BestImageContent>
                        {/* End: product 2 */}

                        {/* Start: product 3 */}
                        <BestProTag>
                                <img src = {Production3} alt = "production-1" />
                        </BestProTag>

                        <BestImageContent>
                            <BestProImage>
                                <img src = {BestImg3} alt = "best-3" />
                            </BestProImage>
                            <BestProDetail>
                                <BestProDetailDesc>
                                    <p>How to create mobile-optimized</p>
                                </BestProDetailDesc>
                                <BestProductGoIcon><img src = {GoIcon} alt = "go-icon" /></BestProductGoIcon>
                            </BestProDetail>
                        </BestImageContent>
                        {/* End: product 3 */}
                        
                    </BestProDisplay>
                </BestProBackground>
            </BestProContainer>
        </>
    )
}

export default BestProduct
