"use client";

import styled from 'styled-components';

interface SingleUserProps {
    profileImage: string;
    name: string;
    statusMessage: string;
    onClick?: () => void; // 클릭 이벤트 핸들러를 선택적으로 추가
}

export default function SingleUser({ profileImage, name, statusMessage, onClick }: SingleUserProps) {
  return (
    <UserContainer onClick={onClick}> {/* onClick 이벤트 추가 */}
      <ProfileImage src={profileImage} alt="Profile Image" />
      <UserDetails>
        <Name>{name}</Name>
        <StatusMessage>{statusMessage}</StatusMessage>
      </UserDetails>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  width: 100%;
  cursor: pointer; /* 클릭 가능한 포인터로 변경 */
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #add8e6;
`;

const UserDetails = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 15px;
`;

const StatusMessage = styled.div`
  color: #888;
  white-space: nowrap;
  font-size: 10px;
`;
