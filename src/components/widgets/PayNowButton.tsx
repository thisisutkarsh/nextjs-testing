import React from 'react';
interface PayNowButtonProps {
  onClick: () => void;
  buttonText: string;
  isDisabled: boolean;
}

const PayNowButton: React.FC<PayNowButtonProps> = ({ onClick, buttonText, isDisabled }) => (
  <div>
    <button
      type="button"
      className=" btn btn-primary mb-3 w-full cursor-pointer transition-all sm:mb-1"
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  </div>
);

export default PayNowButton;
