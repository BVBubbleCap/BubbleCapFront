"use client";

import styled from 'styled-components';

interface LeftTalkMessageProps {
    profileImage: string;
    nickname: string;
    message: string;
    time: string;
    }

export default function LeftTalkMessage({ profileImage, nickname, message, time } : LeftTalkMessageProps) {
  return (
    <MessageContainer>
      <ProfileImage src={profileImage} alt="Profile Image" />
      <MessageDetails>
        <Nickname>{nickname}</Nickname>
        <MessageTimeContainer>
          <MessageContent>{message}</MessageContent>
          <MessageTime>{time}</MessageTime>
        </MessageTimeContainer>
      </MessageDetails>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #add8e6;
`;

const MessageDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const MessageTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MessageContent = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

const MessageTime = styled.div`
  color: #888;
  font-size: 12px;
  align-self: flex-end;
  margin-left: 6px;
`;