"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TalkWelcome = () => {
    const router = useRouter();

    const routBack = () => {
        router.back();
    };

    const routProceed = () => {
        router.push('/bubble-talk/friend-list');
    }

    return (
        <Container>
            <BackButton onClick={routBack}>{"<"}</BackButton>
            <TitleWrapper>
                <Title>🎉 Welcome 🎉</Title>
            </TitleWrapper>
            <LogoWrapper>
                <Image src={'/baseballbubble.png'} alt="Baseball Bubble" width={300} height={250} />
            </LogoWrapper>
            <Message> You&apos;ve completed the purchase of ticket.</Message>  
            <Message>Are you sure you want to proceed?</Message>
            <ProceedButton onClick={routProceed}>Yes, proceed.</ProceedButton>
        </Container>
    );
};

export default TalkWelcome;

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
    margin-top: 110px;
`;

const Title = styled.h1`
    font-size: 35px;
    color: black;
    margin: 0;
    text-align: center;
`;

const LogoWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
`;

const Message = styled.p`
    font-size: 18px;
    color: black;
    text-align: center;
    margin: 10px 0;
`;

const ProceedButton = styled.button`
    background-color: #FFE4B2;
    color: black;
    border: none;
    border-radius: 15px;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 30px;
`;
