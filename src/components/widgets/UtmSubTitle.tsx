const UtmSubTitle = () => {
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const utm_subtitle = searchParams.get('utm_subtitle');

  // Check if utm_subtitle is null or undefined
  const subTitleContent = utm_subtitle ? utm_subtitle : null;

  return subTitleContent;
};

// Capitalize the first letter of each word
// const capitalizeWords = (str: string) => {
//   const arr = str.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }

//   return arr.join(' ');
// };

export default UtmSubTitle;
