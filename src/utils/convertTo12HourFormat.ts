const convertTo12HourFormat = (time: string): string => {
  const [hour, minute, second] = time.split(':');
  let hourNumber = parseInt(hour);
  const period = hourNumber >= 12 ? 'PM' : 'AM';

  if (hourNumber > 12) {
    hourNumber -= 12;
  } else if (hourNumber === 0) {
    hourNumber = 12;
  }

  return `${hourNumber}:${minute} ${period}`;
};

export default convertTo12HourFormat;
