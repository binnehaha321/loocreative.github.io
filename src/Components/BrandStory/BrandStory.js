import React from 'react';
import styled from 'styled-components';
import Object1 from '../../images/BrandStory/object-01.png';
import Object2 from '../../images/BrandStory/object-02.png';
import Object3 from '../../images/BrandStory/object-03.png';
import Object4 from '../../images/BrandStory/object-04.png';
import Object5 from '../../images/BrandStory/object-05.png';
import Object6 from '../../images/BrandStory/object-06.png';
import Object7 from '../../images/BrandStory/object-07.png';
import BrandStoryImage from '../../images/BrandStory/img.png';

const BrandStoryContainer = styled.div`
    height: 956px;
    margin-top: 240px;
    padding: 61px 0 170px;
    mix-blend-mode: multiply;
    background-color: #0565bb;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-self: center;

    position: relative;

    h1 {
        font-size: 45px;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 4.5px;
        text-align: center;
        color: #fcd32a;

        position: absolute;
        top: 149px;
        left: 0;
        right: 0;
        width: 387px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    p {
        width: calc(100% - 619px * 2);
        margin: 0 auto;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.88;
        text-align: center;
        color: #fcd32a;

        position: absolute;
        top: 233px;
        right: 0;
        left: 0;
        
    }
`;

const BrandStoryBoard = styled.div`
    position: absolute;
    top: 345px;
    left: 333px;
    right: 334px;
    background-color: #fff;
`;

const BrandStoryTop = styled.div`
    width: 1253px;
    height: 24px;
    background-color: #111111;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const BrandStoryTopLine = styled.div`
    width: 1235px;
    height: 9px;
    background-color: #0565bb;
    /* border-right: none;
    border-left: none; */
    position: relative;
`;

const BrandStoryTopLineMiddle = styled.div`
    width: 1235px;
    height: 4.5px;
    background-color: #111111;
    position: absolute;
    /* top: 0; */
    left: 0;
    right: 0;
    margin: 0 auto;
`;

const BrandStoryLeft = styled.div``;
const BrandStoryRight = styled.div`
    position: absolute;
    top: 63px;
    right: 130px;
    /* border: solid 3px #111; */
    
    h3 {
        /* width: 467px;
        height: 20px; */
        font-size: 25px;
        font-weight: 800;
        line-height: 2.4;
        text-align: left;
        color: #222;

        position: relative;
        top: 12px;
        left: -68px;
    }

    p {
        width: 540px;      
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.88;
        text-align: left;
        color: #222;

        position: absolute;
        top: 92px;
        left: -68px;
    }
`;
const ButtonSeeMore = styled.div`
    width: 199px;
    height: 60px;
    border: solid 3px #020001;
    background-color: #fff;

    position: absolute;
    top: 276px;
    left: -68px;
    /* transform: translateX(-50%); */
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

const BrandStoryObj1 = styled.div`
    position: absolute;
    top: 183px;
    left: 169px;
    z-index: -1;
`;

const BrandStoryObj2 = styled.div`
    position: absolute;
    top: 61px;
    right: 256px;
`;

const BrandStoryObj3 = styled.div`
    position: absolute;
    top: 93px;
    right: 171px;
`;

const BrandStoryObj4 = styled.div`
    position: absolute;
    top: 190px;
    right: -72px;
    z-index: -2;
`;

const BrandStoryObj5 = styled.div`
    position: absolute;
    top: 537px;
    right: -20px;
    z-index: -1;
`;

const BrandStoryObj6 = styled.div`
    position: absolute;
    top: 415px;
    left: 0;
`;

const BrandStoryObj7 = styled.div`
    position: absolute;
    top: 497px;
    left: 190px;
    z-index: -1;
`;

const BrandStory = () => {
    return (
        <>
            <BrandStoryContainer>
                <h1>Brand Story</h1>
                <p>
                    ???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????. ??????????????? ???????????????,  ?????? ?????????
                    ????????? ??? ????????????. ???????????? ????????? ?????? ??? ?????????  ??????????????????. ???????????? ??? ??? ??? ?????? ??????????????????.
                </p>

                <BrandStoryBoard>
                    <BrandStoryTop>
                        <BrandStoryTopLine />
                            <BrandStoryTopLineMiddle />
                    </BrandStoryTop>

                    <BrandStoryLeft>
                        <img src = {BrandStoryImage} alt = "Brand Story" />
                    </BrandStoryLeft>

                    <BrandStoryRight>
                        <h3>What Happened???s Brand story</h3>
                        <p>
                            ????????? ?????? ?????????, ?????????. ?????? ??????????????? ?????? ???????????? ????????? ?????? ?????? 
                            ???????????????. ??? ????????? ?????? ?????? ?????? ????????? ???????????? ????????????, ?????????. ??? ??????
                            ????????? ????????? ????????? ????????? ?????????. ?????? ?????? ???????????? ??????. ????????? ?????? ??????
                            ????????? ???????????? ????????? ????????? ?????????. ????????? ????????? ?????? ?????? ????????? ??? ?????????
                            ???????????? ????????? ?????? ???????????? ??????????????? ????????? ??????. 
                        </p>
                        <ButtonSeeMore>
                            see more
                        </ButtonSeeMore>
                    </BrandStoryRight>
                </BrandStoryBoard>

                <BrandStoryObj1>
                    <img src = {Object1} alt = "obj-1" />
                </BrandStoryObj1>
                <BrandStoryObj2>
                <img src = {Object2} alt = "obj-2" />
                </BrandStoryObj2>
                <BrandStoryObj3>
                <img src = {Object3} alt = "obj-3" />
                </BrandStoryObj3>
                <BrandStoryObj4>
                <img src = {Object4} alt = "obj-4" />
                </BrandStoryObj4>
                <BrandStoryObj5>
                <img src = {Object5} alt = "obj-5" />
                </BrandStoryObj5>
                <BrandStoryObj6>
                <img src = {Object6} alt = "obj-6" />
                </BrandStoryObj6>
                <BrandStoryObj7>
                <img src = {Object7} alt = "obj-1" />
                </BrandStoryObj7>
            </BrandStoryContainer>
        </>
    )
}

export default BrandStory;
