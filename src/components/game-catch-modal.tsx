// components/Modal.tsx
"use client";

import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ModalProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, imageSrc }) => {

    const router = useRouter();

    const mintNFT = () => {
        router.push('/bubble-catch');
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <TitleWrapper>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalSubtitle>{subtitle}</ModalSubtitle>
                </TitleWrapper>
                <CardImage>
                    <Image src={imageSrc} alt="Card Image" width={250} height={350} />
                </CardImage>
                <ProceedButton onClick={mintNFT}>OK</ProceedButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #2c2c2c;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: white;
`;

const TitleWrapper = styled.div`
    margin-bottom: 20px;
`;

const ModalTitle = styled.h1`
    font-size: 28px;
`;

const ModalSubtitle = styled.p`
    font-size: 18px;
    margin-top: 10px;
`;

const CardImage = styled.div`
    margin: 20px 0;
`;

const ProceedButton = styled.button`
    background-color: #FFE4B2;
    color: black;
    border: none;
    border-radius: 15px;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
`;
