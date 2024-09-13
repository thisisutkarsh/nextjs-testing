import React from 'react';
import HeaderWidget from '../common/HeaderWidget';
import { PreviewAccessFeaturesProps } from '../../shared/types';

const ListSection: React.FC<PreviewAccessFeaturesProps> = ({ header, items }) => {
  return (
    <section className="mx-auto my-7 mb-8 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}

        <div className="">
          {items &&
            items.map((service, index) => {
              return (
                <div key={index.toString()}>
                  <div className="flex">
                    <span className="mb-2 pr-2 text-lg font-medium">{index + 1}.</span>
                    <h3 className="font-base mb-2 text-lg">{service.title}</h3>
                    <h3 className="mb-2 text-lg font-medium">{service.title1}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
