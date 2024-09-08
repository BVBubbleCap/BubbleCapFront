"use client";

import styled from 'styled-components';

export default function TopNavBar({ title }: { title: string }) {
  return (
    <NavContainer>
      <BackButton>
        <img src="/left-arrow.png" alt="Back" />
      </BackButton>
      <Title>{title}</Title>
      <MenuButton>
        <img src="/etc.png" alt="Menu" />
      </MenuButton>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #FCF0D5; /* 배경 색상 */
  padding: 0 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;