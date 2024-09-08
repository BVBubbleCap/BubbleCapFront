"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

export default function TalkWelcome() {
  const router = useRouter();

  const handleProceed = () => {
    router.push('/bubble-talk/talk-start');
  };

  return (
    <Container>
      <Title>🎉 Welcome 🎉</Title>
      <Message>
        You&apos;ve completed the purchase of ticket. <br />
        Are you sure you want to proceed?
      </Message>
      <ProceedButton onClick={handleProceed}>Yes, proceed.</ProceedButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: #ffffff;
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProceedButton = styled.button`
  padding: 10px 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;