"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SelectGame = () => {

    const router = useRouter();

    const routBack = () => {
        router.back();
    }

    const routPay = () => {
        router.push('/bubble-catch/pay');
    }

    const routPay49 = () => {
        router.push('/bubble-catch/pay/per49');
    }

    const routPay89 = () => {
        router.push('/bubble-catch/pay/per89');
    }
    
    return (
        <Container>
            <BackButton onClick={routBack}>{"<"}</BackButton>
            <TitleWrapper>
                <Title>Select the Game</Title>
            </TitleWrapper>
            <LogoWrapper>
                <Image src={'/bubblecaplogo.png'} alt="Bubble Cap Logo" width={250} height={250} />
            </LogoWrapper>
            <ButtonWrapper>
                <GameButton onClick={routPay}>
                    <Percentage>29%</Percentage>
                    <Price>$1</Price>
                </GameButton>
                <GameButton onClick={routPay49}>
                    <Percentage>49%</Percentage>
                    <Price>$2</Price>
                </GameButton>
                <GameButton onClick={routPay89}>
                    <Percentage>89%</Percentage>
                    <Price>$3</Price>
                </GameButton>
            </ButtonWrapper>
        </Container>
    );
};

export default SelectGame;

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

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`;

const Title = styled.h1`
    font-size: 35px;
    color: black;
    margin: 0;
`;

const LogoWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const GameButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 80px;
    padding: 15px 20px;
    font-size: 24px;
    color: black;
    background-color: white;
    border: 2px solid #FF004D;
    border-radius: 15px;
    cursor: pointer;
`;

const Percentage = styled.span`
    font-weight: bold;
`;

const Price = styled.span`
    font-weight: bold;
    color: #FFAA00;
`;
