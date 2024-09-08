"use client";

import styled from 'styled-components';

export default function TicketStore() {
  return (
    <Container>
      <HeaderImage src="/ticket-logo.png" alt="Header Image" />
      <Title>Buy Ticket</Title>
      <ButtonContainer>
        <Button>First Month Free</Button>
        <Button>Monthly Subscription</Button>
        <Button>Annual Subscription</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: #ffffff;
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
  padding: 20px;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
  text-align: left; /* 왼쪽 정렬 */
  width: 100%; /* 제목이 전체 너비를 차지하도록 */
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 90%;
  padding: 15px;
  margin: 10px 0;
  background-color:#0B1927;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1f2833;
  }
`;