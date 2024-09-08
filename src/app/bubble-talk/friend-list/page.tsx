"use client";

import styled from 'styled-components';
import SingleUser from '../../../components/single-user'
import NavBar from '../../../components/bottom-nav-bar'

export default function FriendList() {
  return (
    <Container>
      <Content>
        <Title>My Profile</Title>
        <SingleUser 
          profileImage="path/to/image.jpg" 
          name="seunghye🥇" 
          statusMessage="" 
        />
        <Divider />
        <Title>Friends 3</Title>
        <SingleUser 
          profileImage="path/to/image1.jpg" 
          name="sumin🐶" 
          statusMessage="No message❌" 
        />
        <SingleUser 
          profileImage="path/to/image2.jpg" 
          name="hyunlee❄️" 
          statusMessage="😊" 
        />
        <SingleUser 
          profileImage="path/to/image3.jpg" 
          name="jieun🌳" 
          statusMessage="('3' )" 
        />
      </Content>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 393px; /* 핸드폰 화면의 가로 크기 */
  height: 852px; /* 핸드폰 화면의 세로 크기 */
  background-color: #ffffff;
  border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
  margin: 0 auto; /* 화면 가운데 정렬 */
  padding: 0;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin: 10px 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;
`;