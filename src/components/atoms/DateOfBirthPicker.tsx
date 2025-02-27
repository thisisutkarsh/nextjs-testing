'use client';

import React, { useState } from 'react';

interface DateOfBirthPickerProps {
  onDateChange: (day: number, month: number, year: number) => void;
}

const DateOfBirthPicker: React.FC<DateOfBirthPickerProps> = ({ onDateChange }) => {
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear() + 1;

  // Call the onDateChange callback whenever any of the values change
  React.useEffect(() => {
    if (day !== null && month !== null && year !== null) {
      onDateChange(day, month, year);
    }
  }, [day, month, year, onDateChange]);

  return (
    <div className="flex flex-row space-y-0 space-x-2">
      {/* Day Dropdown */}
      <select
        value={day || ''}
        onChange={(e) => setDay(Number(e.target.value) || null)}
        className={`rounded-lg border-2 px-3 py-2 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${
          day ? 'border-blue-200' : 'border-gray-300'
        }`}
      >
        <option value="">Day</option>
        {/* Generate the options for days */}
        {Array.from({ length: 31 }, (_, index) => index + 1).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      {/* Month Dropdown */}
      <select
        value={month || ''}
        onChange={(e) => setMonth(Number(e.target.value) || null)}
        className={`rounded-lg border-2 px-3 py-2 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${
          month ? 'border-blue-200' : 'border-gray-300'
        }`}
      >
        <option value="">Month</option>
        {/* Generate the options for months */}
        {monthNames.map((monthName, index) => (
          <option key={index + 1} value={index + 1}>
            {monthName}
          </option>
        ))}
      </select>

      {/* Year Dropdown */}
      <select
        value={year || ''}
        onChange={(e) => setYear(Number(e.target.value) || null)}
        className={`rounded-lg border-2 px-3 py-2 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${
          year ? 'border-blue-200' : 'border-gray-300'
        }`}
      >
        <option value="">Year</option>
        {/* Generate the options for years */}
        {Array.from({ length: currentYear - 1999 }, (_, index) => currentYear - index).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateOfBirthPicker;
