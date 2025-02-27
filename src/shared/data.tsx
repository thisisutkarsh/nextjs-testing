/* eslint-disable react/no-unescaped-entities */
import {
  IconArrowDown,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconClock,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRss,
  IconHeartHandshake,
} from '@tabler/icons-react';
import { MdOutlineQuickreply, MdOutlineContactEmergency, MdOutlineFoodBank } from 'react-icons/md';
import { FaHandshake, FaHospitalUser, FaBaby, FaHandHoldingMedical, FaCheckCircle } from 'react-icons/fa';
import { GrWorkshop } from 'react-icons/gr';
import { BsFillChatRightHeartFill } from 'react-icons/bs';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Motherhood1 from '../assets/images/motherhood/trimester1.jpg';
import Motherhood2 from '../assets/images/motherhood/trimester2.jpg';
import Motherhood3 from '../assets/images/motherhood/trimester3.jpg';
import {
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  StepsProps,
  TestimonialProps,
  TestimonailProps2,
  ServiceProps,
  ApiData,
  Hero3ApiData,
  Hero3Props,
  Hero3FreeProps,
  IdentifyPreviewAccessProps,
  PreviewAccessFeaturesProps,
  WeaningWorkShopFeaturesProps,
  WeaningHeroProps,
  WeaningApiData,
  ReferralApiData,
  Hero3FormApiData,
  CountDownTimerProps,
  Hero3WeaningBrochureApiData,
  Plan,
  WeaningEmailApiData,
  WorkshopDoctor,
  FooterFixedButtonData,
  LactationWebinarFormApiData,
  ThankYouData,
  ThankYouPlan,
  LactationQuotesProps,
  CareWhyBabynamaProps,
  CareBabynamaHeaderProps,
  SectionProps,
  doctorFooterProps,
  SalesApiData,
  ExclusiveGroup,
  ComparisonPlan,
  StatsApiData,
  PlusPricingPlan,
  TeamV2Props,
  MeetingData,
  DoctorsData,
  LactationExpertData,
  HeroYogaCardProps,
  LactationApiData,
  WeaningWorkshopApiData,
  infoContentWeaningWorkshop,
  TestimonialHeaderProps,
  ProgramPlanCardProps,
  LactationHistoryFormApiData,
  ChooseLactationExpertFormApiData,
  MotherhoodPlan,
  PediatricDetailsFormApiData,
  UpdatedPlan,
  HeroPropsPlansLanding,
  BreastfeedingSeminarHeroDataProps,
} from './types';

import heroImg from '../assets/images/hero2.webp';
import emergencySupportImg from '../assets/images/emergency-support.webp';
import whatsappGroupImg from '../assets/images/whatsapp-group.webp';
import pediatricianImg from '../assets/images/pediatrician.webp';
import emergencyImg from '../assets/images/emergency.webp';
import googleSearchImg from '../assets/images/google-search.webp';
import waitingImg from '../assets/images/waiting.webp';
import motherImg from '../assets/images/mother.jpg';
import fatherImg from '../assets/images/fathersIdentity.webp';
import logoImg from '../assets/images/logo-new.webp';
import weaningImg2 from '../assets/images/mother-baby.webp';
import wtpHeroImg from '../assets/images/wtp-hero-image-v2.webp';
import PreviewFather from '../assets/images/happy family.webp';
import SnehithaProfile from '../assets/images/testimonialImage/SnehithaProfile.webp';
import yogeshProfile from '../assets/images/testimonialImage/yogeshProfile.webp';
import ranjana from '../assets/images/testimonialImage/ranjana.webp';
import reshmi from '../assets/images/testimonialImage/reshmi.webp';
import snehitha from '../assets/images/testimonialImage/snehitha.webp';
import Harshita from '../assets/images/testimonialImage/Harshitha.webp';
import yamini from '../assets/images/testimonialImage/yamini.webp';
import RanjanProfile from '../assets/images/testimonialImage/Ranjanaprofile.webp';
import BrijalProfile from '../assets/images/testimonialImage/BrijalProfile.webp';
import RuchiProfile from '../assets/images/testimonialImage/RuchiProfile.webp';
import RajProfile from '../assets/images/testimonialImage/RajProfile.webp';
import VaibhaviProfile from '../assets/images/testimonialImage/VaibhaviProfile.webp';
import ReshmiProfile from '../assets/images/testimonialImage/Reshmiprofile.webp';
import sumeet from '../assets/images/testimonialImage/sumeet.webp';
import Akshata from '../assets/images/testimonialImage/Akansha.webp';
import SallwiProfile from '../assets/images/testimonialImage/SallwiProfile.webp';
import NoorAyeshaProfile from '../assets/images/testimonialImage/NoorAyeshaProfile.webp';
import RuchitaProfile from '../assets/images/testimonialImage/RuchitaProfile.webp';
import NikitaProfile from '../assets/images/testimonialImage/NikitaProfile.webp';
import PallaviProfile from '../assets/images/testimonialImage/PallaviProfile.webp';
import AnshuProfile from '../assets/images/testimonialImage/AnshuProfile.webp';
import NidhiProfile from '../assets/images/testimonialImage/NidhiProfile.webp';
import gifting from '../assets/images/gifting/gifting.webp';
import guidanceImg from '../assets/images/guidance.webp';
import qaImg from '../assets/images/q&a.webp';
import recording from '../assets/images/recording.webp';
import longterm from '../assets/images/sleep-training/longterm.png';
import techniques from '../assets/images/sleep-training/techniques.png';
import breastfeedingSupport from '../assets/images/breastfeedingSupport.webp';
import brainIcon from '../assets/images/Icons/brain.png';
import babyPlaying from '../assets/images/baby-playing.webp';
import sleep from '../assets/images/Icons/sleeping.png';
import sleepyIcon from '../assets/images/Icons/sleepy.png';
import sleepingBaby from '../assets/images/Icons/sleeping-baby.png';
import toddler from '../assets/images/Icons/sleeping-baby.png';
import sleepingPropIcon from '../assets/images/Icons/sleeping-prop.png';
import insomniaIcon from '../assets/images/Icons/insomnia.png';
import unableSleepIcon from '../assets/images/Icons/problem-sleep.png';
import awakeIcon from '../assets/images/Icons/awake.png';
import bedIcon from '../assets/images/Icons/bed.png';
import parentsIcon from '../assets/images/Icons/parents.png';
import pregnant from '../assets/images/sleep-training/pregnant.png';
import working from '../assets/images/sleep-training/working.png';
import stressfree from '../assets/images/sleep-training/stressfree.png';
import independence from '../assets/images/sleep-training/independence.png';
import expert from '../assets/images/sleep-training/expert.png';
import mentalhealth from '../assets/images/Icons/mental-health.png';
import feeding from '../assets/images/feeding-baby.webp';
import pediatricIcon from '../assets/images/gifting/pediatric Support.webp';
import growthIcon from '../assets/images/gifting/Monthly growth.webp';
import WhatsAppRepliesIcon from '../assets/images/gifting/WhatsApp replies.webp';
import LactationSupportIcon from '../assets/images/gifting/Lactation Support.webp';
import percentIcon from '../assets/images/gifting/50-percent.webp';
import Feedback from '../assets/images/gifting/Feedback.webp';
import giftingAboutImage from '../assets/images/gifting/gifting-about.webp';
import twentyPercent from '../assets/images/Icons/20-percent.webp';
import doctorsGroup from '../assets/images/doctors-group.webp';
import drPoojaLac from '../assets/images/doctors/drPooja.webp';
import drAnuradha from '../assets/images/doctors/drAnuradha.webp';
import drVinothini from '../assets/images/doctors/drVinothini.webp';
import drGazala from '../assets/images/doctors/drGazalKhan.webp';
import drMehak from '../assets/images/doctors/drMehak.webp';
import drSrividhya from '../assets/images/doctors/drSrividhya.webp';
import drSushmita from '../assets/images/doctors/drSushmita.webp';
import drGargi from '../assets/images/doctors/drGargi.webp';
import missSheeba from '../assets/images/doctors/missSheeba.jpg';
import missSimran from '../assets/images/doctors/missSimran.jpg';
import drDipalee from '../assets/images/doctors/drDipalee.jpg';
//Testimonials
import Priyadharshini from '../assets/images/testimonialImage/Priyadharshini.webp';
import SakshiProfile from '../assets/images/testimonialImage/SakshiProfile.webp';
import S from '../assets/images/testimonialImage/S.webp';
import P from '../assets/images/testimonialImage/P.webp';
import A from '../assets/images/testimonialImage/A.webp';
import C from '../assets/images/testimonialImage/C.webp';
import R from '../assets/images/testimonialImage/R.webp';
import D from '../assets/images/testimonialImage/D.webp';
import J from '../assets/images/testimonialImage/J.webp';
import N from '../assets/images/testimonialImage/N.webp';
import K from '../assets/images/testimonialImage/K.webp';
import V from '../assets/images/testimonialImage/V.webp';
import Y from '../assets/images/testimonialImage/Y.webp';
import M from '../assets/images/testimonialImage/M.webp';
import H from '../assets/images/testimonialImage/H.webp';
//Yoga
import PostpartumYoga from '../assets/images/yoga/PostpartumYoga.webp';
import AboutYoga from '../assets/images/yoga/AboutYoga.webp';
import cardyoga1 from '../assets/images/yoga/cardyoga1.webp';
import cardyoga2 from '../assets/images/yoga/cardyoga2.webp';
import cardyoga3 from '../assets/images/yoga/cardyoga3.webp';
import cardyoga4 from '../assets/images/yoga/cardyoga4.webp';
import VeerbhadraAsna from '../assets/images/heroYoga/Natraja-asna.webp';
import Padhastasana from '../assets/images/heroYoga/Nuakasana.webp';
import Nuakasana from '../assets/images/heroYoga/Padhastasana.webp';
import ParvatAsana from '../assets/images/heroYoga/Parvat-asana.webp';
import NatrajaAsna from '../assets/images/heroYoga/Paschimottanasana.webp';
import Setubandhasana from '../assets/images/heroYoga/Setubandhasana.webp';
import Paschimottanasana from '../assets/images/heroYoga/Veerbhadra-asna-1.webp';
//Doctors
import drAnupriya from '../assets/images/doctors/drAnupriya.webp';
import drChandani from '../assets/images/doctors/drChadani.webp';
import drdhanya from '../assets/images/doctors/drDhanya.webp';
import drNikita from '../assets/images/doctors/drNikita.webp';
import drPriyanka from '../assets/images/doctors/drPriyanka.webp';
import drRajat from '../assets/images/doctors/drRajat.webp';
import drSumitraM from '../assets/images/doctors/drSumitraM.webp';
import drSwatiThoda from '../assets/images/doctors/dr-swati-thoda.webp';

//YogaInstructor
import Kavita1 from '../assets/images/yoga/kavita1.webp';
import Kavita2 from '../assets/images/yoga/kavita2.webp';
import Kavita3 from '../assets/images/yoga/kavita3.webp';
//Dr.Aditi
import DrAditi from '../assets/images/dr_aditi/Dr_Aditi.webp';

import AboutDrAditi from '../assets/images/dr_aditi/DrAditiAbout.webp';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiMilkCarton } from 'react-icons/gi';
import HeroHolisticCare from '../assets/images/holistic-website.webp';
import HeroPrimeCare from '../assets/images/prime-care-hero.webp';
import btpHero from '../assets/images/btp-hero-image.jpg';

import {
  AiOutlineApple,
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineLineChart,
  AiOutlineSolution,
  AiOutlineUsergroupAdd,
  AiOutlineWarning,
} from 'react-icons/ai';
import CareBabynama from '../assets/images/care-Babynama.webp';

// For sales
import babySalesFirst from '../assets/images/sales/baby-sales-first.webp';
import babySalesSecond from '../assets/images/sales/baby-sales-second.webp';
import babySalesThird from '../assets/images/sales/baby-sales-third.webp';

import { FaHands } from 'react-icons/fa';
import { RiEmpathizeLine } from 'react-icons/ri';
import AditiLogo from '../assets/images/dr_aditi/dr-aditi-logo.webp';
import BabynamaDoctorLogo from '../assets/images/babynamaLogo.webp';

import doctorSumitraHero from '../assets/images/doctors/drSumitra3-v2.jpg';
import doctorSumitraAbout from '../assets/images/doctors/drSumitra2.webp';
import doctorAnupriyaHero from '../assets/images/doctor-anupriya/doctoranupriyaHero.webp';
import doctorAnupriyaAbout from '../assets/images/doctor-anupriya/drAnupriyaAbout.webp';
import doctorPuneetHero from '../assets/images/dr-puneet/puneet-hero.jpg';
import doctorPuneetAbout from '../assets/images/dr-puneet/puneet-about.jpg';
import giftingFather from '../assets/images/gifting-father.webp';
import doctorSrimukhiHero from '../assets/images/dr-srimukhi/doctorSrimukhiHero.webp';
import doctorSrimukhiAbout from '../assets/images/dr-srimukhi/doctorSrimukhiAbout.webp';
import doctorPoojanpreetAbout from '../assets/images/dr-poojanpreet/doctorPoojanpreetAbout.webp';
import doctorPoojanpreetHero from '../assets/images/dr-poojanpreet/doctorPoojanpreetHero.webp';

import consultationHero from '../assets/images/hero-consultation.webp';
import immediate from '../assets/images/immediate.png';
import roundTheClock from '../assets/images/24-7.webp';
import moneyBack from '../assets/images/moneyback-v2.webp';
import followUp from '../assets/images/follow-up.png';
import drChandniV2 from '../assets/images/doctors-removed-bg/dr-chandni.png';
import drNitikataV2 from '../assets/images/doctors-removed-bg/dr-nitika.png';
import drPriyankaV2 from '../assets/images/doctors-removed-bg/dr-priyanka.png';
import drDhanyaV2 from '../assets/images/doctors-removed-bg/dr-dhanya.png';
import drSumitraV2 from '../assets/images/doctors-removed-bg/dr-sumitra.png';
import drRajatV2 from '../assets/images/doctors-removed-bg/dr-rajat.png';
import drAnupriyaV2 from '../assets/images/doctors-removed-bg/dr-anupriya.png';
import pricingIcon from '../assets/images/header/healthcare.webp';
import programIcon from '../assets/images/header/group-chat.webp';
import blogIcon from '../assets/images/header/blog.webp';
import testimonialIcon from '../assets/images/header/testimonial.webp';
import partnerIcon from '../assets/images/header/father-gift.webp';
import giftIcon from '../assets/images/header/giftIcon.webp';
import referIcon from '../assets/images/header/refer.webp';
import babyIcon from '../assets/images/header/baby.webp';
import lactationIcon from '../assets/images/header/breastfeeding.webp';
import doctorIcon from '../assets/images/header/laptop.webp';
import doctorsTeamIcon from '../assets/images/header/medical-team.webp';
import whyBabynamaIcon from '../assets/images/header/any-question-about-health.webp';
import HomeIcon from '../assets/images/header/nursing-room.webp';
import planHighlightsIcon from '../assets/images/header/health-insurance.webp';
import femaleDoctorIcon from '../assets/images/header/doctorFemale.webp';
import maleDoctorIcon from '../assets/images/header/doctor.webp';
import doctorDarshanaHero from '../assets/images/dr-darshana/drDarshanaHero.webp';
import doctorDarshanaAbout from '../assets/images/dr-darshana/drDarshanaHero.webp';
import lactationConsultationIcon from '../assets/images/header/lactation.webp';
import essentialMobile from '../assets/images/babynama-essential-care.jpg';
import holisticMobile from '../assets/images/babynama-holistic-care.webp';
import breastfeeding from '../assets/images/Icons/breastfeeding.png';
import breastfeedingBW from '../assets/images/Icons/breastfeedingBW.png';
import pediatrics from '../assets/images/Icons/pediatrics.png';
import save from '../assets/images/Icons/save.png';
import lifeIcon from '../assets/images/Icons/lifeIconsvg.svg';
import PercentDiscountIcon from '../assets/images/Icons/20PercentDiscount.png';
import PainIcon from '../assets/images/Icons/pain.png';
import nippleIcon from '../assets/images/Icons/nipple.png';
import IncreaseIcon from '../assets/images/Icons/increase.png';
import FeedingBottleIcon from '../assets/images/Icons/feedingBottle.png';
import FeedingBottleIconBW from '../assets/images/Icons/feeding-bottleBW.png';
import BreastPumpIcon from '../assets/images/Icons/breastpump.png';
import nutritionIcon from '../assets/images/Icons/nutrition.png';
import nutritionIconBW from '../assets/images/Icons/nutritionBW.png';
import motherBabyIcon from '../assets/images/Icons/motherBaby.png';
import expertIcon from '../assets/images/Icons/expert.png';
import expertIconBW from '../assets/images/Icons/expertBW.png';
import planIcon from '../assets/images/Icons/plan.png';
import videoCallIcon from '../assets/images/Icons/video-call.png';
import allergyIcon from '../assets/images/Icons/allergy.png';
import multivitaminIcon from '../assets/images/Icons/multivitamin.png';
import healthyFoodIcon from '../assets/images/Icons/healthy-food.png';
import nutritionDietIcon from '../assets/images/Icons/nutrition-diet.png';
import immuneIcon from '../assets/images/Icons/immunity.png';
import videoIcon from '../assets/images/Icons/video.png';
import whatsappBlackIcon from '../assets/images/Icons/whatsapp-black.png';
import plansIcon from '../assets/images/Icons/check-list.png';
import trainingIcon from '../assets/images/Icons/training.png';
import nutritionPlanIcon from '../assets/images/Icons/nutrition-plan.png';
import checkupIcon from '../assets/images/Icons/check-up.png';
import hourIcon from '../assets/images/Icons/24-hour.png';
import monthlyIcon from '../assets/images/Icons/monthly.png';
import drSneha from '../assets/images/doctors/drSneha.jpg';
import msNishtha from '../assets/images/doctors/msNishtha.jpg';
import lactationThumbnail from '../assets/images/breastfeeding-webinar/lactation-webinar-thumbnail.webp';
import drShirley from '../assets/images/doctors/drShirley.jpg';
import drDarshana from '../assets/images/doctors/drDarshana.webp';
import drMamta from '../assets/images/doctors/drMamta.jpg';
import drSharita from '../assets/images/doctors/drSharita.jpg';
import heroSleepTraining from '../assets/images/stp-hero-image.jpg';
import heroSolidsCourse from '../assets/images/solids-course-hero.jpg';
const youtubeUrlStructure = 'https://www.youtube.com/embed/';
const trailingUrl = typeof window !== 'undefined' ? `?showinfo=0&enablejsapi=1&origin=${window.location.origin}` : '';

//Home Page Fixed Bottom Button Data

export const homeFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Try For 1 Month`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const headerData: HeaderProps = {
  links: [
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care Plans',
      href: '/care-plans',
    },
    {
      image: {
        src: programIcon,
        alt: 'programIcon',
      },
      label: 'Programs',
      icon: MdKeyboardArrowRight,
      links: [
        {
          image: {
            src: babyIcon,
            alt: 'babyIcon',
          },
          label: 'Baby Solids Introduction',
          href: '/solids-food-start-workshop',
        },
        {
          image: {
            src: lactationConsultationIcon,
            alt: 'breastfeeding-training-program',
          },
          label: 'Breastfeeding Training Program',
          href: '/breastfeeding-training-program',
        },
        {
          image: {
            src: nutritionPlanIcon,
            alt: 'baby-nutrition-training-program',
          },
          label: 'Baby Nutrition Training Program',
          href: '/baby-nutrition-training-program',
        },

        {
          image: {
            src: sleepingBaby,
            alt: 'sleeping workshop',
          },
          label: 'Sleep Training Workshop',
          href: '/sleep-training-program',
        },
      ],
    },
    {
      image: {
        src: trainingIcon,
        alt: 'trainingIcon',
      },
      label: 'Free Workshops',
      icon: MdKeyboardArrowRight,
      links: [
        {
          image: {
            src: lactationIcon,
            alt: 'lactationIcon',
          },
          label: 'Lactation Workshop',
          href: '/lactation-webinar',
        },
      ],
    },
    // {
    //   image: {
    //     src: giftIcon,
    //     alt: 'giftIcon',
    //   },
    //   label: 'Gift a subscription',
    //   icon: MdKeyboardArrowRight,
    //   links: [
    //     {
    //       image: {
    //         src: partnerIcon,
    //         alt: 'partnerIcon',
    //       },
    //       label: 'Gift your partner',
    //       href: '/gifting-father',
    //     },
    //     {
    //       image: {
    //         src: giftIcon,
    //         alt: 'giftIcon',
    //       },
    //       label: 'Gift your friend',
    //       href: '/gifting',
    //     },
    //     {
    //       image: {
    //         src: referIcon,
    //         alt: 'referIcon',
    //       },
    //       label: 'Referrals',
    //       href: '/referrals',
    //     },
    //   ],
    // },
    {
      image: {
        src: blogIcon,
        alt: 'blogIcon',
      },
      label: 'Blogs',
      href: '/blog',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/testimonials',
    },
  ],
  actions: [
    {
      label: 'Emergency Consultation',
      href: '/emergency-consultation',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Hero data
export const heroData: HeroProps = {
  title: 'Pediatricians Just a WhatsApp Message Away',
  subtitle: 'Reliable Pediatric Care within 15 Minutes',
  callToAction: {
    text: 'Care Plans',
    href: '#pricing',
  },
  callToAction2: {
    text: 'Try for 1 Month',
    href: '/plans-landing',
  },
  image: {
    src: heroImg,
    alt: 'Babynama',
  },
};

export const logoImage = {
  src: logoImg,
  alt: 'Babynama Logo',
};

export const serviceData: ServiceProps[] = [
  {
    id: 1,
    icon: <AiOutlineUsergroupAdd />,
    title: 'Dedicated Pediatrician Partner',
    desc: 'Avail a dedicated pediatrician who will work closely with you and make a personalized care plan for you and your baby.',
  },
  {
    id: 2,
    icon: <AiOutlineClockCircle />,
    title: '15-Minute Response Time',
    desc: 'Our medical experts are available 24/7 to answer your questions. Drop your concerns related to your baby and our doctors will respond to them in less than 15 minutes.',
  },
  {
    id: 3,
    icon: <AiOutlineWarning />,
    title: 'Emergency Care',
    desc: 'Millions of parents reach out to the ER for queries that can be resolved over online consultations. You can avail an emergency online consultation with pediatrician anytime with us and consult a pediatrician within 15 minutes',
  },
  {
    id: 4,
    icon: <FaHands />,
    title: 'Lactation Counselling',
    desc: 'Our Lactation Counsellors and specialists are here to help mothers overcome breastfeeding challenges, blocked milk duct, mastitis, breast abscess, etc.',
  },
  {
    id: 5,
    icon: <AiOutlineApple />,
    title: 'Child Nutritionist',
    desc: 'If you are planning to introduce solids or have any other nutrition question our child nutrition experts will help you.',
  },
  {
    id: 6,
    icon: <AiOutlineHeart />,
    title: 'Postpartum Care',
    desc: 'Babynama has come with its postpartum care to provide psychological support to new mothers.',
  },
  {
    id: 7,
    icon: <AiOutlineLineChart />,
    title: 'Growth & Development Tracking',
    desc: "Your baby's growth and development gets tracked regularly to ensure everything is fine.",
  },
  {
    id: 8,
    icon: <RiEmpathizeLine />,
    title: 'Empathic Doctors',
    desc: 'Our doctors are empathetic and understand new parents. You never have to worry about asking even the silliest of your questions.',
  },
  {
    id: 9,
    icon: <AiOutlineSolution />,
    title: 'Motherhood Workshops',
    desc: 'Access specialized workshops tailored to support new mothers on topics like lactation, baby-led weaning, and managing postpartum stress, all led by experienced professionals.',
  },
];

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    highlight: 'Frequently Asked Questions',
    subtitle: 'All your questions answered in one place. If you have any other questions, please contact us.',
  },
  items: [
    {
      title: 'What kind of questions can I ask on WhatsApp?',
      description: `You can ask any questions coming to your mind, no matter how silly you think it is. Our doctors patiently reply to each question. Most of the questions are answered on chat iself. For some questions where medication or detailed evaluation is needed video cosultation is recommended by doctors.`,
    },
    {
      title: 'How fast can I expect reply?',
      description: `In most cases almost immediately. You get response within 15 minutes.`,
    },
    {
      title: 'Do I have access to a doctor 24x7?',
      description: `Yes, our doctors are available 24/7 for consultation.`,
    },
    {
      title: "Can a Doctor diagnose my baby's condition through a virtual visit?",
      description: `Our doctors can handle up to 97% of your questions via chat or online. In most cases a physical visit is not needed however, if they think a physical visit is necessary, they will advise you accordingly.`,
    },
    {
      title: 'Do I need to visit a doctor after an online consultation?',
      description: `In most cases, you don't need to visit a doctor after an online consultation. However, if our doctors believe it's necessary for you or your baby to have a physical examination, they will advise you to do so.`,
    },
    {
      title: 'How soon will I get a response from the doctor after booking an appointment?',
      description: `You will get a response from our doctor within 15 minutes after booking an appointment.`,
    },
    {
      title: 'Can I get advice regarding mother health too?',
      description: `Yes, you can get advice on mother's health as well, including postpartum care, lactation support, and mental well-being. Our platform includes gynecologists, lactation consultants, and psychologists to help you.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    highlight: 'FAQs for Our Care Plans',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'What should I consider before choosing a plan?',
      description: `You should consider the age of your baby, if the baby was pre-term, the type of delivery, and whether you’re a working mom or homemaker.`,
    },
    {
      title: 'What is the Basic Plan and who should choose it?',
      description: `The Basic Plan includes WhatsApp chat with pediatricians and free 15 minute consultations with doctors during the day time. It is suited for parents who are homemaker, had a normal delivery, the baby is pre-term, gaining age appropriate weight, able to generate enough breastmilk, and baby has no history of hospitalization.`,
    },
    {
      title: 'What are the pros and cons of the Basic Plan?',
      description: `The pros are that it is affordable and gives you access to the core of Babynama’s service, that is, pediatricians on WhatsApp. The cons are that you will have to pay extra for night pediatric and all other consultations, like lactation and nutrition support.`,
    },
    {
      title: 'What is the Prime Plan and who should choose it?',
      description: `The Prime Plan includes everything in the Basic Plan along with monthly growth tracking, free night consultations, and lactation and nutrition support for the baby. It is suited for parents who are homemaker, had a normal delivery, but the baby was born pre-term, or had a history of improper growth or hospitalization. Also, if you’re unable to produce enough breastmilk or are unsure about the best practices with starting solids for your baby, this plan is for you.`,
    },
    {
      title: 'What are the pros and cons of the Prime Plan?',
      description: `The pros are that it is the most value-for-money plan as you get 24X7 access to free consultations and proper nutrition counseling for breastfeeding and weaning aid so that your baby is on the right growth path. Moreover, with free growth tracking by a pediatrician every month, you can ensure that any growth related red-flags are identified in time. The cons are that it does not include gynecology and psychologist support, and a dedicated pediatrician.`,
    },
    {
      title: 'What is the Holistic Plan and who should choose it?',
      description: `The Holistic Plan includes all services that Babynama has to offer. Along with free access to all our experts and workshops, you will also get a dedicated pediatrician to chat with privately who will know your baby’s complete medical history and will proactively create personalized care plans for you and your baby. It is suited for working moms who need to find the right work-life balance, had a c-section delivery, or are facing any psychological challenges that usually accompany childbirth.`,
    },
    {
      title: 'What are the pros and cons of the Holistic Plan?',
      description: `The pros are that if you value your privacy and want access to private chat with doctors, then this plan is for you. With access to psychologists and gynecologists, we want to ensure that you yourself are mentally and physically ready for the challenges of motherhood. Healthy moms raise healthy babies. The cons are none, really. Price isn’t a con, it is just the fair amount we need to compensate the doctors for the time and energy they will be dedicating towards you in this plan.`,
    },
  ],
  link: {
    label: 'Contact us',
    href: '#footer',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    highlight: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    // title: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// API Data pricing Initial State
export const initialWeaningWorkshopApiData: WeaningWorkshopApiData = {
  mobile: '',
  offer_name: '',
  plan_id: 0,
  callback_url: '',
  payment_reason: '',
  payment_source: '',
  total_count: 0,
};

export const initialApiData: ApiData = {
  mobile: '',
  offer_name: '',
  plan_id: 0,
  total_count: 0,
  callback_url: '',
  payment_reason: '',
};

export const statsInitialApiData: StatsApiData = {
  mobile: '',
  utm_heading: '',
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  adset_name: '',
  ad_name: '',
  page_pathname: '',
};
export const referralInitialApiData: ReferralApiData = {
  friend_mobile: '',
  mobile: '',
  plan_id: 0,
  total_count: 0,
  callback_url: '',
  payment_reason: '',
};
export const salesInitialApiData: SalesApiData = {
  mobile: '',
  plan_id: 0,
  total_count: 0,
  callback_url: '',
  payment_reason: '',
  offer_name: '',
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};

export const featuresData: FeaturesProps = {
  header: {
    highlight: (
      <>
        What you get with <span className="whitespace-nowrap">Babynama</span>
      </>
    ),
    subtitle: 'Expert care and guidance for new mothers',
  },
  items: [
    {
      title: 'Trusted Medical Advice',
      description:
        'Receive reliable and accurate information from certified pediatricians, ensuring you don not have to waste time searching or be confused by conflicting advice online.',
      icon: IconHeartHandshake,
      link: {
        label: 'Learn More',
        href: '/about-us',
      },
    },
    {
      title: '15-Minute Response Time',
      description:
        'Get connected to a pediatrician within 15 minutes, ensuring timely assistance when your baby needs it the most.',
      icon: MdOutlineQuickreply,
      link: {
        label: 'Learn More',
        href: '/expert-support',
      },
    },
    {
      title: 'Empathetic Doctors',
      description:
        "Our doctors understand the concerns of new parents and encourage you to ask any question, no matter how 'silly' it may seem.",
      icon: FaHospitalUser,
      link: {
        label: 'Learn More',
        href: '/our-doctors',
      },
    },
    {
      title: 'Lactation Support',
      description:
        'Breastfeeding can be challenging; our experts provide personalized guidance and support to help make it easier for you.',
      icon: BsFillChatRightHeartFill,
      link: {
        label: 'Learn More',
        href: '/lactation-support',
      },
    },
    {
      title: 'Child Nutrition Assistance',
      description:
        'Get expert advice on starting solids and other nutritional concerns from our child nutrition specialists.',
      icon: MdOutlineFoodBank,
      link: {
        label: 'Learn More',
        href: '/nutrition-support',
      },
    },
    {
      title: 'Postpartum Depression Support',
      description:
        'Our psychologists are available to help you cope with postpartum depression and provide the emotional support you need.',
      icon: RiMentalHealthFill,
      link: {
        label: 'Learn More',
        href: '/postpartum-support',
      },
    },
    {
      title: 'Dedicated Pediatrician Partnership',
      description:
        "Avail a dedicated pediatrician who'll closely work with you to monitor your baby's growth and development as they grow.",
      icon: FaHandshake,
      link: {
        label: 'Learn More',
        href: '/dedicated-pediatrician',
      },
    },
  ],
};

// Feature data
export const featuresData3: FeaturesProps = {
  header: {
    highlight: (
      <>
        What you get with <span className="whitespace-nowrap">Babynama</span>
      </>
    ),
    subtitle: 'Childcare - An Indispensable Part Of Motherhood',
    // title: 'Services Provided by Us',
  },
  items: [
    {
      title: '10-Minute Text-Based Response',
      description:
        'Our paediatricians and other medical experts are available 24/7 to answer your questions. The objective of Babynama is to resolve your queries immediately with a trusted response. Drop your concerns related to your baby on our digital platform, and our doctors will respond to them with the aptest solution in less than 10 minutes.',
      icon: MdOutlineQuickreply,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Emergency Paediatric Care',
      description:
        'Even the basic issues related to babies lead parents to ER visits. It has been observed that millions of parents reach out to Paediatric Emergency Department, for queries that can be resolved over online consultations. Avoid such panic ER visits and save your time & money. Babynama is here to assist you, invariably with instant medical advice.',
      icon: MdOutlineContactEmergency,
      link: {
        label: 'Discover now',
        href: '/pediatric-consultation',
      },
    },
    {
      title: 'Lactation Counselling',
      description:
        'Through the postnatal period, lactating mothers face various issues such as breastfeeding challenges, blocked milk duct, mastitis, breast abscess, etc. Babynama Lactation Counsellors and specialists are here to help mothers overcome such challenges. Learn breastfeeding techniques and other necessary tips and suggestions from Babynam Lactation experts.',
      icon: BsFillChatRightHeartFill,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Child Nutritionist',
      description:
        'The right nutrition is quintessential for the growth and development of a child. Children need special attention and care in terms of a balanced diet. Get guidance and advice from our Nutritionists, who can help mothers to eliminate wrong food choices with just a single click. Join our online Babynama community to receive an instant and accurate diet plan for your child.',
      icon: IconHeartHandshake,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Postpartum Care',
      description:
        'According to WHO 3 in 10 women lack basic care after childbirth. Also, studies suggest, that around 10% to 20% of women experience postpartum anxiousness and depression due to various factors. We believe the mental health of mothers is crucial for both mother and newborn babies. Therefore, Babynama has come with its postpartum care to provide psychological support to new mothers.',
      icon: FaHospitalUser,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Growth And Development Workshop',
      description:
        'Growth and Development Tracking Experts at Babynama guides parents in tracking the timely development of their newborn babies. This includes developmental issues such as the right height and weight at a certain age, cognitive development, speech impediments, etc. The experts help parents keep the developmental milestone records of their child.',
      icon: GrWorkshop,
      link: {
        label: 'Discover now',
        href: 'https://babynama.com/baby-growth-subscription',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    highlight: 'Who we are',
    subtitle: 'Babynama',
    // title: 'About Us',
  },
  content:
    'Babynama is a digital platform with a highly experienced and qualified community of doctors, here to aid mothers with INSTANT solutions.',
  items: [
    {
      title: 'What we are known for',
      description:
        'By instant, we commit to reverting you in less than 10 minutes. We have the most proficient team of Paediatricians, Gynaecologists, Child Nutritionists, and Counsellors with the professional expertise to determine the fundamental cause of the issue concerning the health of mother and child. Our objective is to provide quick medical advice and support to women in their ending trimester of pregnancy. We also aim at resolving queries of new mothers experiencing troubles related to their newborns and provide psychological support through instant counselling.',
    },
  ],
  // image: {
  //   src: motherAndBaby,
  //   alt: 'Colorful Image',
  // },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  // image: {
  //   src: cameraBackImg,
  //   alt: 'Colorful Image',
  // },
  isReversed: true,
  isAfterContent: true,
};

// content data3
export const contentData3: ContentProps = {
  header: {
    highlight: 'How Babynama Works',
    subtitle:
      'We curate some of the best doctors from all over India. Most of our doctors are parents themselves so that they can understant parents pain better',
    // title: '',
  },
  content: '',

  items: [
    {
      title: 'Join Community',
      description:
        'Join our WhatsApp to consult the Babynama medical experts. This is the most convenient way to connect with paediatricians and other physicians.',
    },
    {
      title: 'Drop Your Query',
      description:
        "Ask personalised questions related to your baby's health at any time to any of the Babynama paediatricians. Your query is our responsibility.",
    },
    {
      title: 'Get an Instant Response',
      description:
        'Stay online for a few minutes and receive an instant response from the Paediatrician in less than 10 minutes. For us, every second holds importance.',
    },
    {
      title: 'Subscribe',
      description:
        'Wish to seek further advice regarding your baby’s health? Subscribe to book one-to-one text & discounted Video Consultations at a reasonable cost.',
    },
  ],
  // image: {
  //   src: works1,
  //   alt: 'Colorful Image',
  // },
  isReversed: false,
  isAfterContent: false,
};

export const stepsData: StepsProps = {
  header: {
    highlight: 'How Babynama Works',
    subtitle:
      "We curate some of the best pediatricians from all over India. Many of our doctors are parents themselves, so they can understand parents' concerns better.",
    // title: 'Steps',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Join us on WhatsApp to consult with Babynama doctors. It is the most convenient way to connect with pediatricians and other specialists.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        "Ask personalized questions related to your baby's health at any time to any of the Babynama pediatricians. Your query is our responsibility.",
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Stay online for a few minutes and receive a response from the pediatrician in less than 15 minutes. For us, every second holds importance.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4',
      description:
        'If you wish to seek further advice regarding your baby’s health, subscribe to our care plans to book one-to-one consultations and access specialized workshops for free.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Get Started',
    href: '/preview-access',
  },
  videoUrl:
    'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/Video+Assests/babyama-steps-video-v2_1.webm',
  mp4VideoUrl:
    'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/Video+Assests/babyama-steps-video-v2_1.mp4',
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    highlight: 'Hear from Babynama Parents',
    subtitle: ' We are proud to have helped thousands of parents',
    // title: 'Testimonial',
  },
  testimonials: [
    {
      review: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
      name: 'Pranati',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
      profileImage: {
        src: P,
        alt: 'P',
      },
      position: 'Mother of 3 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    },
    {
      review: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
      name: 'Aabha',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
      profileImage: {
        src: A,
        alt: 'A',
      },
      position: 'Mother of 4 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
    },
    {
      review: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
      name: 'Charu Chandarana',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
      profileImage: {
        src: C,
        alt: 'C',
      },
      position: 'Mother of 7 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    },
    {
      review: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
      name: 'Ruchi Garg',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
      profileImage: {
        src: R,
        alt: 'R',
      },
      position: 'Mother of 7 month old twins',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
    },
    {
      review: 'Please follow the group and take your experience. Thank you Babynama family',
      name: 'Mr. and Mrs. Sharma',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
      profileImage: {
        src: M,
        alt: 'M',
      },
      position: 'Mother of 4 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
    },
    {
      review: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
      name: 'Shipra',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
      profileImage: {
        src: S,
        alt: 'S',
      },
      position: 'Mother of 3 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
    },
    {
      review: `The workshop was very useful...the doctor explained all the basic things and answered all queries in detail. I hope it happens every month.`,
      name: 'Saroj',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Saroj.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Saroj.mp4`,
      position: 'Mother of 5 month old baby',
      profileImage: {
        src: S,
        alt: 'S',
      },
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/saroj.webp`,
    },
    {
      review: `Everything was very thorough in the seminar. Everyone got this chance to complete the questionnaire in the session with ma'am. This service is very useful for moms in nuclear families like myself.`,
      name: 'Akanksha',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akanksha.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Akanksha.mp4`,
      profileImage: {
        src: A,
        alt: 'A',
      },
      position: 'Mother of 4 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akansha.webp`,
    },
    {
      review: `There are n number of questions of n number of mothers and even if you dont have that particular problem, they are resolved by seeing the questions of other mothers.`,
      name: 'Priti Gattani',
      url: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/Testimonial+-+Wall+of+love+for+Babynama.webm',
      mp4Url:
        'https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Testimonial+-+Wall+of+love+for+Babynama.mp4',
      profileImage: {
        src: P,
        alt: 'P',
      },
      position: 'Mother of 3 month old baby',
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/priti.webp`,
    },
    {
      review: `I am a mother of 5 month old baby boy i found baby namaa group from Instagram reel baby nama group helped me as my baby was doing hard green stool *doctor r friendly*i advice all the moms to join baby namaa group`,
      name: 'Noor Ayesha',
      date: 'Nov 17, 2022',
      profileImage: {
        src: NoorAyeshaProfile,
        alt: 'NoorAyeshaProfile',
      },
    },
    {
      name: 'Ruchita',
      review:
        'I am a mother of 5 month old baby boy Atharv I see video of babynama while sarfing Instagram I m confused about when the food given to my son and pediatrician helped me Doctor`s gives solutions aa soon as possible and knowledgeable I would recommend to all new mom and mom to be to join the babynama',
      date: 'Nov 17, 2022',
      profileImage: {
        src: RuchitaProfile,
        alt: 'RuchitaProfile',
      },
    },
    {
      name: 'Nikita Sharma',
      review:
        'I am a mother of 2 month and 25 days old baby boy Ayansh and I found about babynama from instagram while i was scrolling reels. Babynama has helped me when i had problems while lactation so i took lactation conselling and it helped me a lot. The doctors here are very helpful, polite, knowledgeable and friendly and i am very happy that every small query about the baby is solved. I would highly recommend all mothers to join Babynama and take their subscription as per their requirements. Love Babynama !!',
      date: 'Nov 15, 2022',
      profileImage: {
        src: NikitaProfile,
        alt: 'NikitaProfile',
      },
    },
    {
      name: 'Priyadharshini K S',
      review:
        'Hello everyone, being a first time mother for a 5 months old son i always get anxious about every small thing that my baby goes through .I got to know about this beautiful platform babynama from my friend Rashmi and it was the best ever help i could get in my initial days.Dr. sumitra was so patient enough to answer all my queries including the silly ones without any hesitation.Babynama comunity is still my go to whenever my baby is not well.I have even suggested my friend who is new mother and would recommend all mothers to take their subscription for 24/7 support.',
      date: 'Oct 27, 2022',
      profileImage: {
        src: Priyadharshini,
        alt: 'Priyadharshini',
      },
    },
    {
      name: 'Sakshi',
      review:
        'Hi I`m completely satisfied with the efforts babynama doctors have provided. When ever I have doubt of any skin rashes ,cold, cough, diet chart, weight gain. I used to message in the group I had a got a response very soon. I have even opted for subscription by liking their services. All the doctors have good experience and good knowledge their advice and opinions are very helpful me I can undoubtedly say for every mom that babynama will be great thing for instant reply for all the doubts about children. Doctors doesn`t think anything if we ask any silly questions. They respond very patiently. I had video consultation s also. I Just loved the service. I would suggest every mom to be part of this wonderful babynama family',
      date: 'Sep 22, 2022',
      profileImage: {
        src: SakshiProfile,
        alt: 'SakshiProfile',
      },
    },
    {
      name: 'Harshita',
      review:
        'I am a mother of 2 months old. I came to know about Babynama while I was just scrolling insta. I just tried initially, after seeing the response from the doctors in common group, I took premium plan and I was assigned with Dr. Anupriya. A spl mention to her here, clear examination and analysis through video chat was amazing. She was the first one to analyse my baby while he was suffering from Bronchitis. She analysed just with a 1 min breathing video. I have just saved the baby in right time only because of her and thanks a ton. I am still getting many doubts and Babynama is traveling with me as a supporter. I am really really amazed by the team work and services they are providing. Worth of each penny and I think this is the very first valuable investment I made for my baby.Thanks to Babynama a wonderful platform for worryfree parenting.',
      date: 'Dec 12, 2022',
      profileImage: {
        src: Harshita,
        alt: 'Harshita',
      },
    },
    {
      name: 'Abinaya',
      review:
        'I am a mother of 2 months old. I came to know about Babynama while I was just scrolling insta. I just tried initially, after seeing the response from the doctors in common group, I took premium plan and I was assigned with Dr. Anupriya. A spl mention to her here, clear examination and analysis through video chat was amazing. She was the first one to analyse my baby while he was suffering from Bronchitis. She analysed just with a 1 min breathing video. I have just saved the baby in right time only because of her and thanks a ton. I am still getting many doubts and Babynama is traveling with me as a supporter. I am really really amazed by the team work and services they are providing. Worth of each penny and I think this is the very first valuable investment I made for my baby.Thanks to Babynama a wonderful platform for worryfree parenting.',
      date: 'Dec 12, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Janvi',
      review:
        "3.5 months Helped me understand all the queries I had n literally took away my stress.. Dr. Sumitra is a saviour! Im so glad I found her ! She's the best doctor one could have ever found- Truly an Angel❤️😘I also consulted lactation expert Dr. Shefali today who was extremely helpful n gave me proper guidance abt all the latching issue.. I would say Babynama is the best platform for all new moms to deal with all our silly queries as Experienced doctors are right there to help us immediately❤️",
      date: 'Sep 22, 2022',
      profileImage: {
        src: J,
        alt: 'J',
      },
    },
    {
      name: 'Yogesh Chaudhari',
      review:
        'Hello, my baby girl is just 28 days as on 27th October 2022. I heard about Banynama from Instagram. To be honest Babynama had helped me in my each and every query from how to feed baby to everything that parents must know to cope up with newborn. Thank you babynama for knowing when to assure me that my children’s symptoms were nothing to worry about, and for calmly letting me know when it was indeed time to worry. Dr. Sumitra is definitely an angel for kids she is treating. I am lucky to have her as my baby’s paediatrician. Babynama lactation expert Ms Shaiphali taught my wife in easier way that a new mother must know to ensure proper breast feeding. In fact t I have asked so many questions that anyone could have get irritated but Dr Sumitra never ever seems annoyed by my questions. She always answered me just like it is my first question. It would not be an exaggeration at all if I say that if you are associated with Babynama. Your parenthood will be much easier and your baby is in safe hands.',
      date: 'Oct 28, 2022',
      profileImage: {
        src: yogeshProfile,
        alt: 'yogeshProfile',
      },
    },
    {
      name: 'Sallwi Gautam',
      review:
        "I am a mother of 3 months old baby boy Nivansh. I got to know about babynama from Instagram and I joined it's WhatsApp group and later I took the premium care plan of babynama which turned out to be very helpful for me. My baby was suffering from stomach infection from about a week, we consulted our local pediatrician but he wasn't getting better. Then I consulted Dr Sumitra from babynama and she observed my baby's situation and prescribed medication which helped my baby recover very fast. Dr Sumitra is very polite and friendly and also very knowledgeable. Babynama is helping me a lot with my motherhood journey and I recommend all mothers to join babynama and also take the premium care plan subscription.",
      date: 'Oct 26, 2022',
      profileImage: {
        src: SallwiProfile,
        alt: 'SallwiProfile',
      },
    },
    {
      name: 'Akhila Ramakrishna',
      review:
        "I'm new mom, no idea about parenting and surrounded with orthodox people where for everything always home remedy no consultation of doctor advise. When I am so helpless I had seen about babynama on insta, and joined in group its really V V helpful, for everything they answer V patiently and ask every detail of baby health. Thank you so much for the person who got this idea to serve all querys to parents. V grateful to all doctors who supporting all childrens health and mainly due to this group parents can be V confident when the baby is sick babynama is there. Every small question can be ask like we ask to our grandmother and solution will b perfect for babies with undoubtedly. With lots of love, Mother for Princess 👸",
      date: 'Feb 4, 2023',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Shilpi',
      review:
        'My baby was vomiting 🤮🤮🤮 as she was born premature (born in 8mnth 15 days) . As a new mother I worried a lot and started crying 😭😭...soon i started scrolling Instagram and. Got to knw abt babynamah ,Soon i get to consult with Dr nitika Tulsi she was really great,over a video consultation to identify a baby problems means a lot .Her medicine worked well . Thanks to Baby namah',
      date: 'Feb 2, 2023',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Reshmi Murali',
      review:
        'I am a mother of 3 months old baby. I saw Babynama page through insta. I tried initially for the response from the doctors in the common group.They had cleared all my queries and still this way is ahead of me.Thank you Babynama.',
      date: 'Jan 9, 2023',
      reviewImage: {
        src: reshmi,
        alt: 'reshmi',
      },
      profileImage: {
        src: ReshmiProfile,
        alt: 'ReshmiProfile',
      },
    },
    {
      name: 'Diksha Purkayastha',
      review:
        'I am mother of a 5 month old boy. This community at nominal charges helps to reduce my anxiety every time. Tiniest of doubts have been addressed by the doctors. An excellent initiative. All my love and good wishes for the future.',
      date: 'Jan 9, 2023',
      profileImage: {
        src: D,
        alt: 'D',
      },
    },
    {
      name: 'Rakhshan',
      review:
        'I am a mother of 17 months old. I came to know about Babynama while I was just scrolling insta. I just tried initially, after seeing the response from the doctors in common group then I also asked my queries,dr.s are soo helpful and fast service thank you dr.s',
      date: 'Jan 10, 2023',
      profileImage: {
        src: R,
        alt: 'R',
      },
    },
    {
      name: 'Heena',
      review: 'My baby is 1.5month old. This community is very helpful indeed.thnku for creating it ...thanks alot',
      date: 'Jan 8, 2023',
      profileImage: {
        src: H,
        alt: 'H',
      },
    },
    {
      name: 'Dakshita Bhatnagar',
      review:
        'My baby is 2 months old and I found abot babynama from Instagram. This page is really helpful especially the pediatrician reply to the query real quick best for new mom. Any doubt any confusion related to baby is solved really quickly.Thank you for ur services.',
      date: 'Jan 9, 2023',
      profileImage: {
        src: D,
        alt: 'D',
      },
    },
    {
      name: 'Pratiksha',
      review:
        "My baby boy is 4 month old now. I got to know about Babynama on Instagram.. just for curiosity I joined the group.. here many mother's post their queries.. and doctors reply is so accurate. My queries were also analysed by doctors and helpful for me. Thank you all doctors.",
      date: 'Jan 9, 2023',
      profileImage: {
        src: P,
        alt: 'P',
      },
    },
    {
      name: 'Ayushi gupta',
      review:
        "I'm a mother of 1 month old baby. I came to know about this when I was surfing through Instagram. Then i got to know about watsapp group and i joined that . The doctors are replying spontaneous for our queries. We can also learn about problem of other children too in the same age, which would help us to prevent or take certains actions when required. I have a problem regarding feeding and constant cryng baby but dr help me and gave me guidance to improve feeding posture and duration of feeding .A very convenient way to approach doctors without any delay. All mothers will surely be benefited from this.",
      date: 'Dec 27, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Ravalika Rakesh',
      review:
        "I am a mother of 5 month old. I have known Babynama through random post on Instagram and joined the community on WhatsApp. Trust me, the minute you post a query or concern about the baby you'd immediately get a response from the doctors available in the group. The doctors are so patient to answer any relevant questions. There is alaoa special consultation available 24x7 just a click away. Also, the posts on Instagram and videos on YouTube are very useful. To conclude, Babynama is one of the best ways for a quick assistance. Thank you to the community!!",
      date: 'Dec 28, 2022',
      profileImage: {
        src: R,
        alt: 'R',
      },
    },
    {
      name: 'Renu verma',
      review:
        'This baby community is doing very good job. They always share valuable information. Provide immediate support on chat. Thanks for creating this community',
      date: 'Dec 22, 2022',
      profileImage: {
        src: R,
        alt: 'R',
      },
    },
    {
      name: 'Nishaa Aravind',
      review:
        "I'm a mother of 2-1/2 months old baby. I came to know about this when I was surfing through Instagram. The doctors are replying spontaneous for our queries. We can also learn about problem of other children too in the same age, which would help us to prevent or take certains actions when required. A very convenient way to approach doctors without any delay. All mothers will surely be benefited from this.",
      date: 'Dec 21, 2022',
      profileImage: {
        src: N,
        alt: 'N',
      },
    },
    {
      name: 'Vaishnavi',
      review:
        'It’s a savour to many mom’s like me who have unlimited questions in mind about baby who can’t ask all these to there paediatrician every time.. they answer basic questions via chat and would recommend consultation for special case',
      date: 'Dec 21, 2022',
      profileImage: {
        src: V,
        alt: 'V',
      },
    },
    {
      name: 'Shifa Zareen',
      review:
        "I am a mother of a 4month baby boy he is my first child and he came a little early to me so I had no idea how to feed or anything I was just blank he had a little history of seizure which was a giant blow for me and I was so scared that whatever I am doing is good for him or not he was to be given a little more special care I use to Google my doubts but the answers were not which I was looking for then while scrolling Instagram I came across babynama and the videos gave me the correct answer to my queries and then I joined the group and it helped to soothe my baby in colic pain and specially the video consultation with Dr Anupriya Bajaj about vision improvement and neck control she also gave me heads up for the test which should be done she was all sweet and friendly she also understood my situation when I couldn't take her call I would suggest this to my friends",
      date: 'Dec 22, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Kirty Agarwal',
      review:
        'Hey, I am mother of 2 months old baby boy, and since it’s my first baby, babynama has come as an angel in disguise, from tiny tiny issues to major ones all my queries are solved by the doctors at very ease, also their quick response makes it far more easier to take action as and when required.',
      date: 'Dec 22, 2022',
      profileImage: {
        src: K,
        alt: 'K',
      },
    },
    {
      name: 'Deepa Virmani',
      review:
        'I am Deepa mother of 2 months old. O have recently joined this group. I really love it. Your team is doing excellent job.really helpful really trustworthy. Thanks .',
      date: 'Dec 22, 2022',
      profileImage: {
        src: D,
        alt: 'D',
      },
    },
    {
      name: 'Akshata',
      review:
        'Hey Babynama... I have been in this group since a long ... You are doing a great Job... God bless the team of Doctors.I would like to recommended your channel and group to many... Best wishes. It makes me feel safe now.. It was tedious to rush offline doctors for basic doubts or consultation...Now that worry has vanished. Thank you',
      date: 'Dec 17, 2022',
      profileImage: {
        src: Akshata,
        alt: 'Akshata',
      },
    },

    {
      name: 'Yamini Singh',
      review:
        "Attached image I am a mother of 2month old baby boy Amay I heard about Babynama from instagram My baby wasn't feeding well and gas problem was there so I saw a video of it and it helped me alot. Doctors are good, polite, listen every question carefully and of each and every question. I would definitely recommend to join babynama and take its subscription. Thankyou Yamini Singh",
      date: 'Dec 13, 2022',
      reviewImage: {
        src: yamini,
        alt: 'yamini',
      },
      profileImage: {
        src: Y,
        alt: 'Y',
      },
    },
    {
      name: 'Kritika',
      review:
        'I am a mother of 2 months old baby. I got to know about babynama from Instagram when my baby was suffering from cough at that time babynama’s doctors helped me. The doctors are very polite and knowledgeable. I recommend all mothers to join babynama and take their subscription and get their queries solved just by sitting at home',
      date: 'Dec 13, 2022',
      profileImage: {
        src: K,
        alt: 'K',
      },
    },
    {
      name: 'Anjali',
      review:
        'I am Anjali, mother of 5 months old Inaaya. I got to know about babynama through Instagram. I found their videos very helpful and joined the whatsapp group which is even more helpful! The doctors are very prompt in their response, they understand the concern and give great solutions. I found all doctors very knowledgeable and supportive. I would highly recommend new moms to join the group!',
      date: 'Dec 13, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Anitha',
      review:
        'Babynama community is a wonderful place for new parents, specially for new moms. Doctors are very helpful and solve quires and concerns in a wonderful way. Thank you Doctors and thank you team for the great work and initiative.',
      date: 'Dec 13, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },

    {
      name: 'Aishvarya',
      review: 'This community is a lifesaver for new moms with lot of doubts!',
      date: 'Dec 13, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'AK',
      review:
        'Ashika Kariappa Hello! I am Ashika Kariappa mother of a 2.5 month old Nihaan. I came across babynama through an Instagram post and was initially only following them only on that platform. Later on I joined their WhatsApp group for queries related to both baby(paediatrics) and me(gynaecology). The community responds to queries promptly and is super helpful to all the new mothers out there. Mothers are comfortable to reach out to doctors without any inhibition as they are very courteous, personalised and provide detail explanation with videos. They also assist with scheduling sessions with a specific doctor in case one on one discussion is required at a nominal fee.Many new moms face similar issues and when one person puts forward a query it helps all of us and that’s the reason I have been recommending their WhatsApp group to all my friends who recently turned new mothers. Being a mother is definitely a beautiful yet challenging journey and with support from Babynama and their doctors things seem much brighter ☺️',
      date: 'Dec 13, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Sumeet kaur Chaudhary',
      review:
        'Sumeet kaur Chaudhary Hello I am a mother of 3 months old baby girl. I heard about babynama from Instagram which was suggested by one of my colleague... Baby nama to me is being very helpful. All my queries is being answered very kindly and immediately. All the doctors are also very kind and knowledgeable. I just want to inform all my relatives and friends who are d new mothers and having queries regarding the growth of their child to join babynama group. Thank you.',
      date: 'Dec 13, 2022',
      profileImage: {
        src: sumeet,
        alt: 'sumeet',
      },
    },
    {
      name: 'Snehitha',
      review:
        'I am the mother of 4m old baby Larmika. I heard babynama through instagram. It helped us to clarify many doubts regarding feeding, sleep schedule, activity etc. I had to contact Dr.Sumitra mam at 2am as my baby had fever. Mam responded very well and followed up. I felt relieved. I am yet to consult lactation consultant. I would definitely recommend Babynama to my friends.',
      date: 'Oct 26, 2022',
      reviewImage: {
        src: snehitha,
        alt: 'snehitha',
      },
      profileImage: {
        src: SnehithaProfile,
        alt: 'SnehithaProfile',
      },
    },
    {
      name: 'Nidhi Tomar',
      review:
        "Hi all, I'm Nidhi, a new mom. My kid is a month old. I found about Babynama from Instagram. As a new parent, one has loads of doubts and queries running in head. Babynama is where I found answers to all the queries. Would like to mention that the doctors are highly experienced, polite. The answers and resolution of doubts is very prompt and quick. The team resolves and takes up all issues very professionally and in a jiffy. Im pretty content with their assistance. Would strongly recommend Babynama to all parents. My sincere gratitude to the entire team. I must say thank you is surely not sufficient. You guys are doing a commendable job. Kudos to the great initiative ☺️",
      date: 'Oct 14, 2022',
      profileImage: {
        src: NidhiProfile,
        alt: 'NidhiProfile',
      },
    },
    {
      name: 'VS',
      review:
        "I am a mother of 20 days old baby boy. I heard about babynama from a instagram. I had lots and lots of doubts before I'm joining this group. After joining this group I'm so happy and I don't have any fear about my baby because the doctors are always active in this group to take care of my baby.All the doctors are so friendly and knowledgeable.I would recommend all mothers to join Babynama and take their subscription.",
      date: 'Oct 12, 2022',
      profileImage: {
        src: V,
        alt: 'V',
      },
    },
    {
      name: 'NH',
      review:
        'Babynama is perfect platform to find a solution of every problem related to baby n mothers…..thanks a lot doctors 🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻😃',
      date: 'Oct 12, 2022',
      profileImage: {
        src: N,
        alt: 'N',
      },
    },
    {
      name: 'Shiksha',
      review:
        'Hi , I’m a mother of 4 months old baby girl and she was having issues with feeding and wanted an online consultation regarding it and then I came across Babynama from instagram . I joined the group and in no time the most learned doctors gave me all the necessary suggestion and support.The doctors are very polite and helpful and would recommend all mothers to join the same.',
      date: 'Oct 12, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Ranjana',
      review:
        'Hey! I am a mother of 2months old baby girl her name is PAVANI 🥰... I saw this bage in Instagram.... l found my all queries answers in my WhatsApp throughout #babynama contact....All doctors give good advice...plz share that page & follow to @babynamahq ... Happy to have you 🥰😍❤️',
      date: 'Nov 14, 2022',
      reviewImage: {
        src: ranjana,
        alt: 'ranjana',
      },
      profileImage: {
        src: RanjanProfile,
        alt: 'ranjanaProfile',
      },
    },
    {
      name: 'Priti Gattani JL',
      review:
        'Hello everyone out thr in search of quick resolution to new born,,my Lo is 45 days old when i came to knw abt babynama she is 3 months now..its like a boon when you got quick resolutions over a whatsapp msg away.. the doctors are well responsive and good knowledge of all the smallest difficulty what new parents found..',
      date: 'Oct 11, 2022',
      profileImage: {
        src: P,
        alt: 'P',
      },
    },
    {
      name: 'Pallavi Srivastava',
      review:
        'My baby is 1.5 month old when i found babynama on instagram . I used to worry about baby potty nose block skin rash etc babynama dr solve all issues drs replies even in night',
      date: 'Sep 29, 2022',
      profileImage: {
        src: PallaviProfile,
        alt: 'PallaviProfile',
      },
    },
    {
      name: 'Brijal Desai',
      review:
        'Babynama is a boon for new parents. Doctors are very friendly and patient enough to answer even silly questions. As a new parents we become very panic on every little thing and we start googling which is not a good thing or we rush to the doctor for a small problem which is not even a problem. Babynama is one such platform for all our queries. I subscribed for 6 months and its totally worth. Doctors are just a ping away. Thank you Dr. Sumitra and team.',
      date: 'Sep 28, 2022',
      profileImage: {
        src: BrijalProfile,
        alt: 'BrijalProfile',
      },
    },
    {
      name: 'Aarti Singhal',
      review:
        "Hello there, One of my friends suggested Babynama. I liked the concept and out of curiosity joined the group. I was surprised and glad to see that in 10 minutes doctors are replying to the silliest questions of a mother very efficiently. Though I haven't asked many questions in the group as my daughter is 8 years old. But other queries of mothers helped me to understand many problems. This group is an absolute blessing for new moms. Good luck Babynama and team. The sky is the limit.❤️🙌🏼",
      date: 'Sep 28, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'AK',
      review:
        'My daughter was 1 month old -They solved all the doubts and confusion I has about the a baby. That even responded 2am in the night . - Earlier I had to visit my paediatrician / call him -Dr Sumithra is an amazing doctor she answers all my queries picks my call and video consultation anytime I need her. She is super friendly and knowledgeable. She is always there when I need her. Even in odd hours - Best way to get your queries solved',
      date: 'Sep 27, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Anshu Srihan',
      review:
        'My baby was around 4 months when I found babynama. I used to worry about poop issues, nose blocking issues, not sleeping during night hours & so on. Babynama solved all these issues on prompt basis & I found it very helpful. Before Babynama I used to take an appointment every time to look for a doctor so that I can visit them. Basically, I used to wait for hours to find a solution. Babynama doctors are friendly,helpful & I have never felt that I am talking to some close one, they have advance knowledge on it. If u have any minute problem which is even crazy one too , its better to close your eyes and just take help of babynama.',
      date: 'Sep 27, 2022',
      profileImage: {
        src: AnshuProfile,
        alt: 'AnshuProfile',
      },
    },
    {
      name: 'Ruchi Garg',
      review:
        'Hey , i have 50 days twins. They were 30 days when i found babynama. Honestly babynama solve each and every problem i asked everytime. Earlier i was just doing google and crying because as a new mom u cannot go to doctor everytime and also u cannot rely on any random advices people give. My experience for babynama is excellent and i would like to suggest each and mom that please subscribe to babynama it will save u alot. As a mother we need to know every single thing about our babies. And babynama is one stop where doctors are so friendly and helpful they give u proper time and solve all ur queries even if it is a silly one. Thank you babynama for saving from so mang heart attack’s.',
      date: 'Sep 22, 2022',
      profileImage: {
        src: RuchiProfile,
        alt: 'RuchiProfile',
      },
    },
    {
      name: 'Raj Singh',
      review:
        'My baby was a month old and we were became first time parent so facing many problems, we were having lots of small or big queries and its very difficult to visit the clinic every time. We found Babynama a place when we can get the answers of our queries or problems even in off hours too. They have the qualified doctors and they are able to solve the critical problems. I am suggesting to all parents that you should use Babynama they are the best in this segment.',
      date: 'Sep 19, 2022',
      profileImage: {
        src: RajProfile,
        alt: 'RajProfile',
      },
    },
    {
      name: 'Vaibhavi Singh',
      review:
        'My baby was one month old when I heard Babynama from my husband, he added me in the group and using it since 6 months. Initially I was asking the queries with grandmother, mother in laws but they are not qualified as a doctors so sometime problem was not resolved but after Babynama it acts like family doctors and giving the best solutions in a very low cost. I would recommend every parents if you are seeking 24/7 help in cost effective side though best doctors, try Babynama.',
      date: 'Sep 19, 2022',
      profileImage: {
        src: VaibhaviProfile,
        alt: 'placeholderImage',
      },
    },
  ],
};

// Testimonial2 data

export const testimonialData2: TestimonailProps2 = {
  testimonials: [
    {
      id: 1,
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, mi eu feugiat consequat, mauris mauris auctor justo, eget bibendum sapien velit sed turpis.',
      name: 'John Doe',
    },
    {
      id: 2,
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      quote: 'Hello there',
      name: 'John Doe',
    },
  ],
};

//testimonials data
export const mainTestimonialContent = [
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
  },
  {
    text: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
    name: 'Shipra',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
  },
  {
    text: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
    name: 'Charu Chandarana',
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: 'Please follow the group and take your experience. Thank you Babynama family',
    name: 'Mr. and Mrs. Sharma',
    title: 'Parents of 4 month old baby.',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
  },
];

export const babyCarePlanTestimonials = [
  {
    text: `Thank you, Dr Sumitra, for sharing such vast knowledge, and through the Babynama community helped me to get answers about my concerns as a first-time mom. The query resolution is very fast and answers are satisfying.`,
    name: 'Neelam',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/neelam-thumbnail.png`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Neelam.mp4`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Neelam.mp4`,
  },
  {
    text: `My first consultation was because of a lactation issue. My baby was latching so poorly. After following the advice from the consultant my baby felt good.`,
    name: 'Sujata',
    title: 'Mother of 3 months old baby son',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Sujata+Testimonial+Video+Compressed.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/sujata.png`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Sujata+Testimonial+Video+Compressed.mp4`,
  },
  {
    text: `Got answers to my queries regarding her diapers, feeding and sleeping habits in just minutes by the experts at babynama`,
    name: ' Ishwari',
    title: 'Mother of 8 month baby girl',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ishwari+Testimonial+Video-1.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/ishwari.png`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ishwari+Testimonial+Video-1.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
  },
  {
    text: `The content on the Babynama Instagram page is beneficial. I loved the video consultation when my daughter had a minor issue. Then, I bought the 6th-month premium plan and love the service and care they provide.`,
    name: 'Ayesha',
    title: 'Mother of  babygirl',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/ayesha.png`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ayesha+Edited+2.mp4`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ayesha+Edited+2.mp4`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
];

export const BTPTestimonials = [
  {
    text: `Thank you, Dr Sumitra, for sharing such vast knowledge, and through the Babynama community helped me to get answers about my concerns as a first-time mom. The query resolution is very fast and answers are satisfying.`,
    name: 'Neelam',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/neelam-thumbnail.png`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Neelam.mp4`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Neelam.mp4`,
  },
  {
    text: `My first consultation was because of a lactation issue. My baby was latching so poorly. After following the advice from the consultant my baby felt good.`,
    name: 'Sujata',
    title: 'Mother of 3 months old baby son',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Sujata+Testimonial+Video+Compressed.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/sujata.png`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Sujata+Testimonial+Video+Compressed.mp4`,
  },
  {
    text: `Got answers to my queries regarding her diapers, feeding and sleeping habits in just minutes by the experts at babynama`,
    name: ' Ishwari',
    title: 'Mother of 8 month baby girl',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ishwari+Testimonial+Video-1.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/ishwari.png`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/babycareplans/Ishwari+Testimonial+Video-1.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
  },
  {
    text: `I was facing latching issues with my twins. But after a few consultations I was able to resolve the issue and breastfeed my babies.`,
    name: 'Rashmi',
    title: 'Mother of 6 month old twins',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/rashmi-testimonial-thumbnail.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Rashmi-testimonial-video-webm.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/rashmi-testimonial-mp4.MP4`,
  },
  {
    text: `The lactation counsellor of Babynama helped me to with the right breastfeeding and latching techniques which really helped me feed my baby.`,
    name: 'Foram',
    title: 'mother of 4 month old girl',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/foram-testimonial-video-webm.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Foram-testimonial-mp4.MP4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/foram-testimonial-thumbnail.webp`,
  },
];

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    highlight: "What's available for each plan?",
    subtitle: 'Compare both the plans and choose the best one for your baby.',
    // title: 'Comparison',
  },
  compare: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'Instant chat with pediatricians on WhatsApp',
        },
        {
          title: '24x7 free pediatrician consultations',
        },
        {
          title: 'Monthly growth and milestones tracking by pediatrician',
        },
        {
          title: 'Gyne Group Access',
        },
        // {
        //   title: 'Live Yoga Sessions',
        // },
        {
          title: 'Dedicated pediatrician just for your baby',
        },
        {
          title: 'Personalized care plan for your baby and you',
        },
        {
          title: 'Access to consultations and workshops',
        },
      ],
    },
    {
      title: 'Prime Care',
      items: [
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: 'Paid',
        },
      ],
      btn: {
        title: 'Get Started',
        type: 'button',
      },
    },
    {
      title: 'Holistic Care',
      items: [
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: 'Free',
        },
      ],
      btn: {
        title: 'Get Started',
        type: 'button',
      },
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    highlight: 'Get in Touch',
    subtitle: 'We are here to help you with your baby’s health and wellness.',
    // title: 'Contact Us',
  },
  content: 'Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.',
  items: [
    {
      title: 'Our Address',
      description: [
        ' WeWork Two Horizon Centre, 5th Floor Two Horizon Centre DLF, DLF Phase 5, Gurugram, Haryana 122002',
      ],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Call on: +917948221221', 'Mail: contact@gagahealth.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    highlight: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    title: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};
export const carePlansHeroData: HeroProps = {
  title: <>Instant Pediatric Care and Parenting Support on WhatsApp</>,
  subtitle:
    'From breastfeeding to everyday health questions, from sleeping issues to development milestones, get advice from our team of MD pediatricians in under 15 minutes through chat and video calls.',
  callToAction: {
    text: 'Check Plan and Pricing',
    href: '/care-plans/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const carePlansHeroDataCopy: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: <>Empowering New Moms: Comprehensive Breastfeeding and Pediatric Care</>,
    titlePart2: <>Comprehensive Breastfeeding and Pediatric Care</>,

    subtitle: (
      <>
        {' '}
        From Lactation support to 24/7 Pediatric care and monthly Growth insights—everything you need for Peace of Mind
        during your baby’s early stage
      </>
    ),
    paymentButton: ' Explore Care Plans',
    callToAction: {
      text: '',
      href: '',
    },
    image: {
      src: babyPlaying,
      alt: 'Get-care-plans',
    },
  },
};

export const breastFeedingSupport: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: <> Break the Formula Trap with Babynama Care Plan</>,
    titlePart2: <>Comprehensive Breastfeeding and Pediatric Care</>,

    subtitle: (
      <div>
        {' '}
        <p>
          Introduction of formula can lead to reduction on Breast Milk supply, thereby increasing the formula demand
          even further. This is known as the Formula or Top-Up Trap. Babynama's counsellors have successfully helped
          thousands of mothers break this trap and establish exclusive breastmilk for their babies. Refer to some
          success stories below.
        </p>
        <p>Subscribe to a care plan today and stop yourself from falling further into the Formula Trap.</p>
      </div>
    ),
    paymentButton: '',
    callToAction: {
      text: '',
      href: '',
    },
    image: {
      src: breastfeedingSupport,
      alt: 'breastfeedingsupport',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.webp)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['601, Tower 5, The Close South, Sector 50, Gurugram', 'HR 122018'],
    },
    {
      title: 'WhatsApp Support Number',
      texts: ['+919540677121'],
    },
    {
      title: 'Email',
      texts: ['contact@gagahealth.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/babynama' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/babynamahq' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://facebook.com/babynamahq' },
    { label: 'Linked', icon: IconBrandLinkedin, href: 'https://linkedin.com/company/babynama' },
  ],
  footNote: (
    <div className="copyright-item flex flex-col gap-2">
      <p>Copyright &copy; 2023 GagaHealth Private Limited. All rights reserved</p>
    </div>
  ),
};
// gifting start
export const GiftingData: Hero3Props = {
  HeroData: {
    titlePart1: <>Give the Gift of Support to New Moms</>,
    subtitle: (
      <>Empower your loved ones with expert pediatric care and guidance as they embark on their motherhood journey</>
    ),

    paymentButton: 'Choose a Care Plan to Gift',
    button2: 'https://www.youtube.com/embed/zV0r_PR3Uc4',
    image: {
      src: gifting,
      alt: 'Gifting',
    },
  },
};

// Gifting why section data;

export const GiftingWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: '24X7 pediatric Support',
      image: {
        src: pediatricIcon,
        alt: 'pediatricIcon',
      },
      description:
        'With babies, emergency can strike any time. Babynama assures 15 minute consultation with a Pediatrician, 24X7 for your friends.',
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting/#gifting-pricing',
      },
    },
    {
      title: 'Lactation Support ',
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description:
        '70% of women face challenges with breastfeeding. But with our expert lactation and diet counsellors, we provide the best support to new moms.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting/#gifting-pricing',
      },
    },
    {
      title: 'WhatsApp replies from Doctors',
      image: {
        src: WhatsAppRepliesIcon,
        alt: 'EmergencyImg',
      },
      description:
        'Our doctors are available on WhatsApp and reply within 5 minutes. So your friends don’t need to run to a hospital every time they are anxious.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting/#gifting-pricing',
      },
    },
    {
      title: 'Monthly growth tracking',
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },
      description:
        'Our pediatricians will track the baby’s physical growth and assess if all age appropriate emotional and sensory milestones are reached on time.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting/#gifting-pricing',
      },
    },
    {
      title: '50% Discount',
      image: {
        src: percentIcon,
        alt: 'percentIcon',
      },
      description:
        'We will bear half the cost so that your friend can enjoy the full benefits, but you only bear half the price.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting/#gifting-pricing',
      },
    },
  ],
};
//giftingsteps how it works
export const stepsDataGifting: StepsProps = {
  header: {
    highlight: 'How It Works',
  },
  items: [
    {
      title: 'Step 1',
      description: 'Select a plan that suits your budget and your friend’s needs.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: 'After checkout, our team will contact you for a personal video or text message.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: 'We’ll send the gift voucher and your heartfelt message to your friend at a time of your choosing.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4',
      description: 'If you want, you can take a printout of your voucher and gift it yourself.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Choose a care plan to gift',
    href: '/gifting/#gifting-pricing',
  },
};

export const GiftingFeedbackData: IdentifyPreviewAccessProps = {
  title: 'Get Feedback!',
  subtitle1: 'Want to know how much your friend liked the gift?',
  subtitle2:
    'Within 5 days of activation of the subscription, our team will reach out to the new parents for a feedback, and the same shall be shared with you.',
  subtitle3:
    'If either you or your friend are unhappy with the service, then we guarantee a full refund within 7 days of purchase. While this rarely happens, but if it does, we will honor our word.',
  image: {
    src: Feedback,
    alt: 'Feedback',
  },
};

export const GiftingAboutData: IdentifyPreviewAccessProps = {
  title: 'So order your stand out gift today!',
  // subtitle1: 'Want to know how much your friend liked the gift?',
  subtitle2:
    'Move over the generic baby and maternity products. Give the gift of peace of mind to new parents. Give them the gift of Babynama.',
  image: {
    src: giftingAboutImage,
    alt: 'giftingAboutImage',
  },
};

// end gifting data

//care-babynama

export const careWhyBabynamaData: CareWhyBabynamaProps = {
  title: 'Why Babynama?',
  subtitle1: 'Our team of Trusted Pediatricians will resolve your queries end-to-end on WhatsApp',
  features: [
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: 'Our expert doctors can identify and address 95% of all baby issues online',
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: '90% of these issues being resolved through chat alone',
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: 'Avoid unnecessary hospital visits & panic situations you face being a parent. ',
    },
  ],
  image: {
    src: doctorsGroup,
    alt: 'doctorsGroup',
  },
};

export const childDevelopment: SectionProps[] = [
  {
    id: 0,
    title: '0-6 Months',
    subtitle1: 'Feeding difficulties (breastfeeding or formula-related issues).',
    subtitle2: 'Colic and excessive crying.',
    subtitle3: 'Diaper rash and skin irritations.',
    subtitle4: 'Sleep problems & irregular sleep patterns.',
    subtitle5: 'Reflux and spitting up',
    subtitle6: 'Common cold & respiratory infections',
    subtitle7: 'Developmental milestones & growth concerns',
    image: {
      src: babySalesFirst,
      alt: 'giftingAboutImage',
    },
  },
  {
    id: 1,
    title: '6-12 months:',
    subtitle1: 'Teething & gum discomfort',
    subtitle2: 'Crawling, standing, & walking issues',
    subtitle3: 'Diaper rash & skin sensitivities',
    subtitle4: 'Ear infections & respiratory illnesses',
    subtitle5: 'Speech & language development',
    subtitle6: 'Separation anxiety & sleep disruptions',
    image: {
      src: babySalesSecond,
      alt: 'giftingAboutImage',
    },
  },

  {
    id: 2,
    title: '1 year to 1.6 years:  ',
    subtitle1: 'Transition from formula/breast milk to regular milk',
    subtitle2: 'Picky eating and food preferences.',
    subtitle3: 'Temper tantrums and emotional outbursts.',
    subtitle4: 'Increased mobility and safety concerns',
    subtitle5: 'Vaccination schedules and immunisations',
    subtitle6: 'Language and cognitive development',
    subtitle7: 'Toilet training and readiness',
    image: {
      src: babySalesThird,
      alt: 'giftingAboutImage',
    },
  },
  {
    id: 3,
    title: '1.6 years to 2 years:',
    subtitle1: 'Feeding difficulties (breastfeeding or formula-related issues).',
    subtitle2: 'Colic and excessive crying.',
    subtitle3: 'Diaper rash and skin irritations.',
    subtitle4: 'Sleep problems & irregular sleep patterns.',
    subtitle5: 'Reflux and spitting up',
    subtitle6: 'Common cold & respiratory infections',
    subtitle7: 'Developmental milestones & growth concerns',
    image: {
      src: babySalesFirst,
      alt: 'giftingAboutImage',
    },
  },
];

// preview-access hero data
export const initialHero3ApiData: Hero3ApiData = {
  mobile: '',
  plan_id: 0,
  callback_url: '',
  payment_reason: '',
  payment_source: '',
};

export const PreviewAccessHeroData: Hero3Props = {
  HeroData: {
    titlePart1: <>Pediatricians just a WhatsApp message away</>,
    subtitle: <>Reliable Pediatric Care within 15 minutes</>,
    paymentButton: 'Try Chat for Free',
    image: {
      src: heroImg,
      alt: 'Babynama',
    },
  },
};

//preview-access fathers
export const PreviewAccessFathersHeroData: Hero3Props = {
  HeroData: {
    titlePart1: <>Pediatricians just a WhatsApp message away</>,
    subtitle: <>Instant Pediatric Support for your family</>,

    paymentButton: 'Try Chat for Free',
    button2: 'https://www.youtube.com/embed/zV0r_PR3Uc4',
    image: {
      src: PreviewFather,
      alt: 'PreviewFather',
    },
  },
};

//care-Babynama

export const CareBabynamaHeroData: Hero3Props = {
  HeroData: {
    titlePart1: <>Your 24X7 Pediatricians Are Waiting To Resolve Your Queries</>,
    subtitle: <>Discover A Convenient & Reliable Way To Address Your Baby's Health Concerns.</>,

    paymentButton: 'Connect With Expert Paediatrician in 15 Mins.',
    button2: '',
    image: {
      src: CareBabynama,
      alt: 'Babynama',
    },
  },
};

// preview-access what section data;

export const PreviewAccessWhatData: PreviewAccessFeaturesProps = {
  header: {
    title: 'What do you get',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp group with MD Pediatrician',
      image: {
        src: whatsappGroupImg,
        alt: 'WhatsappGroupImg',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: '15 minute replies on chat, from 8 AM - 11 PM',
      image: {
        src: waitingImg,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Emergency paid support 24/7',
      image: {
        src: emergencySupportImg,
        alt: 'EmergencyImg',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
  ],
};
// preview-access why section data;

export const PreviewAccessWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end on WhatsApp',
    position: 'center',
  },
  items: [
    {
      title: 'No unverified answers from Google or ChatGPT',
      image: {
        src: googleSearchImg,
        alt: 'WhatsappGroupImg',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'No waiting for your pediatrician to reply or be available',
      image: {
        src: pediatricianImg,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'No unnecessary emergency hospital visits, even at night',
      image: {
        src: emergencyImg,
        alt: 'EmergencyImg',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
  ],
};

export const DoctorSumitraWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end on WhatsApp',
    position: 'center',
  },
  items: [
    {
      title: 'No unverified answers from Google or ChatGPT',
      image: {
        src: googleSearchImg,
        alt: 'WhatsappGroupImg',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: '',
        href: '',
      },
    },
    {
      title: 'No waiting for your pediatrician to reply or be available',
      image: {
        src: pediatricianImg,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: '',
        href: '',
      },
    },
    {
      title: 'No unnecessary emergency hospital visits, even at night',
      image: {
        src: emergencyImg,
        alt: 'EmergencyImg',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: '',
        href: '',
      },
    },
  ],
};
// preview-access How it works section data;

export const PreviewAccessHowData: PreviewAccessFeaturesProps = {
  header: {
    title: 'How it works?',
  },
  items: [
    {
      title: 'Get access to one of our WhatsApp group with MD Pediatricians',
    },
    {
      title: 'Ask your query on group',
    },
    {
      title: 'Get a reply from a doctor within 15 minutes',
    },
    {
      title: 'Yeah, that’s about it.',
    },
  ],
};

// Preview Access about section

export const aboutData: IdentifyPreviewAccessProps = {
  title: 'Can doctors identify my baby’s issue online?',
  subtitle1: '95% of all issues can be handled online.',
  subtitle2: '90% of the issues can in fact be resolved on chat itself.',
  subtitle3: 'So join Babynama and end all your unnecessary hospital visits.',
  image: {
    src: motherImg,
    alt: 'Mother image',
  },
};

//preview-accesfathers
export const FathersAboutData: IdentifyPreviewAccessProps = {
  title: 'Can doctors identify my baby’s issue online?',
  subtitle1: '95% of all issues can be handled online.',
  subtitle2: '90% of the issues can in fact be resolved on chat itself.',
  subtitle3: 'So join Babynama and end all your unnecessary hospital visits.',
  image: {
    src: fatherImg,
    alt: 'Mother image',
  },
};

//free-preview-access hero data
export const FreePreviewAccessHeroData: Hero3FreeProps = {
  HeroData: {
    titlePart1: <>Pediatricians </>,
    titlePart2: <> just a WhatsApp message away</>,
    subtitle: <>Say goodbye to new parent anxiety. Try it for Free.</>,
    paymentButton: 'Start Free Preview',
    button2: 'https://www.youtube.com/embed/zV0r_PR3Uc4',
    image: {
      src: heroImg,
      alt: 'Babynama',
    },
  },
};
//free-preview-access api data
export const initialHero3FormApiData: Hero3FormApiData = {
  mobile: '',
  dob: '',
  name: '',
  language: '',
  pediatrician_charge: '',
};
export const LactationFormApiData: LactationWebinarFormApiData = {
  mobile: '',
  DOB: '',
  language: '',
};

// fathers preview access api data
export const initialFatherFormApiData: Hero3FormApiData = {
  mobile: '',
  dob: '',
  name: '',
  parent_type: '',
};
//
export const FreePreviewAccessHowData: PreviewAccessFeaturesProps = {
  header: {
    title: 'How it works?',
  },
  items: [
    {
      title: 'Get 1 time access to our pediatricians WhatsApp group',
    },
    {
      title: 'Ask your anyone query on group',
    },
    {
      title: 'Get a reply from a doctor within 15 minutes',
    },
    {
      title: 'Yeah, that’s about it.',
    },
  ],
};
//heroYogaCard
export const heroYogaCard: HeroYogaCardProps[] = [
  {
    name: 'Natraja asna',
    image: {
      src: NatrajaAsna,
      alt: 'Natraja asna',
    },
  },
  {
    name: 'Setubandhasana',
    image: {
      src: Setubandhasana,
      alt: 'Setubandhasana',
    },
  },
  {
    name: 'padhastasana',
    image: {
      src: Padhastasana,
      alt: 'padhastasana',
    },
  },
  {
    name: 'VeerbhadraAsna',
    image: {
      src: VeerbhadraAsna,
      alt: 'VeerbhadraAsna',
    },
  },
  {
    name: 'Paschimottanasana',
    image: {
      src: Paschimottanasana,
      alt: 'Paschimottanasana',
    },
  },
  {
    name: 'Nuakasana',
    image: {
      src: Nuakasana,
      alt: 'Nuakasana',
    },
  },
  {
    name: 'Parvat asana',
    image: {
      src: ParvatAsana,
      alt: 'Parvat asana',
    },
  },
];
// Toga How it works section data;

export const YogaHowData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Who Should Join?',
  },
  items: [
    {
      title1: (
        <>
          <p>We recommend you to join at the following timeline :</p>
          <ul>
            <li>• Normal Delivery - After 1 month</li>
            <li>• C-section Delivery - After 3 Months</li>
            <li>* IF UNSURE OR IN PAIN PLEASE CONSULT YOUR GYNAECOLOGIST *</li>
          </ul>
        </>
      ),
    },

    {
      title: ' If you want to get in back in your empowering shape.',
    },
    {
      title: 'If you are facing issues regarding mental being.',
    },
    {
      title: 'if you want to build an bond with your baby and other new moms.',
    },
  ],
};
//InstructorData
// Yoga Team data
export const InstructorData: DoctorsData = {
  header: {
    highlight: 'Meet Our Instructor',
    subtitle: '',
  },
  teams: [
    {
      avatar: Kavita1,
      name: 'Kavita Grover',
      title: '',
      rating: 0,
      exp: 0,
      desc: 'As a certified level 1 & 2 yoga instructor with 10+ years of experience under her belt, Kavita is a true master of the art of wellness.',
      whatsappLink: 'https://babynama.in/yoga',
    },
    {
      avatar: Kavita2,
      name: 'Kavita Grover',
      title: '',
      rating: 0,
      exp: 0,
      desc: 'Kavita has managed to maintain her stunning figure and remain healthy well into her 40s.',
      whatsappLink: 'https://babynama.in/yoga',
    },
    {
      avatar: Kavita3,
      name: 'Kavita Grover',
      title: '',
      rating: 0,
      exp: 0,
      desc: 'Kavita Grover,the epitome of fitness and motherhood!with two beautiful children to care for.',
      whatsappLink: 'https://babynama.in/yoga',
    },
  ],
};

//yoga about section
export const YogaAboutData: IdentifyPreviewAccessProps = {
  title: 'About Us',

  subtitle2:
    'Welcome to our online postpartum yoga platform, dedicated to supporting new mothers on their journey to wellness and balance. Our carefully curated classes combine gentle yoga sequences, breathing techniques, and meditation to promote physical and emotional healing, strengthening the bond between mother and child. Join us in nurturing your body, mind, and spirit.',
  image: {
    src: AboutYoga,
    alt: 'AboutYoga',
  },
};
//Yoga steps section

export const stepsDataYoga: StepsProps = {
  header: {
    highlight: 'How It Works',
  },
  items: [
    {
      title: 'Step 1',
      description: ' After payment, you will be shared to a Whatsapp group with other new moms and our instructor.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: 'Link to join the live session will be shared on the group itself.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: 'During the live session, our instructor along with other new moms will guide and help you do yoga.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Book Your Seat Now',
    href: '/yoga/#hero-yoga',
  },
};

//yoga whysection

export const YogaWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: ' why should you take the yoga plan',
    subtitle: ' ',
    position: 'center',
  },
  items: [
    {
      title: 'Restore your strength and rejuvenate post-pregnancy.',
      image: {
        src: cardyoga1,
        alt: 'cardyoga1',
      },
      description: '',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'Book Your Seat Now',
        href: '/yoga/#hero-yoga',
      },
    },
    {
      title: 'Find support and connect with other moms.',
      image: {
        src: cardyoga2,
        alt: 'cardyoga2',
      },
      description: '',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Book Your Seat Now',
        href: '/yoga/#hero-yoga',
      },
    },
    {
      title: `Nurture a healthy bond with your baby.`,
      image: {
        src: cardyoga3,
        alt: 'cardyoga3',
      },
      description: ``,
      callToAction: {
        text: 'Book Your Seat Now',
        href: '/yoga/#hero-yoga',
      },
    },
    {
      title: `Create a positive and empowering self-care routine.`,
      image: {
        src: cardyoga4,
        alt: 'cardyoga4',
      },
      description: ``,
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Book Your Seat Now',
        href: '/yoga/#hero-yoga',
      },
    },
  ],
};

//Yoga hero data
export const YogaHeroData: Hero3Props = {
  HeroData: {
    titlePart1: <>Revive, Restore, and Reconnect with Postpartum Yoga</>,
    titlePart2: <>JOIN US FOR THE LIVE YOGA NOW</>,
    subtitle: <>Every MON WED FRI | 8:00 AM & 4:00 PM</>,

    paymentButton: 'Book Your Seat Now',
    // button2: 'https://www.youtube.com/embed/zV0r_PR3Uc4',
    image: {
      src: PostpartumYoga,
      alt: 'PostpartumYoga',
    },
  },
};
//Testimonials of Yoga hero data
export const YogaTestimonialContent = [
  {
    text: `I started my Postpartum Yoga journey 3 months ago, and I have really benefited from the postpartum yoga classes.`,
    name: 'Rupali',
    title: 'Mother of 6 month old baby',
    rating: 5,
    url: `${youtubeUrlStructure}jdgXRHmLXBA${trailingUrl}`,
  },
];

// solids-food-start-workshop hero data
export const initialWeaningApiData: WeaningApiData = {
  mobile: '',
  plan_id: 0,
  callback_url: '',
  payment_reason: '',
  payment_source: '',
};
export const initialWeaningFormApiData: Hero3FormApiData = {
  mobile: '',
  dob: '',
  name: '',
};
export const initialBrochureWeaningFormApiData: Hero3WeaningBrochureApiData = {
  mobile: '',
  remark: 'weaning',
};
export const initialLactationApiData: LactationApiData = {
  mobile: '',
  plan_id: 0,
  callback_url: '',
  payment_reason: '',
  payment_source: '',
};
//weaning-Email
export const initialWeaningEmailApiData: WeaningEmailApiData = {
  mobile: '',
  telegram_group_id: 4,
  remark: '',
};

export const weaningWorkShopHeroData: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: <>Confidently Introduce Solid Foods with Dr. Sumitra</>,
    subtitle: <>Give Your Baby the Right Start for a Lifetime of Healthy Eating</>,

    // titlePart2: `Baby Led Solids Food Start Workshop!`,
    paymentButton: 'Begin Your Journey',
    callToAction: {
      text: '',
      href: '',
    },
    image: {
      src: weaningImg2,
      alt: 'Solids Food Start Workshop',
    },
  },
};

// solids-food-start-workshop why section data;

export const weaningWorkShopWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Why Should You Take The Workshop',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end.',
    position: 'center',
  },
  items: [
    {
      title: 'Get expert answers in real-time',
      image: {
        src: qaImg,
        alt: 'qaImg',
      },
      description:
        'Ask anything about baby food in our Lactation Workshop with expert speakers during the live session and they will answer them in detail online.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: 'Access WhatsApp support for 1 week',
      image: {
        src: whatsappGroupImg,
        alt: 'WhatsappGroupImg',
      },
      description:
        "As part of the workshop, you'll get access to a WhatsApp group with our expert team for a full week. Ask any follow-up questions, get personalized advice, and connect with other parents going through the same journey.",
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: 'Customized Weaning Plan for your baby',
      image: {
        src: guidanceImg,
        alt: 'guidanceImg',
      },
      description:
        "You'll get a customized plan of action to make introducing solids easy and stress-free. We'll guide you through selecting the right foods, preparing nutritious meals, and creating a positive feeding environment.",
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: 'Enjoy lifetime workshop recordings',
      image: {
        src: recording,
        alt: 'recording',
      },
      description:
        "When you sign up for our Baby Solids Food Start Workshop, you'll get access to a lifetime recording of the event. That means you can watch and re-watch the workshop at your convenience, and never miss a beat.",
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: 'Learn optimal infant nutrition',
      description:
        "By the end of the workshop, you'll have the tools and confidence to make informed decisions about your baby's nutrition. Sign up now and give your baby the healthy start they deserve.",
      image: {
        src: feeding,
        alt: 'feedingImg',
      },
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

// solids-food-start-workshop How it works section data;

export const weaningWorkShopHowData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Who Should Join?',
  },
  title: 'This workshop is perfect for you if:',
  items: [
    {
      title: 'You have a baby 4 months or older',
    },
    {
      title: "You're unsure about how to start introducing solids",
    },
    {
      title: 'Your baby shows signs of fussy or picky eating',
    },
    {
      title: 'You want to learn the best practices for infant nutrition',
    },
  ],
  description: "Join us to nourish and nurture your baby's feeding journey!",
};
// weaning Testimonial Data

export const weaningWorkShopTestimonialData = [
  {
    text: `Solids Food Start Workshop from Babynama was too good to attend. The way Dr. Sumitra and Shaiphali answered the queries of every parent is commendable. This is a blessing for a  new mother.`,
    name: 'Swati Sharma',
    title: 'Mother of 6 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Swati+Sharma+Babynama+Weaning+Testimonial.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Swati+Sharma+Babynama+Weaning+Testimonial.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/swati_sharma.webp`,
  },
  {
    text: `I am very much satisified with the workshop which i did last time .And I am glad to know that there is a platform where we can ask doubts for our child.`,
    name: 'Mehak Singh',
    title: 'Mother of 5 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Babyanama_Weaning_Testimonial_Mehak_Singh.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Babyanama_Weaning_Testimonial_Mehak_Singh.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Mehak_singh1.webp`,
  },
  {
    text: `The workshop was very useful...the doctor explained all the basic things and answered all queries in detail. I hope it happens every month.`,
    name: 'Saroj',
    title: 'Mother of 6 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Saroj.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Saroj.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/saroj.webp`,
  },
  {
    text: `Everything was very thorough in the seminar. Everyone got this chance to complete the questionnaire in the session with ma'am. This service is very useful for moms in nuclear families like myself.`,
    name: 'Akanksha',
    title: 'Mother of 6 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akanksha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Akanksha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akansha.webp`,
  },
];

export const stepsDataWeaning: StepsProps = {
  header: {
    highlight: 'How It Works',
  },
  items: [
    {
      description: 'Join our WhatsApp community',
    },
    {
      description: 'Attend the live online workshop',
    },
    {
      description: 'Interact with experts in real-time',
    },
    {
      description: 'Receive personalized baby nutrition plan',
    },
    {
      description: 'Get lifetime access to session recording',
    },
    {
      description: 'Easily reschedule if you miss a session',
    },
  ],
};

export const faqs3WeaningData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'When should I start introducing solid foods to my baby?',
      description: `Experts recommend introducing solid foods strictly after 6 months of age..`,
    },
    {
      title: 'What are the signs that my baby is ready for solid foods?',
      description: `Signs of readiness include being able to sit up unsupported, showing interest in food, and having good head and neck control.`,
    },
    {
      title: 'What are the best first foods to offer my baby?',
      description: `Pureed vegetables, and fruits are good first foods.`,
    },
    {
      title: 'How should I prepare and serve solid foods for my baby?',
      description: `Foods should be pureed or mashed to a smooth consistency and served with a small spoon or in a safe feeder. Always supervise your baby while they eat.`,
    },
    {
      title: 'How much solid food should my baby be eating at each meal?',
      description: `Start with a small amount (1-2 tablespoons) and gradually increase as per age.`,
    },
    {
      title: 'Can I continue to breastfeed or offer formula to my baby while introducing solid foods?',
      description: `Yes, breastmilk or formula should remain the primary source of nutrition until 12 months of age.`,
    },
    {
      title: 'What are the potential choking hazards to look out for during baby led weaning?',
      description: `Foods like grapes should be cut into small pieces and hard, round foods like nuts & popcorn should be avoided.`,
    },
    {
      title: 'How can I encourage my baby to try new foods and develop healthy eating habits?',
      description: `Offer a variety of healthy foods in a positive, supportive environment and avoid forcing your baby to eat.`,
    },
    {
      title: 'What if my baby seems to be having trouble with solid foods?',
      description: `Our workshop will help guide you through all the troubles you might face with weaning, and also with 1 month free follow up on WhatsApp you can ensure that you have solutions to all your troubles.`,
    },
    {
      title: 'When can I introduce allergenic foods like peanut butter to my baby?',
      description: `Experts now recommend introducing allergenic foods after 10 months of age, and specifically peanuts only after 12 months, unless your baby has a high risk of developing a food allergy.`,
    },
  ],
  link: {
    label: 'Contact us',
    href: '#footer',
  },
};
export const faqsSolidInroData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'When should I start introducing solids to my baby?',
      description: `Typically, babies are ready for solids around the end of 6 months, but this can vary based on developmental signs.
      `,
    },
    {
      title: 'What feeding approach does this course cover?',
      description: `The course covers traditional weaning and baby-led weaning (BLW) methods.`,
    },
    {
      title: 'Will the course help if my baby has food allergies?',
      description: `Yes, the course includes guidance on managing and preventing allergies.`,
    },
    {
      title: 'How is the content delivered?',
      description: `The course offers pre-recorded video lessons, live Q&A sessions, and personalized support.`,
    },
    {
      title: 'Is lifetime access included?',
      description: `Yes, you receive lifetime access to all course materials.`,
    },
    {
      title: 'How do I know if my baby is ready for solids?',
      description: `Look for signs like good head control, sitting up with support, and showing interest in food.`,
    },
    {
      title: 'What foods should I start with?',
      description: `The course covers ideal first foods, balancing nutrition, and introducing diverse textures.`,
    },
    {
      title: 'Can I do both baby-led weaning and purees?',
      description: `Yes, the course provides insights into combining both approaches.`,
    },
    {
      title: 'What if my baby refuses to eat?',
      description: `You’ll learn strategies to manage picky eating and feeding challenges.`,
    },
    {
      title: 'Is there ongoing support after completing the course?',
      description: `Yes, the course includes 2 follow-up Q&A sessions for additional guidance.`,
    },
  ],
  link: {
    label: 'Contact us',
    href: '#footer',
  },
};

// Countdown timer care plans
export const carePlansTimerData: CountDownTimerProps = {
  endDate: new Date('May 12, 2024 23:59:59'),
};

export const getCarePlansTimerData: CountDownTimerProps = {
  endDate: new Date('May 12, 2024 23:59:59'),
};

export const babyCarePlanTimerData: CountDownTimerProps = {
  endDate: new Date('March 10, 2024 23:59:59'),
};
export const btpPlanTimerData: CountDownTimerProps = {
  endDate: new Date('September 03, 2024 23:59:59'),
};

export const wtpTimerData: CountDownTimerProps = {
  endDate: new Date('July 19, 2024 23:59:59'),
};

export const stpPlanTimerData: CountDownTimerProps = {
  endDate: new Date('July 19, 2024 23:59:59'),
};
// Countdown timer care plans
export const salesPlansTimerData: CountDownTimerProps = {
  endDate: new Date('July 25, 2023 23:59:59'),
};

// Countdown timer care plans
export const primeCarePlusTimerData: CountDownTimerProps = {
  endDate: new Date('December 31, 2023 23:59:59'),
};

// Countdown timer weaning
export const weaningTimerData: CountDownTimerProps = {
  endDate: new Date('July 28, 2024 11:00:00'),
};
// sleep training
export const sleepTrainingTimerData: CountDownTimerProps = {
  endDate: new Date('April 7, 2024 15:00:00'),
};

//lactation-webinar
export const LactationWebinarTimerData: CountDownTimerProps = {
  endDate: new Date('July 15, 2024 17:00:00'),
};

// Countdown timer basic chat care plans
export const basicChatTimerData: CountDownTimerProps = {
  endDate: new Date('Novemeber 30,2023 23:59:59'),
};

export const carePlanMonthEndSaleTimerData: CountDownTimerProps = {
  endDate: new Date('November 30, 2023 23:59:59'),
};

// main doctor data
export const doctorsData: DoctorsData = {
  header: {
    highlight: 'Meet Our Doctors',
    subtitle: 'Best In Business',
    // title: 'Team',
  },
  teams: [
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drSumitraM.webp',
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics (Kalawati Hospital)',
      desc: '8 yrs exp, ex-Safdarjung',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drRajat.webp',
      name: 'Dr. Rajat Goswami',
      title: 'MD Pediatrics (Blossoms Kids Clinic)',
      desc: '10 yrs exp, Newborn Specialist',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drAnupriya.webp',
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Pediatrics (AG Nursing Home)',
      desc: '4 yrs exp, Assam Med College, PGPN Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drDhanya.webp',
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD (Aster MIMS Hospital)',
      desc: 'Fellowship in Ped & Adol Endocrinology, 7 yrs exp KMC Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drNikita.webp',
      name: 'Dr. Nitika Tulsi',
      title: "MBBS, MD Pediatrics (Dr. Bhalla's Child Care Clinic)",
      desc: '6 yrs exp, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drDarshana.webp',
      name: 'Dr. Darshana Rathod',
      title: 'MD Pediatrics (Mumbai)',
      desc: '10 yrs exp, ex-Nair Hospital, Lokmanya Tilak Hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drPriyanka.webp',
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Pediatrics (Jaypee Hospital, Noida)',
      desc: '8 yrs exp, VMMC Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drChadani.webp',
      name: 'Dr. Chandni J.',
      title: 'OB-GYN (Medlife Hospital)',
      desc: '7 yrs exp, NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drPuneet.webp',
      name: 'Dr. Puneet',
      title: 'MD Pediatrics (Safdarjung)',
      desc: '10 yrs exp, Fortis Hospital Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Puneet&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drPoojanpreet.webp',
      name: 'Dr. Poojanpreet',
      title: 'Pediatrician & Neonatologist (MBBS, DCH, Kolkata)',
      desc: 'ex-Apollo Hospital Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Poojanpreet&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drSrimukhi.webp',
      name: 'Dr. Srimukhi Anumolu',
      title: 'Pediatrician & Neonatologist (Ankura Hospital, Vijayawada)',
      desc: '10 yrs exp',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Srimukhi Anumolu&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/dr-rashmi.webp',
      name: 'Dr. Rashmi Agarwal',
      title: 'MD, DNB Dermatology, FRGUHS Pediatric Dermatology',
      desc: '8 yrs exp, Skin and Recon Clinic Bengaluru',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rashmi Agarwal&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drAmritha.webp',
      name: 'Dr. Amritha Jain',
      title: 'MD Pediatrics (Karpagam Faculty of Medical Science and Research)',
      desc: '3 yrs exp, GCMC Chidambaram',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Amritha Jain&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drAditi.webp',
      name: 'Dr. Aditi Birje',
      title: 'MD Pediatrics (KEM Hospital, Mumbai)',
      desc: '8 yrs exp',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Aditi Birje&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drKumar.webp',
      name: 'Dr. Kumar Anand',
      title: 'MD Pediatrics (Lady Hardinge), DM Neonatology (Madurai)',
      desc: '11 yrs exp, Sr. Consultant (Nattathi Nadar)',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Kumar Anand&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drRashi.webp',
      name: 'Dr. Rashi Pangti',
      title: 'MD Dermatology (Gurugram)',
      desc: '10 yrs exp, ex-AIIMS, Lady Hardinge',
      rating: 95,
      exp: 10,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rashi Pangti&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/drTausif.webp',
      name: 'Dr. Tausif Iqbal',
      title: 'MD Pediatrics (Accord Hospital)',
      desc: '9 yrs exp, ex-Lady Hardinge, Kalawati',
      rating: 95,
      exp: 9,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Tausif Iqbal&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/ShaiphaliGoyal.webp',
      name: 'Shaiphali Goyal',
      title: 'MSc Food and Nutrition (Gold Medalist)',
      desc: 'IYCF Certified Lactation Counsellor, 9 yrs exp, ex-Unicef, Kalawati Hospital Delhi',
      rating: 95,
      exp: 9,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Shaiphali Goyal&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/MsVinothini.webp',
      name: 'Ms. Vinothini',
      title: 'Certified Lactation Expert',
      desc: '100+ mothers, Mother of 3 yrs old',
      rating: 95,
      exp: 9,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Ms. Vinothini&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/Dr.PoojaMarathe.webp',
      name: 'Dr. Pooja Marathe',
      title: 'Pediatric Nutritionist & Lactation Consultant',
      desc: '11 yrs exp',
      rating: 95,
      exp: 11,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Pooja Marathe&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/dr-isha-tiwari.webp',
      name: 'Dr. Isha Tiwari',
      title: 'MBBS, MD, DNB, DM (Hyderabad), ISN Pediatric Nephrology',
      desc: 'Asst. Prof. Nephrology (Govt MGM Superspeciality Hospital Indore)',
      rating: 95,
      exp: 11,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Isha Tiwari&type=phone_number',
    },
    {
      avatar: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/dr-priyanka-nanwani.webp',
      name: 'Dr. Priyanka Nawani',
      title: 'MD, DNB Dermatology',
      desc: 'Fellowship in Laser & Aesthetics, Fellowship in Dermatosurgery (VMMC and Safdarjung Hospital Delhi)',
      rating: 95,
      exp: 11,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Nawani&type=phone_number',
    },
    {
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
      avatar: drDipalee,
      name: 'Dr. Dipalee Patel',
      title: 'IBCLC and BHMS',
      desc: '3+ yrs exp, Helped 1000+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
  ],
};

export const lactationExpertData: LactationExpertData = {
  header: {
    highlight: 'Meet Our Lactation Experts',
    subtitle: '',
  },
  teams: [
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

    {
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
      avatar: drDipalee,
      name: 'Dr. Dipalee Patel',
      title: 'IBCLC and BHMS',
      desc: '3+ yrs exp, Helped 1000+ Mothers',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Darshana Rathod&type=phone_number',
    },
  ],
};

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Basic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Reliable Pediatric Care within 15 Minutes.',
    },
    prices: {
      monthly: 999,
      sixMonth: 2499,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations (8AM - 10PM)',
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
      // {
      //   TickIcon: <FaCheckCircle color="green" />,
      //   text: 'Free postpartum classes',
      //   icon: null,
      // },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 999, sixMonth: 2249 } },
      { code: 'GET20', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'GET30', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'REP30', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'WORRYFREE', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'FREEDOM', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'HAPPY', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'DIWALI', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'NURTURE', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'GULAL', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'RENEW', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'MOTHER', prices: { monthly: 999, sixMonth: 1998 } },
    ],
  },
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive Care for Your Child's Health & Development.",
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: null,
        text: (
          <>
            <b className="font-semibold text-primary-600">Everything In Basic Care and:</b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Unlimited free </b> pediatric consultations{' '}
            <b className="font-semibold">24X7</b>
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Monthly
            <b className="font-semibold"> milestones tracking </b> by a senior pediatrician
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <p>
            Our service offers comprehensive baby growth and milestone tracking. During a video call, our Pediatricians
            evaluate your baby&apos;s development following <span className="font-bold">WHO guidelines</span>. We assess
            various growth aspects, including
            <span className="font-bold"> physical, sensory, communication, and emotional development.</span> Each month,
            these records are
            <span className="font-bold">meticulously updated and managed in a Google sheet by our Pediatrician</span>,
            ensuring consistent monitoring of your baby&apos;s progress.
          </p>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Comprehensive guidance for
            <b className="font-semibold"> lactation, nutrition, weaning. </b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Free workshop </b> : weaning.
          </>
        ),
        icon: null,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'REP30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'FREEDOM', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'HAPPY', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'DIWALI', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'NURTURE', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GULAL', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'RENEW', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'MOTHER', prices: { monthly: 1999, sixMonth: 3999 } },
    ],
  },
  {
    id: 3,
    name: 'Holistic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Exceptional Personalized Care for Child and Mother's Well-Being.",
    },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: null,
        text: (
          <>
            <b className="font-semibold text-primary-600">Everything In Prime Care and:</b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Dedicated pediatrician</b> to guide and support you with your child's specific
            needs
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Private WhatsApp group </b>with your dedicated pediatrician.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother</b> :postnatal care...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother:</b> postnatal care, personalized
            diet plan, emotional well-being and other health concerns.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist,
            Dermatologist, Psychologist, Pediatrician, Nutritionist.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning, lactation.
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'REP30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'FREEDOM', prices: { monthly: 3998, sixMonth: 4998 } },
      { code: 'HAPPY', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'DIWALI', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'NURTURE', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GULAL', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'RENEW', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'MOTHER', prices: { monthly: 3998, sixMonth: 7999 } },
    ],
  },
];

export const InfoContentWeaningWorkshop: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: 'Instant Access to Recording',
    content:
      'As soon as you pay our team will reach out to you and share the recording of the latest session with you on your Gmail.',
  },
  {
    id: 2,
    title: 'WhatsApp Support for 1 week',
    content:
      "Post payment you will get the link to join our group with both experts to get all you queries about baby's sleep resolved by them for 7 days. Make sure to attend live session before asking queries on the group.",
  },
  {
    id: 3,
    title: 'Live Session Access',
    content:
      'Our experts hold live session twice a month, and you can join the one happening next and resove all your queries live. In case you are unavailable, you can reach out to our support and they will help you join the next scheduled session.',
  },
];

export const InfoContentBabyCarePlan: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: '24/7 Instant Pediatric Care',
    content:
      'Access unlimited chat support with MD Pediatricians via an exclusive WhatsApp group upon subscription. For more personalized care, book video consultations 24/7 with our pediatricians at no extra charge.',
  },
  {
    id: 2,
    title: 'Comprehensive Breastfeeding Help',
    content:
      'Get unlimited lactation support from the expert of your choice. With our support, over 95% of mothers have successfully established exclusive breastfeeding for their babies.',
  },
  {
    id: 3,
    title: 'Monthly Milestone Tracking',
    content: `Our team will schedule a video call with an experienced pediatrician to assess your baby's growth against WHO benchmarks right after you subscribe. We maintain and track these records monthly to ensure your baby's development is on track.`,
  },
  {
    id: 4,
    title: 'Dedicated Pediatrician',
    content: `Exclusive to the Holistic Care plan, gain access to a dedicated pediatrician familiar with your baby's medical history. They will proactively follow up with you, offering personalized care plans. This option is ideal for premature babies or those with a history of NICU admission, as they require specialized care.
      `,
  },
  {
    id: 5,
    title: 'Private WhatsApp Group',
    content: ` Also part of the Holistic Care plan, this feature provides a dedicated WhatsApp group with your pediatrician, which family members can join. It ensures privacy and keeps everyone informed about the baby's health.
      `,
  },
  {
    id: 6,
    title: 'Comprehensive Support',
    content: `The Holistic Care Plan is designed to support both baby and mother, offering free consultations with a gynecologist, dietitian, and mental wellness expert. This is particularly beneficial for mothers who had a C-section, are managing their weight while breastfeeding, or need emotional support during this time.`,
  },
  {
    id: 7,
    title: '10 days refund policy',
    content: (
      <>
        <p>Refund policy in detail:</p>
        <p>
          While it is extremely rare (less than 1%) that parents ask us for a refund on the Care Plans, in case you do
          here is the refund policy:
        </p>
        <br />
        <p>
          <strong>Eligibility:</strong>
          This policy applies only to our 3-month care plans. Refund requests must be submitted within 10 days of your
          initial subscription date.
        </p>
        <p>
          <strong>Deductions:</strong>
          Should you avail of any consultations during this period, the refund amount will be subject to deductions.
          Pediatric consultations are deducted at ₹500 each, and all other consultations at ₹800 each. Chat queries will
          not impact the refund amount and are excluded from deductions.
        </p>
        <p>
          <strong>Process:</strong>
          To request a refund, please contact our finance team by dropping a mail to
          <a href="mailto:payments@gagahealth.com"> payments@gagahealth.com</a>. We aim to process all refunds within 2
          working days from our end, with the exact timeline on bank timelines communicated during the refund process.
          Ideally refunds take upto 5 working days to reflect back in your payment mode after being processed from our
          end.
        </p>
        <p>
          <strong>Support:</strong>
          For any questions or clarification on our refund policy, please reach out to us using the WhatsApp chat icon
          on this pafe. We’re here to assist you.
        </p>
      </>
    ),
  },
];

//ComparisonPlan

export const ComparisonPlans: ComparisonPlan[] = [
  {
    id: 1,
    name: 'Basic Care',
    prices: {
      monthly: 999,
      sixMonth: 2499,
    },
    features: [true, '8AM -10PM', false, false, false, false, false, '20%OFF'],
    coupons: [
      // { code: 'NEWMOM', prices: { monthly: 899, sixMonth: 2499 } },
      { code: 'GET10', prices: { monthly: 999, sixMonth: 2249 } },
      { code: 'GET20', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'GET30', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'WORRYFREE', prices: { monthly: 999, sixMonth: 1749 } },
    ],
  },
  {
    id: 2,
    name: 'Prime Care',
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    features: [true, '24x7', true, true, false, false, 'Weaning', '20%OFF'],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
  {
    id: 3,
    name: 'Holistic Care',
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    features: [true, '24x7', true, true, true, true, 'Lactation, Nutrition, Weaning', 'FREE'],
    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const ComparisonPlansBabyCare: ComparisonPlan[] = [
  {
    id: 2,
    name: 'Prime Care',
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    features: [true, '24x7', true, true, false, false, '20%OFF'],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
  {
    id: 3,
    name: 'Holistic Care',
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    features: [true, '24x7', true, true, true, true, 'FREE'],
    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];
{
  /*Dr.Aditi Start*/
}
//Hero section
export const aditiHeroData: HeroProps = {
  title: <>Dr. Aditi's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries.</>,
  callToAction: {
    text: 'Try Chat for Free',
    href: 'http://babynama.in/joinaditi1',
  },
  callToAction2: {
    text: '',
    href: '/',
  },
  image: {
    src: DrAditi,
    alt: 'DrAditi',
  },
};

//WhySection

export const drAditiWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'Avail Care Plans ',
        href: '/dr-aditi-birje#pricing',
      },
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: 'pediatrician',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Aditi.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Avail Care Plans',
        href: '/dr-aditi-birje#pricing',
      },
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
      callToAction: {
        text: 'Avail Care Plans ',
        href: '/dr-aditi-birje#pricing',
      },
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Aditi will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },
      callToAction: {
        text: 'Avail Care Plans',
        href: '/dr-aditi-birje#pricing',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

//doctosData
export const doctorsAditiData: DoctorsData = {
  header: {
    highlight: 'Meet Our Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const aditiAboutData: IdentifyPreviewAccessProps = {
  title: 'About Doctor Aditi',
  subtitle1:
    'Dr. Aditi Birje is a Paediatrician and Neonatologist with a special interest in Pediatric Allergy and Asthma and has an experience of 8 years in this field. Dr. Aditi Birje has done her MBBS and MD Pediatrics from Seth GSMC AND KEM HOSPITAL MUMBAI. She practices at Shree Gurumaauli Clinic in Yogi Nagar Borivali West, Mumbai. She is a member of the Indian  Association of Pediatrics. Some of the services provided by the doctor are newborn care, acute and chronic illness, pediatric allergy and asthma, growth and development assessment, and infant and child nutrition.',
  subtitle2: '',
  subtitle3: '',
  image: {
    src: AboutDrAditi,
    alt: 'AboutDrAditi',
  },
};

// Testimonial data
export const aditiTestimonialData: TestimonialProps = {
  header: {
    highlight: 'Testimonials',
    subtitle: ' ',
    // title: 'Testimonial',
  },
  testimonials: [
    {
      review: `I visited Dr. Aditi at her clinic in an emergency situation and she duly asked me to come to her clinic early in the morning. She prescribed medication to my baby which provided her relief and comfort. Dr. Aditi also followed up with me to know my baby’s condition. She is patient and knows how to handle concerns of new parents. I highly recommend Dr. Aditi.`,
      name: 'Preshita Chaurasiya',
      url: ``,
      profileImage: {
        src: P,
        alt: 'P',
      },
      thumbnailUrl: ``,
    },
    {
      review: `Dr. Aditi is a very helpful doctor. My 3 year old daughter was not well. She was not able to swallow anything due to throat infection and it was Sunday, none of the doctors were available. I searched for pediatric doctors availability on Sunday and I found her contact number. I quickly connected with her and she gave me an appointment and asked me to bring my daughter to clinic for check up. She checked my daughter and recommended few medicines. Within 2 days she felt better.
      Not only limited to this, she even followed up with me for the next 2 days and kept enquiring about my daughters condition.
      I have never seen a doctor who even follows up with the patient.
      Great doctor and will highly recommend her. She is just a call away and it also gives us a feeling that there is someone available 24/7 to help us if required.
      Thanks :)
      `,
      name: 'Anuradha Bhagwat',
      url: ``,
      profileImage: {
        src: A,
        alt: 'A',
      },
      thumbnailUrl: ``,
    },
    {
      review: `Dr. Aditi is an excellent pediatrician. I visited her at Shri Guru Mauli Clinic for my 3 month old baby and was very impressed with her level of care and expertise. She took the time to thoroughly examine my baby and answer all of my questions and concerns. She has a great bedside manner and made us very comfortable throughout the visit. I highly recommend Dr. Aditi to any parent in need of a pediatrician.`,
      name: 'Darshana Choudhari',
      url: ``,
      profileImage: {
        src: D,
        alt: 'D',
      },
      thumbnailUrl: ``,
    },
    {
      review: `This is the first time I have experience that the doctor is so concern about patient that she takes follow ups on regular basic. During Clinic visit we get good amount of time to talk and clear all our doubts, even on call we get proper responses. Dr Aditi is so polite and humble with parents and toddler, this is why even toddler responses to her questions. It was a emergency for me as my toddler is having fever and eye conjunctives and Dr. Aditi were available thr in just one call. Really Appreciable.`,
      name: 'Nikita Chawan',
      url: ``,
      profileImage: {
        src: N,
        alt: 'N',
      },
      thumbnailUrl: ``,
    },
    {
      review: `
      Dr.Aditi is very Caring when it comes to patient care. Dr sees that post consultation Dr personally message and take feedback of her patient health. My Son was unwell for 2 weeks in just one dose his fever subsided and cough got reduced. I highly recommend Dr.
      Aditi`,
      name: 'Sakshi Sunil Sawant',
      url: ``,
      profileImage: {
        src: S,
        alt: 'S',
      },
      thumbnailUrl: ``,
    },
  ],
};

export const aditiPlans: Plan[] = [
  {
    id: 3,
    name: 'Dr. Aditi’s Holistic Care Plan',
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked offline consultations with Dr. Aditi per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Aditi',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

//doctorsHeader

// Header data
export const doctorsAditiHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-aditi-birje',
    },
    {
      image: {
        src: planHighlightsIcon,
        alt: 'planHighlightsIcon',
      },
      label: 'Plan Highlights',
      href: '/dr-aditi-birje#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-aditi-birje#doctors',
    },
    {
      image: {
        src: femaleDoctorIcon,
        alt: 'femaleDoctorIcon',
      },
      label: 'About',
      href: '/dr-aditi-birje#about-doctor',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-aditi-birje#child-testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-aditi-birje#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};
export const doctorsAnupriyaHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-anupriya',
    },
    {
      image: {
        src: planHighlightsIcon,
        alt: 'planHighlightsIcon',
      },
      label: 'Plan Highlights',
      href: '/dr-anupriya#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-anupriya#doctors',
    },
    {
      image: {
        src: femaleDoctorIcon,
        alt: 'femaleDoctorIcon',
      },
      label: 'About',
      href: '/dr-anupriya#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-anupriya#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-anupriya#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};
export const doctorsSumitraHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care Plans',
      href: '/dr-sumitra/#plan',
    },
    {
      image: {
        src: programIcon,
        alt: 'programIcon',
      },
      label: 'Programs',
      icon: MdKeyboardArrowRight,
      links: [
        {
          image: {
            src: babyIcon,
            alt: 'babyIcon',
          },
          label: 'Baby Solids Introduction',
          href: '/solids-food-start-workshop',
        },
        // {
        //   image: {
        //     src: yogaIcon,
        //     alt: 'yogaIcon',
        //   },
        //   label: 'Yoga',
        //   href: '/yoga',
        // },
        {
          image: {
            src: lactationIcon,
            alt: 'lactationIcon',
          },
          label: 'Lactation Workshop',
          href: '/lactation-webinar',
        },
        {
          image: {
            src: doctorIcon,
            alt: 'doctorIcon',
          },
          label: 'Doctor Live Session',
          href: '/doctor-live-session',
        },
      ],
    },
    {
      image: {
        src: giftIcon,
        alt: 'giftIcon',
      },
      label: 'Gift a subscription',
      icon: MdKeyboardArrowRight,
      links: [
        {
          image: {
            src: partnerIcon,
            alt: 'partnerIcon',
          },
          label: 'Gift your partner',
          href: '/gifting-father',
        },
        {
          image: {
            src: giftIcon,
            alt: 'giftIcon',
          },
          label: 'Gift your friend',
          href: '/gifting',
        },
        {
          image: {
            src: referIcon,
            alt: 'referIcon',
          },
          label: 'Referrals',
          href: '/referrals',
        },
      ],
    },
    {
      image: {
        src: blogIcon,
        alt: 'blogIcon',
      },
      label: 'Blogs',
      href: '/blog',
    },
  ],
  actions: [
    {
      label: 'Emergency Consultation',
      href: '/pediatric-consultation',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const Aditilogo = {
  src: AditiLogo,
  alt: 'Aditi Logo',
};

export const BabynamaDoctorlogo = {
  src: BabynamaDoctorLogo,
  alt: 'BabynamaDoctorLogo',
};

//care-plansHeader
export const getCarePlanHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/get-care-plan#heroOne',
    },
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care Plan',
      href: '/get-care-plan#pricing',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/get-care-plan#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/get-care-plan#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plan',
      href: '/get-care-plan#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const AdsBabynamaHeaderData: CareBabynamaHeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/care-plans-ad',
    },
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care plan',
      href: '/care-plans-ad#sales-pricing',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/care-plans-ad#testimonials',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

// Header data
export const basicCareHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/basic-care',
    },
    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/basic-care#why-babynama',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/basic-care#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/basic-care#testimonials',
    },
  ],
  actions: [
    {
      label: 'Basic Care Plan',
      href: '/basic-care#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

// Header data
export const plansLandingHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/plans-landing',
    },
    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/plans-landing#why-babynama',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/plans-landing#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/plans-landing#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plan',
      href: '/plans-landing#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const plansWelcomeBackHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/welcome-back-plans',
    },
    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/welcome-back-plans#why-babynama',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/welcome-back-plans#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/welcome-back-plans#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plan',
      href: '/welcome-back-plans#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const previewAccessLandingHeaderData: HeaderProps = {
  // actions: [
  //   {
  //     label: 'Get 24 Hour Free Trial',
  //     href: '/preview-access-landing',

  //     type: 'primary',
  //   },
  // ],

  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'center',
};
export const previewLandingHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/preview-landing',
    },
    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/preview-landing#why-babynama',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/preview-landing#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/preview-landing#testimonials',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

// Header data
export const holisticCareHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/holistic-care',
    },

    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/holistic-care#why-babynama',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/holistic-care#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/holistic-care#testimonials',
    },
  ],
  actions: [
    {
      label: 'Holistic Care Plan',
      href: '/holistic-care#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const primeCareHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/prime-care',
    },

    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/prime-care#why-babynama',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/prime-care#doctors',
    },

    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/prime-care#testimonials',
    },
  ],
  actions: [
    {
      label: 'Prime Care Plan',
      href: '/prime-care#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};
export const primeCarePlusHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/prime-care-plus',
    },

    {
      image: {
        src: whyBabynamaIcon,
        alt: 'WhyBabynamaIcon',
      },
      label: 'Why Babynama',
      href: '/prime-care-plus#why-babynama',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/prime-care-plus#doctors',
    },

    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/prime-care-plus#testimonials',
    },
  ],
  actions: [
    {
      label: 'Prime Care Plan',
      href: '/prime-care-plus#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};
{
  /*Thank You Page */
}

//solids-food-start-workshop-doctors

/**Lactation webinar */

//solids-food-start-workshop-doctors

//who should attend

//lactation-webinar

//webinar-what section

//lactationWhySection

export const LactationWhyHeadingData: FeaturesProps = {
  header: {
    highlight: <>Why this Webinar?</>,
    subtitle:
      'As per NFH survey, 45% babies in India aren’t breastfed, and the best time to address this problem is from day 1. There are various problems that you might encounter in the first week. This webinar is aimed to educate you about all the possible problems, how to identify them, and what to do you if you encounter them. The topics covered include:    ',
  },
  items: [
    {
      title: '',
      description:
        "Our doctors understand the concerns of new parents and encourage you to ask any question, no matter how 'silly' it may seem.",
      icon: FaHospitalUser,
      link: {
        label: 'Learn More',
        href: '/our-doctors',
      },
    },
  ],
};

export const ThankYouFreePreview: ThankYouData = {
  title1: 'Your worry-free parenting journey starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};

export const ThankYouExpectingMoms: ThankYouData = {
  groupLink: 'https://babynama.in/expectingmoms',
  title1: 'Congratulations on your pregnancy.',
  title2:
    'With the following link you can join our group for expecting moms. Our gynecologists will try our best to answer all your basic pregnancy doubts within 2-3 hours on this group.',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const ThankYouExpectingMoms2: ThankYouData = {
  groupLink: 'https://babynama.in/expectingmoms2',
  title1: 'Congratulations on your pregnancy.',
  title2:
    'With the following link you can join our group for expecting moms. Our gynecologists will try our best to answer all your basic pregnancy doubts within 2-3 hours on this group.',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const ThankYouWelcomeBack: ThankYouData = {
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const ThankYouFreePreviewSumitra: ThankYouData = {
  title1: 'Your worry-free parenting journey with doctor Sumitra starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackSumitra: ThankYouData = {
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const ThankYouBasic: ThankYouData = {
  groupLink: 'https://babynama.in/basicgroup',
  title1: 'Payment Successful',
  title2: (
    <>
      {' '}
      <span className="font-bold text-green-300">Congratulations!</span> With this subscription , you have unlocked
      access to a group with permanent access to doctors. To join, please use the following link.
    </>
  ),
  buttonText: 'Join our Pediatrics WhatsApp Group',
  paragraph: (
    <>
      {}
      If you are in an emergency right now, please call our 24/7 helpline{' '}
      <a className="font-bold text-green-300 hover:text-red-300" href="tel:917948221222">
        +917948221222
      </a>
      .You can reach out to our support team on WhatsApp on this number if you have any questions about your plan.
    </>
  ),
  // countdown:3,
};
export const ThankYouBasicChat: ThankYouData = {
  groupLink: 'https://babynama.in/permanentgroup',
  title1: 'Payment Successful',
  title2: (
    <>
      {' '}
      <span className="font-bold text-green-300">Congratulations!</span> With this subscription , you have unlocked
      access to a group with permanent access to doctors. To join, please use the following link.
    </>
  ),
  buttonText: 'Join our Pediatrics WhatsApp Group',
  paragraph: (
    <>
      {}
      If you are in an emergency right now, please call our 24/7 helpline{' '}
      <a className="font-bold text-green-500 hover:text-red-300" href="tel:917948221222">
        +917948221222
      </a>
      .You can reach out to our support team on WhatsApp on this number if you have any questions about your plan.
    </>
  ),
  // countdown:3,
};
export const ThankYouFreePreview1: ThankYouData = {
  groupLink: 'https://babynama.in/join11',
  title1: 'Your worry-free parenting journey starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouHolistic: ThankYouData = {
  groupLink: 'https://babynama.in/exclusivegroup',
  title1: 'Payment Successful',
  title2: (
    <>
      {' '}
      <span className="font-bold text-green-300">Congratulations!</span> With this subscription , you have unlocked
      access to a group with permanent access to doctors. To join, please use the following link.
    </>
  ),
  buttonText: 'Join our Pediatrics WhatsApp Group',
  paragraph: (
    <>
      {}
      If you are in an emergency right now, please call our 24/7 helpline{' '}
      <a className="font-bold text-green-500 hover:text-red-300" href="tel:917948221222">
        +917948221222
      </a>
      . Our support team will reach out to you in the next 2 working days to explain all details about your plan.
    </>
  ),
  // countdown:3,
};
export const ThankYouLactation: ThankYouData = {
  title1: 'Payment Successful',
  title2:
    'Thank you for registering for this workshop. Kindly join the group for this webinar here. Our gynecologists are also added to this group. Feel free to ask any pregnancy related basic questions here.  ',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const ThankYouPreviewAccess: ThankYouData = {
  groupLink: 'https://babynama.in/join3',
  title1: 'Payment Successful',
  title2:
    ' Thank you for payment. Please join the WhatsApp group for the preview access by clicking the following button:',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};

export const ThankYouPreviewAccessFathers: ThankYouData = {
  groupLink: 'https://babynama.in/join21',
  title1: 'Your worry-free parenting journey starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouPrime: ThankYouData = {
  groupLink: 'https://babynama.in/exclusivegroup',
  title1: 'Payment Successful',
  title2: (
    <>
      {' '}
      <span className="font-bold text-green-300">Congratulations!</span> With this subscription, you have unlocked
      access to an exclusive group with permanent access to doctors. To join, please use the following link.
    </>
  ),
  buttonText: 'Join Exclusive WhatsApp Group',
  paragraph: (
    <>
      {}
      If you are in an emergency right now, please call our 24/7 helpline{' '}
      <a className="font-bold text-green-500 hover:text-red-300" href="tel:917948221222">
        +917948221222
      </a>
      . Our support team will reach out to you in the next 2 working days to explain all details about your plan.
    </>
  ),
  // countdown:3,
};

export const ThankYouWelcomeBack1: ThankYouData = {
  groupLink: 'https://babynama.in/join11',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const ThankYouYoga: ThankYouData = {
  groupLink: 'https://babynama.in/yogagroup',
  title1: 'Payment Successful',
  title2:
    'Thank you for payment. Please join the WhatsApp group for the Yoga session details by clicking the following button:',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const ThankYouWeaning1500: ThankYouData = {
  groupLink: 'https://babynama.in/wwgroup',
  title1: 'Payment Successful',
  title2: `Thank you for booking your seat for the workshop. Please join the WhatsApp group for the workshop by
    clicking the following button:`,
  buttonText: 'Join WhatsApp Group',
  paragraph: 'For any issues, message our live agent using this link',
  // countdown:3,
};

export const ThankYouSleepTraining750: ThankYouData = {
  groupLink: 'https://chat.whatsapp.com/L1JIzSkS3Gu3XxyJLRQyww',
  title1: 'Payment Successful',
  title2: `Thank you for booking your seat for the workshop. Please join the WhatsApp group for the workshop by
    clicking the following button:`,
  buttonText: 'Join WhatsApp Group',
  paragraph: 'For any issues, message our live agent using this link',
  // countdown:3,
};

export const ThankYouSleepTraining2000: ThankYouData = {
  groupLink: 'https://babynama.in/wwgroup',
  title1: 'Payment Successful',
  title2: `Thank you for booking 1:1 session with expert. Our team will contact you shortly`,
  buttonText: '',
  paragraph: 'For any issues, message our live agent using this link',
  // countdown:3,
};

//solids-food-start-workshop-doctors
export const WeaningDoctors: WorkshopDoctor[] = [
  {
    name: 'Dr. Sumitra Meena',
    qualification: 'MBBS, MD Paediatrics',
    description: '11+ yrs exp, Founder Babynama',
    imageSrc: drSumitraM,
  },
  {
    imageSrc: missSheeba,
    name: 'Sheeba Collins',
    qualification: 'MSC, PGDM',
    description: '5+ yrs exp, Helped 700+ Mothers',
  },
  {
    imageSrc: missSimran,
    name: 'Simran Bagwan',
    qualification: 'ICYF (UNICEF)',
    description: '5+ yrs exp, Helped 500+ Mothers',
  },
];

/**Lactation webinar */
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
    paymentButton: (
      <>
        Register for Live Session <span className="pl-1 text-sm font-bold text-orange-200">70% off</span>
      </>
    ),
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

export const BreastfeedingSeminarHeroData: BreastfeedingSeminarHeroDataProps = {
  data: {
    heading: <>Breastfeeding Webinar</>,
    subheading: (
      <>
        90% of breastfeeding issues can be solved with right guidance without any medication or artificial supplements
      </>
    ),
    paymentButton: 'Register for Live Session',
    callToAction: {
      text: 'Get recording now',
      href: '',
    },
    image: {
      src: lactationThumbnail,
      alt: 'Breastfeeding Seminar',
    },
    points: ['science behind breastfeeding', 'how to get right latch', 'breastfeeding positions'],
  },
};

//solids-food-start-workshop-doctors
export const WebinarDoctors: WorkshopDoctor[] = [
  {
    name: 'Dr. Sumitra Meena',
    qualification: '',
    description: `- MD Pediatrician (9 Years Experience)
                  - Ex Resident, Safdarjung Hospital Delhi
                  - Helped over 1000 mothers
                  - Mother of 3 year old, with her own lactation struggles
                  - Certified Lactation Consultant,
                  - Certified  Pediatric Sleep Expert`,

    imageSrc: require('../assets/images/doctors/drSumitraM.webp').default,
  },
  {
    name: 'T.Vinothini',
    qualification: 'ICYF Certified lactation Expert',
    description: `- 1+ year’s experience in Lactation Counselling
                  - Worked in a private hospital for 8 months as LC
                  - Being a mother suffered feeding my son and started searching for help and got support from an LC and that motivated me to became an LC`,
    imageSrc: require('../assets/images/doctors/vinothini-modified.webp').default,
  },
];

//who should attend
export const WebinarWhoData: FAQsProps = {
  header: {
    highlight: 'Who should attend?',
    subtitle: '',
    // title: 'FAQS',
    position: 'center',
  },
  items: [
    {
      title: 'I’m a first time mom and live in a nuclear family.',
      description: `As a first time mother, you MUST attend this webinar. We cannot stress this enough. There are a lot of things you need to know before the baby arrives, and that is what we wish to achieve. You’ll benefit the most from this session.
      `,
    },
    {
      title: 'I’m a first time mom, but I live in a joint family.',
      description: `Staying in a joint family with other women with motherhood experience is a plus, but most of your elders would only know about the experiences that they went through during their childbirth and motherhood. We aim to prepare you for all possibilities. Hence joining this session is still a good choice for you.`,
    },
    {
      title: 'This is not my first baby.',
      description: `Each Breastfeeding dyad is unique and every breastfeeding journey is different even if this is your second or third child. Did you know that the WHO and AAP recently changed their guidelines for Breastfeeding your baby from 1 years to 2 years ? There is always something new to learn`,
    },
  ],
  link: {
    label: 'Register For The Webinar',
    href: '/lactation-webinar',
  },
};

//webinar-what section
export const webinarWhatData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'What do you get by enrolling?',
    subtitle: ``,
    position: 'center',
  },
  items: [
    {
      title: '45 minute live session with both experts, including live Q&A session. ',
      image: {
        src: qaImg,
        alt: 'qaImg',
      },
      description: '',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'Register for the webinar',
        href: '/lactation-webinar',
      },
    },
    {
      title: 'Lifetime free recording of the session for easy review later. ',
      image: {
        src: recording,
        alt: 'recording',
      },
      description: '',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Register for the webinar',
        href: '/lactation-webinar',
      },
    },
    {
      title: `WhatsApp group with Gynecologists for pregnancy assistance.      `,
      image: {
        src: whatsappGroupImg,
        alt: 'WhatsappGroupImg',
      },
      description: ``,
      callToAction: {
        text: 'Register for the webinar',
        href: '/lactation-webinar',
      },
    },
    {
      title: `20% discount on all Babynama packages post childbirth.  `,
      image: {
        src: twentyPercent,
        alt: 'twentyPercent',
      },
      description: ``,
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Register for the webinar',
        href: '/lactation-webinar',
      },
    },
  ],
};
//lactationWhySection

export const LactationWhyData: ServiceProps[] = [
  {
    id: 1,
    icon: <FaHands />,
    title: 'What To Expect In The Initial Days Of Postpartum ',
    desc: 'From Colostrum to matured milk, understand the changes your breast undergoes',
  },
  {
    id: 2,
    icon: <GiMilkCarton />,
    title: 'Is My Baby Getting Enough? ',
    desc: 'Programming your milk supply low milk supply myths vs facts ',
  },
  {
    id: 3,
    icon: <AiOutlineApple />,
    title: 'Nutrition For A Breatfeeding Mother ',
    desc: 'Understand the nutrient requirements for you in the postpartum to increase milk supply',
  },
  {
    id: 4,
    icon: <FaHandHoldingMedical />,
    title: 'When To Seek Support',
    desc: 'Identify the red flags and seek help at the earliest',
  },
  {
    id: 5,
    icon: <FaBaby />,
    title: 'Benefits Of Breastfeeding ',
    desc: 'Understand the importance of breastfeeding for both mother and baby',
  },
  {
    id: 6,
    icon: <AiOutlineClockCircle />,
    title: 'Latch And Positioning ',
    desc: 'Your guide to a good latch and different positions ',
  },
];

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

export const BabyCarePlanButtonData: FooterFixedButtonData = {
  text: 'Explore Care Plan',
  originalPrice: '₹4999',
  discountedPrice: '₹1500',
  buttonText: 'Explore Care Plan',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[50%]',
};

//FooterFixedButton
export const WeaningWorkshopButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Begin Your Journey',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[50%]',
};
export const previewAccessButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};
export const previewLandingButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Connect with Expert Pediatricians Now!',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};
export const plansLandingButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Try for 1 Month`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const testimonialFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Get care plan`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const doctorFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Get care plan`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};
export const yogaButtonData: FooterFixedButtonData = {
  text: 'Book Your Seat Now for',
  originalPrice: '₹999',
  discountedPrice: '₹497',
  buttonText: 'Book Now',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[50%]',
};

export const lactationQuotes: LactationQuotesProps = {
  header: {
    highlight: 'Inspirational Breastfeeding Quotes',
    subtitle: ' ',
  },
  quotes: [
    {
      quotes: `Breastfeeding is 90% determination and 10% milk production`,
      name: 'Unknown',
    },
    {
      quotes: `Bottles fill his stomach, but breastfeeding fills his soul
      `,
      name: ' Diane Weissinger',
    },
    {
      quotes: `Breastfeeding is a mother’s gift to herself, her baby, and the earth`,
      name: 'Pamela K. Wiggins',
    },
    {
      quotes: `Women should own the fact that we are superheroes for the first however many months of your child’s life`,
      name: 'Kristen Bell',
    },
    {
      quotes: `
      I wasn’t sure how I’d feel about breastfeeding, but quickly realized its brilliance.`,
      name: 'Kelis      ',
    },
    {
      quotes: `
      I think a lot of people think you're just supposed to have this natural instinct that's supposed to happen out of thin air. There's a technique to learn and if you don't know it, it's not your fault`,
      name: 'Alicia Keys',
    },
    {
      quotes: `
      If we wear our nursing covers backwards like capes, then everyone can see we’re breastfeeding superheroes`,
      name: 'Cassi Clark      ',
    },
    {
      quotes: `
      Children don't just get milk from breastfeeding, they get our energy, too`,
      name: `Stephen Gaskin
      `,
    },
    {
      quotes: `
      Breastfeeding is not always easy, but it is always worth it`,
      name: `Unknown

      `,
    },
    {
      quotes: `
      A newborn baby has only three demands. They are warmth in the arms of its mother, food from her breasts, and security in the knowledge of her presence. Breastfeeding satisfies all three`,
      name: ` Grantly Dick-Read

      `,
    },
    {
      quotes: `
      Mother’s milk is, I think, a symbol of compassion`,
      name: `The Dalai Lama

      `,
    },
  ],
};
export const ThankYouPlans: ThankYouPlan[] = [
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive care for your child's health & development.",
    },
    prices: {
      monthly: 1999,
      threeMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM).',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7.',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Monthly milestones tracking by a senior pediatrician.',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Comprehensive guidance for lactation, nutrition, weaning.',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        // text: 'Free workshops: weaning, postpartum yoga.',
        text: 'Free workshops: weaning.',
        icon: null,
      },
    ],
    coupon: { code: 'GET30', prices: { monthly: 1999, threeMonth: 3499 } },
  },
];

// Ad section begin

export const plansLandingHeroData: HeroProps = {
  title: 'Pediatricians just a WhatsApp message away',
  subtitle: 'Get instant replies on WhatsApp from MD Pediatricians for all your queries',
  callToAction: {
    text: 'Try for 1 Month',
    href: '/plans-landing/#pricing',
  },
  whatsAppSection: true,
};

export const plansWelcomeBackHeroData: HeroProps = {
  title: 'Pediatricians just a WhatsApp message away',
  subtitle: 'Get instant replies on WhatsApp from MD Pediatricians for all your queries',
  callToAction: {
    text: 'Try for 1 Month',
    href: '/welcome-back-plans/#pricing',
  },
  whatsAppSection: true,
};
export const ThankYouPlansLandingHeroData: HeroProps = {
  title: "Resolve Queries Related To Your Baby's Health & Nutrition",
  subtitle: 'Our Experienced Doctors are just a Message Away',
  callToAction: {
    text: "Don't Wait, Connect with Expert Pediatricians Now!",
    href: '/thank-you-plans-landing/#pricing',
  },
  image: {
    src: CareBabynama,
    alt: 'Babynama',
  },
};

export const salesBasicHeroData: HeroProps = {
  title: 'Comprehensive Support for mother and child',
  subtitle:
    "If you are worried about your baby's optimal growth and nutrition, then the Prime care plan is designed for you. Get 24X7 instant pediatric consultations and Free lactation & nutrition counselling.",
  callToAction: {
    text: ' Explore Basic Care Plan',
    href: '/basic-care/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const salesHolisticHeroData: HeroProps = {
  title: <>Your Personal Pediatrician with Babynama Holistic</>,
  subtitle:
    'For the parents who want nothing but the best. Secure your peace of mind with round-the-clock Pediatric Support, a Personal Pediatrician, and comprehensive child and mother care',
  callToAction: {
    text: 'Subscribe & Enjoy Peace of Mind',
    href: '/holistic-care/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const salesPrimeCarePlusNewHeroData: HeroProps = {
  title: <>Your Personal Pediatrician with Babynama Prime Care Plus</>,
  subtitle:
    'For the parents who want nothing but the best. Secure your peace of mind with round-the-clock Pediatric Support, a Personal Pediatrician, and comprehensive child care',
  callToAction: {
    text: 'Subscribe & Enjoy Peace of Mind',
    href: '/prime-care-plus/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const salesPrimeHeroData: HeroProps = {
  title: 'Give the Best Care to Your Baby',
  subtitle: 'Get 24X7 Pediatric Care and Unlimited Lactation Support from Experts',
  callToAction: {
    text: 'Subscribe & Enjoy Peace of Mind',
    href: '/prime-care/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const salesPrimeCarePlusHeroData: HeroProps = {
  title: 'Give the Best Care to Your Baby',
  subtitle: 'Get 24X7 Pediatric Care and Unlimited Lactation Support from Experts',
  callToAction: {
    text: 'Try for 2 Weeks',
    href: '/prime-care/#pricing',
  },
  image: {
    src: HeroPrimeCare,
    alt: 'HeroPrimeCare',
  },
};
//Doctor Anupriya section start
export const anupriyaHeroData: HeroProps = {
  title: <>Dr. Anupriya's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries. </>,
  callToAction: {
    text: 'Try Chat for Free',
    href: 'http://babynama.in/joinanupriya1',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorAnupriyaHero,
    alt: 'DrAnupriya',
  },
};

//doctosData
export const doctorAnupriyaTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },

    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandini J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const anupriyaAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Anupriya',
  subtitle1: `Dr. Anupriya Bajaj is a highly qualified and experienced pediatrician with an impressive medical background. She holds an MBBS degree and completed her MD in Pediatrics. With a dedicated career in the medical field, Dr. Bajaj has accumulated four years of invaluable experience. She pursued her medical education at the prestigious Assam Medical College and Hospital in Dibrugarh, further honing her expertise in pediatric care. Dr. Bajaj also pursued Postgraduate Program in Nutrition (PGPN) at Boston University, enhancing her knowledge in providing comprehensive care for young patients. With her exceptional skills and knowledge, Dr. Anupriya Bajaj is committed to delivering top-notch medical care and ensuring the well-being of children under her care.`,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorAnupriyaAbout,
    alt: 'AboutDrAnupriya',
  },
};

export const anupriyaPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Anupriya's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Anupriya per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Anupriya',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];
export const drAnupriyaWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Anupriya.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Anupriya will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const thankYouAnupriya: ThankYouData = {
  groupLink: 'https://babynama.in/joinanupriya1',
  title1: ' Your worry free parenting journey starts now with Dr. Anupriya',
  title2: 'You can join the whatsApp group using the link below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackAnupriya: ThankYouData = {
  groupLink: 'https://babynama.in/joinanupriya1',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const DoctorAnupriyaFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `Don't wait for a doctor's appointment. Chat with Dr Anupriya on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'VR1 And U&I Centre, SCO-83, Sector 29, Gurugram',
  location: '- 122022',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Babynama',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-anupriya#pricing' },
    { label: 'Our Doctors', href: '/dr-anupriya#doctors' },
    { label: 'Testimonials', href: '/dr-anupriya#testimonials' },
    { label: 'About Us', href: '/dr-anupriya#doctors-about' },
  ],
};

// Doctor anupriya section end

// Doctor sumitra section start

//Hero section
export const sumitraHeroData: HeroProps = {
  title: <>Dr. Sumitras's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries. </>,
  callToAction: {
    text: 'Try Chat for Free',
    href: '/',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorSumitraHero,
    alt: 'DrSumitra',
  },
};

//WhySection

export const drSumitraWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Sumitra.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Sumitra will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

//doctosData
export const doctorSumitraTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const sumitraAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Sumitra',
  subtitle1: `Dr. Sumitra is an MBBS and MD Pediatrics graduate from Lady Hardinge Medical College. She has worked for around 7 years across various hospitals. She has worked with thousands of children with autism, down syndrome, dyslexia, ADHD and other developmental disorders. This experience has enabled her to understand parents and child health better than the rest. `,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorSumitraAbout,
    alt: 'AboutDrSumitra',
  },
};
export const sumitraTestimonialData = [
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
  },
  {
    text: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
    name: 'Shipra',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
  },
  {
    text: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
    name: 'Charu Chandarana',
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
  },
  {
    text: 'Please follow the group and take your experience. Thank you Babynama family',
    name: 'Mr. and Mrs. Sharma',
    title: 'Parents of 4 month old baby.',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
  },
];

export const sumitraPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Sumitra's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Sumitra per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Sumitra',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const previewAccessButtonDataSumitra: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const DoctorSumitraFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `  Don't wait for a doctor's appointment. Chat with Dr Sumitra on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'VR1 And U&I Centre, SCO-83, Sector 29, Gurugram',
  location: '- 122022',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Babynama',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-sumitra#pricing' },
    { label: 'Our Doctors', href: '/dr-sumitra#doctors' },
    { label: 'Testimonials', href: '/dr-sumitra#testimonials' },
    { label: 'About Us', href: '/dr-sumitra#doctors-about' },
  ],
};
// End of Doctor sumitra section

export const DoctorAditiFooterData: doctorFooterProps = {
  logoSrc: AditiLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 150,
  logoHeight: 150,
  chatText: `Don't wait for a doctor's appointment. Chat with Dr Aditi on WhatsApp and get expert
  medical advice in minutes.`,
  address: ` Shree Gurumaauli Pediatric Clinic, Sai Ashish Chs, Eksar road, Junction, near Yes Bank, Yogi
  Nagar, Borivali West,`,
  location: 'Mumbai, Maharashtra 400092',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Babynama',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-aditi-birje#pricing' },
    { label: 'Our Doctors', href: '/dr-aditi-birje#doctors' },
    { label: 'Testimonials', href: '/dr-aditi-birje#child-testimonials' },
    { label: 'About Us', href: '/dr-aditi-birje#about-doctor' },
  ],
};

// Basic care section

export const basicCarePlan: Plan[] = [
  {
    id: 1,
    name: 'Basic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Reliable pediatric care within 15 minutes',
    },
    prices: {
      monthly: 499,
      sixMonth: 2499,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: '30 days access to our WhatsApp group with doctors',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited basic queries on chat',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: '1 free Pediatric Video Consultation',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 999, sixMonth: 2249 } },
      { code: 'GET20', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'GET30', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'WORRYFREE', prices: { monthly: 999, sixMonth: 1749 } },
    ],
  },
];

export const primeCarePlan: Plan[] = [
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive care for your child's health & development.",
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM).',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7.',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Monthly milestones tracking by a senior pediatrician.',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Comprehensive guidance for lactation, nutrition, weaning.',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        // text: 'Free workshops: weaning, postpartum yoga.',
        text: 'Free workshops: weaning.',
        icon: null,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'GET40', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
];

export const giftingPrimePlans: Plan[] = [
  {
    id: 1,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive care for your child's health & development.",
    },

    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Monthly milestones tracking by a senior pediatrician',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Comprehensive guidance for lactation, nutrition, weaning',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        // text: 'Free workshops: weaning, postpartum, yoga',
        text: 'Free workshops: weaning.',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'NEWMOMGIFT', prices: { monthly: 998, sixMonth: 2498 } },
    ],
  },
];

export const giftingHolisticPlans: Plan[] = [
  {
    id: 2,
    name: 'Holistic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Experience exceptional personalized Care by a dedicated team of doctors for the Child and Mother's overall well-being",
    },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Dedicated pediatrician</b> to guide and support you with your child's specific needs
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Private WhatsApp group with your dedicated pediatrician',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7',
        icon: <BsFillInfoCircleFill color="blue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Comprehensive support and guidance for mother</b>postnatal care, personalized diet plan, emotional
            well-being and other health concerns
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Free Specialist Consultations</b> for baby & mother: Gynecologists, Dermatologist, Psychologist,
            Pediatrician, Nutritionist and more
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b>Free workshops</b>: weaning, lactation, nutrition and more
          </>
        ),
        icon: <BsFillInfoCircleFill color="blue" />,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'NEWMOMGIFT', prices: { monthly: 1997, sixMonth: 4998 } },
    ],
  },
];
export const primeCarePlusPlan: Plan[] = [
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive care for your child's health & development.",
    },
    prices: {
      monthly: 495,
      sixMonth: 4999,
    },
    refundPolicy: 3,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: '15 day access to Instant Replies from MD Pediatricians on WhatsApp group',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Any 1 consultation Free',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Monthly milestones tracking by a senior pediatrician',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Comprehensive guidance for lactation, nutrition, weaning',
        icon: null,
      },
    ],

    coupons: [
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET40', prices: { monthly: 495, sixMonth: 2999 } },
    ],
  },
];
export const primeCarePlusStepsData: StepsProps = {
  header: {
    highlight: 'How It Works?',
    subtitle: 'Watch the Video to Understand',
    // title: 'Steps',
  },
  callToAction: {
    text: 'Try for 2 Weeks',
    href: '/preview-access',
  },

  videoUrl: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/prime-care-explanantion.mp4',
};

export const holisticCarePlan: Plan[] = [
  {
    id: 3,
    name: 'Holistic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Exceptional Personalized Care for Child and Mother's Well-being.",
    },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Dedicated pediatrician</b> to guide and support you with your child's specific
            needs
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Private WhatsApp group with your dedicated pediatrician.',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24X7.',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM).',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother</b> :postnatal care...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother:</b> postnatal care, personalized
            diet plan, emotional well-being and other health concerns
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist,
            Dermatologist, Psychologist, Pediatrician, Nutritionist.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning, lactation.
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const carePlansLandingHeroData: HeroProps = {
  title: 'We hope you liked the limited trial of our service',
  subtitle: 'Take a care plan to unlock access to our team of 35 doctors and join our 30k+ parent community',
  callToAction: {
    text: 'Subscribe & Enjoy Peace of Mind',
    href: '/get-care-plan/#pricing',
  },
  image: {
    src: doctorsGroup,
    alt: 'Babynama',
  },
};

export const carePlansLandingFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Subscribe & Enjoy Peace of Mind`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};
export const carePlansFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Subscribe & Enjoy Peace of Mind`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

// Doctor puneet section

//Hero section
export const puneetHeroData: HeroProps = {
  title: <>Dr. Puneet's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries.</>,
  callToAction: {
    text: 'Try Chat for Free',
    href: '/',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorPuneetHero,
    alt: 'DrPuneet',
  },
};

//WhySection

export const drPuneetWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Puneet.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Puneet will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

//doctosData
export const doctorPuneetTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const puneetAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Puneet',
  subtitle1: `Dr. Puneet Anand is a consultant pediatrician and neonatologist at Fortis Hospital Kangra, Himachal Pradesh. With more than 10 years of experience working with parents, hospitals and consultants alike, Dr. Puneet is committed to ensuring that all children thrive. He completed his MBBS & MD Pediatrics  from the prestigious Vardhman Mahavir Medical College, Safdarjung hospital,New Delhi and a Fellowship in Paediatric Emergency Medicine. He then went on to complete his Postgraduate Program in Paediatric Nutrition from Boston University and PG Diploma in Hospital and Healthcare Management. He has worked with various prestigious institutions like Dr Ram Manohar Lohia Hospital and Sitaram Bhartia Institute of Science and Research, New Delhi.`,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorPuneetAbout,
    alt: 'AboutDrPuneet',
  },
};

export const puneetTestimonialData = [
  {
    text: `My baby was suffering from dehydration, but thanks to Dr. Puneet she recovered quickly.`,
    name: 'Isha',
    title: 'Mother of 6 year old girl',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/dr-puneet-2.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/testimonial-dr-puneet-1.mp4`,
  },
  {
    text: `My baby was underweight. But under Dr. Puneet he recovered completely. I am very happy.`,
    name: 'Sonumala',
    title: 'Mother of new born boy',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/testimonial-dr-puneet-2-1.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/dr-puneet-1.webp`,
  },
  // {
  //   text: `Dr. Puneet & Babynama have helped me in so many ways... suggest this for all mothers`,
  //   name: 'Ruchi Garg',
  //   title: 'Mother of 7 month old twins',
  //   rating: 5,
  //   url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/testimonial-dr-puneet-3.mp4`,
  //   thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/dr-puneet-1.webp`,
  // },
];

export const puneetPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Puneet's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Puneet per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Puneet',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const previewAccessButtonDataPuneet: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const DoctorPuneetFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `  Don't wait for a doctor's appointment. Chat with Dr Puneet on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'Fortis Hospital, Kangra ',
  location: '-176001',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Dr%20Puneet',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-puneet#pricing' },
    { label: 'Our Doctors', href: '/dr-puneet#doctors' },
    { label: 'Testimonials', href: '/dr-puneet#testimonials' },
    { label: 'About Us', href: '/dr-puneet#doctors-about' },
  ],
};

export const doctorsPuneetHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-puneet',
    },
    {
      image: {
        src: planHighlightsIcon,
        alt: 'planHighlightsIcon',
      },
      label: 'Plan Highlights',
      href: '/dr-puneet#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-puneet#doctors',
    },
    {
      image: {
        src: maleDoctorIcon,
        alt: 'maleDoctorIcon',
      },
      label: 'About',
      href: '/dr-puneet#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-puneet#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-puneet#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const ThankYouFreePreviewPuneet: ThankYouData = {
  groupLink: 'https://babynama.in/joinpuneet1',
  title1: 'Your worry-free parenting journey with doctor Puneet starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackPuneet: ThankYouData = {
  groupLink: 'https://babynama.in/joinpuneet1',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
// End of Doctor puneet section

// Gifting father data
export const GiftingFatherData: Hero3Props = {
  HeroData: {
    titlePart1: <>Give the Gift of Support to New Moms</>,
    subtitle: (
      <>Empower your Partner with Expert Pediatric Care and Guidance as She Embarks on Her Motherhood Journey</>
    ),

    paymentButton: 'Choose a Care Plan to Gift',
    button2: 'https://www.youtube.com/embed/zV0r_PR3Uc4',
    image: {
      src: giftingFather,
      alt: 'GiftingFather',
    },
  },
};
export const GiftingFatherAboutData: IdentifyPreviewAccessProps = {
  title: 'Unlock Worry-Free Parenting Now',
  subtitle1: 'Click below and gift your wife the peace of mind she needs.',
  image: {
    src: giftingAboutImage,
    alt: 'giftingAboutImage',
  },
};

export const GiftingFatherWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: '24X7 pediatric Support',
      image: {
        src: pediatricIcon,
        alt: 'pediatricIcon',
      },
      description:
        'With babies, emergency can strike any time. Babynama assures 15 minute consultation with a Pediatrician, 24X7 for your partner.',
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting-father/#gifting-pricing',
      },
    },
    {
      title: 'Lactation Support ',
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description:
        '70% of women face challenges with breastfeeding. But with our expert lactation and diet counsellors, we provide the best support to new moms.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting-father/#gifting-pricing',
      },
    },
    {
      title: 'WhatsApp replies from Doctors',
      image: {
        src: WhatsAppRepliesIcon,
        alt: 'EmergencyImg',
      },
      description:
        'Our doctors are available on WhatsApp and reply within 5 minutes. So your partner don’t need to run to a hospital every time they are anxious.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting-father/#gifting-pricing',
      },
    },
    {
      title: 'Monthly growth tracking',
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },
      description:
        'Our pediatricians will track the baby’s physical growth and assess if all age appropriate emotional and sensory milestones are reached on time.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting-father/#gifting-pricing',
      },
    },
    {
      title: '50% Discount',
      image: {
        src: percentIcon,
        alt: 'percentIcon',
      },
      description:
        'We will bear half the cost so that your partner can enjoy the full benefits, but you only bear half the price.',
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Choose a Care Plan to Gift',
        href: '/gifting-father/#gifting-pricing',
      },
    },
  ],
};
//giftingsteps how it works
export const stepsDataFatherGifting: StepsProps = {
  header: {
    highlight: 'How It Works',
  },
  items: [
    {
      title: 'Step 1',
      description: 'Select a plan that suits your budget and your partner’s needs.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: 'After checkout, our team will contact you for a personal video or text message.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: 'We’ll send the gift voucher and your heartfelt message to your partner at a time of your choosing.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4',
      description: 'If you want, you can take a printout of your voucher and gift it yourself.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Choose a care plan to gift',
    href: '/gifting-father/#gifting-pricing',
  },
};

export const GiftingFatherFeedbackData: IdentifyPreviewAccessProps = {
  title: 'Get Feedback!',
  subtitle1: 'Want to know how much your partner liked the gift?',
  subtitle2:
    'Within 5 days of activation of the subscription, our team will reach out to your partner for a feedback, and the same shall be shared with you.',
  subtitle3:
    'If either you or your partner are unhappy with the service, then we guarantee a full refund within 7 days of purchase. While this rarely happens, but if it does, we will honor our word.',
  image: {
    src: Feedback,
    alt: 'Feedback',
  },
};

export const giftingFatherFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Choose a Care Plan to Gift',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};
//  Peditric consultation section begins

export const pediatricHeroData: HeroProps = {
  title: `Consult a Pediatrician Immediately`,
  subtitle: `Get 24X7 Pediatric Care from our experts and resolve your queries end-to-end on WhatsApp`,
  callToAction2: {
    text: 'Consult Now',
    href: '/pediatric-consultation',
  },
  image: {
    src: consultationHero,
    alt: 'Babynama',
  },
};

export const consultationFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Consult Now`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const ConsultationWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end on WhatsApp',
    position: 'center',
  },
  items: [
    {
      title: 'Immediate Consultation',
      subtitle: 'No more waiting around. Our top-rated doctors will consult with you within 15 minutes of your request',
      image: {
        src: immediate,
        alt: 'fast',
      },
      callToAction: {
        text: 'Consult Now',
        href: '/pediatric-consultation/#why',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: '24/7 Availability',
      subtitle: 'Got a late-night worry? Our doctors are available to consult even at night',
      image: {
        src: roundTheClock,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Consult Now',
        href: '/pediatric-consultation/#why',
      },
    },
    {
      title: 'Extended Follow-up',
      subtitle: 'You can follow-up on chat with the same pediatrician for up to 3 days after the consultation',
      image: {
        src: followUp,
        alt: 'followUp',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Consult Now',
        href: '/pediatric-consultation/#why',
      },
    },
    {
      title: `Guaranteed Satisfaction`,
      subtitle: `If our pediatrician suggests a physical consultation elsewhere, we're happy to provide a refund`,
      image: {
        src: moneyBack,
        alt: 'gurantee',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Consult Now',
        href: '/pediatric-consultation/#why',
      },
    },
  ],
};

export const faqsConsultationData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'How Babynama consultation works?',
      description: `You can schedule a call with the doctor by clicking on the Consult Now button on the website. Once the payment is done you will get a call from the doctor within 15 minutes.`,
    },
    {
      title: 'What are the timings for consultation?',
      description: `Our doctors are available 24/7 for consultation.`,
    },
    {
      title: 'What if I have more questions after consultation?',
      description: `You can follow-up with the doctor on chat for up to 3 days after the consultation.`,
    },
    {
      title: 'What if I am not satisfied with the consultation?',
      description: `If our pediatrician suggests a physical consultation elsewhere, we're happy to provide you with a refund.`,
    },
    {
      title: 'Who are the doctors available for consultation?',
      description: [
        'We have a team of 40+ trusted MD pediatricians. You can check the profile of doctors present on our platform ',
        <a key="link" className="text-blue-500" href="/pediatric-consultation/#doctors">
          here
        </a>,
        '.',
      ],
    },
  ],
  link: {
    label: 'Contact us',
    href: '#footer',
  },
};

export const testimonialConsultation: TestimonialProps = {
  header: {
    highlight: 'Hear from Babynama Parents',
    subtitle: 'Real experiences from satisfied parents who have used the consultation service',
  },

  testimonials: [
    {
      review: `My baby had breathing issues, doctors here identified it on a video call and helped him calm down a lot. `,
      name: 'Aabha',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
      profileImage: {
        src: A,
        alt: 'A',
      },
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
      age: 'Mother of 6 month old baby',
    },
    {
      review: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
      name: 'Charu Chandarana',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
      mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
      profileImage: {
        src: C,
        alt: 'C',
      },
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    },
    {
      name: 'Sakshi',
      review:
        'Hi I`m completely satisfied with the efforts babynama doctors have provided. When ever I have doubt of any skin rashes ,cold, cough, diet chart, weight gain. I used to message in the group I had a got a response very soon. I have even opted for subscription by liking their services. All the doctors have good experience and good knowledge their advice and opinions are very helpful me I can undoubtedly say for every mom that babynama will be great thing for instant reply for all the doubts about children. Doctors doesn`t think anything if we ask any silly questions. They respond very patiently. I had video consultation s also. I Just loved the service. I would suggest every mom to be part of this wonderful babynama family',
      date: 'Sep 22, 2022',
      profileImage: {
        src: SakshiProfile,
        alt: 'SakshiProfile',
      },
    },
    {
      name: 'Akhila Ramakrishna',
      review:
        "I'm new mom, no idea about parenting and surrounded with orthodox people where for everything always home remedy no consultation of doctor advise. When I am so helpless I had seen about babynama on insta, and joined in group its really V V helpful, for everything they answer V patiently and ask every detail of baby health. Thank you so much for the person who got this idea to serve all querys to parents. V grateful to all doctors who supporting all childrens health and mainly due to this group parents can be V confident when the baby is sick babynama is there. Every small question can be ask like we ask to our grandmother and solution will b perfect for babies with undoubtedly. With lots of love, Mother for Princess 👸",
      date: 'Feb 4, 2023',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Shilpi',
      review:
        'My baby was vomiting 🤮🤮🤮 as she was born premature (born in 8mnth 15 days) . As a new mother I worried a lot and started crying 😭😭...soon i started scrolling Instagram and. Got to knw abt babynamah ,Soon i get to consult with Dr nitika Tulsi she was really great,over a video consultation to identify a baby problems means a lot .Her medicine worked well . Thanks to Baby namah',
      date: 'Feb 2, 2023',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Ravalika Rakesh',
      review:
        "I am a mother of 5 month old. I have known Babynama through random post on Instagram and joined the community on WhatsApp. Trust me, the minute you post a query or concern about the baby you'd immediately get a response from the doctors available in the group. The doctors are so patient to answer any relevant questions. There is alaoa special consultation available 24x7 just a click away. Also, the posts on Instagram and videos on YouTube are very useful. To conclude, Babynama is one of the best ways for a quick assistance. Thank you to the community!!",
      date: 'Dec 28, 2022',
      profileImage: {
        src: R,
        alt: 'R',
      },
    },
    {
      name: 'Vaishnavi',
      review:
        'It’s a savour to many mom’s like me who have unlimited questions in mind about baby who can’t ask all these to there paediatrician every time.. they answer basic questions via chat and would recommend consultation for special case',
      date: 'Dec 21, 2022',
      profileImage: {
        src: V,
        alt: 'V',
      },
    },
    {
      name: 'Shifa Zareen',
      review:
        "I am a mother of a 4month baby boy he is my first child and he came a little early to me so I had no idea how to feed or anything I was just blank he had a little history of seizure which was a giant blow for me and I was so scared that whatever I am doing is good for him or not he was to be given a little more special care I use to Google my doubts but the answers were not which I was looking for then while scrolling Instagram I came across babynama and the videos gave me the correct answer to my queries and then I joined the group and it helped to soothe my baby in colic pain and specially the video consultation with Dr Anupriya Bajaj about vision improvement and neck control she also gave me heads up for the test which should be done she was all sweet and friendly she also understood my situation when I couldn't take her call I would suggest this to my friends",
      date: 'Dec 22, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Akshata',
      review:
        'Hey Babynama... I have been in this group since a long ... You are doing a great Job... God bless the team of Doctors.I would like to recommended your channel and group to many... Best wishes. It makes me feel safe now.. It was tedious to rush offline doctors for basic doubts or consultation...Now that worry has vanished. Thank you',
      date: 'Dec 17, 2022',
      profileImage: {
        src: Akshata,
        alt: 'Akshata',
      },
    },
    {
      name: 'Shiksha',
      review:
        'Hi , I’m a mother of 4 months old baby girl and she was having issues with feeding and wanted an online consultation regarding it and then I came across Babynama from instagram . I joined the group and in no time the most learned doctors gave me all the necessary suggestion and support.The doctors are very polite and helpful and would recommend all mothers to join the same.',
      date: 'Oct 12, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'AK',
      review:
        'My daughter was 1 month old -They solved all the doubts and confusion I has about the a baby. That even responded 2am in the night . - Earlier I had to visit my paediatrician / call him -Dr Sumithra is an amazing doctor she answers all my queries picks my call and video consultation anytime I need her. She is super friendly and knowledgeable. She is always there when I need her. Even in odd hours - Best way to get your queries solved',
      date: 'Sep 27, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
  ],
};

// Pediatric consultation section ends

// Doctor Srimukhi section

//Hero section
export const SrimukhiHeroData: HeroProps = {
  title: <>Dr. Srimukhi's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries.</>,
  callToAction: {
    text: 'Try Chat for Free',
    href: '/',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorSrimukhiHero,
    alt: 'DrSrimukhi',
  },
};

//WhySection

export const drSrimukhiWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Srimukhi.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Srimukhi will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const doctorSrimukhiTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const SrimukhiAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Srimukhi',
  subtitle1: `Dr Srimukhi ANUMOLU is a consultant pediatrician and neonatologist at Ankura hospital, Vijayawada with 10 years of experience.
  She has done her fellowship in allergy,asthma and immunology from CMC vellore.
  She completed her MBBS from Rangaraya medical college,Kakinada and MD from PSG medical college,Coimbatore.
  She has a fellowship in neonatology from Indian academy of pediatrics.She has published 5 reasearch articles in international journals.She is a secretary for IAP womens chapter Andhrapradesh and actively involved in organising many conferences.She is also an eminent speaker in state & national pediatric and neonatology conferences.`,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorSrimukhiAbout,
    alt: 'AboutDrSrimukhi',
  },
};

export const SrimukhiTestimonialData = [
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
  },
  {
    text: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
    name: 'Shipra',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
  },
  {
    text: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
    name: 'Charu Chandarana',
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: 'Please follow the group and take your experience. Thank you Babynama family',
    name: 'Mr. and Mrs. Sharma',
    title: 'Parents of 4 month old baby.',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
  },
];

export const SrimukhiPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Srimukhi's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Srimukhi per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Srimukhi',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const previewAccessButtonDataSrimukhi: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const DoctorSrimukhiFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `  Don't wait for a doctor's appointment. Chat with Dr Srimukhi on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'VR1 And U&I Centre, SCO-83, Sector 29, Gurugram',
  location: '- 122022',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Dr%20Srimukhi',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-srimukhi-anumolu#pricing' },
    { label: 'Our Doctors', href: '/dr-srimukhi-anumolu#doctors' },
    { label: 'Testimonials', href: '/dr-srimukhi-anumolu#testimonials' },
    { label: 'About Us', href: '/dr-srimukhi-anumolu#doctors-about' },
  ],
};

export const doctorsSrimukhiHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-srimukhi-anumolu',
    },
    {
      label: 'Plan Highlights',
      href: '/dr-srimukhi-anumolu#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-srimukhi-anumolu#doctors',
    },
    {
      label: 'About',
      href: '/dr-srimukhi-anumolu#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-srimukhi-anumolu#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-srimukhi-anumolu#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const ThankYouFreePreviewSrimukhi: ThankYouData = {
  groupLink: 'https://babynama.in/joinsrimukhi1',
  title1: 'Your worry-free parenting journey with doctor Srimukhi starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackSrimukhi: ThankYouData = {
  groupLink: 'https://babynama.in/joinsrimukhi1',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

// Doctor Poojanpreet section

//Hero section
export const PoojanpreetHeroData: HeroProps = {
  title: <>Dr. Poojanpreet's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries.</>,
  callToAction: {
    text: 'Try Chat for Free',
    href: '/',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorPoojanpreetHero,
    alt: 'DrPoojanpreet',
  },
};

//WhySection

export const drPoojanpreetWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Poojanpreet.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Poojanpreet will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

//doctosData
export const doctorPoojanpreetTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },
    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const PoojanpreetAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Poojanpreet',
  subtitle1: `Dr. Poojanpreet is a seasoned healthcare professional specializing in Pediatrics and Neonatology with a total experience of 10 years in these fields. She began her  medical journey  at SGRRIMHS, Dehradun, where she obtained her Bachelor of Medicine, Bachelor of Surgery (MBBS) degree, laying a strong foundation for her career in the medical field. To further strengthen my expertise, she pursued a Diploma in Child Health (DCH) from NARCHI, Institute of Child Health (ICH), Kolkata, which refined my understanding of child health and related issues.
  Eager to advance her knowledge in Pediatrics, she undertook a rigorous Fellowship in Pediatrics at the prestigious Apollo Hospital, New Delhi. This program endowed her with advanced clinical skills, and a comprehensive understanding of pediatric disorders, their management and preventive strategies. Over the years, she has seamlessly blended her acquired knowledge and skills to provide excellent patient care.
  In her decade-long career, she has dealt with a broad spectrum of pediatric and neonatal conditions, demonstrating excellence in diagnosis, management, and follow-up care. Her approach towards her practice is empathetic and patient-centered, ensuring that the child's wellbeing is always at the heart of the treatment plan. Her commitment to her profession and the betterment of her patients' health continues to drive her in her  ongoing practice and pursuit of knowledge in Pediatrics and Neonatology.`,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorPoojanpreetAbout,
    alt: 'AboutDrPoojanpreet',
  },
};

export const PoojanpreetTestimonialData = [
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
  },
  {
    text: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
    name: 'Shipra',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
  },
  {
    text: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
    name: 'Charu Chandarana',
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: 'Please follow the group and take your experience. Thank you Babynama family',
    name: 'Mr. and Mrs. Sharma',
    title: 'Parents of 4 month old baby.',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
  },
];

export const PoojanpreetPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Poojanpreet's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Poojanpreet per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Poojanpreet',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum  with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const previewAccessButtonDataPoojanpreet: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const DoctorPoojanpreetFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `  Don't wait for a doctor's appointment. Chat with Dr Poojanpreet on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'VR1 And U&I Centre, SCO-83, Sector 29, Gurugram',
  location: '- 122022',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Dr%20Poojanpreet',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-poojanpreet#pricing' },
    { label: 'Our Doctors', href: '/dr-poojanpreet#doctors' },
    { label: 'Testimonials', href: '/dr-poojanpreet#testimonials' },
    { label: 'About Us', href: '/dr-poojanpreet#doctors-about' },
  ],
};

export const doctorsPoojanpreetHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-poojanpreet',
    },
    {
      label: 'Plan Highlights',
      href: '/dr-poojanpreet#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-poojanpreet#doctors',
    },
    {
      label: 'About',
      href: '/dr-poojanpreet#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-poojanpreet#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-poojanpreet#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const ThankYouFreePreviewPoojanpreet: ThankYouData = {
  groupLink: 'https://babynama.in/joinpoojanpreet1',
  title1: 'Your worry-free parenting journey with doctor Poojanpreet starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackPoojanpreet: ThankYouData = {
  groupLink: 'https://babynama.in/joinpoojanpreet1',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const Exclusive: ExclusiveGroup = {
  groupLink: 'https://babynama.in/exclusivegroup',
  buttonText1: 'Click to Join Exclusive Group',
  title1: 'Enter Phone Number',
  buttonText2: 'Verify Number',
  whatsappButtonText: 'Join Our WhatsApp Group',
  planButtonText: 'Check Plans for Subscription',
  otpTitle: 'Enter OTP Sent on WhatsApp',
  otpButtonText: 'Verify OTP',
  InfoTitle: 'Important Info Regarding Exclusive Group',
  title2: 'This exclusive group is permanent and you can ask your queries while you have a valid subscription.',
  paragraph: '',
};

export const MothersGroup: ExclusiveGroup = {
  groupLink: 'https://babynama.in/mothersgroup',
  buttonText1: 'Click to Join Mothers Group',
  title1: 'Enter Phone Number',
  buttonText2: 'Verify Number',
  whatsappButtonText: 'Join Our WhatsApp Group',
  planButtonText: 'Check Plans for Subscription',
  otpTitle: 'Enter OTP Sent on WhatsApp',
  otpButtonText: 'Verify OTP',
  InfoTitle: ' Important Info Regarding Gynecology Group',
  paragraph: (
    <>
      Our Gynecologist answers queries within
      <span className="text-red-500"> 2-3 hours. </span>
    </>
  ),
  title2: ' Ask baby related questions on BabyNama Pediatrics groups.',
};

// Lactation Consultation section begins

export const lactationConsultationHeroData: HeroProps = {
  title: `Breastfeeding is Challenging, But it is ESSENTIAL!`,
  subtitle: `You're not alone: 90% of new mothers face breastfeeding challenges. Empower yourself with expert advice from online lactation consultants. Our services provide personalized support from the comfort of your home. Get tailored guidance and solutions today!`,
  callToAction: {
    text: 'Connect with Online Lactation Consultant',
    href: '/lactation-consultation',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/lactation/lactation-webinar-thumbnail-2.png',
    alt: 'Babynama',
  },
};

export const lactationConsultationFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Connect with Lactation Expert`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const lactationConsultationWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Babynama?',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end on WhatsApp',
    position: 'center',
  },
  items: [
    {
      title: 'Up To 45 minute long session',
      subtitle: 'Get a 45 minute long session with our Lactation Expert to resolve your queries',
      image: {
        src: immediate,
        alt: 'fast',
      },
      callToAction: {
        text: 'Connect with Lactation Expert',
        href: '/lactation-consultation/#why',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: '3 Days Extended Follow-up',
      subtitle: 'You can follow-up on chat with the same pediatrician for up to 3 days after the consultation',
      image: {
        src: followUp,
        alt: 'followUp',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Connect with Lactation Expert',
        href: '/lactation-consultation/#why',
      },
    },
    {
      title: `Guaranteed Satisfaction`,
      subtitle: `If our pediatrician suggests a physical consultation elsewhere, we're happy to provide a refund`,
      image: {
        src: moneyBack,
        alt: 'gurantee',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Connect with Lactation Expert',
        href: '/lactation-consultation/#why',
      },
    },
  ],
};

export const faqsLactationConsultationData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'How Lactation consultation works?',
      description: `You can book a consultation with our Lactation Expert by clicking on the 'Connect with Lactation Expert' button. You will be redirected to a form where you can fill in your details and make the payment. Once the payment is done, you will receive a WhatsApp message from our team to schedule the consultation.`,
    },
    {
      title: 'What is the duration of the consultation?',
      description: `The consultation is for 45 minutes. You can ask as many questions as you want.`,
    },

    {
      title: 'What if I have more questions after consultation?',
      description: `You can follow-up with the doctor on chat for up to 3 days after the consultation.`,
    },
    {
      title: 'What if I am not satisfied with the consultation?',
      description: `If our pediatrician suggests a physical consultation elsewhere, we're happy to provide you with a refund.`,
    },
    {
      title: 'Who are the doctors available for consultation?',
      description: [
        'We have a team of 40+ trusted MD pediatricians. You can check the profile of doctors present on our platform ',
        <a key="link" className="text-blue-500" href="/lactation-consultation/#doctors">
          here
        </a>,
        '.',
      ],
    },
  ],
  link: {
    label: 'Contact us',
    href: '#footer',
  },
};

export const testimonialLactationConsultation: TestimonialProps = {
  header: {
    highlight: 'Hear from Babynama Parents',
    subtitle: 'Real experiences from satisfied parents who have used the consultation service',
  },

  testimonials: [
    {
      review: `My baby had breathing issues, doctors here identified it on a video call and helped him calm down a lot. `,
      name: 'Aabha',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
      profileImage: {
        src: A,
        alt: 'A',
      },
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
      age: 'Mother of 6 month old baby',
    },
    {
      review: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
      name: 'Charu Chandarana',
      url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
      profileImage: {
        src: C,
        alt: 'C',
      },
      thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    },
    {
      name: 'Sakshi',
      review:
        'Hi I`m completely satisfied with the efforts babynama doctors have provided. When ever I have doubt of any skin rashes ,cold, cough, diet chart, weight gain. I used to message in the group I had a got a response very soon. I have even opted for subscription by liking their services. All the doctors have good experience and good knowledge their advice and opinions are very helpful me I can undoubtedly say for every mom that babynama will be great thing for instant reply for all the doubts about children. Doctors doesn`t think anything if we ask any silly questions. They respond very patiently. I had video consultation s also. I Just loved the service. I would suggest every mom to be part of this wonderful babynama family',
      date: 'Sep 22, 2022',
      profileImage: {
        src: SakshiProfile,
        alt: 'SakshiProfile',
      },
    },
    {
      name: 'Akhila Ramakrishna',
      review:
        "I'm new mom, no idea about parenting and surrounded with orthodox people where for everything always home remedy no consultation of doctor advise. When I am so helpless I had seen about babynama on insta, and joined in group its really V V helpful, for everything they answer V patiently and ask every detail of baby health. Thank you so much for the person who got this idea to serve all querys to parents. V grateful to all doctors who supporting all childrens health and mainly due to this group parents can be V confident when the baby is sick babynama is there. Every small question can be ask like we ask to our grandmother and solution will b perfect for babies with undoubtedly. With lots of love, Mother for Princess 👸",
      date: 'Feb 4, 2023',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
    {
      name: 'Shilpi',
      review:
        'My baby was vomiting 🤮🤮🤮 as she was born premature (born in 8mnth 15 days) . As a new mother I worried a lot and started crying 😭😭...soon i started scrolling Instagram and. Got to knw abt babynamah ,Soon i get to consult with Dr nitika Tulsi she was really great,over a video consultation to identify a baby problems means a lot .Her medicine worked well . Thanks to Baby namah',
      date: 'Feb 2, 2023',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Ravalika Rakesh',
      review:
        "I am a mother of 5 month old. I have known Babynama through random post on Instagram and joined the community on WhatsApp. Trust me, the minute you post a query or concern about the baby you'd immediately get a response from the doctors available in the group. The doctors are so patient to answer any relevant questions. There is alaoa special consultation available 24x7 just a click away. Also, the posts on Instagram and videos on YouTube are very useful. To conclude, Babynama is one of the best ways for a quick assistance. Thank you to the community!!",
      date: 'Dec 28, 2022',
      profileImage: {
        src: R,
        alt: 'R',
      },
    },
    {
      name: 'Vaishnavi',
      review:
        'It’s a savour to many mom’s like me who have unlimited questions in mind about baby who can’t ask all these to there paediatrician every time.. they answer basic questions via chat and would recommend consultation for special case',
      date: 'Dec 21, 2022',
      profileImage: {
        src: V,
        alt: 'V',
      },
    },
    {
      name: 'Shifa Zareen',
      review:
        "I am a mother of a 4month baby boy he is my first child and he came a little early to me so I had no idea how to feed or anything I was just blank he had a little history of seizure which was a giant blow for me and I was so scared that whatever I am doing is good for him or not he was to be given a little more special care I use to Google my doubts but the answers were not which I was looking for then while scrolling Instagram I came across babynama and the videos gave me the correct answer to my queries and then I joined the group and it helped to soothe my baby in colic pain and specially the video consultation with Dr Anupriya Bajaj about vision improvement and neck control she also gave me heads up for the test which should be done she was all sweet and friendly she also understood my situation when I couldn't take her call I would suggest this to my friends",
      date: 'Dec 22, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'Akshata',
      review:
        'Hey Babynama... I have been in this group since a long ... You are doing a great Job... God bless the team of Doctors.I would like to recommended your channel and group to many... Best wishes. It makes me feel safe now.. It was tedious to rush offline doctors for basic doubts or consultation...Now that worry has vanished. Thank you',
      date: 'Dec 17, 2022',
      profileImage: {
        src: Akshata,
        alt: 'Akshata',
      },
    },
    {
      name: 'Shiksha',
      review:
        'Hi , I’m a mother of 4 months old baby girl and she was having issues with feeding and wanted an online consultation regarding it and then I came across Babynama from instagram . I joined the group and in no time the most learned doctors gave me all the necessary suggestion and support.The doctors are very polite and helpful and would recommend all mothers to join the same.',
      date: 'Oct 12, 2022',
      profileImage: {
        src: S,
        alt: 'S',
      },
    },
    {
      name: 'AK',
      review:
        'My daughter was 1 month old -They solved all the doubts and confusion I has about the a baby. That even responded 2am in the night . - Earlier I had to visit my paediatrician / call him -Dr Sumithra is an amazing doctor she answers all my queries picks my call and video consultation anytime I need her. She is super friendly and knowledgeable. She is always there when I need her. Even in odd hours - Best way to get your queries solved',
      date: 'Sep 27, 2022',
      profileImage: {
        src: A,
        alt: 'A',
      },
    },
  ],
};
export const stepsDataLactationConsultation: StepsProps = {
  header: {
    highlight: 'How Lactation Breastfeeding Consultation Works Online',
    subtitle:
      "We understand breastfeeding's importance in your baby's growth. Our lactation consultants are here to help with any issues you face. We understand that breastfeeding is a very important part of your baby's growth. Our lactation consultants, experts in breastfeeding support, are here to assist you with any challenges you may encounter. Whether it's latching difficulties, milk supply concerns, or any other issue, our team of dedicated lactation experts is ready to provide personalized guidance and support tailored to your needs.",
    // title: 'Steps',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Fill out the form, and our online breastfeeding consultants will contact you within 1 working hour.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Once we understand your needs, our lactation experts will schedule a 45-minute call at your convenience.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'After the consultation, feel free to follow up with the lactation consultant on WhatsApp for up to 3 days.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Connect with Lactation Expert Now',
    href: '/lactation-consultation',
  },
};
//   groupLink: 'https://babynama.in/permanentgroup',
//   title1: 'Payment Successful',
//   title2: (
//     <>
//       {' '}
//       <span className="font-bold text-green-300">Congratulations!</span> With this subscription , you have unlocked
//       access to a group with permanent access to doctors. To join, please use the following link.
//     </>
//   ),
//   buttonText: 'Join our Pediatrics WhatsApp Group',
//   paragraph: (
//     <>
//       {}
//       If you are in an emergency right now, please call our 24/7 helpline{' '}
//       <a className="font-bold text-green-500 hover:text-red-300" href="tel:917948221222">
//         +917948221222
//       </a>
//       . Our support team will reach out to you in the next 2 working days to explain all details about your plan.
//     </>
//   ),
//   // countdown:3,
// };
// Lactation consultation section ends

export const primeCarePlusPricingPlans: PlusPricingPlan[] = [
  {
    id: 1,
    title: '15 Days',
    price: 495,
    features: 'Any 1 consultation Free',
  },
  {
    id: 2,
    title: '3 Month',
    price: 4999,
    features: (
      <div>
        Unlimited Consultations &amp; <br />
        10 day Refund Policy
      </div>
    ),
    coupons: [
      { code: 'GET10', prices: 4449 },
      { code: 'GET20', prices: 3999 },
      { code: 'GET30', prices: 3499 },
      { code: 'WORRYFREE', prices: 3499 },
      { code: 'FREEDOM', prices: 2999 },
      { code: 'GET40', prices: 2999 },
    ],
  },
];

export const holisticCarePricingPlan: PlusPricingPlan[] = [
  {
    id: 1,
    title: '1 Month',
    price: 3998,
    features: 'Unlimited free Consultations',
  },
  {
    id: 2,
    title: '3 Month',
    price: 9999,
    features: (
      <div>
        Unlimited Consultations &amp; <br />
        10 day Refund Policy
      </div>
    ),
    coupons: [
      { code: 'GET10', prices: 8999 },
      { code: 'GET20', prices: 7999 },
      { code: 'GET30', prices: 6999 },
      { code: 'GET40', prices: 5999 },
      { code: 'WORRYFREE', prices: 6999 },
    ],
  },
];

export const PrimeCarePlusPricingPlan: PlusPricingPlan[] = [
  {
    id: 1,
    title: '1 Month',
    price: 2498,
    features: 'Unlimited free Consultations',
    coupons: [{ code: 'NEWMOMGIFT', prices: 2498 }],
  },
  {
    id: 2,
    title: '3 Month',
    price: 4998,
    features: (
      <div>
        Unlimited Consultations &amp; <br />
        10 day Refund Policy
      </div>
    ),
    coupons: [{ code: 'NEWMOMGIFT', prices: 4498 }],
  },
];

export const PreviewAccessHeroDataPrime: Hero3Props = {
  HeroData: {
    titlePart1: <>Instant Access to Pediatricians on WhatsApp</>,
    subtitle: (
      <>
        From urgent issues to simple questions about your little one's well-being, get reliable advice in under 15 min.
      </>
    ),

    button2: 'Get 24 Hour Free Trial',
    image: {
      src: HeroPrimeCare,
      alt: 'Babynama',
    },
  },
};

export const previewAccessFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Get 24 Hour Free Trial',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const eveningSessionHeroData: HeroProps = {
  title: "Welcome to Babynama's Exclusive Babycare Evening Sessions",
  subtitle: 'by Md Pediatricians',
  callToAction: {
    text: 'Join Evening Session',
    href: '/evening-session',
  },
  image: {
    src: doctorsGroup,
    alt: 'Babynama',
  },
};

export const ourTeam: TeamV2Props[] = [
  {
    image: { src: drSumitraV2, alt: 'Dr. Sumitra' },
    name: 'Dr. Sumitra',
  },
  {
    image: { src: drRajatV2, alt: 'Dr. Rajat' },
    name: 'Dr. Rajat',
  },
  {
    image: { src: drAnupriyaV2, alt: 'Dr. Anupriya' },
    name: 'Dr. Anupriya',
  },
  {
    image: { src: drDhanyaV2, alt: 'Dr. Dhanya' },
    name: 'Dr. Dhanya',
  },
  {
    image: { src: drNitikataV2, alt: 'Dr. Nitika' },
    name: 'Dr. Nitika',
  },
  {
    image: { src: drPriyankaV2, alt: 'Dr. Priyanka' },
    name: 'Dr. Priyanka',
  },
  {
    image: { src: drChandniV2, alt: 'Dr. Chandni' },
    name: 'Dr. Chandni',
  },
];

export const meetingsData: MeetingData[] = [
  {
    title: 'Weight Gain of Baby',

    date: new Date('2023-09-04'),
    time: '05:00 PM',
  },
  {
    title: 'Vacination of Babies',
    date: new Date('2023-09-05'),

    time: '05:00 PM',
  },
  {
    title: 'Sleep Training of Babies',

    date: new Date('2023-09-06'),
    time: '05:00 PM',
  },
  {
    title: 'Lactation',
    date: new Date('2023-09-07'),

    time: '05:00 PM',
  },
  {
    title: 'Post partum care',

    date: new Date('2023-09-08'),
    time: '05:00 PM',
  },
  {
    title: 'Post partum diet',

    date: new Date('2023-08-26'),
    time: '05:00 PM',
  },
  {
    title: 'How are you feeling as a mother',
    date: new Date('2023-08-27'),

    time: '05:00 PM',
  },
];

export const doctorFixedBottomButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Consult Pediatrician Now`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const testimonialFixedBottomButtondata: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Consult Pediatrician Now`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

// Doctor Darshana section

//Hero section
export const DarshanaHeroData: HeroProps = {
  title: <>Dr. Darshana's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries.</>,
  callToAction: {
    text: 'Try Chat for Free',
    href: '/dr-darshana-rathod',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: doctorDarshanaHero,
    alt: 'DrDarshana',
  },
};

//WhySection

export const drDarshanaWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Darshana.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Darshana will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const doctorDarshanaTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },

    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const DarshanaAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Darshana',
  subtitle1: `Dr. Darshana Rathod is a distinguished Pediatrician with a strong educational background and extensive training. She holds an MBBS degree from the renowned B Y L Nair Hospital in Mumbai and earned her MD degree in Pediatrics following a rigorous residency at Lokmanya Tilak Municipal Medical College and Government Hospital, Mumbai. Her academic achievements and comprehensive medical training reflect her commitment to delivering high-quality care to young patients. She was honoured with D.N.B degree from National board of examinations in India. She has keen interest in breastfeeding promotion and lactation counselling for new mothers. She is dedicated towards providing best care,well-being, and development of your child.`,
  subtitle2: ' ',
  subtitle3: '',
  image: {
    src: doctorDarshanaAbout,
    alt: 'AboutDrDarshana',
  },
};

export const DarshanaTestimonialData = [
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
  },
  {
    text: `It is a life changer. You can't go to offline doctor all the time, doctors here are very polite and very efficient`,
    name: 'Shipra',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Shipra.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Shipra.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/shipra.jpg`,
  },
  {
    text: `The Doctors are easily available in a matter of minutes....it is really worth taking the plan.`,
    name: 'Charu Chandarana',
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webp`,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/charu.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/charu.mp4`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    title: 'Mother of 7 month old twins',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: 'Please follow the group and take your experience. Thank you Babynama family',
    name: 'Mr. and Mrs. Sharma',
    title: 'Parents of 4 month old baby.',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Manu+Sharma+Babynama+Testimonial(720P_HD).webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Manu+Sharma+Babynama+Testimonial(720P_HD).mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mrs++mr+sharma.webp`,
  },
];

export const DarshanaPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Darshana's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Darshana per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Darshana',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const previewAccessButtonDataDarshana: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: 'Try Chat for Free',
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const DoctorDarshanaFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `  Don't wait for a doctor's appointment. Chat with Dr Darshana on WhatsApp and get expert
  medical advice in minutes.`,
  address: 'VR1 And U&I Centre, SCO-83, Sector 29, Gurugram',
  location: '- 122022',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Dr%20Darshana',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-darshana-rathod#pricing' },
    { label: 'Our Doctors', href: '/dr-darshana-rathod#doctors' },
    { label: 'Testimonials', href: '/dr-darshana-rathod#testimonials' },
    { label: 'About Us', href: '/dr-darshana-rathod#doctors-about' },
  ],
};

export const doctorsDarshanaHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-darshana-rathod',
    },
    {
      label: 'Plan Highlights',
      href: '/dr-darshana-rathod#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-darshana-rathod#doctors',
    },
    {
      label: 'About',
      href: '/dr-darshana-rathod#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-darshana-rathod#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-darshana-rathod#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const ThankYouFreePreviewDarshana: ThankYouData = {
  groupLink: 'https://babynama.in/joindarshana1',
  title1: 'Your worry-free parenting journey with doctor Darshana starts now',
  title2: 'You Can Join The WhatsApp Group Using The Link Below',
  buttonText: 'Join WhatsApp Group',
  // countdown:3,
  paragraph: '',
};
export const ThankYouWelcomeBackDarshana: ThankYouData = {
  groupLink: 'https://babynama.in/joindarshana1',
  title1: 'Welcome back to Babynama. We have Improved since you last tried us.',
  title2: 'Please join the WhatsApp group using below link',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const CarePlanMonthEndSaleHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/care-plan-month-end-sale#heroOne',
    },
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care Plan',
      href: '/care-plan-month-end-sale#pricing',
    },
    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/care-plan-month-end-sale#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/care-plan-month-end-sale#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plan',
      href: '/care-plan-month-end-sale#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const carePlanMonthEndSaleHeroData: HeroProps = {
  title: <>Your Personal Pediatrician with Babynama</>,
  subtitle:
    'For the parents who want nothing but the best. Secure your peace of mind with round-the-clock Pediatric Support, a Personal Pediatrician, and comprehensive child and mother care',
  callToAction: {
    text: 'Subscribe & Enjoy Peace of Mind',
    href: '/care-plan-month-end-sale/#pricing',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const monthEndSalePlan: Plan[] = [
  {
    id: 1,
    name: 'Basic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Reliable Pediatric Care within 15 Minutes.',
    },
    prices: {
      monthly: 999,
      sixMonth: 2499,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations (8AM - 10PM)',
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      // {
      //   TickIcon: <FaCheckCircle color="green" />,
      //   text: 'Free postpartum classes',
      //   icon: null,
      // },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 999, sixMonth: 2249 } },
      { code: 'GET20', prices: { monthly: 999, sixMonth: 1998 } },
      { code: 'GET30', prices: { monthly: 999, sixMonth: 1749 } },
      { code: 'CARE', prices: { monthly: 999, sixMonth: 1248 } },
    ],
  },
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive Care for Your Child's Health & Development.",
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: null,
        text: (
          <>
            <b className="font-semibold text-primary-600">Everything In Basic Care and:</b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Unlimited free </b> pediatric consultations{' '}
            <b className="font-semibold">24X7</b>
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Monthly
            <b className="font-semibold"> milestones tracking </b> by a senior pediatrician
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Comprehensive guidance for
            <b className="font-semibold"> lactation, nutrition, weaning. </b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Free workshop </b> : weaning.
          </>
        ),
        icon: null,
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'HAPPY', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'CARE', prices: { monthly: 1999, sixMonth: 2498 } },
    ],
  },
  {
    id: 3,
    name: 'Holistic Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Exceptional Personalized Care for Child and Mother's Well-Being.",
    },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: null,
        text: (
          <>
            <b className="font-semibold text-primary-600">Everything In Prime Care and:</b>
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Dedicated pediatrician</b> to guide and support you with your child's specific
            needs
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Private WhatsApp group </b>with your dedicated pediatrician.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother</b> :postnatal care...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Comprehensive support and guidance for mother:</b> postnatal care, personalized
            diet plan, emotional well-being and other health concerns.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist,
            Dermatologist, Psychologist, Pediatrician, Nutritionist.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning...
          </>
        ),
        expandedText: (
          <>
            <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning, lactation.
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'HAPPY', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'CARE', prices: { monthly: 3998, sixMonth: 4998 } },
    ],
  },
];

export const testimonialCollectorFixedButton: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Submit Your Testimonials`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const sleepTrainingWorkShopHeroData: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: <>Empower Your Baby with Healthy Sleep Habits </>,
    titlePart2: <>Master Baby Sleep with Dr Sumitra (Pediatrician, Certified Sleep consultant)</>,

    subtitle: <>Master Baby Sleep with Dr Sumitra (Pediatrician, Certified Sleep consultant)</>,
    paymentButton: 'Join Workshop Now',
    callToAction: {
      text: '',
      href: '',
    },
    image: {
      src: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/sleep-training-thumbnail.webp',
      alt: 'Sleep Training Workshop',
    },
  },
};

export const sleepTrainingWorkShopWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Why Should You Attend the Workshop?',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'Evidence-Based Techniques',
      image: {
        src: techniques,
        alt: 'Q&A Session',
      },
      description:
        'Ask any questions about infant sleep during our live workshop, and our Pediatric Sleep Consultant will provide detailed answers to help you understand your baby’s sleep needs better.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },
    {
      title: 'Whatsapp Community Support for follow up questions ',
      image: {
        src: whatsappGroupImg,
        alt: 'WhatsApp Group Access',
      },
      description:
        'Join our dedicated WhatsApp group for workshop attendees and receive ongoing support and advice from our expert team for a month after the workshop. Connect with other parents and share experiences.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },
    {
      title: 'Customized Solutions in 1:1 session',
      image: {
        src: guidanceImg,
        alt: 'Personalized Sleep Plan',
      },
      description:
        'Receive a customized sleep plan tailored to your baby’s unique sleep patterns and needs. Learn effective sleep training techniques to establish healthy sleep habits for your baby.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },
    {
      title: 'Improve Sleep Quality for the Entire Family',
      image: {
        src: sleep,
        alt: 'Lifetime Access to Recording',
      },
      description:
        'Gain access to a lifetime recording of the workshop, allowing you to revisit key insights and strategies at your convenience. Never miss out on valuable information to support your baby’s sleep journey.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },
    {
      title: 'Reduce Stress and Anxiety of parents',
      image: {
        src: stressfree,
        alt: 'Empowerment with Expert Guidance',
      },
      description:
        'Equip yourself with the knowledge and confidence to guide your baby towards better sleep. Our workshop provides you with the tools and resources needed to navigate your baby’s sleep challenges effectively.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },

    {
      title: ' Foster Independence',
      image: {
        src: independence,
        alt: 'Empowerment with Expert Guidance',
      },
      description:
        'Equip yourself with the knowledge and confidence to guide your baby towards better sleep. Our workshop provides you with the tools and resources needed to navigate your baby’s sleep challenges effectively.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },

    {
      title: 'Access to Expertise',
      image: {
        src: expert,
        alt: 'Empowerment with Expert Guidance',
      },
      description:
        'Equip yourself with the knowledge and confidence to guide your baby towards better sleep. Our workshop provides you with the tools and resources needed to navigate your baby’s sleep challenges effectively.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },

    {
      title: 'Long-Term Benefits',
      image: {
        src: longterm,
        alt: 'Empowerment with Expert Guidance',
      },
      description:
        'Equip yourself with the knowledge and confidence to guide your baby towards better sleep. Our workshop provides you with the tools and resources needed to navigate your baby’s sleep challenges effectively.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },

    {
      title: ' Improve mental health of parents',
      image: {
        src: mentalhealth,
        alt: 'Empowerment with Expert Guidance',
      },
      description:
        'Equip yourself with the knowledge and confidence to guide your baby towards better sleep. Our workshop provides you with the tools and resources needed to navigate your baby’s sleep challenges effectively.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Learn More',
        href: '/sleep-training-workshop',
      },
    },
  ],
};

// solids-food-start-workshop How it works section data;

export const sleepTrainingWorkShopHowData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Who Should Attend?',
    subtitle:
      'This workshop is ideal for parents seeking to improve their baby’s sleep patterns and establish healthy sleep habits.',
  },
  items: [
    {
      title: 'New Parents',
      description:
        'Those experiencing parenthood for the first time and seeking guidance on establishing healthy sleep habits for their newborns.',
      image: {
        src: parentsIcon,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Parents Experiencing Challenges',
      description: `Parents who are struggling with their baby's sleep patterns, including difficulties in falling asleep, frequent night awakenings, or short naps.`,
      image: {
        src: sleepingBaby,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Expectant Parents',
      description: `Couples who are expecting and want to be prepared with sleep strategies
        before their baby arrives.`,
      image: {
        src: pregnant,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Caregivers and Family Members',
      description: `Grandparents, nannies, or other family members involved in the
        baby's care who may benefit from learning contemporary, evidence-based approaches to baby sleep`,
      image: {
        src: parentsIcon,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Parents of Toddlers',
      description: `Those with older babies or toddlers who are facing sleep regressions or
        transitioning from co-sleeping to independent sleeping.`,
      image: {
        src: toddler,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Parents Seeking Routine',
      description: `Parents who wish to establish a consistent bedtime routine to
        improve the overall sleep quality of their baby and, consequently, the entire family.`,
      image: {
        src: longterm,
        alt: 'Q&A Session',
      },
    },
    {
      title: 'Working parents',
      description: `Those experiencing parenthood for the first time and seeking guidance on
        establishing healthy sleep habits for their newborns.`,
      image: {
        src: working,
        alt: 'Q&A Session',
      },
    },
  ],
};

// weaning Testimonial Data

export const sleepTrainingWorkShopTestimonialData = [
  {
    text: `As a first time mother I am always anxious, but doctor is always there. Must have for all first time moms.`,
    name: 'Pranati',
    title: 'Mother of 3 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/pranati.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/pranati.webp`,
  },
  {
    text: `My baby had breathing issues, doctors here identified it and helped me calm down a lot. I get replies on my WhatsApp, very helpful`,
    name: 'Aabha',
    title: 'Mother of 4 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Aabha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Aabha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/aabha.jpg`,
  },
  {
    text: `Dr. Sumitra & Babynama have helped me in so many ways... suggest this for all mothers`,
    name: 'Ruchi Garg',
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Ruchi.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Ruchi.mp4`,
    title: 'Mother of 7 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/ruchi.webp`,
  },
  {
    text: `Everything was very thorough in the seminar. Everyone got this chance to complete the questionnaire in the session with ma'am. This service is very useful for moms in nuclear families like myself.`,
    name: 'Akanksha',
    title: 'Mother of 6 month old baby',
    rating: 5,
    url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akanksha.webm`,
    mp4Url: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/mp4/mp4/Akanksha.mp4`,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/Akansha.webp`,
  },
  {
    text: `There are n number of questions of n number of mothers and even if you dont have that particular problem, they are resolved by seeing the questions of other mothers.`,
    name: 'Priti Gattani',
    url: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/Testimonial+-+Wall+of+love+for+Babynama.webm',

    title: 'Mother of 3 month old baby',
    rating: 5,
    thumbnailUrl: `https://gh-public-contents.s3.ap-south-1.amazonaws.com/priti.webp`,
  },
];

export const stepsDataSleepTraining: StepsProps = {
  header: {
    highlight: 'How It Works',
  },
  items: [
    {
      title: 'Step 1',
      description: ' After payment, you will be shared link to a whatsapp group with other parent and our expertise',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: 'Link to join will be shared 10 minutes before live session',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: 'Join the live session and ask all your questions while expert is explaining you',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4',
      description:
        'Post live session the expert will help you with follow up questions up to 7 days in a group ( you can take a holistic plan to have a personal group with Dr. Sumitra for next 3 months)',
      icon: IconArrowDown,
    },
    {
      title: 'Step 5',
      description: 'If you miss one session, team will give you one  more chance to attend to next workshop',
      icon: IconArrowDown,
    },
    {
      title: 'Step 6',
      description: 'Continue receiving support and advice from our expert team via the dedicated WhatsApp group.',
      icon: IconArrowDown,
    },
  ],
  callToAction: {
    text: 'Learn More',
    href: '/sleep-training-workshop',
  },
};

export const faqsSleepTrainingData: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'When should I start sleep training my baby?',
      description:
        'You can start introducing good sleep habits from birth only but proper sleep training should be started around 3-4 months.  This is when most babies are developmentally capable of sleeping through the night without needing to feed. However, consult with a pediatrician to determine the best timing for your baby.',
    },
    {
      title: 'What is sleep training?',
      description:
        'Sleep training is a process that helps babies learn to fall asleep on their own and stay asleep through the night. It involves teaching self-soothing techniques so that they can fall back to sleep without parental intervention.',
    },

    {
      title: 'How long does sleep training take? ',
      description:
        'The duration of sleep training can vary significantly from one child to another. Some babies might adapt to new sleep habits in a few days, while others may take several weeks. Consistency is key to success.',
    },
    {
      title: 'Will sleep training harm my baby emotionally?',
      description: `Research indicates that when done appropriately, sleep training does not cause long-term harm or emotional distress to babies. It's important to choose a method that you're comfortable with and to proceed in a way that feels supportive and loving.`,
    },
    {
      title: `Can sleep training improve my baby's sleep?`,
      description: `Yes, sleep training can significantly improve a baby's sleep by helping them learn to fall asleep independently and sleep for longer stretches. This, in turn, can improve the overall sleep quality for the entire family.`,
    },
    {
      title: ` What if sleep training isn't working?`,
      description: `If sleep training isn't working, consider whether the method is a good fit for your baby's temperament and your family's needs. It may also be helpful to reassess the sleep environment, routine, and timing. Consulting with a pediatric sleep expert can provide personalized guidance and support.`,
    },
    {
      title: `Do I have to let my baby cry it out for sleep training to work?`,
      description: `No, there are several sleep training methods, and not all involve letting your baby cry it out. It's important to choose a method that aligns with your parenting style and your baby's needs. Gentle methods can also be effective. `,
    },
    {
      title: `Can I sleep train my baby for naps as well?`,
      description: `Yes, the principles of sleep training can be applied to naps as well. However, nap training may involve different challenges and might be initiated after nighttime sleep has improved.`,
    },
    {
      title: `How do I know if my baby is ready for sleep training?`,
      description: `Signs that your baby may be ready for sleep training include being able to sleep for longer stretches at night, not needing to eat every few hours, and showing signs of self-soothing, like sucking on their fingers. Always consult with your pediatrician to assess readiness based on your baby's development and health.`,
    },
  ],
  link: {
    label: 'Contact Us',
    href: '#footer',
  },
};
export const faqsSleepTrainingData2: FAQsProps = {
  header: {
    highlight: 'FAQs',
    subtitle: 'Do you have other questions?',
    // title: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'What age group is this sleep training program suitable for?',
      description: 'The program is designed for infants and toddlers up to 3 years old.',
    },
    {
      title: 'How long does the sleep training program last?',
      description: 'The program is typically one month long with daily support.',
    },

    {
      title: 'What is included in the program?',
      description:
        'Personalized sleep routines, daily follow-ups, expert guidance, and a final report with future recommendations.',
    },
    {
      title: 'Who conducts the sleep training program?',
      description: `The program is led by Dr. Sumitra, a pediatric sleep expert.`,
    },
    {
      title: `What are the main sleep issues addressed?`,
      description: `Common issues like night waking, sleep dependency, and irregular sleep schedules are addressed.`,
    },
    {
      title: `Is the program suitable for parents who have tried other sleep training methods?`,
      description: `Yes, the personalized nature of the program adapts to past sleep training attempts.`,
    },
    {
      title: `What support channels are used?`,
      description: `Daily guidance is provided through WhatsApp and one-on-one consultations.`,
    },
    {
      title: `At what age should I start sleep training my baby?`,
      description: `Sleep training can start as early as 4-6 months when babies develop regular sleep patterns.`,
    },
    {
      title: `Will sleep training harm my baby emotionally?`,
      description: `Properly managed sleep training, with a gentle and supportive approach, does not cause harm and promotes better sleep.`,
    },
    {
      title: `How long does sleep training take to see results?`,
      description: `Most families see improvements within 1-2 weeks.`,
    },
    {
      title: `What if my baby resists the sleep routine?`,
      description: `Resistance is common; our program offers daily adjustments and ongoing support to address such challenges.`,
    },
    {
      title: `Do you provide support after the program ends?`,
      description: `Yes, you’ll receive a detailed report with future sleep strategies.`,
    },
    {
      title: `How personalized is the program?`,
      description: `The program is fully tailored to your baby’s sleep patterns, health, and your parenting style.`,
    },
  ],
  link: {
    label: 'Contact Us',
    href: '#footer',
  },
};

//solids-food-start-workshop-doctors
export const SleepTrainingDoctors: WorkshopDoctor[] = [
  {
    name: 'Dr. Sumitra Meena',
    qualification: 'MBBS, MD pediatrician',
    description: `
    - Certified pediatric sleep consultant (IPSP)
    - MBBS, MD (lady harding medical college)
                  - Certified Lactation Consultant
                  - 9 Years Experience
                  - Ex resident- Kalawati saran children hospital ( LHMC), Safdarjung hospital.`,
    imageSrc: require('../assets/images/doctors/drSumitraM.webp').default,
  },
];

export const carePlansCopyFeatures = {
  primeCare: [
    {
      id: 1,
      name: '24/7 Instant Pediatric Care',
      check: true,
    },
    {
      id: 2,
      name: 'Comprehensive Breastfeeding Aid',
      check: true,
    },
    {
      id: 3,
      name: 'Monthly Milestone Tracking',
      check: true,
    },
    {
      id: 4,
      name: 'Dedicated Pediatrician',
      check: false,
    },
    {
      id: 5,
      name: 'Private WhatsApp Group',
      check: false,
    },
    {
      id: 6,
      name: 'Comprehensive Support',
      check: false,
    },
  ],

  holisticCare: [
    {
      id: 1,
      name: '24/7 Instant Pediatric Care',
      check: true,
    },
    {
      id: 2,
      name: 'Comprehensive Breastfeeding Aid',
      check: true,
    },
    {
      id: 3,
      name: 'Monthly Milestone Tracking',
      check: true,
    },
    {
      id: 4,
      name: 'Dedicated Pediatrician',
      check: true,
    },
    {
      id: 5,
      name: 'Private WhatsApp group',
      check: true,
    },
    {
      id: 6,
      name: 'Comprehensive support',
      check: true,
    },
  ],
};

export const basicCareplanOther: Plan = {
  id: 1,
  name: 'Basic Care',
  summary: {
    icon: <FaCheckCircle color="green" />,
    text: 'Reliable Pediatric Care within 15 Minutes.',
  },
  prices: {
    monthly: 999,
    sixMonth: 2499,
  },
  refundPolicy: 10,
  features: [
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: 'Instant answers on WhatsApp by Pediatricians (8AM-10PM)',
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: 'Unlimited free pediatric consultations (8AM - 10PM)',
      icon: <BsFillInfoCircleFill color="royalblue" />,
      terms: (
        <div>
          <p>
            Fair Usage Policy (FUP) stipulates that the plan would <span className="font-bold"> cover only 1 baby</span>
            . If you want the plan to cover all your babies, then kindly reach out to support using the WhatsApp link so
            that we can create a discounted plan that covers all children of yours as per their individual needs.
          </p>
          <br />
          <p>
            Furthermore, the{' '}
            <span className="font-bold">free consultations need to be booked through support during the day</span>, and
            for free night consultations (where applicable), we request you to use the feature only in case of
            emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
            you would not misuse the feature.
          </p>{' '}
          <br />
        </div>
      ),
    },
  ],

  coupons: [
    { code: 'GET10', prices: { monthly: 999, sixMonth: 2249 } },
    { code: 'GET20', prices: { monthly: 999, sixMonth: 1998 } },
    { code: 'GET30', prices: { monthly: 999, sixMonth: 1749 } },
    { code: 'REP30', prices: { monthly: 999, sixMonth: 1749 } },
    { code: 'WORRYFREE', prices: { monthly: 999, sixMonth: 1749 } },
    { code: 'FREEDOM', prices: { monthly: 999, sixMonth: 1749 } },
    { code: 'HAPPY', prices: { monthly: 999, sixMonth: 1998 } },
    { code: 'DIWALI', prices: { monthly: 999, sixMonth: 1998 } },
    { code: 'NURTURE', prices: { monthly: 999, sixMonth: 1998 } },
    { code: 'SANTA', prices: { monthly: 999, sixMonth: 1998 } },
    { code: 'RENEW', prices: { monthly: 999, sixMonth: 1998 } },
  ],
};

export const plansLandingOneMonthHeroData: HeroPropsPlansLanding = {
  title: 'Instant Pediatric Care for Your Baby',
  subtitle: 'Instant WhatsApp access to Pediatricians for ALL your baby-related concerns',
  callToAction: {
    text: 'Get 1 Month Access Now',
    href: '/care-plans',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const primeCareplanOther: Plan = {
  id: 2,
  name: 'Prime Care',
  summary: {
    icon: <FaCheckCircle color="green" />,
    text: "Comprehensive Care for Your Child's Health & Development.",
  },
  prices: {
    monthly: 1999,
    sixMonth: 4999,
  },
  refundPolicy: 10,
  features: [
    {
      TickIcon: null,
      text: (
        <>
          <b className="font-semibold text-primary-600">Everything In Basic Care and:</b>
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold"> Unlimited free </b> pediatric consultations{' '}
          <b className="font-semibold">24X7</b>
        </>
      ),
      icon: <BsFillInfoCircleFill color="royalblue" />,
      terms: (
        <div>
          <p>
            Fair Usage Policy (FUP) stipulates that the plan would <span className="font-bold"> cover only 1 baby</span>
            . If you want the plan to cover all your babies, then kindly reach out to support using the WhatsApp link so
            that we can create a discounted plan that covers all children of yours as per their individual needs.
          </p>
          <br />
          <p>
            Furthermore, the{' '}
            <span className="font-bold">free consultations need to be booked through support during the day</span>, and
            for free night consultations (where applicable), we request you to use the feature only in case of
            emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
            you would not misuse the feature.
          </p>{' '}
          <br />
        </div>
      ),
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          Monthly
          <b className="font-semibold"> milestones tracking </b> by a senior pediatrician
        </>
      ),
      icon: <BsFillInfoCircleFill color="royalblue" />,
      terms: (
        <p>
          Our service offers comprehensive baby growth and milestone tracking. During a video call, our Pediatricians
          evaluate your baby&apos;s development following <span className="font-bold">WHO guidelines</span>. We assess
          various growth aspects, including
          <span className="font-bold"> physical, sensory, communication, and emotional development.</span> Each month,
          these records are
          <span className="font-bold">meticulously updated and managed in a Google sheet by our Pediatrician</span>,
          ensuring consistent monitoring of your baby&apos;s progress.
        </p>
      ),
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          Comprehensive guidance for
          <b className="font-semibold"> lactation, nutrition, weaning. </b>
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold"> Free workshop </b> : weaning.
        </>
      ),
      icon: null,
    },
  ],
  coupons: [
    { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
    { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
    { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
    { code: 'REP30', prices: { monthly: 1999, sixMonth: 3499 } },
    { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    { code: 'FREEDOM', prices: { monthly: 1999, sixMonth: 2999 } },
    { code: 'HAPPY', prices: { monthly: 1999, sixMonth: 3999 } },
    { code: 'DIWALI', prices: { monthly: 1999, sixMonth: 3999 } },
    { code: 'NURTURE', prices: { monthly: 1999, sixMonth: 3999 } },
    { code: 'SANTA', prices: { monthly: 1999, sixMonth: 3999 } },
    { code: 'RENEW', prices: { monthly: 1999, sixMonth: 3999 } },
  ],
};

export const primeCareOneMonthHeroData: HeroProps = {
  title: '1 Month Essential Care Plan',
  subtitle: "If you are worried about your baby's optimal growth and nutrition",
  callToAction: {
    text: 'Buy @2499',
    href: '/care-plans',
  },
  image: {
    src: essentialMobile,
    alt: 'essentialMobile',
  },
};

export const primeCareOneMonthHeroDataDesktop: HeroProps = {
  title: '1 Month Essential Care Plan',
  subtitle: "If you are worried about your baby's optimal growth and nutrition",
  callToAction: {
    text: 'Buy @2499',
    href: '/care-plans',
  },
  image: {
    src: essentialMobile,
    alt: 'primeDesktop',
  },
};

export const holisticCareplanOther: Plan = {
  id: 3,
  name: 'Holistic Care',
  summary: {
    icon: <FaCheckCircle color="green" />,
    text: "Exceptional Personalized Care for Child and Mother's Well-Being.",
  },
  prices: {
    monthly: 3998,
    sixMonth: 9999,
  },
  refundPolicy: 10,
  features: [
    {
      TickIcon: null,
      text: (
        <>
          <b className="font-semibold text-primary-600">Everything In Prime Care and:</b>
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold">Dedicated pediatrician</b> to guide and support you with your child's specific
          needs
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold">Private WhatsApp group </b>with your dedicated pediatrician.
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold">Comprehensive support and guidance for mother</b> :postnatal care...
        </>
      ),
      expandedText: (
        <>
          <b className="font-semibold">Comprehensive support and guidance for mother:</b> postnatal care, personalized
          diet plan, emotional well-being and other health concerns.
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist...
        </>
      ),
      expandedText: (
        <>
          <b className="font-semibold">Free Specialist Consultations</b> for baby & mother: Gynecologist, Dermatologist,
          Psychologist, Pediatrician, Nutritionist.
        </>
      ),
      icon: null,
    },
    {
      TickIcon: <FaCheckCircle color="green" />,
      text: (
        <>
          <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning...
        </>
      ),
      expandedText: (
        <>
          <b className="font-semibold">Free access</b> to all our workshops: nutrition, weaning, lactation.
        </>
      ),
      icon: <BsFillInfoCircleFill color="royalblue" />,
    },
  ],

  coupons: [
    { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
    { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
    { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
    { code: 'REP30', prices: { monthly: 3998, sixMonth: 6999 } },
    { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    { code: 'FREEDOM', prices: { monthly: 3998, sixMonth: 4998 } },
    { code: 'HAPPY', prices: { monthly: 3998, sixMonth: 7999 } },
    { code: 'DIWALI', prices: { monthly: 3998, sixMonth: 7999 } },
    { code: 'NURTURE', prices: { monthly: 3998, sixMonth: 7999 } },
    { code: 'SANTA', prices: { monthly: 3998, sixMonth: 7999 } },
    { code: 'RENEW', prices: { monthly: 3998, sixMonth: 7999 } },
  ],
};

export const holisticCareOneMonthHeroData: HeroProps = {
  title: '1 Month Holistic Care Plan',
  subtitle: "If you are worried about your baby's optimal growth and nutrition",
  callToAction: {
    text: 'Buy @3998',
    href: '/care-plans',
  },
  image: {
    src: holisticMobile,
    alt: 'HeroHolisticCare',
  },
};

export const holisticCareOneMonthHeroDataDesktop: HeroProps = {
  title: '1 Month Holistic Care Plan',
  subtitle: "If you are worried about your baby's optimal growth and nutrition",
  callToAction: {
    text: 'Buy @3998',
    href: '/care-plans',
  },
  image: {
    src: holisticMobile,
    alt: 'HeroHolisticCare',
  },
};

export const holisticCareThreeMonthHeroData: HeroProps = {
  title: '3 Month Holistic Care Plan',
  subtitle: "If you are worried about your baby's optimal growth and nutrition",
  callToAction: {
    text: 'Buy @9999',
    href: '/care-plans',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const carePlansAppBabynamaHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/',
    },
    {
      image: {
        src: pricingIcon,
        alt: 'pricingIcon',
      },
      label: 'Care plan',
      href: '/care-plans-info#pricing',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Meet Our Doctors',
      href: '/care-plans-info#doctors',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/care-plans-info#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plan',
      href: '/care-plans-info#pricing',

      type: 'primary',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

export const lactationHeaderData: HeaderProps = {
  // links: [
  //   {
  //     image: {
  //       src: pricingIcon,
  //       alt: 'pricingIcon',
  //     },
  //     label: 'Care Plans',
  //     href: '/care-plans',
  //   },
  //   {
  //     image: {
  //       src: programIcon,
  //       alt: 'programIcon',
  //     },
  //     label: 'Programs',
  //     icon: MdKeyboardArrowRight,
  //     links: [
  //       {
  //         image: {
  //           src: babyIcon,
  //           alt: 'babyIcon',
  //         },
  //         label: 'Baby Solids Introduction',
  //         href: '/solids-food-start-workshop',
  //       },
  //       {
  //         image: {
  //           src: lactationConsultationIcon,
  //           alt: 'lactation-consultation',
  //         },
  //         label: 'Lactation Consultation',
  //         href: '/lactation-consultation',
  //       },

  //       // {
  //       //   image: {
  //       //     src: yogaIcon,
  //       //     alt: 'yogaIcon',
  //       //   },
  //       //   label: 'Yoga',
  //       //   href: '/yoga',
  //       // },
  //       {
  //         image: {
  //           src: lactationIcon,
  //           alt: 'lactationIcon',
  //         },
  //         label: 'Lactation Workshop',
  //         href: '/lactation-webinar',
  //       },
  //       {
  //         image: {
  //           src: doctorIcon,
  //           alt: 'doctorIcon',
  //         },
  //         label: 'Doctor Live Session',
  //         href: '/doctor-live-session',
  //       },
  //       {
  //         image: {
  //           src: sleepingBaby,
  //           alt: 'sleeping workshop',
  //         },
  //         label: 'Sleep Training Workshop',
  //         href: '/sleep-training-workshop',
  //       },
  //     ],
  //   },
  //   {
  //     image: {
  //       src: giftIcon,
  //       alt: 'giftIcon',
  //     },
  //     label: 'Gift a subscription',
  //     icon: MdKeyboardArrowRight,
  //     links: [
  //       {
  //         image: {
  //           src: partnerIcon,
  //           alt: 'partnerIcon',
  //         },
  //         label: 'Gift your partner',
  //         href: '/gifting-father',
  //       },
  //       {
  //         image: {
  //           src: giftIcon,
  //           alt: 'giftIcon',
  //         },
  //         label: 'Gift your friend',
  //         href: '/gifting',
  //       },
  //       {
  //         image: {
  //           src: referIcon,
  //           alt: 'referIcon',
  //         },
  //         label: 'Referrals',
  //         href: '/referrals',
  //       },
  //     ],
  //   },
  //   {
  //     image: {
  //       src: blogIcon,
  //       alt: 'blogIcon',
  //     },
  //     label: 'Blogs',
  //     href: '/blog',
  //   },
  //   {
  //     image: {
  //       src: testimonialIcon,
  //       alt: 'testimonialIcon',
  //     },
  //     label: 'Testimonials',
  //     href: '/testimonials',
  //   },
  // ],
  // actions: [
  //   {
  //     label: 'Emergency Consultation',
  //     href: '/emergency-consultation',
  //     type: 'primary',
  //   },
  // ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'center',
};

// btp section
export const BTPHeroData: HeroProps = {
  title: <>Breastfeeding Training Program</>,
  subtitle: 'Start your baby’s Exclusive Breastfeeding Journey Today',
  callToAction: {
    text: 'Join For 1 Month',
    href: '/breastfeeding-training-program',
  },
  image: {
    src: btpHero,
    alt: 'lactation Program',
  },
};

export const BTPFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Join The Program`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const BTPWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why You Need to Breastfeed?',
    position: 'center',
  },
  items: [
    {
      title: 'Breastmilk provides the best nutrition for your baby',
      image: {
        src: breastfeeding,
        alt: 'WhatsappGroupImg',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Antibodies in breastmilk protect your baby from diseases',
      image: {
        src: pediatrics,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Breastfeeding leads to better long-term health for your baby',
      image: {
        src: lifeIcon,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Save up to ₹5000/month by avoiding formula & medicines',
      image: {
        src: save,
        alt: 'WaitingImg',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
  ],
};

export const BTPWhyBreastFeddingData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Issues You Can Resolve with this Program',
    position: 'center',
  },
  items: [
    {
      title: 'Increase Milk Supply',
      image: {
        src: IncreaseIcon,
        alt: 'IncreaseIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Reducing Formula Usage',
      image: {
        src: FeedingBottleIcon,
        alt: 'FeedingBottleIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },

    {
      title: 'Pain During Feeding',
      image: {
        src: PainIcon,
        alt: 'PainIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Latching Issues',
      image: {
        src: breastfeeding,
        alt: 'breastfeeding',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Nipple confusion/ Breast refusal',
      image: {
        src: nippleIcon,
        alt: 'nippleIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Correct Use Of A Breast Pump',
      image: {
        src: BreastPumpIcon,
        alt: 'BreastPumpIcon',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
  ],
};

export const BTPstepsData: StepsProps = {
  header: {
    highlight: 'How it Works?',
  },
  items: [
    {
      description:
        'Once you enroll, our team will connect with you immediately to discuss your situation and breastfeeding goals.',
    },
    {
      description:
        'The first consultation is scheduled within 24 hours, where a personal plan, diet and routines are created by the expert.',
    },
    {
      description:
        'After the first consultation, a personal group is created for you, and the expert will closely monitor your progress.',
    },
    {
      description: 'Progress is monitored every three days, with immediate adjustments and consultations if needed.',
    },
  ],
  callToAction: {
    text: 'Join The program',
    href: '/lactation-program',
  },
};
export const BTPFeatures = {
  btp: [
    {
      id: 1,
      name: 'Personal Lactation Expert',
      check: true,
      image: {
        src: breastfeeding,
        alt: 'breastfeedingsupport',
      },
    },
    {
      id: 2,
      name: 'Private Whatsapp Group with Expert',
      check: true,
      image: {
        src: whatsappBlackIcon,
        alt: 'whatsappBlackIcon',
      },
    },
    {
      id: 3,
      name: 'Diet and Nutrition Planning for Mother',
      check: true,
      image: {
        src: nutritionIcon,
        alt: 'nutritionIcon',
      },
    },
  ],
};

export const InfoContentBTP: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: 'Personalized Breastfeeding support',
    content:
      'Get unlimited lactation support from the expert of your choice. With our support, over 95% of mothers have successfully established exclusive breastfeeding for their babies.',
  },
  {
    id: 3,
    title: 'Diet and Nutrition Planning for Mother',
    content:
      'If our Lactation expert recommends a diet plan, you can consult our nutritionist for free. But diet planning can happen only post the first lactation consultation.',
  },
  // {
  //   id: 4,
  //   title: 'Private group with expert for follow-up',
  //   content:
  //     "Don't rely on Google for your baby's health concerns. With this add-on you will get access to our Pediatric Group where our Pediatricians will answer all your basic baby-related queries on chat within 15 minutes. Moreover, you can have unlimited Pediatric Consultations 24X7 with our experts for any emergencies.",
  // },
];

export const btpPlan: UpdatedPlan[] = [
  {
    id: 1,
    name: 'BTP Plan',
    planIds: {
      monthly: 42,
      threeMonthly: 34,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive Care for Your Child's Health & Development.",
    },
    prices: {
      monthly: 3749,
      threeMonthly: 6249,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Instant </b>pediatric replies on chat{' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 free </b> pediatric video consultations
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 2249, threeMonthly: 5624 } },
      { code: 'GET20', prices: { monthly: 1999, threeMonthly: 4999 } },
    ],
  },
];
// btp end
export const motherhoodCareplan: MotherhoodPlan[] = [
  {
    id: 30,
    name: 'Trimester 1 Care',
    summary: {
      icon: FaCheckCircle,
      text: 'Get First Trimester Care Plan Now!🤰',
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    programDate: '27-31 July,2024',
    features: [
      {
        topic: 'Gynecologist',
        topics: ["1st Trimester Dos and Dont's"],
        date: '27th July, Saturday, 11:00 AM',
      },
      {
        topic: 'Prenatal Yoga',
        topics: ['1st Trimester Exercise'],
        date: '28th July, Sunday, 11:00 AM',
      },
      {
        topic: 'Nutritionist',
        topics: ['Nutrition in 1st Trimester'],
        date: '29th July, Monday, 07:00 PM',
      },
      {
        topic: 'Pediatrician',
        topics: ['Baby Growth and Development'],
        date: '30th July, Tuesday, 07:00 PM',
      },
      {
        topic: 'Psychologist',
        topics: ['Mental Health in 1st Trimester'],
        date: '31st July, Wednesday. 07:00 PM',
      },
    ],
    coupons: [
      { code: 'GET40', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
  {
    id: 31,
    name: 'Trimester 2 Care',
    summary: {
      icon: FaCheckCircle,
      text: 'Get Second Trimester Care Plan Now!🤰',
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    programDate: '20-24 July,2024',
    features: [
      {
        topic: 'Gynecologist',
        topics: ["2nd Trimester Dos and Dont's"],
        date: '20th July, Saturday, 11:00 AM',
      },
      {
        topic: 'Prenatal Yoga',
        topics: ['2nd Trimester Exercise'],
        date: '21st July, Sunday, 11:00 AM',
      },
      {
        topic: 'Nutritionist',
        topics: ['Nutrition in 2nd Trimester'],
        date: '22nd July, Monday, 07:00 PM',
      },
      {
        topic: 'Pediatrician',
        topics: ['Importance of Antenatal Counselling'],
        date: '23rd July, Tuesday, 07:00 PM',
      },
      {
        topic: 'Psychologist',
        topics: ['Mental Health in 2nd Trimester'],
        date: '24th July, Wednesday. 07:00 PM',
      },
    ],
    coupons: [
      { code: 'GET40', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
  {
    id: 32,
    name: 'Trimester 3 Care',
    summary: {
      icon: FaCheckCircle,
      text: 'Get Third Trimester Care Plan Now!🤰',
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    programDate: '13-19 July,2024',
    features: [
      {
        topic: 'Gynecologist',
        topics: ["3rd Trimester Dos and Dont's"],
        date: '13th July, Saturday, 11:00 AM',
      },
      {
        topic: 'Childbirth Educator',
        topics: ['Birth Plan'],
        date: '14th July, Sunday, 11:00 AM',
      },
      {
        topic: 'Nutritionist',
        topics: ['Nutrition in 3rd Trimester'],
        date: '15th July, Monday, 07:00 PM',
      },
      {
        topic: 'Pediatrician',
        topics: ['New Born Care'],
        date: '16th July, Tuesday, 07:00 PM',
      },
      {
        topic: 'Psychologist',
        topics: ['Mental Health in 3rd Trimester'],
        date: '17th July, Wednesday. 07:00 PM',
      },
      {
        topic: 'Lactation',
        topics: ['Antenatal Breastfeeding Basics'],
        date: '18th July, Thursday, 07:00 PM',
      },
      {
        topic: 'Prenatal Yoga',
        topics: ['Prenatal Yoga in 3rd Trimester'],
        date: '19th July, Friday, 07:00 PM',
      },
    ],
    coupons: [
      { code: 'GET40', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
    ],
  },
];

export const MotherhoodProgramstepsData: StepsProps = {
  header: {
    highlight: 'How it Works?',
  },
  items: [
    {
      title: 'Enroll for the relevant Course',
      description: '',
    },
    {
      title: 'Join WhatsApp group after Payment',
      description: '',
    },
    {
      title: 'All Sessions will happen from 7 PM to 8PM on the assigned date',
      description: '',
    },
    {
      title: 'Zoom link will be shared 15 minutes before the session in the group',
      description: '',
    },
    {
      title: 'Make Sure to join live with your partner',
      description: '',
    },
    {
      title: 'In case you miss the session, you can join the session next month',
      description: '',
    },
  ],
  callToAction: {
    text: 'Join The program',
    href: '/motherhood-webinar',
  },
};

export const testimonialDataLactationGroup: TestimonialHeaderProps = {
  header: {
    highlight: 'Success Stories',
    subtitle: ' We are proud to have helped thousands of parents',
    // title: 'Testimonial',
  },
};
export const breastFeedingSupportLactation: WeaningHeroProps = {
  weaningHeroData: {
    titlePart1: <>Break the Formula Trap with Babynama Lactation Program</>,
    titlePart2: <>Comprehensive Breastfeeding and Pediatric Care</>,

    subtitle: (
      <div>
        {' '}
        <p>
          Introduction of formula can lead to reduction in Breast Milk supply, thereby increasing the formula demand
          even further. This is known as the Formula or Top-Up Trap. Babynama's counsellors have successfully helped
          thousands of mothers break this trap and establish exclusive breastmilk for their babies. Refer to some
          success stories below.
        </p>
        <p>Join Babynama Lactation Program today and stop yourself from falling further into the Formula Trap.</p>
      </div>
    ),
    paymentButton: '',
    callToAction: {
      text: '',
      href: '',
    },
    image: {
      src: breastfeedingSupport,
      alt: 'breastfeedingsupport',
    },
  },
};

// Emergency Pediatric Consultation - New

export const emergencyPediatricFeatures = {
  singleConsultation: [
    {
      id: 1,
      name: 'Immediate Consultation',
      check: true,
    },
    {
      id: 2,
      name: '24/7 Availability',
      check: true,
    },
    {
      id: 3,
      name: 'Extended 3 day Follow-up',
      check: true,
    },
    {
      id: 4,
      name: 'Guaranteed Satisfaction',
      check: true,
    },
    {
      id: 5,
      name: '1 Month Support',
      check: false,
    },
  ],
  supportConsultation: [
    {
      id: 1,
      name: 'Immediate Consultation',
      check: true,
    },
    {
      id: 2,
      name: '24/7 Availability',
      check: true,
    },
    {
      id: 3,
      name: 'Extended 3 day Follow-up',
      check: true,
    },
    {
      id: 4,
      name: 'Guaranteed Satisfaction',
      check: true,
    },
    {
      id: 5,
      name: '1 Month Support',
      check: true,
    },
  ],
};

export const InfoEmergencyPediatricConsultation: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: 'Immediate Consultation',
    content:
      "As soon as you pay our team will contact you to take baby's details and you will be connected with a Pediatrician within 15 minutes.",
  },
  {
    id: 2,
    title: '24/7 Availability',
    content: 'Our Pediatricians are available 24/7, even at late night, even on national holidays.',
  },
  {
    id: 3,
    title: 'Extended 3 day Follow-up',
    content: `Post consultation you can connect with the consultant Pediatrician for upto 3 days on WhatsApp/App for any follow up query.`,
  },
  {
    id: 4,
    title: 'Guaranteed Satisfaction',
    content: `In case the Pediatrician asks you to visit a doctor physically, we will refund the consultation amount.`,
  },
  {
    id: 5,
    title: '1 Month Support',
    content: `Get access to 1 month Chat support from our Pediatricians by joining the WhatsApp group after payment confirmation. More info will be shared by the onboarding team after the consultation.`,
  },
];

// Doctor Ritesh Yadav

export const drRiteshWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Plan Highlights',
    subtitle: '',
    position: 'center',
  },
  items: [
    {
      title: 'WhatsApp Replies from Doctors',
      image: {
        src: whatsappGroupImg,
        alt: 'whatsappGroupImg',
      },
      description:
        'Get 15 minute replies from MD Pediatricians on WhatsApp from 8 AM - 11 PM, to avoid any baby related panic.',
      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
    },
    {
      title: '24X7 Free Consultations',
      image: {
        src: pediatricIcon,
        alt: '24X7 pediatric Support',
      },
      description:
        'Free Online consultations anytime, within 15 minutes. Pre-scheduled Free Offline consultations with Dr. Ritesh.',
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: `Lactation and Nutrition Support`,
      image: {
        src: LactationSupportIcon,
        alt: 'LactationSupportIcon',
      },
      description: `Free counselling from experienced lactation and nutritionist to get your baby on the right nutrition path.`,
    },

    {
      title: `Baby Growth Tracking`,
      description: `Dr. Ritesh will personally assess if your baby has achieved all age-appropriate physical, emotional and sensory milestones every month.`,
      image: {
        src: growthIcon,
        alt: 'growthIcon',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const doctorRiteshTeam: DoctorsData = {
  header: {
    highlight: 'My Team of Doctors',
    subtitle: 'The following trusted Pediatricians will cater to all your needs round the clock.',
    // title: 'Team',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics',
      desc: '8 years experience Ex resident safdarjung hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drRajat,
      name: 'Dr. Rajat Goswami',
      title: 'MD Paediatrics',
      desc: '10 years experience Consultant paediatrician and newborn specialist Blossoms kids clinics, Rohini, New Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Rajat Goswami&type=phone_number',
    },
    {
      avatar: drAnupriya,
      name: 'Dr. Anupriya Bajaj',
      title: 'MBBS, MD Paediatrics',
      desc: '4 years of experience, Assam Medical College and Hospital, Dibrugarh PGPN, Boston University',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anupriya Bajaj&type=phone_number',
    },
    {
      avatar: drdhanya,
      name: 'Dr. Dhanya Soodhana',
      title: 'MBBS, MD Fellowship in Pediatric and Adolescent Endocrinology',
      desc: '7 years of experience KMC, Manipal',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Dhanya Soodhana&type=phone_number',
    },
    {
      avatar: drNikita,
      name: 'Dr. Nitika Tulsi',
      title: 'MBBS, MD Paediatrics',
      desc: '6 years of experience, Dr RPGMC Kangra',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Nitika Tulsi&type=phone_number',
    },

    {
      avatar: drPriyanka,
      name: 'Dr. Priyanka Tiwari',
      title: 'DNB Paediatrics',
      desc: '8 years of experience, VMMC, Delhi',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Priyanka Tiwari&type=phone_number',
    },
    {
      avatar: drChandani,
      name: 'Dr. Chandni J.',
      title: 'OB - GYN',
      desc: '7 years of experience NTRUHS',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Chandni J.&type=phone_number',
    },
  ],
};

export const drRiteshAboutData: IdentifyPreviewAccessProps = {
  title: 'About Dr. Ritesh Yadav',
  subtitle1: `Dr. Ritesh Yadav is an accomplished pediatrician and neonatologist with an MD in Pediatrics, serving as a consultant at Sparsh Advance Women & Children Hospital in Narnaul, Haryana. He completed the PGPN from Boston, USA, and contributes to IPRAN and the International Program in Preterm Nutrition (IPPN). With over 15 years of experience, including a tenure at Kalawati Saran Children's Hospital in Delhi and as an Assistant Professor at Pacific Medical College in Udaipur, Rajasthan, Dr. Yadav is renowned for his expertise and dedication to pediatric care.`,
  subtitle2: '',
  subtitle3: '',
  image: {
    src: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/Dr-ritesh/dr-ritesh-2.jpeg',
    alt: 'AboutDrRiteshYadav',
  },
};

export const riteshHeroData: HeroProps = {
  title: <>Dr. Ritesh's Comprehensive 24X7 Care for your Baby</>,
  subtitle: <>Get instant replies on WhatsApp from MD Pediatricians for all your queries. </>,
  callToAction: {
    text: 'Try Chat for Free',
    href: 'http://babynama.in/joinritesh1',
  },
  callToAction2: {
    text: '',
    href: '',
  },
  image: {
    src: 'https://gh-public-contents.s3.ap-south-1.amazonaws.com/babynama-web/doctors/Dr-ritesh/dr-ritesh-3.jpeg',
    alt: 'DrRiteshYadav',
  },
};

export const drRiteshPlans: Plan[] = [
  {
    id: 3,
    name: "Dr. Ritesh's Holistic Care Plan",
    summary: { icon: null, text: 'Dedicated pediatrician for your baby, personal care plan, Best possible baby care' },
    prices: {
      monthly: 3998,
      sixMonth: 9999,
    },
    refundPolicy: 10,
    features: [
      {
        icon: null,
        text: 'Unlimited Pediatric care in 15 minutes, on chat and calls.',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free pre-booked online consultations with Dr. Ritesh per month',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Lactation &  nutrition support for the baby and mother',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Monthly Growth & milestone tracking by Dr. Ritesh',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Personalized care plan for your baby and you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free Gynecologist and Dermatologist consultation online',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Solids Food Start Workshop Live with experts with lifetime recording',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      // {
      //   icon: null,
      //   text: 'Free Live postpartum yoga with Certified trainer',
      //   text: 'Free Live postpartum with Certified trainer',
      //   TickIcon: <AiFillCheckCircle color="green" />,
      // },
      {
        icon: null,
        text: 'Breastfeeding focused Weight loss Program for you',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
      {
        icon: null,
        text: 'Free consultations with our Physhologists if needed',
        TickIcon: <AiFillCheckCircle color="green" />,
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 3998, sixMonth: 8999 } },
      { code: 'GET20', prices: { monthly: 3998, sixMonth: 7999 } },
      { code: 'GET30', prices: { monthly: 3998, sixMonth: 6999 } },
      { code: 'WORRYFREE', prices: { monthly: 3998, sixMonth: 6999 } },
    ],
  },
];

export const doctorsRiteshHeaderData: HeaderProps = {
  links: [
    {
      image: {
        src: HomeIcon,
        alt: 'HomeIcon',
      },
      label: 'Home',
      href: '/dr-ritesh-yadav',
    },
    {
      image: {
        src: planHighlightsIcon,
        alt: 'planHighlightsIcon',
      },
      label: 'Plan Highlights',
      href: '/dr-ritesh-yadav#why',
    },

    {
      image: {
        src: doctorsTeamIcon,
        alt: 'doctorsTeamIcon',
      },
      label: 'Doctor',
      href: '/dr-ritesh-yadav#doctors',
    },
    {
      image: {
        src: femaleDoctorIcon,
        alt: 'femaleDoctorIcon',
      },
      label: 'About',
      href: '/dr-ritesh-yadav#doctors-about',
    },
    {
      image: {
        src: testimonialIcon,
        alt: 'testimonialIcon',
      },
      label: 'Testimonials',
      href: '/dr-ritesh-yadav#testimonials',
    },
  ],
  actions: [
    {
      label: 'Care Plans',
      href: '/dr-ritesh-yadav#pricing',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'left',
};

export const DoctorRiteshFooterData: doctorFooterProps = {
  logoSrc: BabynamaDoctorLogo,
  logoAlt: 'Doctor Logo',
  logoWidth: 100,
  logoHeight: 100,
  chatText: `Don't wait for a doctor's appointment. Chat with Dr Ritesh on WhatsApp and get expert
  medical advice in minutes.`,
  address: '204, South City 1 Arcade Gurgaon ',
  location: '- 122001',
  callNumber: '+91-7948221221',
  chatUrl: 'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hi,%20I%20need%20help%20with%20Babynama',
  quickLinks: [
    { label: 'Care Plans', href: '/dr-ritesh-yadav#pricing' },
    { label: 'Our Doctors', href: '/dr-ritesh-yadav#doctors' },
    { label: 'Testimonials', href: '/dr-ritesh-yadav#testimonials' },
    { label: 'About Us', href: '/dr-ritesh-yadav#doctors-about' },
  ],
};

//Sleep Training Program (/sleep-training-program) - Starts

export const sleepTrainingHeaderData: HeaderProps = {
  // links: [
  //   {
  //     image: {
  //       src: pricingIcon,
  //       alt: 'pricingIcon',
  //     },
  //     label: 'Care Plans',
  //     href: '/care-plans',
  //   },
  //   {
  //     image: {
  //       src: programIcon,
  //       alt: 'programIcon',
  //     },
  //     label: 'Programs',
  //     icon: MdKeyboardArrowRight,
  //     links: [
  //       {
  //         image: {
  //           src: babyIcon,
  //           alt: 'babyIcon',
  //         },
  //         label: 'Baby Solids Introduction',
  //         href: '/solids-food-start-workshop',
  //       },
  //       {
  //         image: {
  //           src: lactationConsultationIcon,
  //           alt: 'lactation-consultation',
  //         },
  //         label: 'Lactation Consultation',
  //         href: '/lactation-consultation',
  //       },

  //       // {
  //       //   image: {
  //       //     src: yogaIcon,
  //       //     alt: 'yogaIcon',
  //       //   },
  //       //   label: 'Yoga',
  //       //   href: '/yoga',
  //       // },
  //       {
  //         image: {
  //           src: lactationIcon,
  //           alt: 'lactationIcon',
  //         },
  //         label: 'Lactation Workshop',
  //         href: '/lactation-webinar',
  //       },
  //       {
  //         image: {
  //           src: doctorIcon,
  //           alt: 'doctorIcon',
  //         },
  //         label: 'Doctor Live Session',
  //         href: '/doctor-live-session',
  //       },
  //       {
  //         image: {
  //           src: sleepingBaby,
  //           alt: 'sleeping workshop',
  //         },
  //         label: 'Sleep Training Workshop',
  //         href: '/sleep-training-workshop',
  //       },
  //     ],
  //   },
  //   {
  //     image: {
  //       src: giftIcon,
  //       alt: 'giftIcon',
  //     },
  //     label: 'Gift a subscription',
  //     icon: MdKeyboardArrowRight,
  //     links: [
  //       {
  //         image: {
  //           src: partnerIcon,
  //           alt: 'partnerIcon',
  //         },
  //         label: 'Gift your partner',
  //         href: '/gifting-father',
  //       },
  //       {
  //         image: {
  //           src: giftIcon,
  //           alt: 'giftIcon',
  //         },
  //         label: 'Gift your friend',
  //         href: '/gifting',
  //       },
  //       {
  //         image: {
  //           src: referIcon,
  //           alt: 'referIcon',
  //         },
  //         label: 'Referrals',
  //         href: '/referrals',
  //       },
  //     ],
  //   },
  //   {
  //     image: {
  //       src: blogIcon,
  //       alt: 'blogIcon',
  //     },
  //     label: 'Blogs',
  //     href: '/blog',
  //   },
  //   {
  //     image: {
  //       src: testimonialIcon,
  //       alt: 'testimonialIcon',
  //     },
  //     label: 'Testimonials',
  //     href: '/testimonials',
  //   },
  // ],
  // actions: [
  //   {
  //     label: 'Emergency Consultation',
  //     href: '/emergency-consultation',
  //     type: 'primary',
  //   },
  // ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'center',
};

export const sleepTrainingProgramFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Join The Program`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const sleepTrainingProgramHeroData: HeroProps = {
  title: <>Personalized Sleep Training for Babies</>,
  subtitle: 'Improve your baby’s Sleep with the help of our Sleep Training Program',
  callToAction: {
    text: 'Join The Program',
    href: 'program-plan-pricing-card',
  },
  image: {
    src: heroSleepTraining,
    alt: 'sleep-training-program',
  },
};

export const sleepTrainingProgramStepsData: StepsProps = {
  header: {
    highlight: 'Personalized 1 Month Training Program',
  },
  items: [
    {
      description:
        '1-1 counselling with Discussion of current sleep patterns and concerns, and detailed recommendations regarding routine, environment, what’s normal, what to expect.',
    },
    {
      description: 'Information pack PDF will be shared with you.',
    },
    {
      description: 'Daily follow-up support for 1 month by WhatsApp and, when required, by call.',
    },
    {
      description:
        'Daily hand-holding at a micro-level to implement recommendations, address queries and make adjustments.',
    },
    {
      description: 'Final report and what to expect next will follow.',
    },
  ],
  callToAction: {
    text: 'Join The program',
    href: '/sleep-training-program',
  },
};

export const STPDoctors: WorkshopDoctor[] = [
  {
    name: 'Dr. Sumitra Meena',
    qualification: 'MBBS, MD Paediatrics',
    description: `- MBBS (Lady Hardinge College, Delhi)
                  - MD Pediatrics (Kalawati Hospital, Delhi)
                  - 9+ Years Experience
                  - Certified Pediatric Sleep Expert (IPSP)
                  - Ex Resident, Safdarjung Hospital Delhi
                  - Certified Lactation Consultant,
                  - Certified Pediatric Sleep Expert`,
    imageSrc: drSumitraM,
  },
];

export const STPWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Side Effects of Irregular Sleep for Your Baby',
    position: 'center',
  },
  items: [
    {
      title: 'It negatively affects brain and physical growth',
      image: {
        src: brainIcon,
        alt: 'brainIcon',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Lack of sleep leads to irritability and poor health',
      image: {
        src: insomniaIcon,
        alt: 'IrritabilityImg',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: 'Irregular sleep can result in behavioral problems',
      image: {
        src: unableSleepIcon,
        alt: 'unableSleepIcon',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
    {
      title: "Poor sleep negatively impacts parents' mental health",
      image: {
        src: parentsIcon,
        alt: 'parentsIcon',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },

    {
      title: 'Irregular sleep in infancy can lead to sleep problems in adulthood',
      image: {
        src: mentalhealth,
        alt: 'mentalhealth',
      },
      primaryColor: 'red-500',
      secondaryColor: 'red-300',
      callToAction: {
        text: 'Preview Access',
        href: '/preview-access',
      },
    },
  ],
};

export const STPWhyBreastFeddingData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Issues You Can Resolve with this Program',
    position: 'center',
  },
  items: [
    {
      title: 'Frequent night wakings',
      image: {
        src: sleepyIcon,
        alt: 'sleepyIcon',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: 'Irregular sleep',
      image: {
        src: unableSleepIcon,
        alt: 'unableSleepIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Not taking long day naps',
      image: {
        src: sleep,
        alt: 'sleep',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Feeding association with sleep',
      image: {
        src: toddler,
        alt: 'toddler',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },

    {
      title: 'Sleep prop like pacifier, rocking, feeding',
      image: {
        src: sleepingPropIcon,
        alt: 'sleepingPropIcon',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: 'Late bedtime',
      image: {
        src: bedIcon,
        alt: 'bedIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Not sleeping independently',
      image: {
        src: awakeIcon,
        alt: 'awakeIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Not sleeping without swing',
      image: {
        src: insomniaIcon,
        alt: 'insomniaIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const programPlanCard: ProgramPlanCardProps = {
  heading: '1 Month Training Program',
  subHeading: 'ONE-TO-ONE',
  description:
    'Dr. Sumitra is a MD Pediatrician (Lady hardinge Medical College Delhi) and a Certified Baby Sleep Consultant (Institue of Pediatric Sleep and Parenting, USA).In her 10+ years of experience she has helped thousands of babies and parents sleep better.',
  buttonText: 'Buy Now@ ₹4999',
  imgUrl: {
    src: doctorSumitraHero,
    alt: 'doctor-sumitra',
  },
  features: [
    {
      icon: null,
      text: '1-1 counselling with Discussion of current sleep patterns and concerns, and detailed recommendations regarding routine, environment, what’s normal, what to expect.',
      TickIcon: <AiFillCheckCircle color="green" />,
    },
    {
      icon: null,
      text: 'Information pack PDF will be shared with you.',
      TickIcon: <AiFillCheckCircle color="green" />,
    },
    {
      icon: null,
      text: 'Daily follow-up support for 1 month by WhatsApp and, when required, by call.',
      TickIcon: <AiFillCheckCircle color="green" />,
    },
    {
      icon: null,
      text: 'Daily hand-holding at a micro-level to implement recommendations, address queries and make adjustments.',
      TickIcon: <AiFillCheckCircle color="green" />,
    },
    {
      icon: null,
      text: 'Final report and what to expect next will follow.',
      TickIcon: <AiFillCheckCircle color="green" />,
    },
  ],
};

export const STPFeatures = {
  btp: [
    {
      id: 1,
      name: (
        <>
          Custom Sleep Plans by Dr. Sumitra <br></br>(IPSP Sleep Consultant, MD Pediatrician)
        </>
      ),
      check: true,
      image: {
        src: plansIcon,
        alt: 'plansIcon',
      },
    },
    {
      id: 2,
      name: 'Daily Progress Updates Via WhatsApp',
      check: true,
      image: {
        src: whatsappBlackIcon,
        alt: 'whatsappBlackIcon',
      },
    },
    {
      id: 3,
      name: 'Unlimited Consultations as Needed',
      check: true,
      image: {
        src: expertIcon,
        alt: 'expertIcon',
      },
    },
  ],
};

export const STPPlan: UpdatedPlan[] = [
  {
    id: 27,
    name: 'Sleep Training One Month Program',
    planIds: {
      monthly: 27,
      threeMonthly: 34,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Get SLeep Training Plan Now!🤱',
    },
    prices: {
      monthly: 9999,
      threeMonthly: 20000,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'ONE-TO-ONE One Month Training',
        icon: null,
      },
      // {
      //   TickIcon: <FaCheckCircle color="green" />,
      //   text: 'Comprehensive Breastfeeding Aid',
      //   icon: <BsFillInfoCircleFill color="royalblue" />,
      // },
      // {
      //   TickIcon: <FaCheckCircle color="green" />,
      //   text: 'Monthly Milestone Tracking',
      //   icon: <BsFillInfoCircleFill color="royalblue" />,
      // },
    ],
    coupons: [],
  },
];

export const ThankYouSleepTrainingProgram: ThankYouData = {
  groupLink: 'https://babynama.in/basicgroup',
  title1: 'Payment Successful',
  title2: `Thank you for Registering for Sleep Training Program with Dr. Sumitra. Our onboarding team will reach out to you within an hour (8 AM - 10 PM) to explain the further steps.`,
  buttonText: 'Join Pediatric Group',
  paragraph:
    'In the meantime you can join our WhatsApp group with Pediatricians to get any basic Baby related queries resolved with us. We have activated a 7 day access to this group for your registered number.',
  // countdown:3,
};

// Initial data setup with placeholders and empty defaults
export const initialLactationFormApiData: LactationHistoryFormApiData = {
  user_mobile: '',
  details: {
    mother_name: '',
    mother_phone: '',
    city: '',
    baby_name: '',
    baby_age: '',
    baby_dob: null,
    birth_weight: '',
    baby_current_weight: '',
    baby_gender: '',
    lactation_expert_name: '',
    issue: '',
    delivery_type: 'Normal Delivery',
    labor_details: '',
    is_preterm: '',
    first_feed_in_1hr: '',
    first_feed_in_48hr: '',
    bf_count_day: '',
    bf_count_night: '',
    feed_type: [],
    supplementing_breast_milk: [],
    need_to_use: '',
    need_to_use_other: '',
    breast_pump_usage: '',
    breast_pump_type: '',
    avg_breast_pumping_duration: '',
    avg_breast_pumping_output: '',
    urine_count: '',
    poop_count: '',
    sound_while_feeding: [],
    mother_concern: [],
    infant_concern: [],
    attended_webinar: '',
    prior_lactation_consultation: '',
  },
};

export const initialChooseLactationExpertFormApiData: ChooseLactationExpertFormApiData = {
  user_mobile: '',
  doctor_id: 0,
  slot_id: 0,
  token: '',
  appointment_type: '',
};

export const initialPediatricDetailsFormApiData: PediatricDetailsFormApiData = {
  details: {
    baby_name: '',
    baby_dob: '',
    baby_gender: '',
    baby_full_term: '',
    baby_hospitalization: '',
    birth_weight: '',
    baby_current_weight: '',
    current_weight_date: '',
    problem_faced_by_baby: '',
    weeks_born_earlier: 0,
  },
  user_mobile: '',
  appointment_id: 0,
  type: '',
  token: '',
  patient_id: null,
};

export const solidsCourseWhyData: WeaningWorkShopFeaturesProps = {
  header: {
    title: 'Why Should You Take The Workshop',
    subtitle: 'Our team of trusted Pediatricians will resolve your queries end-to-end.',
    position: 'center',
  },
  items: [
    {
      title: 'Instant access to about 4 hours of recorded content for 6 months',
      image: {
        src: recording,
        alt: 'recording',
      },

      primaryColor: 'yellow-500',
      secondaryColor: 'yellow-300',
      callToAction: {
        text: 'View Brochure ',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: '14 day access to WhatsApp group with with experts to discuss any doubts',
      image: {
        src: whatsappGroupImg,
        alt: 'WhatsappGroupImg',
      },

      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: `Weekly 30-minute live group discussion session with experts`,
      image: {
        src: guidanceImg,
        alt: 'guidanceImg',
      },

      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
    },
    {
      title: `20% discount on any additional diet consultations for the baby`,

      image: {
        src: PercentDiscountIcon,
        alt: 'percentIcon',
      },
      callToAction: {
        text: 'View Brochure',
        href: '/solids-food-start-workshop',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const stepsDataSolidsCourse: StepsProps = {
  header: {
    highlight: 'How It Works',
    // subtitle:
    //   "We curate some of the best pediatricians from all over India. Many of our doctors are parents themselves, so they can understand parents' concerns better.",
    // title: 'Steps',
  },
  items: [
    {
      title: 'Step 1',
      description: 'Enroll for the program',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description: 'Support team will get in touch on WhatsApp and share access to the recordings immediately',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description: 'Link to join the WhatsApp group will be shared with you as well',
      icon: IconArrowDown,
    },
    {
      title: 'Step 4',
      description: 'Weekly meet link for the Q&A will be shared on the group',
      icon: IconArrowDown,
    },
  ],
};

export const MotherHoodHeroData: Record<string, HeroProps> = {
  first: {
    title: 'Missed your Period? Good Newzz!',
    subtitle:
      'Get expert guidance over a 5 day course to understand all the care you need to take in this most crucial phase of your pregnancy',
    callToAction: { text: 'Explore Course Details', href: '#' },
    buttonTitle: '1st Trimester',

    image: {
      src: Motherhood1,
      alt: 'Guidance during first trimester',
    },
    plan: {
      id: 30,
      name: '1st trimester ',
      price: 1000,
    },
  },
  second: {
    title: 'Clothes getting too tight? Its Pregnancy time!',
    subtitle:
      'The 2nd Trimester brings alot of observable and unobsevable changes. Learn about all necessary tests and care for your baby',
    callToAction: { text: 'Explore Course Details', href: '#' },
    buttonTitle: '2nd Trimester',

    image: {
      src: Motherhood2,
      alt: 'Group support for second trimester',
    },
    plan: {
      id: 31,
      name: '2nd trimester',
      price: 1000,
    },
  },
  third: {
    title: 'Are you fully Prepared for the Hospital?',
    subtitle:
      'Its time to welcome the new member to the family. Let our experts coach you into all things baby and be motherhood ready',
    callToAction: {
      text: 'Explore Course Details',
      href: '#',
    },
    buttonTitle: '3rd Trimester',

    image: {
      src: Motherhood3,
      alt: 'Lactation Program',
    },
    plan: {
      id: 32,
      name: '3rd trimester',
      price: 1500,
    },
  },
};

export const ThankYouMotherhoodFirstTrimester: ThankYouData = {
  groupLink: 'http://babynama.in/1sttrimestergroup',
  title1: 'Payment Successful',
  title2:
    ' Thank you for Registering for this Course. Join the following group to get all further updates about the Course. ',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const ThankYouMotherhoodSecondTrimester: ThankYouData = {
  groupLink: 'http://babynama.in/2ndtrimestergroup',
  title1: 'Payment Successful',
  title2:
    ' Thank you for Registering for this Course. Join the following group to get all further updates about the Course. ',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};
export const ThankYouMotherhoodThirdTrimester: ThankYouData = {
  groupLink: 'http://babynama.in/3rdtrimestergroup',
  title1: 'Payment Successful',
  title2:
    ' Thank you for Registering for this Course. Join the following group to get all further updates about the Course. ',
  buttonText: 'Join WhatsApp Group',
  paragraph: '',
  // countdown:3,
};

export const babyCarePlanHeroData: HeroProps = {
  title: 'Unlimited Pediatric Support at Your Fingertips',
  subtitle: 'Instant WhatsApp access to Pediatricians for ALL your baby-related concerns',
  callToAction: {
    text: '',
    href: '/care-plans',
  },
  image: {
    src: HeroHolisticCare,
    alt: 'HeroHolisticCare',
  },
};

export const babyCarePlanNew: Plan[] = [
  {
    id: 2,
    name: 'Prime Care',
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Reliable Pediatric Care within 15 Minutes.',
    },
    prices: {
      monthly: 1999,
      sixMonth: 4999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Instant answers on WhatsApp by Pediatricians 24/7',
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: 'Unlimited free pediatric consultations 24/7',
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 1999, sixMonth: 4449 } },
      { code: 'GET20', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GET30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'REP30', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'WORRYFREE', prices: { monthly: 1999, sixMonth: 3499 } },
      { code: 'FREEDOM', prices: { monthly: 1999, sixMonth: 2999 } },
      { code: 'HAPPY', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'DIWALI', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'NURTURE', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'GULAL', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'RENEW', prices: { monthly: 1999, sixMonth: 3999 } },
      { code: 'MOTHER', prices: { monthly: 1999, sixMonth: 3999 } },
    ],
  },
];

// updated plan

export const updatedplans: UpdatedPlan[] = [
  {
    id: 1,
    name: 'Essential Care',
    planIds: {
      monthly: 33,
      threeMonthly: 34,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: '24/7 Instant Pediatrician Support for your Baby',
    },
    prices: {
      monthly: 2499,
      threeMonthly: 6249,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Unlimited Chat </b>with Pediatricians on WhatsApp Group (8am-10pm){' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 Free Video </b> Consultations with Pediatricians
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Monthly </b> Milestone Check-Up by a Pediatrician
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 2249, threeMonthly: 5624 } },
      { code: 'GET20', prices: { monthly: 1999, threeMonthly: 4999 } },
    ],
  },
  {
    id: 2,
    name: 'Holistic Care',
    planIds: {
      monthly: 35,
      threeMonthly: 36,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: 'Dedicated Pediatrician and a Personalised Care Plan for you and your Baby',
    },
    prices: {
      monthly: 4999,
      threeMonthly: 12499,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <span className="font-semibold text-primary-600">
            Dedicated Pediatricians on a<b className="font-semibold "> Private WhatsApp Group </b>
          </span>
        ),

        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 Free Video </b> Consultations with Pediatricians
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },

      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Personlized
            <b className="font-semibold"> Breastfeeding</b> Support
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            Personlized
            <b className="font-semibold"> Nutrition </b>Support.
          </>
        ),
        icon: null,
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Unlimited Chat </b>with Pediatricians on WhatsApp Group (8am-10pm){' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> Monthly </b> Milestone Check-Up by a Pediatrician
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
    ],

    coupons: [
      { code: 'GET10', prices: { monthly: 4499, threeMonthly: 11224 } },
      { code: 'GET20', prices: { monthly: 3999, threeMonthly: 9999 } },
      { code: 'GET30', prices: { monthly: 3999, threeMonthly: 8999 } },
      { code: 'GET40', prices: { monthly: 3999, threeMonthly: 7999 } },
      { code: 'RENEW', prices: { monthly: 4999, threeMonthly: 9999 } },
    ],
  },
];

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

export const motherhoodExpertData: LactationExpertData = {
  header: {
    highlight: 'Meet Our Lactation Experts',
    subtitle: '',
  },
  teams: [
    {
      avatar: drSumitraM,
      name: 'Dr. Sumitra Meena',
      title: 'MBBS, MD Pediatrics (Kalawati Hospital)',
      desc: '8 years experience, Ex resident Safdarjung Hospital',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drSwatiThoda,
      name: 'Ms. Swati Thoda',
      title: 'Certified Lactation Counsellor',
      desc: 'Cert. Lactation Counsellor, CAPPA Maternal & Child Health Nutritionist 25 yrs experience, 6000+ mothers.',
      rating: 95,
      exp: 4,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Sumitra Meena&type=phone_number',
    },
    {
      avatar: drPoojaLac,
      name: 'Dr. Pooja Marathe',
      title: 'Pediatric Nutritionist & Lactation consultant',
      desc: '11+ years of experience',
      rating: 95,
      exp: 11,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Pooja&type=phone_number',
    },
    {
      avatar: drAnuradha,
      name: 'Dr. Anuradha Tikhe',
      title: 'Advanced lactation councellor, Masters in public health (TISS) pregnancy yoga therapist',
      desc: '5+ years of experience, 500+ mothers',
      rating: 95,
      exp: 5,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anuradha&type=phone_number',
    },
    {
      avatar: drSneha,
      name: 'Dr. Sneha Mishra',
      title:
        'MBBS, Lady Hardinge, MC Delhi, DNB Obstetrics & Gynaecology, FNB (Reproduction Medicine), MRCOG (London, UK)',
      desc: '5+ years of experience',
      rating: 95,
      exp: 5,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anuradha&type=phone_number',
    },
    {
      avatar: msNishtha,
      name: 'Nishtha Jain',
      title: 'Masters In Clinical and Counselling Pyschology, TISS (Mumbai)',
      desc: 'Specialization - Anxiety & Relationships',
      rating: 95,
      exp: 5,
      whatsappLink:
        'https://api.whatsapp.com/send/?phone=%2B919540677121&text=Hello, Book Appointment for Dr. Anuradha&type=phone_number',
    },
  ],
};

export const WTPHeroData: HeroProps = {
  title: '1-1 Personalized Baby Nutrition Program',
  subtitle: <> Because the right start matters for your baby's overall life</>,
  callToAction: {
    text: 'Join The Program',
    href: '/baby-nutrition-training-program',
  },
  image: {
    src: wtpHeroImg,
    alt: 'wtpHeroImg',
  },
};

export const WTPFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Join The Program`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const WTPWhyData: PreviewAccessFeaturesProps = {
  header: {
    title: 'Why Early Nutrition Planning Is Important for Your Baby',
    position: 'center',
  },
  items: [
    {
      title: 'Establishes healthy eating patterns and supports vital organ development',
      image: {
        src: nutritionDietIcon,
        alt: 'nutritionDietIcon',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: 'Prevents stunting and undernutrition, ensuring full developmental potential',
      image: {
        src: nutritionIcon,
        alt: 'nutritionIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Strengthens the immune system, reducing susceptibility to infections',
      image: {
        src: immuneIcon,
        alt: 'immuneIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Introduces the right foods at the right time, preventing deficiencies',
      image: {
        src: multivitaminIcon,
        alt: 'multivitaminIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Supports overall health and sets the foundation for lifelong well-being',
      image: {
        src: healthyFoodIcon,
        alt: 'overallHealthIcon',
      },
      primaryColor: 'green-500',
      secondaryColor: 'green-300',
    },
  ],
};

export const WTPHelpData: PreviewAccessFeaturesProps = {
  header: {
    title: 'What Help Do You Get With This Program?',
    position: 'center',
  },
  items: [
    {
      title: 'Spot and address potential nutritional needs or allergies early.',
      image: {
        src: allergyIcon,
        alt: 'allergyIcon',
      },
      primaryColor: 'orange-500',
      secondaryColor: 'orange-300',
    },
    {
      title: 'Learn to avoid common feeding mistakes for a balanced diet.',
      image: {
        src: healthyFoodIcon,
        alt: 'healthyFoodIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: "Adjust your baby's diet with regular consultations as they grow.",
      image: {
        src: IncreaseIcon,
        alt: 'IncreaseIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
    {
      title: 'Get personalized guidance for optimal baby nutrition.',
      image: {
        src: videoCallIcon,
        alt: 'videoCallIcon',
      },
      primaryColor: 'blue-500',
      secondaryColor: 'blue-300',
    },
  ],
};

export const WTPstepsData: StepsProps = {
  header: {
    highlight: 'How it Works?',
  },
  items: [
    {
      description: "After enrolling our team gets in touch to understand your baby's current needs and your goals.",
    },
    {
      description: 'The first consultation is scheduled ASAP and a monthly diet plan will be created for your baby.',
    },
    {
      description: 'WhatsApp group link with experts will be shared for any follow up queries you might have.',
    },
    {
      description: 'If you ever need help executing the plan, you can schedule another nutition consultation.',
    },
    // {
    //   description: 'You will get access to 20+ videos created by our experts covering the basic of baby nutrition.',
    // },
  ],
  callToAction: {
    text: 'Join The program',
    href: '/baby-nutrition-training-program',
  },
};

export const WTPFeatures = {
  btp: [
    {
      id: 1,
      name: 'Personal Baby Nutritionist',
      check: true,
      image: {
        src: planIcon,
        alt: 'planIcon',
      },
    },
    {
      id: 2,
      name: 'Weekly 1-on-1 Diet Review',
      check: true,
      image: {
        src: videoIcon,
        alt: 'videoIcon',
      },
    },
    {
      id: 3,
      name: 'Monthly Pediatric Checkup',
      check: true,
      image: {
        src: monthlyIcon,
        alt: 'monthlyIcon',
      },
    },
  ],
};

export const InfoContentWTP: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: 'Personlized Nutrition Planning',
    content:
      'Our Nutritionist will guide you with an age-appropriate nutrition plan for your baby, as per WHO standards. Moreover for any additional guidance, you can book free nutrition consultation as per need.',
  },
  {
    id: 2,
    title: 'Get access to 20+ videos',
    content:
      'Get access to 20+ videos created by our experts, and any additional videos we create, covering the basics of baby nutrition. Access till your plan is active.',
  },
  {
    id: 3,
    title: 'WhatsApp group with Experts',
    content:
      'Resolve your queries directly on a WhatsApp group with experts and learn from other like-minded parents enrolled in this program.',
  },
];

export const WTPPlan: UpdatedPlan[] = [
  {
    id: 1,
    name: 'WTP Plan',
    planIds: {
      monthly: 38,
      threeMonthly: 39,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive Care for Your Child's Health & Development.",
    },
    prices: {
      monthly: 2499,
      threeMonthly: 6249,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Instant </b>pediatric replies on chat{' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 free </b> pediatric video consultations
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 2249, threeMonthly: 5624 } },
      { code: 'GET20', prices: { monthly: 1999, threeMonthly: 4999 } },
    ],
  },
];

export const ThankYouWTP: ThankYouData = {
  groupLink: 'https://babynama.in/',
  title1: 'Payment Successful',
  title2: (
    <>
      {' '}
      <span className="font-bold text-green-300">Congratulations!</span> With this subscription, you have unlocked
      access to an exclusive group with our nutritionist. To join, please use the following link.
    </>
  ),
  buttonText: 'Join Exclusive WhatsApp Group',
  // countdown:3,
};

export const essentialCareFeatures = {
  btp: [
    {
      id: 1,
      name: (
        <>
          <b className="font-semibold">24/7</b> Pediatrician Support
        </>
      ),
      check: true,
      image: {
        src: hourIcon,
        alt: 'supportIcon',
      },
    },
    {
      id: 2,
      name: (
        <>
          Curated <b className="font-semibold">Pediatricians</b>
        </>
      ),
      check: true,
      image: {
        src: expertIcon,
        alt: 'curatedIcon',
      },
    },
    {
      id: 3,
      name: (
        <>
          Unlimited <b className="font-semibold">Chat/Video Consultations</b>
        </>
      ),
      check: true,
      image: {
        src: videoCallIcon,
        alt: 'chatVideoIcon',
      },
    },
    {
      id: 4,
      name: (
        <>
          <b className="font-semibold">Monthly</b> Milestone Check-Up by a Pediatrician
        </>
      ),
      check: true,
      image: {
        src: checkupIcon,
        alt: 'wellnessCheckupIcon',
      },
    },
  ],
};

export const plansLandingFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Get 1 Month Access`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const infoContentPlansLanding: infoContentWeaningWorkshop[] = [
  {
    id: 1,
    title: '24/7 Pediatrician Support',
    content: (
      <div>
        <p>
          From (8AM- 10PM) Fair Usage Policy (FUP) stipulates that the plan would{' '}
          <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
          kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers all
          children of yours as per their individual needs.
        </p>
        <br />
        <p>
          Furthermore, the{' '}
          <span className="font-bold">free consultations need to be booked through support during the day</span>, and
          for free night consultations (where applicable), we request you to use the feature only in case of
          emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
          you would not misuse the feature.
        </p>{' '}
        <br />
      </div>
    ),
  },
  {
    id: 2,
    title: '24/7 Pediatrician Support',
    content: (
      <div>
        <p>
          Fair Usage Policy (FUP) stipulates that the plan would <span className="font-bold"> cover only 1 baby</span>.
          If you want the plan to cover all your babies, then kindly reach out to support using the WhatsApp link so
          that we can create a discounted plan that covers all children of yours as per their individual needs.
        </p>
        <br />
        <p>
          Furthermore, the{' '}
          <span className="font-bold">free consultations need to be booked through support during the day</span>, and
          for free night consultations (where applicable), we request you to use the feature only in case of
          emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
          you would not misuse the feature.
        </p>{' '}
        <br />
      </div>
    ),
  },
  {
    id: 3,
    title: '24/7 Pediatrician Support',
    content: (
      <div>
        <p>
          Fair Usage Policy (FUP) stipulates that the plan would <span className="font-bold"> cover only 1 baby</span>.
          If you want the plan to cover all your babies, then kindly reach out to support using the WhatsApp link so
          that we can create a discounted plan that covers all children of yours as per their individual needs.
        </p>
        <br />
        <p>
          Furthermore, the{' '}
          <span className="font-bold">free consultations need to be booked through support during the day</span>, and
          for free night consultations (where applicable), we request you to use the feature only in case of
          emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
          you would not misuse the feature.
        </p>{' '}
        <br />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Diet and Nutrition Planning for Mother',
    content: (
      <div>
        <p>
          Fair Usage Policy (FUP) stipulates that the plan would <span className="font-bold"> cover only 1 baby</span>.
          If you want the plan to cover all your babies, then kindly reach out to support using the WhatsApp link so
          that we can create a discounted plan that covers all children of yours as per their individual needs.
        </p>
        <br />
        <p>
          Furthermore, the{' '}
          <span className="font-bold">free consultations need to be booked through support during the day</span>, and
          for free night consultations (where applicable), we request you to use the feature only in case of
          emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope that
          you would not misuse the feature.
        </p>{' '}
        <br />
      </div>
    ),
  },
];

export const plansLandingUdatedplans: UpdatedPlan[] = [
  {
    id: 1,
    name: 'Essential Care',
    planIds: {
      monthly: 33,
      threeMonthly: 34,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: '24/7 Instant Pediatrician Support for your Baby',
    },
    prices: {
      monthly: 2499,
      threeMonthly: 6249,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Unlimited Chat </b>with Pediatricians on WhatsApp Group (8am-10pm){' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 Free Video </b> Consultations with Pediatricians
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 2249, threeMonthly: 5624 } },
      { code: 'GET20', prices: { monthly: 1999, threeMonthly: 4999 } },
    ],
  },
];

// Solids Course

export const SolidsCourseHeroData: HeroProps = {
  title: <>How to Introduce Solids to your Baby?</>,
  subtitle: 'Unlock Lifetime Access to the Master Course by Dr. Sumitra',
  callToAction: {
    text: 'Start Learning Today!',
    href: '/breastfeeding-training-program',
  },
  image: {
    src: heroSolidsCourse,
    alt: 'solids Program',
  },
};

export const solidsCourseFeatures = {
  btp: [
    {
      id: 1,
      name: 'Learn from content by pediatrician and nutritionist',
      check: true,
      image: {
        src: expertIcon,
        alt: 'expertIcon',
      },
    },
    {
      id: 2,
      name: 'Become confident in starting solids',
      check: true,
      image: {
        src: healthyFoodIcon,
        alt: 'healthyFoodIcon',
      },
    },
    {
      id: 3,
      name: '2 Live Q&A session with expert',
      check: true,
      image: {
        src: videoCallIcon,
        alt: 'videoCallIcon',
      },
    },
  ],
};

export const infoContentSolidsCourse: infoContentWeaningWorkshop[] = [
  {
    id: 3,
    title: '24/7 Pediatrician Support',
    content: (
      <div>
        <p>
          Get personalized advice and have all your questions answered. These sessions occur on the first and second
          weekends after joining the course.
        </p>
      </div>
    ),
  },
];

export const solidsCoursePlan: UpdatedPlan[] = [
  {
    id: 1,
    name: 'Solids Course Plan',
    planIds: {
      monthly: 40,
      threeMonthly: 40,
    },
    summary: {
      icon: <FaCheckCircle color="green" />,
      text: "Comprehensive Care for Your Child's Health & Development.",
    },
    prices: {
      monthly: 1999,
      threeMonthly: 1999,
    },
    refundPolicy: 10,
    features: [
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold">Instant </b>pediatric replies on chat{' '}
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
          </div>
        ),
      },
      {
        TickIcon: <FaCheckCircle color="green" />,
        text: (
          <>
            <b className="font-semibold"> 24/7 free </b> pediatric video consultations
          </>
        ),
        icon: <BsFillInfoCircleFill color="royalblue" />,
        terms: (
          <div>
            <p>
              Fair Usage Policy (FUP) stipulates that the plan would{' '}
              <span className="font-bold"> cover only 1 baby</span>. If you want the plan to cover all your babies, then
              kindly reach out to support using the WhatsApp link so that we can create a discounted plan that covers
              all children of yours as per their individual needs.
            </p>
            <br />
            <p>
              Furthermore, the{' '}
              <span className="font-bold">free consultations need to be booked through support during the day</span>,
              and for free night consultations (where applicable), we request you to use the feature only in case of
              emergencies. We leave it to your judgement as to what would count as an emergency, but we honestly hope
              that you would not misuse the feature.
            </p>{' '}
            <br />
          </div>
        ),
      },
    ],
    coupons: [
      { code: 'GET10', prices: { monthly: 2249, threeMonthly: 5624 } },
      { code: 'GET20', prices: { monthly: 1999, threeMonthly: 4999 } },
    ],
  },
];

export const SolidsCourseFixedButtonData: FooterFixedButtonData = {
  text: '',
  originalPrice: '',
  discountedPrice: '',
  buttonText: `Start Learning Today!`,
  onBookNowClicked: () => {
    // Handle the button click logic
  },
  buttonTextWidth: 'w-[100%]',
};

export const solidsCourseDoctors: WorkshopDoctor[] = [
  {
    name: 'Dr. Sumitra Meena',
    qualification: 'MBBS, MD Paediatrics',
    description: `- 10+ Years Experience
                  - Ex Resident, Safdarjung Hospital Delhi`,
    imageSrc: require('../assets/images/doctors/drSumitraM.webp').default,
  },
];

export const solidCourseData = {
  title: 'What you Get From the Course',
  description: '',
  items: [
    'Learn from content by pediatrician and nutritionist',
    'Become confident in starting solids',
    'Live Q&A session with expert',
  ],
};

export const solidCourseStepsData: StepsProps = {
  header: {
    highlight: 'How it Works?',
  },
  items: [
    {
      description: 'After enrolling our team gets in touch with you to share the access to course.',
    },
    {
      description:
        'You will get instant access to 20+ videos created by Dr. Sumitra covering the basic of baby nutrition.',
    },
    {
      description: 'WhatsApp group link for Q&A.',
    },
  ],
  callToAction: {
    text: 'Join The program',
    href: '/baby-nutrition-training-program',
  },
};
