import React from 'react';
import HeaderWidget from '../../components/common/HeaderWidget';
import { PreviewAccessFeaturesProps } from '../../shared/types';
import SingleCard from './SingleCard';

const FatureCardsColumn: React.FC<PreviewAccessFeaturesProps> = ({ header, items }) => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 md:pb-10 md:pt-16 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className=" -left-4 top-0 h-72 w-72 rounded-full bg-purple-100 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className=" animation-delay-4000 -bottom-32 left-20 h-72 w-72 rounded-full bg-purple-100 opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>
      <div className="max-w-8xl relative z-10 mx-auto">
        {header && <HeaderWidget header={header} titleClassname="text-2xl md:text-4xl" />}
        <div className="-mx-4 flex flex-wrap justify-center">
          {items &&
            items.map((service, index) => (
              <div key={index.toString()} className="mb-6 w-[45%] px-2 ">
                <SingleCard image={service.image} title={service.title} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FatureCardsColumn;
