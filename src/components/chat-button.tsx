"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation'; // useRouter를 import

export default function ChatButton() {
  const router = useRouter(); // useRouter 훅 사용

  const handleClick = () => {
    router.push('/bubble-talk/chat-room'); // 버튼 클릭 시 경로 이동
  };

  return (
    <Button onClick={handleClick}>
      <img src='/message.png' alt="Chat Icon" />
    </Button>
  );
}

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  background-color: transparent; /* 배경색을 투명하게 */
  padding: 10px;
`;
