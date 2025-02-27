import lactationThumbnail from '../../assets/images/breastfeeding-webinar/lactation-webinar-thumbnail.webp';
import drPoojaLac from '../../assets/images/doctors/drPooja.webp';
import drAnuradha from '../../assets/images/doctors/drAnuradha.webp';
import drVinothini from '../../assets/images/doctors/drVinothini.webp';
import drGazala from '../../assets/images/doctors/drGazalKhan.webp';
import drMehak from '../../assets/images/doctors/drMehak.webp';
import drSrividhya from '../../assets/images/doctors/drSrividhya.webp';
import drSushmita from '../../assets/images/doctors/drSushmita.webp';
import drGargi from '../../assets/images/doctors/drGargi.webp';
import drSumitraM from '../../assets/images/doctors/drSumitraM.webp';
import drSwatiThoda from '../../assets/images/doctors/dr-swati-thoda.webp';
import drShirley from '../../assets/images/doctors/drShirley.jpg';
import drDarshana from '../../assets/images/doctors/drDarshana.webp';
import drMamta from '../../assets/images/doctors/drMamta.jpg';
import drSharita from '../../assets/images/doctors/drSharita.jpg';
import drDipalee from '../../assets/images/doctors/drDipalee.jpg';
import save from '../../assets/images/Icons/save.png';
import FeedingBottleIcon from '../../assets/images/Icons/feedingBottle.png';
import nutritionIcon from '../../assets/images/Icons/nutrition.png';
import motherBabyIcon from '../../assets/images/Icons/motherBaby.png';
import expertIcon from '../../assets/images/Icons/expert.png';
import breastfeeding from '../../assets/images/Icons/breastfeeding.png';
import { ReactElement } from 'react';
import { StaticImageData } from 'next/image';

//types
export interface CallToAction {
  text: string;
  href: string;
  icon?: Function;
}
export interface Image {
  src: string | StaticImageData;
  alt: string;
}
export interface WeaningHeaderProps {
  titlePart1?: string | ReactElement;
  titlePart2?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  paymentButton: string;
  image?: Image;
}
export interface WeaningHeroProps {
  weaningHeroData: WeaningHeaderProps;
}

export interface LactationTeam {
  id?: number;
  avatar: StaticImageData;
  name: string;
  title: string;
  desc: string;
  rating: number;
  exp: number;
  whatsappLink: string;
}

export interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string | ReactElement;
  position?: 'center' | 'right' | 'left';
}
export interface LactationExpertData {
  header: Header;
  teams: LactationTeam[];
}

export interface Link {
  image?: Image;
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Function;
}

export interface Item {
  title?: string | boolean;
  description?: Array<string | JSX.Element> | string | undefined;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  callToAction?: CallToAction;
  link?: Link;
}

export interface Input {
  type: string;
  label?: string;
  value?: string;
  name: string;
  placeholder?: string;
}

export interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

export interface SmallForm {
  icon?: Function;
  input: Input;
  btn: Button;
}
export interface Tab {
  link?: Link;
  items: Array<Item>;
}

export interface FAQsProps {
  header?: Header;
  items?: Array<Item>;
  tabs?: Array<Tab>;
  link?: Link;
}

export interface FeatureItem {
  title?: string | ReactElement;
  image?: Image;
  primaryColor?: string;
  secondaryColor?: string;
  icon?: JSX.Element;
  description?: string | ReactElement;
  subtitle?: string | ReactElement;
  title1?: any;
  callToAction?: CallToAction;
}

export interface PreviewAccessFeaturesProps {
  header?: Header;
  title?: string | ReactElement;
  description?: string | ReactElement;
  items?: Array<FeatureItem>;
  onClick?: (item: FeatureItem) => void;
}

export interface FooterFixedButtonData {
  text: string;
  originalPrice: string;
  discountedPrice: string;
  buttonText: string;
  buttonTextWidth: string;
  onBookNowClicked: () => void;
}

//data
export const LactationHeroData: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: (
      <>
        Struggling to <span className="text-[#293BDB]">Breastfeed</span> your Newborn Baby?
      </>
    ),
    titlePart2: <></>,

    subtitle: (
      <>
        90% of breastfeeding issues can be solved with right guidance without any medication or artificial supplements.
      </>
    ),

    // titlePart2: `Baby Led Solids Food Start Workshop!`,
    paymentButton: 'Register for Live Session',
    callToAction: {
      text: 'Get recording now',
      href: '',
    },
    image: {
      src: lactationThumbnail,
      alt: 'Lactation Webinar',
    },
  },
};

export const lactationExpertData: LactationExpertData = {
  header: {
    highlight: 'Meet Our Lactation Experts',
    subtitle: '',
  },
  teams: [
    {
      id: 123,
      avatar: drSwatiThoda,
      name: 'Dr. Swati Thoda',
      title: 'Certified Lactation Counsellor',
      desc: '25 yrs, 6000+ mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      id: 104,
      avatar: drVinothini,
      name: 'Ms. Vinothini',
      title: 'Certified Lactation Expert',
      desc: '100+ mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Ms. Vinothini&type=phone_number',
    },
    {
      id: 103,
      avatar: drGazala,
      name: 'Dr. Gazal Khan',
      title: 'Lactation Counsellor, IBCLC, Infant Massage Trainer',
      desc: '8+ yrs, 750+ mothers',
      rating: 95,
      exp: 8,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Gazal Khan&type=phone_number',
    },
    {
      id: 134,
      avatar: drShirley,
      name: 'Shirley A',
      title: 'Child Birth Educator, Advanced Lactation Professional',
      desc: '1000+ mothers',
      rating: 95,
      exp: 8,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Gazal Khan&type=phone_number',
    },
    {
      id: 74,
      avatar: drDarshana,
      name: 'Dr. Darshana Rathod',
      title: 'MD Pediatrics (Mumbai)',
      desc: '10 yrs exp',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 138,
      avatar: drSharita,
      name: 'Dr. Sarita Bhatia Jain',
      title: 'BHMS, ACLP',
      desc: '2+ yrs exp, Helped 100+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 140,
      avatar: drMehak,
      name: 'Mehak Jain',
      title: 'ACLP',
      desc: '2+ yrs exp, Helped 100+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 145,
      avatar: drDipalee,
      name: 'Dr. Dipalee Patel',
      title: 'IBCLC and BHMS',
      desc: '3+ yrs exp, Helped 1000+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 144,
      avatar: drSrividhya,
      name: 'Srividhya Mohan',
      title: 'ACLP, BPNI',
      desc: '2+ yrs exp, Helped 2000+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 139,
      avatar: drSushmita,
      name: 'Sushmita Najundan',
      title: 'ACLP',
      desc: '2+ yrs exp, Helped 500+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 137,
      avatar: drMamta,
      name: 'Dr. Mamta Surpure',
      title: 'MD Homeopath, CCAH',
      desc: '10+ yrs exp, Helped 1000+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      id: 142,
      avatar: drGargi,
      name: 'Gargi Patel',
      title: 'MDS, CLP',
      desc: '4+ yrs exp, Helped 300+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },

    {
      id: 99,
      avatar: drPoojaLac,
      name: 'Dr. Pooja Marathe',
      title: 'Pediatric Nutritionist & Lactation Consultant',
      desc: '11+ yrs',
      rating: 95,
      exp: 11,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Pooja&type=phone_number',
    },
    {
      id: 105,
      avatar: drAnuradha,
      name: 'Dr. Anuradha Tikhe',
      title: 'Advanced Lactation Counsellor, MPH',
      desc: '5+ yrs, 500+ mothers',
      rating: 95,
      exp: 5,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anuradha&type=phone_number',
    },
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 yrs exp, ex-Safdarjung',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
  ],
};
export const faqs3LactationWebinarData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'How long is the lactation webinar?',
      description: `The webinar typically lasts for a duration of 45 minutes, including interactive sessions, expert presentations, and a live Q&A session.`,
    },
    {
      title: 'On which platform is the webinar conducted?',
      description: `Currently, the webinar is conducted online through zoom.`,
    },
    {
      title: 'What if I miss the session?',
      description: `We organize the webinar almost every weekend. If you miss to attend the session, you can just drop a mail to lactationwebinar@gagahealth.com and our team will help you with access to the next scheduled session.`,
    },
    {
      title: 'Is the webinar suitable for mothers who have had previous breastfeeding experiences?',
      description: `Yes, definitely! The webinar caters to a diverse audience, including mothers with previous breastfeeding experiences. It covers both fundamental and advanced topics, ensuring that participants at various stages of their breastfeeding journey can benefit from the webinar.`,
    },
    {
      title: 'Can I access the webinar recordings after the live session?',
      description: `If you fail to attend the webinar live, you can attend the next session information for which will be provided in the group.`,
    },
    {
      title: 'Why does breastfeeding hurt?',
      description: `Breastfeeding pain is often due to an improper latch. Ignoring this for too long can lead to low milk supply in the long run. Ensuring the baby’s mouth covers the nipple and areola can help reduce discomfort. Join the Webinar where our expert will demostrate deep latch techniques to help you resolve your breastfeeding pain.`,
    },
    {
      title: 'Why does breastfeeding hurt?',
      description: `Breastfeeding pain is often due to an improper latch. Ignoring this for too long can lead to low milk supply in the long run. Ensuring the baby’s mouth covers the nipple and areola can help reduce discomfort. Join the Webinar where our expert will demostrate deep latch techniques to help you resolve your breastfeeding pain.`,
    },
    {
      title: 'What should I do if my baby isn’t latching properly?',
      description: `Our expert will talk about these issues in detail during the webinar. You can join our Breastfeeding Training Program to get a dedicated lactation expert for personalised guidance in your breastfeeding journey.`,
    },
    {
      title: 'How can I increase my milk supply?',
      description: `In the breastfeeding webinar our expert will cover the basics of all these. Lactation experts can offer personalised tips by understanding the underlying issue better during a personal consultation. You can join our Breastfeeding Training Program for unlimited lactation support from a Breastfeeding expert.`,
    },
    {
      title: 'Is it normal for my baby to feed frequently?',
      description: `Yes, newborns often cluster feed, especially during growth spurts. It’s usually temporary and supports milk supply. But if it continues for more than 3 days, then there might be some latching issues. You can correct the latch and position by applying the techniques which will be discussed during the lactation webinar. Alternatively you can get personalised guidance from a dedicated lactation expert by joining our Breastfeeding training program.`,
    },
    {
      title: 'How do I choose the right breast pump?',
      description: `The right breast pump depends on your needs—whether you're pumping occasionally or regularly. Manual pumps are great for occasional use, while electric or double pumps are better for frequent pumping. Our lactation experts in the Breastfeeding Training Program can help assess your needs and guide you in selecting the most suitable pump, ensuring it aligns with your lifestyle and breastfeeding goals.`,
    },
  ],
};

export const LactationWebinarTopicsData: PreviewAccessFeaturesProps = {
  header: {
    title: 'What will You Learn in this Workshop',
    position: 'center',
  },
  items: [
    {
      title: 'What To Expect In The Initial Days Of Postpartum',
      image: {
        src: motherBabyIcon,
        alt: 'motherBabyIcon',
      },

      primaryColor: 'FCB895',
      secondaryColor: 'FFF9F4',
    },
    {
      title: 'Low milk supply: Myths VS Facts',
      image: {
        src: FeedingBottleIcon,
        alt: 'FeedingBottleIcon',
      },

      primaryColor: 'B3DF55',
      secondaryColor: 'FBFFF4',
    },
    {
      title: 'Nutrition For A Breastfeeding Mother',
      image: {
        src: nutritionIcon,
        alt: 'nutritionIcon',
      },

      primaryColor: 'DFBE0B',
      secondaryColor: 'FFFDF4',
    },
    {
      title: "When to seek Expert's support",
      image: {
        src: expertIcon,
        alt: 'expertIcon',
      },
      primaryColor: 'B8A9C9',
      secondaryColor: 'F5F4FF',
    },
    {
      title: 'Benefits Of Breastfeeding',
      image: {
        src: save,
        alt: 'save',
      },

      primaryColor: 'A8D5BA',
      secondaryColor: 'F4FFFB',
    },
    {
      title: 'Your guide to a good latch and different positions',
      image: {
        src: breastfeeding,
        alt: 'breastfeeding',
      },

      primaryColor: 'F39137',
      secondaryColor: 'FFF9F4',
    },
  ],
};

export const LactationWebinarButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '₹999',
  discountedPrice: 'FREE',
  buttonText: 'Register for Live Session',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[50%]',
};
