import { searchObject } from './types.d';
import { content2Data } from './data';
import { UtmSubTitle } from '../../components/widgets/UtmSubTitle';
import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}
interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string | ReactElement;
  position?: 'center' | 'right' | 'left';
}

interface HeaderWidgetProps {
  header: Header;
  titleClassname?: string;
}

interface CallToAction {
  text: string;
  href: string;
  icon?: Function;
}

interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

type StatData = {
  icon: JSX.Element;
  count: string;
  label: string;
};

// Interface for service section
interface ServiceProps {
  id: number;
  icon: any;
  title: string;
  desc: string;
  linkto?: string;
}

// Interface for pricing section
interface CardProps {
  details: string | ReactElement;
  icon?: React.ReactNode;
  summary: string | ReactElement;
  checkIcon?: React.ReactNode;
  TicKIcon?: React.ReactNode;
  present?: boolean = false;
  expanded?: boolean = false;
  terms?: string | ReactElement;
  expandedText?: string | ReactElement;
  fontSize?: string;
}

interface modalCardProps {
  details?: string | ReactElement;
  icon?: React.ReactNode;
  summary?: string | ReactElement;
  checkIcon?: React.ReactNode;
  TicKIcon?: React.ReactNode;
  present?: boolean = false;
  expanded?: boolean = false;
  expandedText?: string | ReactElement;
  refundPolicy?: number;
  isSixMonthly?: boolean;
}
export type Plan = {
  id: number;
  name: string;
  summary: {
    text: string | ReactElement;
    icon: IconType | null;
  };

  prices: {
    monthly: number;
    sixMonth: number;
  };
  refundPolicy: number;
  features: {
    TickIcon: IconType | null;
    text: string | ReactElement;
    expandedText?: string | ReactElement;
    icon: IconType | null;
    terms?: string | ReactElement;
  }[];

  coupons: Array<Coupon>;
};
export type MotherhoodPlan = {
  id: number;
  name: string;
  summary: {
    text: string | ReactElement;
    icon: IconType | null;
  };

  prices: {
    monthly: number;
    sixMonth: number;
  };
  refundPolicy: number;
  programDate: string;
  // features: {
  //   TickIcon: IconType | null;
  //   text: string | ReactElement;
  //   expandedText?: string | ReactElement;
  //   icon: IconType | null;
  //   terms?: string | ReactElement;
  // }[];

  features: any[];

  coupons: Array<Coupon>;
};
interface PrimeCarePlanProps {
  plans: Plan[];
  isSixMonthly: boolean;
  setIsSixMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Coupon = {
  code: string;
  prices: {
    monthly: number;
    sixMonth: number;
  };
};
//ComparisonPlan
interface ComparisonPlan {
  id: number;
  name: string;
  prices: {
    monthly: number;
    sixMonth: number;
  };
  features: any[];
  coupons: Array<Coupon>;
}

export interface infoContentWeaningWorkshop {
  id: number;
  title: string;
  content: string | ReactElement;
}

interface ThankYouPlanItemProps {
  plan: ThankYouPlan;
  isThreeMonthly: boolean;
}
export type ThankYouPlan = {
  id: number;
  name: string;
  summary: {
    text: string | ReactElement;
    icon: IconType | null;
  };

  prices: {
    monthly: number;
    threeMonth: number;
  };
  refundPolicy: number;
  features: {
    TickIcon: IconType | null;
    text: string | ReactElement;
    expandedText?: string | ReactElement;
    icon: IconType | null;
  }[];
  coupon: { code: string; prices: { monthly: number; threeMonth: number } };
};

export interface PlanItemProps {
  plan: Plan;
  isSixMonthly: boolean;
  planImage?: string;
}
export interface PricingSectionProps {
  plans: Plan[];
  planImage?: string;
}

// types.tsx

export interface PlusPricingPlan {
  id: number;
  title: string;
  price: number;
  features: any;
  coupons?: Array<PrimePlusCoupon>;
}

export type PrimePlusCoupon = {
  code: string;
  prices: number;
};

interface AdsModalPlanItemProps {
  plan: Plan;
}
interface AdsMotherhoodModalPlanItemProps {
  plan: MotherhoodPlan;
}
interface ReferralApiData {
  friend_mobile: string;
  mobile: string;
  plan_id: number;
  total_count: number;
  callback_url: string;
  payment_reason: string;
}

interface SalesApiData {
  mobile: string;
  plan_id: number;
  total_count: number;
  callback_url: string;
  payment_reason: string;
  offer_name?: string;
}
interface WeaningWorkshopApiData {
  mobile: string;
  offer_name: string;
  plan_id: number;
  total_count: number;
  callback_url: string;
  payment_reason: string;
  payment_source: string;
}
interface ApiData {
  mobile: string;
  offer_name: string;
  plan_id: number;
  total_count: number;
  callback_url: string;
  payment_reason: string;
}
interface StatsApiData {
  mobile?: string | null;
  utm_heading?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  adset_name?: string | null;
  ad_name?: string | null;
  page_pathname?: string | null;
}

// End interface for pricing section
interface Input {
  type: string;
  label?: string;
  value?: string;
  name: string;
  placeholder?: string;
}
interface BreastFeedingTestimonial {
  id: number;
  image: StaticImageData;
  name: string;
}

interface Textarea {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
}

interface Checkbox {
  label: string;
  value: string;
}

interface Radio {
  label: string;
}

interface RadioBtn {
  label?: string;
  radios: Array<Radio>;
}

interface SmallForm {
  icon?: Function;
  input: Input;
  btn: Button;
}

interface FormProps {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
}

interface Image {
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title?: string | boolean;
  description?: Array<string | JSX.Element> | string | undefined;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  callToAction?: CallToAction;
  link?: Link;
}

interface Team {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
}

interface TeamV2Props {
  name: string;
  image: Image;
}
interface Compare {
  title: string;
  items: Array<Item>;
  btn?: Button;
}

interface Testimonial {
  name: string;
  review: string;
  profileImage?: Image;
  icon?: Function;
  href?: string;
  date?: string;
  reviewImage?: Image;
  url?: string;
  mp4Url?: string;
  thumbnailUrl?: string;
  age?: string;
  position?: string;
}
interface Quotes {
  name: string;
  quotes: string;
}

interface Link {
  image?: Image;
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Function;
}

interface Price {
  title: string;
  value: number;
  period?: string;
  texts?: Array<string>;
  link?: Link;
  btn: Button;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

interface Column {
  title: string;
  items: Array<Item>;
  link?: Link;
}

interface ActionLink extends Link {
  type?: string;
}

interface MenuLink extends Link {
  links?: Array<Link>;
}

interface Links {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
}

interface Tab {
  link?: Link;
  items: Array<Item>;
}

interface Dropdown {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}
interface MotherhoodPlanProps {
  // id:30,
  // name:'Motherhood 1st Trimester',
  // price:1000,

  id: number | null;
  name: string | null;
  price: number | null;
}
interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  whatsAppSection?: boolean;
  buttonTitle?: string;
  plan?: MotherhoodPlanProps;
}
interface HeroPropsPlansLanding {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  whatsAppSection?: boolean;
  buttonTitle?: string;
}

interface FAQsProps {
  header?: Header;
  items?: Array<Item>;
  tabs?: Array<Tab>;
  link?: Link;
}

interface CollapseProps {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface CallToActionProps {
  title: string;
  subtitle: string;
  callToAction?: CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps {
  header?: Header;
  items: Array<Item>;
}

interface ContentProps {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
}

interface StepsProps {
  header?: Header;
  title?: string;
  items?: Array<Item>;
  image?: Image;
  callToAction?: CallToAction;
  videoUrl?: string;
  mp4VideoUrl?: string;
}

interface Testimonial2 {
  id: number;
  video: string;
  name: string;
  quote: string;
}

interface TestimonailProps2 {
  testimonials: Array<Testimonial2>;
}

interface TeamProps {
  header?: Header;
  teams: Array<Team>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface TestimonialProps {
  header?: Header;
  testimonials: Array<Testimonial>;
}
interface LactationQuotesProps {
  header?: Header;
  quotes: Array<Quotes>;
}

interface PricingProps {
  header?: Header;
  prices: Array<Price>;
}

interface ComparisonProps {
  header?: Header;
  compare: Array<Compare>;
}

interface SocialProofProps {
  images: Array<Image>;
}

interface ContactProps {
  header?: Header;
  content?: string;
  items: Array<Item>;
  form: FormProps;
}

interface FooterProps {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}

interface HeaderProps {
  links?: Array<MenuLink>;
  actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}

interface CareBabynamaHeaderProps {
  links?: Array<MenuLink>;

  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}

// Preview Access

interface Hero3HeaderProps {
  titlePart1: string | ReactElement;
  titlePart2?: string | ReactElement;
  subtitle?: string | ReactElement;
  paymentButton?: string;
  button2?: string;
  image?: Image;
}

interface Hero3FormApiData {
  mobile: string;
  dob: string;
  name: string;
  parent_type?: string;
  language?: string;
  pediatrician_charge?: string;
}
interface LactationWebinarFormApiData {
  mobile: string;
  DOB: string;
  language?: string;
  email?: string;
}

interface Hero3WeaningBrochureApiData {
  mobile: string;
  remark: string;
}

interface Hero3ApiData {
  mobile: string;
  plan_id: number;
  callback_url: string;
  payment_reason: string;
  payment_source: string;
}

interface Hero3Props {
  HeroData: Hero3HeaderProps;
}
interface Hero3FreeProps {
  HeroData: Hero3HeaderProps;
}

interface LactationApiData {
  mobile: string;
  plan_id: number;
  callback_url: string;
  payment_reason: string;
  payment_source: string;
}

//calendarCardProps

// interface CardProps {
//   title: string;
//   description: string;
//   linkText: string;
//   linkUrl: string;
//   imageSrc: string;
//   imageAlt: string;
// }

// Preview Access Features Section
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
interface PreviewAccessFeaturesProps {
  header?: Header;
  title?: string | ReactElement;
  description?: string | ReactElement;
  items?: Array<FeatureItem>;
  onClick?: (item: FeatureItem) => void;
}

// Preview Access About US

interface IdentifyPreviewAccessProps {
  title: string | ReactElement;
  subtitle1?: string | ReactElement;
  subtitle2?: string | ReactElement;
  subtitle3?: string | ReactElement;
  subtitle4?: string | ReactElement;
  subtitle5?: string | ReactElement;
  subtitle6?: string | ReactElement;
  subtitle7?: string | ReactElement;
  image?: Image;
}

interface SectionProps {
  id: number;
  title: string | ReactElement;
  subtitle1?: string | ReactElement;
  subtitle2?: string | ReactElement;
  subtitle3?: string | ReactElement;
  subtitle4?: string | ReactElement;
  subtitle5?: string | ReactElement;
  subtitle6?: string | ReactElement;
  subtitle7?: string | ReactElement;
  image: Image;
}
interface ChildhoodCardProps {
  section: SectionProps;
}

//CareWhyBabynama
interface CareWhyBabynamaProps {
  title: string | ReactElement;
  subtitle1?: string | ReactElement;
  features: {
    TickIcon: IconType | null;
    text: string | ReactElement;
  }[];
  image?: Image;
}

// Weaning Workshop types

interface WeaningHeaderProps {
  titlePart1?: string | ReactElement;
  titlePart2?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  paymentButton: string | JSX.Element;
  image?: Image;
}
interface WeaningApiData {
  mobile: string;
  plan_id: number;
  callback_url: string;
  payment_reason: string;
  payment_source: string;
}

interface WeaningHeroProps {
  weaningHeroData: WeaningHeaderProps;
}

interface BreastfeedingSeminarHeroDataProps {
  data: {
    heading: JSX.Element;
    subheading: JSX.Element;
    paymentButton: string;
    callToAction: {
      text: string;
      href: string;
    };
    image: {
      src: StaticImageData;
      alt: string;
    };
    points: string[];
  };
}

interface WeaningWorkShopFeaturesProps {
  header?: Header;
  title?: string;
  description?: string | ReactElement;
  items?: Array<FeatureItem>;
}
interface MotherhoodFeaturesProps {
  id: number;
  items: Array<[]>;
}

//heroYogaCard
interface HeroYogaCardProps {
  name: string;
  image?: Image;
}

interface CountDownTimerProps {
  endDate: Date;
}

interface WeaningApiData {
  mobile: string;
  plan_id: number;
  callback_url: string;
  payment_reason: string;
  payment_source: string;
}

interface WeaningEmailApiData {
  mobile: string;
  telegram_group_id: number;
  remark: string;
}

interface LactationTeam {
  avatar: StaticImageData;
  name: string;
  title: string;
  desc: string;
  rating: number;
  exp: number;
  whatsappLink: string;
}
interface LactationExpertData {
  header: Header;
  teams: LactationTeam[];
}

interface ThankYouData {
  groupLink?: string;
  title1: string;
  title2: any;
  buttonText: string;
  // countdown:number;
  paragraph?: any;
}
interface WeaningTeamProps {
  doctors: WorkshopDoctor[];
}

//workshop-doctor
interface WorkshopDoctor {
  name: string;
  qualification: string;
  description: string;
  imageSrc: StaticImageData | string;
}

//FooterPayNowButton

export interface FooterFixedButtonData {
  text: string;
  originalPrice: string;
  discountedPrice: string;
  buttonText: string;
  buttonTextWidth: string;
  onBookNowClicked: () => void;
}

export interface FixedBtnData {
  buttonText: string;
  onBookNowClicked: () => void;
  fontSize?: string;
}

export interface doctorFooterProps {
  logoSrc: string | StaticImageData;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  chatText: string;
  address: string;
  location: string;
  callNumber: string;
  chatUrl: string;
  quickLinks: { label: string; href: string }[];
}

interface ExclusiveGroup {
  groupLink: string;
  buttonText1: string;
  title1: string;
  buttonText2: string;
  whatsappButtonText: string;
  planButtonText: string;
  otpTitle: string;
  otpButtonText: string;
  InfoTitle: string;
  title2: string;
  paragraph: any;
}

interface MeetingData {
  title: string;
  doctor?: string;
  date: Date;
  time: string;
}

interface Doctor {
  id?: number;
  avatar: StaticImageData | string;
  name: string;
  title: string;
  desc: string;
  rating: number;
  exp: number;
  whatsappLink: string;
}
interface DoctorHeader {
  highlight: string;
  subtitle: string;
  // title: string; // Commented out since it's not being used
}

interface DoctorsData {
  header: Header;
  teams: Doctor[];
}

export interface PlanPurchaserProps {
  plan: Plan;
  isThreeMonthly: boolean;
  planIdToPurchase: number;
}

interface SoloCarePlanHeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  plan: UpdatedPlan;
}

interface PlansLandingPlanHeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  plan?: UpdatedPlan;
}
interface BabyCarePlanHeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  plan: UpdatedPlan;
}

interface TestimonialHeaderProps {
  header?: Header;
}

interface ProgramPlanCardProps {
  heading: string;
  subHeading?: string;
  description?: string;
  buttonText: string;
  imgUrl: Image;
  features: Array<{
    TickIcon: IconType | null;
    text: string | ReactElement;
    expandedText?: string | ReactElement;
    icon: IconType | null;
    terms?: string | ReactElement;
  }>;
  onBookNowClicked?: () => void;
}

export interface wpPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    nf_dc_page: string;
    footnotes: string;
  };
  categories: number[];
  tags: any[]; // Assuming it's an array of any type
  yoast_head: string;
  yoast_head_json: {
    title: string;
    robots: {
      index: string;
      follow: string;
      'max-snippet': string;
      'max-image-preview': string;
      'max-video-preview': string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_published_time: string;
    article_modified_time: string;
    og_image: {
      width: number;
      height: number;
      url: string;
      type: string;
    }[];
    author: string;
    twitter_card: string;
    twitter_misc: {
      [key: string]: string;
    };
    schema: {
      '@context': string;
      '@graph': {
        '@type': string;
        '@id': string;
        url?: string;
        name?: string;
        isPartOf?: {
          '@id': string;
        };
        primaryImageOfPage?: {
          '@id': string;
        };
        image?: {
          '@id': string;
        };
        thumbnailUrl?: string;
        datePublished?: string;
        dateModified?: string;
        author?: {
          '@id': string;
        };
        breadcrumb?: {
          '@id': string;
        };
        inLanguage?: string;
        potentialAction?: {
          '@type': string;
          target: string[];
        }[];
      }[];
    };
  };
  jetpack_sharing_enabled: boolean;
  jetpack_featured_media_url: string;
  _links: {
    self: {
      href: string;
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    author: {
      embeddable: boolean;
      href: string;
    }[];
    replies: {
      embeddable: boolean;
      href: string;
    }[];
  };
}

// export interface BlogMainProps {
//   wpPosts: wpPost[];
// }

export interface wpGraphQLPost {
  title: string;
  content: string;
  uri: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface BlogMainProps {
  wpPosts: wpGraphQLPost[];
}

export interface Params {
  slug: string;
}

export interface PageProps {
  params: Params;
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface PostsData {
  posts: {
    nodes: wpGraphQLPost[];
    pageInfo: PageInfo;
  };
}

export interface searchObject {
  title: string;
  uri: string;
}

export interface SearchResult {
  item: {
    searchObject;
  };
}

export interface LactationHistoryFormData {
  mother_name: string;
  mother_phone: string;
  city: string;
  baby_name: string;
  baby_age: string;
  baby_dob: string | null;
  birth_weight: string;
  baby_current_weight: string;
  baby_gender: string;
  lactation_expert_name: string;
  issue: string;
  delivery_type: string;
  labor_details: string;
  is_preterm: string;
  first_feed_in_1hr: string;
  first_feed_in_48hr: string;
  bf_count_day: string;
  bf_count_night: string;
  feed_type: string[];
  supplementing_breast_milk: string[];
  need_to_use: string;
  need_to_use_other: string;
  breast_pump_usage: string;
  breast_pump_type: string;
  avg_breast_pumping_duration: string;
  avg_breast_pumping_output: string;
  urine_count: string;
  poop_count: string;
  sound_while_feeding: string[];
  mother_concern: string[];
  infant_concern: string[];
  attended_webinar: string;
  prior_lactation_consultation: string;
}

export interface PediatricDetailsFormData {
  baby_name: string;
  baby_gender: string;
  baby_dob: string;
  baby_full_term: string;
  birth_weight: string;
  baby_current_weight: string;
  current_weight_date: string;
  baby_hospitalization: string;
  problem_faced_by_baby: string;
  weeks_born_earlier: number;
}

export interface LactationHistoryFormApiData {
  user_mobile: string;
  details: LactationHistoryFormData;
}

export interface PediatricDetailsFormApiData {
  user_mobile: string;
  appointment_id: number;
  details: PediatricDetailsFormData;
  type: string;
  token: string;
  patient_id: number | null;
}

export interface ChooseLactationExpertFormApiData {
  user_mobile: string;
  doctor_id: number;
  slot_id: number;
  token: string;
  appointment_type: string;
}

export type UpdatedPlan = {
  id: number;
  name: string;
  planIds: {
    monthly: number;
    threeMonthly: number;

  };
  summary: {
    text: string | React.ReactElement;
    icon: React.ReactElement | null;
  };
  prices: {
    monthly: number;
    threeMonthly: number;

  };
  refundPolicy: number;
  features: {
    TickIcon: React.ReactElement | null;
    text: string | React.ReactElement;
    expandedText?: string | React.ReactElement;
    icon: React.ReactElement | null;
    terms?: string | React.ReactElement;
  }[];

  coupons?: Array<{
    code: string;
    prices: {
      monthly: number;
      threeMonthly: number;
    };
  }>;
};

export type Duration = 'monthly' | 'threeMonthly'
export interface UpdatedPlanItemProps {
  plan: UpdatedPlan;
  planImage?: string;
}

export type PaymentDetail = {
  id: number;
  months: number;
  url: string;
  description: string;
};

export type PaymentMap = {
  [key: number]: {
    monthly: PaymentDetail;
    threeMonthly: PaymentDetail;
  };
};

export interface UpdatedPlanPurchaserProps {
  plan: UpdatedPlan;
}

export interface WorkshopCardProps {
  bgColor: string;
  shadowColor: string;
  icon: StaticImageData | string;
  text: string | ReactElement;
  imgAlt: string;
}

export interface LactationTestimonialCardprops {
  text: string;
  name: string;
  title: string;
  url: string;
  mp4Url: string;
  thumbnailUrl: string;
}

export interface LactationTestimonialSingleCardProps {
  thumbnailUrl: string;
  videoUrl: string;
  mp4VideoUrl: string;
  review: string;
  reviewer: string;
  position: string;
}
