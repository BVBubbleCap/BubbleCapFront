// "use client";

// import styled from 'styled-components';

// export default function TalkSend() {
//   return (
//     <SendContainer>
//       <Input type="text" placeholder="Type a message..." />
//       <SendButton>
//         <img src="/send.png" alt="Send" />
//       </SendButton>
//     </SendContainer>
//   );
// }

// const SendContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 82px;
//   padding: 10px;
//   background-color: #FCF0D5;
//   border-top: 1px solid #eee;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   margin-right: 10px;
//   font-size: 16px;
//   height: 45px;
// `;

// const SendButton = styled.button`
//   background-color: transparent;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

"use client";

import styled from 'styled-components';
import { useState } from 'react';

export default function TalkSend({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue); // 부모 컴포넌트로 메시지를 전달
      setInputValue(''); // 입력 필드 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <SendContainer>
      <Input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} // Enter 키로 메시지 전송
      />
      <SendButton onClick={handleSend}>
        <img src="/send.png" alt="Send" />
      </SendButton>
    </SendContainer>
  );
}

const SendContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 82px;
  padding: 10px;
  background-color: #FCF0D5;
  border-top: 1px solid #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 16px;
  height: 45px;
`;

const SendButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

