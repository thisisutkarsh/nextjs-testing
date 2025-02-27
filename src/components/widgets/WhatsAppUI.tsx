/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useRef, useState } from 'react';
import './WhatsAppUI.css';
import '../../assets/styles/devices.min.css';
import ChatMessage from './ChatMessage';
import babynamaLogo from '../../assets/images/babynama-v2-logo.jpg';
import { FaWifi, FaPhone, FaEllipsisV, FaMicrophone, FaBatteryHalf } from 'react-icons/fa';

const chatMessages = [
  {
    name: 'Shikha',
    user_type: 'user',
    msg: "Hi doctor, my baby's head appears warm. Is it okay?",
    delay: 0,
    align: 'left',
    showTime: true,
    time: '10:00',
  },
  {
    name: 'Dr Tapasya (MD Pediatrics)',
    user_type: 'doctor',
    msg: 'Hi Shikha, It is normal for babies to have slightly warm heads, as they have a higher metabolic rate. However, if your baby has other symptoms such as fussiness, poor feeding, or higher temperature as measured in thermometer. Please let us know.',
    delay: 1000,
    align: 'right',
    showTime: true,
    time: '10:02',
  },
  {
    name: 'Shikha',
    user_type: 'user',
    msg: 'Thanks doctor, just measured in thermometer. temperature is normal 🙂',
    delay: 2000,
    align: 'left',
    showTime: true,
    time: '10:05',
  },
  {
    name: 'Akanksha',
    user_type: 'user',
    msg: 'Hi doctor, my baby is coughing badly and has higher fever. What should I do?',
    delay: 3000,
    align: 'right',
    showTime: true,
    time: '10:30',
  },
  {
    name: 'Dr Tapasya (MD Pediatrics)',
    user_type: 'doctor',
    msg: 'Hi, this needs detailed evaluation over a video call. Please schedule with us.',
    delay: 4000,
    align: 'left',
    showTime: true,
    time: '10:31',
  },
  {
    name: 'Babynama Support',
    user_type: 'doctor',
    msg: 'Hi Akansha, contacting you to help with video consultation.',
    delay: 5000,
    align: 'right',
    showTime: true,
    time: '10:32',
  },
];

export default function WhatsAppUI() {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    scrollToTop();
    const messageLoopInterval = setInterval(() => {
      // Increment the message index or reset to 0 if it reaches the end
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % chatMessages.length);
      scrollToBottom();
    }, 4000);
    return () => clearInterval(messageLoopInterval);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  const scrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  };

  const onRowAdded = () => {
    // scrollToBottom();
  };

  return (
    <section className="mx-auto max-w-4xl py-4 sm:px-6 lg:px-8 ">
      <div className="relative mx-auto max-w-4xl sm:px-6">
        <div className="page h-auto w-auto">
          <div className="marvel-device iphone-x !visible h-[550px]">
            <div className="notch">
              <div className="camera" />
              <div className="speaker" />
            </div>
            <div className="top-bar" />
            <div className="sleep" />
            <div className="bottom-bar" />
            <div className="volume" />
            <div className="overflow">
              <div className="shadow--tr shadow" />
              <div className="shadow--tl shadow" />
              <div className="shadow--br shadow" />
              <div className="shadow--bl shadow" />
            </div>
            <div className="inner-shadow" />

            <div className="screen h-[550px]">
              <div className="status-bar">
                <div className="time" />
                <div className="battery">
                  <FaBatteryHalf />
                </div>
                <div className="network">
                  <FaWifi />
                </div>
              </div>
              <div className="chat">
                <div className="chat-container">
                  <div className="user-bar">
                    <div className="avatar">
                      <img src={babynamaLogo.src} alt="Avatar" />
                    </div>
                    <div className="name">
                      <span>Dr.Sumitra's Pediatric OPD 705 Babynama</span>
                      <span className="status">Dr. Sumitra, Babynama Community Support</span>
                    </div>
                    <div className="actions attachment">
                      <FaPhone />
                    </div>
                    <div className="actions more">
                      <FaEllipsisV />
                    </div>
                  </div>
                  <div className="conversation">
                    <div className="conversation-container" ref={chatContainerRef}>
                      {chatMessages.map((message, index) => (
                        <ChatMessage
                          key={index}
                          message={chatMessages[(currentMessageIndex + index) % chatMessages.length]}
                          onRowAdded={onRowAdded}
                        />
                      ))}
                    </div>
                    <form className="conversation-compose">
                      <div className="emoji">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} id="smiley" x={3147} y={3209}>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                            fill="#7d8489"
                          />
                        </svg>
                      </div>
                      <input className="input-msg" name="input" placeholder="Type a mes.." autoComplete="off" />
                      <div className="photo">
                        <img src="https://i.ibb.co/zNL2yg0/ib-attach.png" alt="" width={30} height={30} />
                        <img src="https://i.ibb.co/vHXYtHF/ib-camera.png" alt="" width={30} height={30} />
                      </div>
                      <button className="send">
                        <div className="circle">
                          <FaMicrophone />
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
