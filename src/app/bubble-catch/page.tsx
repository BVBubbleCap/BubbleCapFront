"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BubbleCatch = () => {

  const router = useRouter();

  const routGame = () => {
    router.push('/bubble-catch/select-game');
  };

  const routLearn = () => {
    router.push('/bubble-catch/learn-to-play');
  }

  const routBack = () => {
    router.back();
  }

  return (
    <Container>
      <BackButton onClick={routBack}>{"<"}</BackButton>
      <LogoWrapper>
        <Image src={'/bubblecaplogo.png'} alt="Bubble Cap Logo" width={350} height={350} />
      </LogoWrapper>
      <ButtonWrapper>
        <ActionButton primary onClick={routGame}>Bubble Catch!</ActionButton>
        <ActionButton onClick={routLearn}>Learn to Play</ActionButton>
      </ButtonWrapper>
    </Container>
  );
};

export default BubbleCatch;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 393px; 
  height: 852px;
  background-color: #ffffff;
  border: 1px solid black; 
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
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

const LogoWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 130px;
  `;


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface ActionButtonProps {
  primary?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  width: 250px;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ primary }) => (primary ? '#FF004D' : '#0A0C12')};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
`;
