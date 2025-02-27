import React from 'react';
import { featuresData } from '../../shared/data';
import HeaderWidget from '../common/HeaderWidget';
import { serviceData } from '../../shared/data';

const Services: React.FC<{}> = () => {
  const { header } = featuresData;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6">
        {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}

        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
            >
              <div className="flex h-16 items-center justify-center rounded-t-xl bg-primary-600 text-white">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-center text-2xl font-semibold text-gray-800 dark:text-gray-50">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-100">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
