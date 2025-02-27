import React from 'react';
import { usePathname } from 'next/navigation';
import { CountDownTimerProps } from '../../shared/types';

const getDateDisplay = (targetDate: Date): string => {
  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const monthText = monthsList[targetDate.getUTCMonth()];
  const dayNumber = targetDate.getUTCDate();
  const weekDayText = daysOfWeek[targetDate.getUTCDay()];

  return `${monthText} ${dayNumber}, ${weekDayText}`;
};

const getTimeDisplay = (inputDate: Date): string => {
  // IST Offset: UTC+5:30
  const offsetHoursIST = 5;
  const offsetMinutesIST = 30;

  let convertedHours = inputDate.getUTCHours() + offsetHoursIST;
  let convertedMinutes = inputDate.getUTCMinutes() + offsetMinutesIST;

  // Minute overflow adjustment
  if (convertedMinutes >= 60) {
    convertedHours += 1;
    convertedMinutes -= 60;
  }

  // Hour overflow adjustment
  if (convertedHours >= 24) {
    convertedHours -= 24;
  }

  // AM/PM determination
  const periodOfDay = convertedHours >= 12 ? 'PM' : 'AM';

  // 12-hour format adjustment
  convertedHours = convertedHours % 12;
  convertedHours = convertedHours || 12; // Convert '0' hour to '12'
  const minutesPadded = convertedMinutes < 10 ? `0${convertedMinutes}` : convertedMinutes.toString();

  return `${convertedHours}:${minutesPadded} ${periodOfDay}`;
};

// to check if date is weekend
function isWeekend(date: Date): boolean {
  const day = date.getUTCDay();
  return day === 6 || day === 0;
}

const GetNextWorkshopDate: React.FC<{ eventTiming: CountDownTimerProps }> = ({ eventTiming }) => {
  const pathname = usePathname();
  let upcomingEventDate = new Date(eventTiming.endDate.getTime());

  // Adjust if current date is past event date
  while (new Date() >= upcomingEventDate) {
    if (
      pathname === '/lactation-webinar' ||
      pathname === '/breastfeeding-seminar' ||
      pathname === '/breastfeeding-webinar'
    ) {
      const currentDate = new Date();
      const currentHours = currentDate.getHours();

      // if current time is after 7 PM, add 2 days
      if (currentHours >= 19) {
        upcomingEventDate.setDate(upcomingEventDate.getDate() + 2);
      }
      // if current time is before 7 PM, add 1 day
      else {
        upcomingEventDate.setDate(upcomingEventDate.getDate() + 1);
      }

      // skip weekend
      while (isWeekend(upcomingEventDate)) {
        upcomingEventDate.setDate(upcomingEventDate.getDate() + 1);
      }
    } else if (pathname === '/solids-food-start-workshop') {
      upcomingEventDate.setUTCDate(upcomingEventDate.getUTCDate() + 30);
    } else if (pathname === '/solids-introduction-course') {
      upcomingEventDate.setUTCDate(upcomingEventDate.getUTCDate() + 10);
    } else {
      break; // Safety break in case no condition is met
    }
  }

  const displayDate = getDateDisplay(upcomingEventDate);
  const displayTime = getTimeDisplay(upcomingEventDate);

  // Special formatting for lactation webinar
  if (
    pathname === '/lactation-webinar' ||
    pathname === '/breastfeeding-seminar' ||
    pathname === '/breastfeeding-webinar'
  ) {
    return <span>{`${displayDate} 4PM-5PM`}</span>;
  }

  return <span>{`${displayDate} ${displayTime}`}</span>;
};

export default GetNextWorkshopDate;
