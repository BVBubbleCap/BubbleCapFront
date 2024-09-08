"use client";

import styled from 'styled-components';
import SingleProfile from '../../../components/single-profile';
import CloseButton from '../../../components/close-button';
import ChatButton from '../../../components/chat-button'; 

export default function PersonalProfile() {
  return (
    <Container>
      <CloseButton />
      <Content>
        <SingleProfile 
          profileImage="/sumin.png" 
          nickname="sumin🐶" 
          message="No message❌"
          time='4:22PM'
        />
        <ChatButton/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: rgba(252, 240, 213, 0.95);
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; /* 하단에 배치 */
  margin-bottom: 30px; /* 하단에서의 여백 */
`;
