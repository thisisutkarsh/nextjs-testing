'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { usePathname, useRouter } from 'next/navigation';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whatsAppButtonPosition, setWhatsAppButtonPosition] = useState('bottom-[20px]');
  const [getIntouchPosition, setGetInTouchPosition] = useState('bottom-[80px]');
  const [modalPosition, setModalPosition] = useState('bottom-[10px] md:bottom-[15px]');
  const [firstCharacter, setFirstCharacter] = useState('');
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const utm_source = searchParams.get('utm_source');
  useEffect(() => {
    if (utm_source != null) {
      setFirstCharacter(utm_source.charAt(0));
    }
  }, [utm_source]);

  // Constants for visibility and animation control
  const pagesWithAnimation = [
    '/solids-food-start-workshop',
    '/lactation-consultation',
    '/pediatric-consultation',
    '/lactation-program',
  ];

  const pagesToHideBothButtons = [
    '/preview-access',
    '/preview-access-landing',
    '/dr-anupriya',
    '/dr-sumitra',
    '/evening-session',
    '/v2',
    '/lactation-webinar',
    '/community',
    '/doctors',
    '/testimonials',
    '/dr-darshana-rathod',
    '/submit',
    '/basic-care-one-month',
    '/basic-care',
    '/basic-care-three-months',
    '/prime-care-one-month',
    '/prime-care-three-months',
    '/holistic-care-one-month',
    '/holistic-care-three-months',
    '/lactation-history-form',
    '/pediatric-history-form',
  ];
  const pagesToShowGetInTouchText = [''];

  const carePlansPages = ['/care-plans', '/get-care-plan', '/essential-care', '/holistic-care', 'care-plans-info'];

  // Effects for animation and visibility
  useEffect(() => {
    setIsAnimating(pagesWithAnimation.includes(pathname));
    const handleScroll = () => {
      const threshold = 400;
      const scrollPosition = window.scrollY;
      const newIconPosition = scrollPosition > threshold ? 'bottom-[80px]' : 'bottom-[20px]';
      const newGetInTouchPosition = scrollPosition > threshold ? 'bottom-[121px]' : 'bottom-[80px]';
      const newModalPosition =
        scrollPosition > threshold ? 'bottom-[90px] md:bottom-[10px]' : 'bottom-[10px] md:bottom-[15px]';
      setWhatsAppButtonPosition(newIconPosition);
      setGetInTouchPosition(newGetInTouchPosition);
      setModalPosition(newModalPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Conditional rendering flags
  const showGetInTouchText = pagesToShowGetInTouchText.includes(pathname);
  const hideAllButtons = pagesToHideBothButtons.includes(pathname) || pathname.includes('thank-you');

  function getWhatsAppLink(): string {
    if (carePlansPages.includes(pathname)) {
      return `https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20Care%20Plan%20(${pathname
        .split('-')
        .join(' ')
        .replace('/', '')
        .trim()})`;
    } else if (pathname === '/plans-landing') {
      return `https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20Care%20Plan%20(essential%20care)`;
    } else if (pathname === '/baby-care-plan') {
      return `https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20Care%20Plan%20(essential%20care)`;
    } else if (pathname === '/dr-sumitra') {
      return 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Dr%20Sumitra%Preview%20Access';
    } else if (pathname === '/pediatric-consultation') {
      return `https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20want%20to%20Book%20a%20Consultation%20with%20Pediatrician`;
    } else if (pathname === '/solids-introduction-course') {
      return 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20Solids%20Course';
    } else if (pathname === '/baby-nutrition-program') {
      return 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20Nutrition%20Program';
    } else {
      return `https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20Need%20Help%20with%20Babynama%20(${pathname
        .split('-')
        .join(' ')
        .replace('/', '')
        .trim()})`;
    }
  }
  const handleWhatsAppButtonClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      router.push(getWhatsAppLink());
    }
  };

  return (
    <>
      {!hideAllButtons && (
        <>
          {showGetInTouchText && (
            <div
              className={`talk-bubble tri-right btm-right-alpha fixed ${getIntouchPosition} right-[15px] z-50 h-auto rounded-lg border-2 border-solid border-[#d0d3d6c6] bg-white text-black transition-opacity duration-300 md:bottom-[80px]`}
            >
              <div className="talktext">
                <p>Get in Touch</p>
              </div>
            </div>
          )}

          <div
            className={`fixed ${whatsAppButtonPosition} right-5 z-50 flex items-center justify-center md:bottom-[20px]`}
          >
            <div
              className={`cursor-pointer ${
                isAnimating ? 'animate-pulse' : ''
              } flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]`}
              onClick={handleWhatsAppButtonClick}
            >
              <FaWhatsapp className="text-3xl text-white" />
            </div>
          </div>

          {isModalOpen && (
            <div
              className={`modal fixed ${modalPosition} right-10 z-50 flex flex-col items-center justify-center rounded-xl md:bottom-[80px]`}
              style={{ background: 'linear-gradient(135deg, #87CEEB, #C084FC)' }}
            >
              <h1 className="py-2 text-lg font-bold text-white">Hi there!</h1>
              <div className="mx-2 mb-2 h-full w-[60vw] rounded-xl bg-white pb-2 md:w-60">
                <p className="px-1.5 pt-4 text-center text-sm text-black md:px-4">
                  Join our WhatsApp group to directly ask questions to our experienced pediatricians👩‍⚕️.
                </p>
                <div className="flex justify-center pb-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn-join-whatsapp flex h-8 w-28 items-center justify-center rounded-full bg-[#25D366] pl-1 pr-2"
                  >
                    <RiWhatsappFill size={22} color="white" />
                    <span className="pl-3 font-bold text-white">Join</span>
                  </button>
                </div>
                <p className="px-4 pb-1 text-center text-sm text-black">Need more Help?</p>
                <div className="flex justify-center">
                  <a
                    href="http://babynama.in/agent"
                    className="flex items-center text-sm text-primary-600 hover:underline"
                  >
                    Talk to our support team <HiChatBubbleLeftEllipsis size={28} />
                  </a>
                </div>
                <div
                  className="absolute right-0 top-[-23px] m-3 cursor-pointer rounded-full bg-white p-1 font-bold text-black transition duration-150 ease-in-out dark:text-black"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default WhatsAppButton;
