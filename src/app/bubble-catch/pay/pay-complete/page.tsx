"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PayComplete = () => {

    const router = useRouter();

    const routBack = () => {
        router.back();
    };

    const routProceed = () => {
        router.push('/bubble-catch/game');
    }

    return (
        <Container>
            <BackButton onClick={routBack}>{"<"}</BackButton>
            <TitleWrapper>
                <Title>Are you ready?</Title>
            </TitleWrapper>
            <LogoWrapper>
                <Image src={'/baseballbubble.png'} alt="Baseball Bubble" width={300} height={250} />
            </LogoWrapper>
            <ProceedButton onClick={routProceed}>Let&apos;s start!</ProceedButton>
        </Container>
    );
};

export default PayComplete;

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
    margin-top: 150px;
`;

const Title = styled.h1`
    font-size: 35px;
    color: black;
    margin: 0;
    text-align: center;
    margin-bottom: 15px;
`;

const LogoWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
`;

const ProceedButton = styled.button`
    background-color: #FFE4B2;
    color: black;
    border: none;
    border-radius: 15px;
    padding: 15px 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;
