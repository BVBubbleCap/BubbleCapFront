"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Login = () => {
    const [date, setDate] = useState<Date | null>(new Date()); // 현재 날짜로 초기화
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 선택된 날짜

    // 날짜 선택 핸들러
    const handleDateChange = (newDate: Date | Date[]) => {
        const selected = Array.isArray(newDate) ? newDate[0] : newDate; // 단일 날짜 또는 배열에서 첫 번째 날짜 선택
        if (selected && date && selected.getTime() === date.getTime()) {
            setSelectedDate(null); // 이미 선택된 날짜가 클릭되면 상세 정보 숨김
        } else {
            setDate(selected);
            setSelectedDate(selected); // 선택된 날짜로 업데이트
        }
    };

    return (
        <Container>
            <MainContainer>
                <Logo src={'/toplogo.png'} alt="toplogo"/>
            </MainContainer>
            <CaledarContainer>
                <StyledCalendar
                    onChange={handleDateChange} // 날짜가 변경될 때 호출되는 핸들러
                    value={date} // 선택된 날짜를 Calendar에 전달
                    locale="en-US" // react에서 날짜와 시간 형식 동일하게 설정
                />
                {selectedDate && (
                    <DateDetails>
                        <MatchImage src="/match.png" alt="match"/>
                    </DateDetails>
                )}
            </CaledarContainer>
            <NoticeContainer>
                <NoticeImage src="/notice.png" alt="notice" width={361} height={95} />
            </NoticeContainer>
            <AdvertisementContainer>
                <h4>Advertisement</h4>
            </AdvertisementContainer>
            <BottomNav>
          <BottomNavItem>
            <a href="/bubble-catch">
            <img 
              src="/event.png" 
              alt="Event" 
              style={{ width: '30px', height: '30px' }}
            />
            </a>
          </BottomNavItem>
          <BottomNavItem>
            <a href="/bubble-talk">
            <img 
              src="/chat.png" 
              alt="Chat" 
              style={{ width: '30px', height: '30px' }}
            />
            </a>
          </BottomNavItem>
          <BottomNavItem>
            <a href="/login/login-calendar">
            <img 
              src="/home.png" 
              alt="Home" 
              style={{ width: '30px', height: '30px' }}
            />
            </a>
          </BottomNavItem>
          <BottomNavItem>
            <a href="/my-page">
              <img 
                src="/mypage.png" 
                alt="My Page" 
                style={{ width: '25px', height: '30px' }}
              />  
            </a>
          </BottomNavItem>
        </BottomNav>
        </Container>
    );
};

export default Login;

// 스타일 정의는 동일

const Container = styled.div`
    width: 393px;
    min-height: 852px;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    position: relative;
    overflow: auto;
    gap: 7px;
    padding-bottom: 60px;
    transition: min-height 0.3s ease; /* 페이지 높이 변화 애니메이션 */
`;

const MainContainer = styled.div`
    width: 100%;
    height: 109px;
    background-color: #fcf0d5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    margin-bottom: 5px;
`;

const Logo = styled.img`
    width: 440px;
    height: 105px;
`;

const CaledarContainer = styled.div`
    width: 362px;
    background-color: #fcf0d5;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 1.4px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: height 0.3s ease; /* 부드러운 높이 조절 애니메이션 */
    overflow: hidden; /* 상세 정보가 있는 경우 페이지가 커지지 않도록 */
`;

export const StyledCalendar = styled(Calendar)`
    width: 360px;
    height: auto;
    border: none;

    .react-calendar {
        background-color: #fcf0d5; /* 달력의 배경색 */
        border: none;
        border-radius: 0;
    }

    .react-calendar__tile {
        background-color: transparent; /* 날짜 셀의 배경색을 투명으로 설정 */
        color: #000; /* 날짜 셀의 글자 색 */
    }

    .react-calendar__tile--active {
        background-color: #f7d1b0; /* 선택된 날짜의 배경색 */
        border-radius: 50%;
        color: black; /* 선택된 날짜의 글자 색 */
    }

    .react-calendar__tile--hover {
        background-color: #f7e0d5; /* 날짜를 호버할 때의 배경색 */
    }

    .react-calendar__month-view__days__day--weekend {
        color: #f28e1c; /* 주말 날짜의 색상 */
    }

    .react-calendar__navigation button {
        background-color: #fcf0d5; /* 네비게이션 버튼 배경색 */
        border: none;

        color: #000;
    }

    .react-calendar__navigation button:enabled:hover {
        background-color: #f7e0d5; /* 네비게이션 버튼 호버 배경색 */
        color: #000;
    }
`;

const DateDetails = styled.div`
    width: 100%;
    background-color: #fcf0d5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    animation: expand 0.3s ease-in-out;
`;

const MatchImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; /* 컨테이너에 맞춰서 이미지 크기 조정 */
    display: block; /* 여백 없애기 */
    margin: 0; /* 기본 여백 제거 */
`;

const NoticeContainer = styled.div`
    width: 362px;
    height: 240px;
    background-color: #fcf0d5;
    padding: 10px;
    margin-top: 10px;  /* 간격 추가 */
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 1.4px solid black;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const NoticeImage = styled.img`
    width: 361px;
    height: 95px;
`;

const AdvertisementContainer = styled.div`
    width: 362px;
    height: 90px;
    background-color: #fcf0d5;
    margin: 10px 0;  /* 위아래 간격 조정 */
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    border: 1.4px solid black;
`;

const BottomNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;  /* 부모 컨테이너의 전체 너비 사용 */
    padding: 10px;
    background-color: #f8f5e9;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 0;
`;

const BottomNavItem = styled.div`
    font-size: 24px;
`;

