"use client";

import styled from 'styled-components';

export default function NavBar() {
  return (
    <NavContainer>
      <NavItem>
        <img src="/multi-user.png" alt="MultiUser" />
      </NavItem>
      <NavItem>
        <img src="/message.png" alt="Message" />
      </NavItem>
      <NavItem>
        <img src="/etc.png" alt="Etc" />
      </NavItem>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #FCF0D5; /* 배경 색상 */
  border-top: 1px solid #ddd; /* 상단 경계선 */
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;

`;