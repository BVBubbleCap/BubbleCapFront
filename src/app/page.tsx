"use client"; // 클라이언트 전용 컴포넌트임을 명시

import styled from "styled-components";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js의 useRouter 대신 useNavigation을 사용할 수도 있습니다.

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 1.5초 후에 login-walletconnect 페이지로 이동
    const timer = setTimeout(() => {
      router.push("/login/login-walletconnect");
    }, 1500);

    // 컴포넌트가 언마운트될 때 타이머를 해제
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <BubbleCapLogo>
        <StyledImage src={"/bubblecaplogo-1.png"} alt="logo" width={650} height={145} />
      </BubbleCapLogo>
    </Container>
  );
};

export default LandingPage;

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

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
