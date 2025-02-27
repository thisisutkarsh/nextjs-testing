// ChatMessage.tsx

import React, { useEffect, useState } from 'react';
import './ChatMessage.css';

interface Message {
  name: string;
  user_type: string;
  msg: string;
  delay: number;
  align: string;
  showTime: boolean;
  time: string;
}

interface Props {
  message: Message;
  onRowAdded: () => void;
}

const ChatMessage: React.FC<Props> = ({ message, onRowAdded }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {

      setIsVisible(true);
      onRowAdded();
    }, message.delay);

    return () => clearTimeout(timeoutId);
  }, [message.delay, onRowAdded]);

  return (
    <div
      className={`message-body ${
        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      } transform transition-transform duration-300 ease-out`}
    >
      {message.user_type === 'user' ? (
        <div className={` message-main-receiver py-1`}>
          <div className={`receiver bg-white`}>
            <div className="flex justify-between">
              <div className="font-bold">{message.name}</div>
            </div>
            <div className="message-text text-black">{message.msg}</div>
            <span className="message-time text-right">{message.time}</span>
          </div>
        </div>
      ) : (
        <div className=" message-main-sender">
          <div className={`sender bg-[#dcf8c6] py-1`}>
            <div className="flex justify-between">
              <div className="font-bold">{message.name}</div>
            </div>
            <div className="message-text text-black">{message.msg}</div>
            <span className="message-time text-right">{message.time}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
