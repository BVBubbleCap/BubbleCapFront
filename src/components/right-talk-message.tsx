"use client";

import styled from 'styled-components';

interface RightTalkMessageProps {
    profileImage: string;
    nickname: string;
    message: string;
    time: string;
    }

export default function RightTalkMessage({ profileImage, nickname, message, time } : RightTalkMessageProps) {
  return (
    <MessageContainer>
      <MessageDetails>
        <Nickname>{nickname}</Nickname>
        <MessageTimeContainer>
          <MessageTime>{time}</MessageTime>
          <MessageContent>{message}</MessageContent>
        </MessageTimeContainer>
      </MessageDetails>
      <ProfileImage src={profileImage} alt="Profile Image" />
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  justify-content: flex-end; /* 오른쪽 정렬 */
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px; /* 오른쪽에 배치할 때 여백을 왼쪽에 추가 */
  background-color: #add8e6;
`;

const MessageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 오른쪽 정렬 */
`;

const Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  text-align: right; /* 오른쪽 정렬 */
`;

const MessageTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end; /* 시간과 메시지를 같은 높이로 맞춤 */
`;

const MessageContent = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: right; /* 오른쪽 정렬 */
  margin-left:4px; 
`;

const MessageTime = styled.div`
  color: #888;
  font-size: 12px;
  margin-left: 6px;
`;