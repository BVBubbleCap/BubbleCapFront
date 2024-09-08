"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LearnToPlay = () => {

    const router = useRouter();

    const routBack = () => {
        router.back();
    }

    return (
        <Container>
            <Top>
                <BackButton onClick={routBack}>{"<"}</BackButton>
                <TitleWrapper>
                    <Image src={'/bubblecaplogo.png'} alt="Bubble Cap Logo" width={30} height={30} />
                    <Title>Learn to Play</Title>
                    <Image src={'/bubblecaplogo.png'} alt="Bubble Cap Logo" width={30} height={30} />
                </TitleWrapper>
            </Top>
            <Content>
                <h2>CatchCap NFT Gacha Game Guide and Pricing</h2>
                <SectionTitle>Introduction</SectionTitle>
                <p>Welcome to the CatchCap NFT Gacha Game! This game allows you to collect exclusive NFTs of baseball players based on different teams...</p>
                <SectionTitle>How It Works</SectionTitle>
                <ul>
                    <li>NFT Basis: The NFTs are created based on players from various baseball teams...</li>
                    <li>Collection Benefits: Collect all NFTs of a team to receive special rewards...</li>
                    <li>Game Access: Play the CatchCap game to collect these NFTs...</li>
                </ul>
                <SectionTitle>Game Mechanics</SectionTitle>
                <ul>
                    <li>Chiliz Tokens: Use Chiliz tokens to participate in the gacha game...</li>
                    <li>Gacha Options:</li>
                    <ul>
                        <li>29% Win Rate: Pay $1 worth of Chiliz tokens...</li>
                        <li>59% Win Rate: Pay $2 worth of Chiliz tokens...</li>
                        <li>89% Win Rate: Pay $3 worth of Chiliz tokens...</li>
                    </ul>
                    <li>Team-Specific Tokens: Each team has its own specific token...</li>
                </ul>
                <SectionTitle>Gameplay</SectionTitle>
                <ul>
                    <li>Three Balls: In each game session, you are given three baseballs to click on...</li>
                    <li>Random Numbers: Clicking on each baseball will reveal a random number...</li>
                </ul>
                <SectionTitle>Pricing</SectionTitle>
                <ul>
                    <li>$1 Option: 29% chance of winning...</li>
                    <li>$2 Option: 49% chance of winning...</li>
                    <li>$3 Option: 89% chance of winning...</li>
                </ul>
                <SectionTitle>Benefits of Completing a Team Collection</SectionTitle>
                <ul>
                    <li>Unlock exclusive rewards...</li>
                    <li>Gain special access to team events...</li>
                    <li>Obtain rare and limited-edition NFTs...</li>
                </ul>
                <p>Enjoy the thrill of collecting and completing your favorite baseball team’s NFTs with CatchCap! Try your luck, strategize your plays, and become a top collector in the world of baseball NFTs.</p>
            </Content>
            <BottomWrapper>
                <Image src={'/baseball.png'} alt="Baseball" width={50} height={50} />
                <Image src={'/baseball.png'} alt="Baseball" width={50} height={50} />
                <Image src={'/baseball.png'} alt="Baseball" width={50} height={50} />
            </BottomWrapper>
        </Container>
    );
};

export default LearnToPlay;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 393px; 
    height: 852px;
    background-color: #ffffff;
    border: 1px solid black; 
    margin: 0 auto;
    padding-top: 20px;
    position: relative;
    overflow-y: scroll;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    top: 0;
    background-color: #ffffff;
    z-index: 10;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: black;
    margin: 0;
`;

const BackButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;

const Content = styled.div`
    padding: 20px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: black;
`;

const SectionTitle = styled.h3`
    margin-top: 20px;
    font-size: 18px;
    color: black;
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 10px;
    width: 100%;
    background-color: #ffffff;
    bottom: 0;
    z-index: 10;
`;
