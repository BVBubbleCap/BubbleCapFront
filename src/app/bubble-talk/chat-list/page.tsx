"use client";

import styled from 'styled-components';
import SingleChat from '../../../components/single-chat';
import NavBar from '../../../components/talk-search-bar'; 

export default function ChatList() {
  return (
    <Container>
      <NavBar />
      <ChatItem>
        <SingleChat 
          profileImage="path/to/image1.jpg" 
          nickname="sumin🐶" 
          message="I Love You~😘" 
          time="4:22PM" 
        />
      </ChatItem>
      <ChatItem>
        <SingleChat 
          profileImage="path/to/image2.jpg" 
          nickname="hyunlee❄️" 
          message="ganadaramabasa!" 
          time="4:20PM" 
        />
      </ChatItem>
      <ChatItem>
        <SingleChat 
          profileImage="path/to/image3.jpg" 
          nickname="jieun🌳" 
          message="ah................" 
          time="4:18PM" 
        />
      </ChatItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: #ffffff;
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
  overflow-y: auto; /* 스크롤 가능하게 설정 */
`;

const ChatItem = styled.div`
  width: 100%;
  &:last-child {
    margin-bottom: 0; /* 마지막 아이템에는 마진을 적용하지 않음 */
  }
`;