"use client";

import styled from 'styled-components';

export default function ChatButton() {
  return (
    <Button>
        <img src='/message.png'/>
    </Button>
  );
}

const Button = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;