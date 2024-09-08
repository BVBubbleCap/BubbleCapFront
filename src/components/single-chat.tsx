"use client";

import styled from 'styled-components';

interface SingleChatProps {
    profileImage: string;
    nickname: string;
    message: string;
    time: string;
    }

export default function SingleChat({ profileImage, nickname, message, time } : SingleChatProps) {
  return (
    <Container>
      <ProfileImage src={profileImage} alt="Profile Image" />
      <ChatDetails>
        <Nickname>{nickname}</Nickname>
        <Message>{message}</Message>
      </ChatDetails>
      <Time>{time}</Time>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #add8e6;
`;

const ChatDetails = styled.div`
  flex: 1;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const Message = styled.div`
  font-size: 15px;
  color: #888;
`;

const Time = styled.div`
  color: #888;
  font-size: 15px;
`;