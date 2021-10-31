import React from 'react';
import styled from 'styled-components';
import Nike from '../../images/HappendIssue/brand/nike.jpg';
import Levi from '../../images/HappendIssue/brand/levi.png';
import Dyson from '../../images/HappendIssue/brand/dyson.png';
import Loccitane from '../../images/HappendIssue/brand/loccitane.png';
import Arrow from '../../images/HappendIssue/objects/news-img-01.png';
import Dice1 from '../../images/HappendIssue/objects/dice1.png';
import Dice2 from '../../images/HappendIssue/objects/dice2.png';
import Coin from '../../images/HappendIssue/objects/news-object-03.png';
import Hot from '../../images/HappendIssue/objects/news-object-04.png';
import Lol from '../../images/HappendIssue/objects/news-object-05.png';

const HappendIssueContainer = styled.div`
    height: 1143px;
    background-color: #fccb05;
    position: relative;
    overflow-x: hidden;
`;

const HappendIssueHeader = styled.div`

    h2 {
        width: 100%;
        font-size: 45px;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 4.5px;
        text-align: center;
        color: #110e03;

        position: absolute;
        top: 150px;
        /* right: 698px;
        left: 699px; */
    }

    p {
        width: calc(100% - 590px * 2);
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.88;
        text-align: center;
        color: #110e03;

        position: absolute;
        top: 240px;
        right: 619px;
        left: 619px;
    }
`;

const ButtonSeeMore = styled.div`
    width: 199px;
    height: 60px;
    border: solid 3px #020001;

    position: absolute;
    top: 340px;
    left: 860px;
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

const HappendIssueDice = styled.div`
    position: relative;
`;

const DiceButton1 = styled.div`
    position: absolute;
    top: 42px;
    right: 70px;
`;

const DiceButton2 = styled.div`
    position: absolute;
    top: 163px;
    right: 68px;
`;

const HappendIssueBody = styled.div`
    position: absolute;
    bottom: 142px;
    text-transform: uppercase;

    ul {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    li {
        height: 480px;
    }

    img {
        height: 100%;
        max-width: 387px;
        object-fit: cover;
    }

    img.arrow {
        width: 148px;
        height: 148px;
    }

    li:first-child {
        width: 387px;
        height: 480px;
        background-color: #ff5500;
        text-align: center;

        margin-top: 21px;
        padding: 84px 0;
        border: solid 3px #111;
        background-color: #f50;

        position: relative;

        display: flex;
        justify-content: center;

        p {
            font-size: 55px;
            font-weight: 800;
            line-height: 1.04;
            text-align: center;
            color: #110e03;
            width: 187px;
            margin: 0 auto;
        }

        img {
            position: absolute;
            bottom: 85px;
        }
        
        /*img {
            width: 148px;
            height: 148px;
            object-fit: cover;
        }
    }

    li:nth-child(2) {
        width: 387px;
        height: 405px;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    li:nth-child(3) {
        width: 383px;
        height: 405px;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    li:nth-child(4) {
        width: 386px;
        height: 405px;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }

    li:last-child {
        width: 380px;
        height: 405px;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }*/
    }

    .nike img {
        width: 387px;
        height: 480px;
        object-fit: cover;
    }

    /* .nike p {
        position: absolute;
        top: 27px;
        right: 133px;
    } */
`;

const HappendIssueBodyCoin = styled.div`
        position: absolute;
        bottom: -85px;
        left: 230px;
    
        width: 167px;
        height: 169px;
`;

const HappendIssueBodyHot = styled.div`
    position: absolute;
    left: 411px;
    top: 0px;

    width: 111px;
    height: 59px;
`;

const HappendIssueBodyLOL = styled.div`
    position: absolute;
    right: 353px;
    bottom: -50px;

    width: 133px;
    height: 100px;
`;

const HappendIssue = () => {
    return (
        <>
            <HappendIssueContainer>
                <HappendIssueHeader>
                    <h2>Happened’s issue</h2>
                    <p>
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>
                    <ButtonSeeMore>
                        see more
                    </ButtonSeeMore>
                </HappendIssueHeader>

                <HappendIssueDice>
                    <DiceButton1>
                        <img src = {Dice1} alt = "Dice 1" />
                    </DiceButton1>
                    <DiceButton2>
                        <img src = {Dice2} alt = "Dice 2" />
                    </DiceButton2>
                </HappendIssueDice>

                <HappendIssueBody>
                    <ul>
                        <li>
                            <p className = "title">whpn issue</p>
                            <img className = "arrow" src = {Arrow} alt = "Arrow" />
                        </li>

                        <li className = "nike">
                            <p>b brand</p>
                            <img src = {Nike} alt = "Nike" />
                        </li>

                        <li>
                            <p>c brand</p>
                            <img src = {Levi} alt = "Levi" />
                        </li>

                        <li>
                            <p>d brand</p>
                            <img src = {Dyson} alt = "Dyson" />
                        </li>

                        <li>
                            <p>d brand</p>
                            <img src = {Loccitane} alt = "Loccitane" />
                        </li>
                    </ul>

                    <HappendIssueBodyCoin>
                        <img src = {Coin} alt = "Coin" />
                    </HappendIssueBodyCoin>

                    <HappendIssueBodyHot>
                        <img src = {Hot} alt = "Hot" />
                    </HappendIssueBodyHot>

                    <HappendIssueBodyLOL>
                        <img src = {Lol} alt = "Lol" />
                    </HappendIssueBodyLOL>
                </HappendIssueBody>
            </HappendIssueContainer>
        </>
    )
}

export default HappendIssue
