'use client';
import dynamic from 'next/dynamic';
import AdsSidebar from '../../components/widgets/AdsSidebar';
import '../../components/widgets/Weaning.css';
import {
  LactationHeroData,
  lactationExpertData,
  faqs3LactationWebinarData,
  LactationWebinarTopicsData,
  LactationWebinarButtonData,
  FeatureItem,
} from './lactationData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/atoms/Logo';
import HeroLactationWebinar from './HeroLactationWebinar';
const Doctors = dynamic(() => import('../../components/widgets/Doctors'));
const BreastFeedingTestimonials = dynamic(() => import('../../components/widgets/BreastFeedingTestimonials'));
const FAQs3 = dynamic(() => import('../../components/widgets/FAQs3'));
import { useRecoilState } from 'recoil';
import { isPaymentModalOpenState } from '../../components/state/atoms/modalState';
import Features from '../../components/widgets/Features';
const FixedBottomBtn = dynamic(() => import('../../components/widgets/FixedBottomBtn'));

const LactationMain = () => {
  const [_, setIsPaymentModalOpen] = useRecoilState(isPaymentModalOpenState);

  // Handler for the onClick event for the Features component
  const handleCardClick = (item: FeatureItem) => {
    console.log('Card clicked:', item);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        position="bottom-right"
      />
      <FixedBottomBtn
        onBookNowClicked={() => setIsPaymentModalOpen(true)}
        buttonText={LactationWebinarButtonData.buttonText}
      />
      <AdsSidebar logo={<Logo />} logoHref="/" />
      <div className="book-now">
        <HeroLactationWebinar weaningHeroData={LactationHeroData.weaningHeroData} />
      </div>

      <Features
        header={LactationWebinarTopicsData.header}
        items={LactationWebinarTopicsData.items}
        onClick={(item) => handleCardClick(item)}
      />

      <div className="bg-primary-50 dark:bg-slate-900 ">
        <Doctors teams={lactationExpertData.teams} header={lactationExpertData.header} />
      </div>

      {/* <TestimonialMain testimonialContent={weaningWorkShopTestimonialData} /> */}

      <div className="bg-primary-50 dark:bg-slate-900">
        <BreastFeedingTestimonials />
      </div>
      <FAQs3 {...faqs3LactationWebinarData} />
    </>
  );
};

export default LactationMain;
