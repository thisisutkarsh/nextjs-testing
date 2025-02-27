import React, { useEffect, useState, useMemo } from 'react';
import { generateRandomGroupLink } from '../../utils/generateRandomGroupLink';

interface ThankYouRedirectProps {
  groupLink?: string;
  initialCountdown: number;
  onCountdownChange: (countdown: number) => void;
  passedUrlData?: Array<string>;
  currentPath?: string;
  originPath?: string;
}

const ThankYouRedirect: React.FC<ThankYouRedirectProps> = ({
  groupLink,
  initialCountdown,
  onCountdownChange,
  passedUrlData,
  currentPath,
  originPath,
}) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  // useMemo will return a memoized value that only changes if one of its dependencies has changed.
  const generatedGroupLink = useMemo(() => {
    // Use passedUrlData if available, otherwise just use groupLink.
    return passedUrlData
      ? generateRandomGroupLink(groupLink, ...passedUrlData, currentPath, originPath)
      : generateRandomGroupLink(groupLink, currentPath);
  }, [groupLink, passedUrlData ? JSON.stringify(passedUrlData) : null]); // Using JSON.stringify to handle array dependencies

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        onCountdownChange(prevCountdown);
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [onCountdownChange]);

  useEffect(() => {
    if (countdown === 1) {
      window.location.href = generatedGroupLink;
    }
  }, [countdown, generatedGroupLink]);

  return <></>;
};

export default ThankYouRedirect;
