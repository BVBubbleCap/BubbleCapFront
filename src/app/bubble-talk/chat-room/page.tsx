"use client";

import styled from 'styled-components';
import LeftTalkMessage from '../../../components/left-talk-message'; 
import RightTalkMessage from '../../../components/right-talk-message';
import TalkSend from '../../../components/talk-send';
import TopNavBar from '../../../components/chat-room-nav'; 

export default function ChatRoom() {
  return (
    <Container>
      <TopNavBar title="위녕이🎀" />
      <MessagesContainer>
        <LeftTalkMessage 
          profileImage="path/to/image1.jpg" 
          nickname="위녕이🎀" 
          message="오늘은 차도녕이니까" 
          time="15:11" 
        />
        <LeftTalkMessage 
          profileImage="path/to/image1.jpg" 
          nickname="위녕이🎀" 
          message="모두 나한테 말 걸고 싶다면 세번 더 생각하고 하기양" 
          time="15:11" 
        />
        <RightTalkMessage 
          profileImage="path/to/image2.jpg" 
          nickname="승혜🥇" 
          message="응 알아떠" 
          time="15:13" 
        />
      </MessagesContainer>
      <TalkSend />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 공간을 채워서 하단에 고정 */
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: #f8f8f8;
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
`;

const MessagesContainer = styled.div`
  background-color: #ECF5FF;
  flex: 1;
  overflow-y: auto; /* 스크롤 가능하게 설정 */
  padding: 10px 10px 0 10px; /* 메시지와 상단/하단 간격을 위한 패딩 */
`;