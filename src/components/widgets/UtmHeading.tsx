const UtmHeading = () => {
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const utm_heading = searchParams.get('utm_heading');

  // Check if utm_heading is null or undefined
  const headingContent = utm_heading ? capitalizeWords(utm_heading) : null;

  return headingContent;
};

// Capitalize the first letter of each word
const capitalizeWords = (str: string) => {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
};

export default UtmHeading;
