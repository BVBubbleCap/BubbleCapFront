"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import GameCatchModal from "../../../components/game-catch-modal";
import GameLoseModal from "../../../components/game-lose-modal";

const Game: React.FC = () => {
    const [showCatchModal, setShowCatchModal] = useState(false);
    const [showLoseModal, setShowLoseModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalSubtitle, setModalSubtitle] = useState("");
    const [modalImageSrc, setModalImageSrc] = useState("");

    const handleShowCatchModal = (title: string, subtitle: string, imageSrc: string) => {
        setModalTitle(title);
        setModalSubtitle(subtitle);
        setModalImageSrc(imageSrc);
        setShowCatchModal(true);
    };

    const handleCloseCatchModal = () => {
        setShowCatchModal(false);
    };

    const handleShowLoseModal = () => {
        setShowLoseModal(true);
    };

    const handleCloseLoseModal = () => {
        setShowLoseModal(false);
    };

    const [numbers, setNumbers] = useState<(number | null)[]>([null, null, null]);

    const handleClick = (index: number) => {
        const newNumbers = [...numbers];
        newNumbers[index] = Math.floor(Math.random() * 9) + 1;
        setNumbers(newNumbers);

        if (newNumbers.every(num => num !== null)) {
            const [first, second, third] = newNumbers;

            if (first === second && second === third) {
                handleShowCatchModal(
                    "🎉 Congratulations! 🎉",
                    "You've earned the Gold Card!",
                    "/gold-card.png"
                );
            } else if (first === second || second === third || first === third) {
                handleShowCatchModal(
                    "🎉 Nice Catch! 🎉",
                    "You've earned the Silver Card!",
                    "/silver-card.png"
                );
            } else {
                handleShowLoseModal();
            }
        }
    };

    return (
        <Container>
            <Title>Click the ball</Title>
            <BallsContainer>
                {numbers.map((number, index) => (
                    <BallWrapper key={index} onClick={() => handleClick(index)}>
                        {number === null ? (
                            <Image src={'/baseball.png'} alt="Baseball" width={80} height={80} />
                        ) : (
                            <Number>{number}</Number>
                        )}
                    </BallWrapper>
                ))}
            </BallsContainer>

            {showCatchModal && (
                <GameCatchModal
                    title={modalTitle}
                    subtitle={modalSubtitle}
                    imageSrc={modalImageSrc}
                    onClose={handleCloseCatchModal}
                />
            )}

            {showLoseModal && (
                <GameLoseModal
                    title="You Lose"
                    subtitle="Try again! The next win is yours!"
                    onClose={handleCloseLoseModal}
                />
            )}
        </Container>
    );
};

export default Game;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 393px; 
    height: 852px;
    background-color: #ffffff;
    border: 1px solid black; 
    margin: 0 auto;
    padding-top: 20px;
    position: relative;
    overflow-y: hidden;
`;

const Title = styled.h1`
    font-size: 35px;
    color: black;
    margin-bottom: 50px;
`;

const BallsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

const BallWrapper = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Number = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: black;
`;
