"use client";

import styled from 'styled-components';

interface SingleProfileProps {
    profileImage: string;
    name: string;
    statusMessage: string;
    }

export default function SingleProfile({ profileImage, name, statusMessage } : SingleProfileProps) {
  return (
    <Container>
      <ProfileImage src={profileImage} alt="Profile Image" />
      <Details>
        <Name>{name}</Name>
        <StatusMessage>{statusMessage}</StatusMessage>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: #add8e6;
`;

const Details = styled.div`
  text-align: center;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatusMessage = styled.div`
  color: #888;
  margin-bottom: 20px;
`;