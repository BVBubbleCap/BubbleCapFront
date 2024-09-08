"use client";

import styled from 'styled-components';

export default function CloseButton() {
  return (
    <ButtonContainer>
      <Button>X</Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;