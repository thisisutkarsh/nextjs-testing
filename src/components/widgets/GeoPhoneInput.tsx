import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface GeoPhoneInputProps {
  mobile: string;
  setMobile: (value: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

const GeoPhoneInput: React.FC<GeoPhoneInputProps> = ({
  mobile,
  setMobile,
  isDisabled = false,
  placeholder = 'Enter your mobile number',
}) => {
  const [countryCode, setCountryCode] = useState<string>('in'); // default to India

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const country = response.data.country_code.toLowerCase();
        setCountryCode(country);
      } catch (error) {
        setCountryCode('in');
        console.error('Error fetching user country:', error);
      }
    };

    fetchUserCountry();
  }, []);

  return (
    <label className="flex flex-col">
      <PhoneInput
        country={countryCode}
        onChange={(phone: string) => setMobile(phone)}
        isValid={(value: string) => {
          if (value.match(/12345/)) {
            return 'Invalid value: ' + value;
          } else if (value.match(/1234/)) {
            return false;
          } else {
            return true;
          }
        }}
        enableSearch={true}
        dropdownStyle={{ top: 30, border: '2px solid #3b82f6', borderRadius: '10px' }}
        searchStyle={{ padding: '10px', width: '90%', borderRadius: '8px' }}
        inputClass="w-[100%!important]"
        countryCodeEditable={false}
        value={mobile}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </label>
  );
};

export default GeoPhoneInput;
