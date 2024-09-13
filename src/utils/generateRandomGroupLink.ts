import { getRandomInt } from './getRandomInt';
export function generateRandomGroupLink(
  groupLink?: string,
  languageSelected?: string,
  consultationCharge?: string,
  monthDiff?: string,
  lactationWebinarLanguage?: string,
  currentPath?: string,
  originPath?: string,
): string {
  // If a specific group link is provided, return that
  console.log('groupLink', groupLink);
  // console.log('Origin Path', originPath);
  if (groupLink && groupLink.length > 0) {
    return groupLink;
  } else if (originPath && originPath === '/dr-aditi-birje') {
    return `http://babynama.in/joinaditi1`;
  } else if (originPath && originPath === '/dr-ritesh-yadav') {
    return `http://babynama.in/joinritesh1`
  } else if (currentPath === '/thank-you-lactation-webinar') {
    console.log('monthDiff', monthDiff);
    console.log('lactationWebinarLanguage', lactationWebinarLanguage);
    if (monthDiff) {
      const num: number = parseInt(monthDiff);
      let link: string;
      switch (num) {
        case 1:
          link = 'http://babynama.in/1month';
          break;
        case 2:
          link = 'http://babynama.in/2month';
          break;
        case 3:
        case 4:
        case 5:
          link = 'http://babynama.in/trimester2';
          break;
        default:
          link = 'http://babynama.in/trimester1';
          break;
      }
      return link;
    } else if (lactationWebinarLanguage === 'hindi') {
      return 'https://babynama.in/lactationwebinarhindi';
    } else {
      return 'https://babynama.in/lactationwebinar';
    }
  } else {
    // Determine the group suffix based on languageSelected
    console.log(consultationCharge);
    console.log(languageSelected);
    let groupSuffix = '';
    switch (languageSelected) {
      case 'hindi':
        groupSuffix = `h${getRandomInt(6, 12)}`;
        break;

      case 'english':
        groupSuffix = `e${getRandomInt(1, 8)}`;
        break;

      default:
        if (Math.random() < 0.5) {
          groupSuffix = `h${getRandomInt(6, 12)}`; // Hindi group number
        } else {
          groupSuffix = `e${getRandomInt(1, 8)}`; // English group number
        }
        break;
    }
    // console.log(`https://babynama.in/join${groupSuffix}`)
    return `https://babynama.in/join${groupSuffix}`;
  }
}
