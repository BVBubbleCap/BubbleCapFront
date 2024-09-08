"use client";

import styled from 'styled-components';
import SingleUser from '../../../components/single-user';
import NavBar from '../../../components/bottom-nav-bar';
import { useRouter } from 'next/navigation';

export default function FriendList() {
  const router = useRouter();

  const handleUserClick = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Content>
        <Title>My Profile</Title>
        <SingleUser 
          profileImage="/seunghye.png" 
          name="seunghye🥇" 
          statusMessage="" 
        />
        <Divider />
        <Title>Friends 3</Title>
        <SingleUser 
          profileImage="/sumin.png" 
          name="sumin🐶" 
          statusMessage="No message❌" 
          onClick={() => handleUserClick('/bubble-talk/personal-profile')}
        />
        <SingleUser 
          profileImage="/hyunlee.png" 
          name="hyunlee❄️" 
          statusMessage="😊" 
        />
        <SingleUser 
          profileImage="/jieun.png" 
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
  width: 393px;
  height: 852px;
  background-color: #ffffff;
  border: 1px solid black;
  margin: 0 auto;
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
  color: #000;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;
`;
