import { useState, useEffect } from 'react';

interface ScheduleEntry {
  day: number;
  time: string;
  seats: number;
}

const SeatCounter: React.FC = () => {
  const [seatsLeft, setSeatsLeft] = useState<number>(7);

  const getCurrentDay = (): number => {
    const currentDate = new Date();
    return currentDate.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
  };

  const getCurrentTime = (): string => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const calculateRemainingSeats = (): number => {
    const currentDay = getCurrentDay();
    const currentTime = getCurrentTime();

    // Define the schedule
    const schedule: ScheduleEntry[] = [
      { day: 0, time: '14:00', seats: 7 },
      { day: 1, time: '14:00', seats: 6 },
      { day: 2, time: '14:00', seats: 5 },
      { day: 3, time: '14:00', seats: 4 },
      { day: 4, time: '14:00', seats: 3 },
      { day: 5, time: '14:00', seats: 2 },
      { day: 6, time: '14:00', seats: 1 },
    ];

    const currentTimeValue = Number(currentTime.split(':').join(''));

    // console.log('Current Day:', currentDay);
    // console.log('Current Time:', currentTime);
    // console.log('Current Time Value:', currentTimeValue);

    // Find the schedule entry that matches the current day and time
    const currentSchedule = schedule.find((entry) => {
      const entryTimeValue = Number(entry.time.split(':').join(''));
      // console.log('Entry Time Value:', entryTimeValue);
      const currentDayValue = currentDay ;
      // console.log(currentDayValue)
      return entry.day === currentDayValue && entryTimeValue <= currentTimeValue;
    });

    // console.log('Current Schedule:', currentSchedule);

    if (currentSchedule) {
      const occupiedSeats = currentSchedule.seats;
      setSeatsLeft(occupiedSeats);
      return occupiedSeats;
    } else {
      const previousDay = (currentDay + 6) % 7; // Calculate the previous day using modulo 7
      const previousDaySchedule = schedule.find((entry) => entry.day === previousDay);
      if (previousDaySchedule) {
        const seats = previousDaySchedule.seats;
        setSeatsLeft(seats);
        return seats;
      } else {
        return seatsLeft;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingSeats = calculateRemainingSeats();
      setSeatsLeft(remainingSeats);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{`${seatsLeft}/10 Seats left`}</>;
};

export default SeatCounter;
