"use client";

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/navigation';  // next/navigation에서 useRouter 불러오기


const AccountInfo = styled.p`
    width: 380px; /* 핸드폰 화면의 가로 크기 */
    text-align: center;
    color: #000;
    margin-top: 20px;
    font-size: 18px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 393px; /* 핸드폰 화면의 가로 크기 */
    height: 852px; /* 핸드폰 화면의 세로 크기 */
    background-color: #ffffff;
    border: 1px solid black; /* 경계선을 추가하여 실제로 크기를 확인할 수 있게 합니다. */
    margin: 0 auto; /* 화면 가운데 정렬 */
    gap: 20px; /* 이미지 사이의 간격 */
`;

const BubbleCapLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const WalletConnectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능하다는 것을 시각적으로 나타냄 */
`;

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;

export default function Login() {
  const [account, setAccount] = useState<string>('');
  const router = useRouter();  // useRouter 사용 (next/navigation)

  // 메타마스크 연결 함수
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User denied account access", err);
      }
    } else {
      alert('MetaMask를 설치해주세요!');
    }
  };

  // account가 설정되면 3초 후에 라우팅
  useEffect(() => {
    if (account) {
      const timer = setTimeout(() => {
        router.push('/login/login-calendar');  // 원하는 경로로 변경
      }, 3000);

      // 타이머 클린업 함수
      return () => clearTimeout(timer);
    }
  }, [account, router]);

  return (
    <Container>
      <BubbleCapLogo>
        <StyledImage src={'/bubblecaplogo.png'} alt="logo" width={650} height={145} />
      </BubbleCapLogo>

      {/* 이미지 클릭 시 메타마스크 연결 */}
      <WalletConnectContainer onClick={connectWallet}>
        <StyledImage src={'/walletconnect.png'} alt="walletconnect" width={250} height={49} />
      </WalletConnectContainer>

      {/* 연결된 계정 정보 출력 */}
      {account && <AccountInfo>Account: {account}</AccountInfo>}
    </Container>
  );
}
