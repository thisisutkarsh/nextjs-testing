import React from 'react';
import { usePathname } from 'next/navigation';
import { WeaningTeamProps } from '../../shared/types';
import WeaningDoctorCard from './WeaningDoctorCard';
import DoctorCardSingle from './DoctorCardSingle';

const WeaningTeam: React.FC<WeaningTeamProps> = ({ doctors }) => {
  const pathname = usePathname();

  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="max-w-8xl relative mx-auto sm:px-6">
        <h1 className="font-heading leading-tighter mb-4 text-center text-2xl font-bold tracking-normal md:mb-8 ">
          {pathname === '/sleep-training-program' ? 'Sleep Training By' : 'Our Experts'}
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-2">
          {doctors.length === 1 ? (
            <DoctorCardSingle
              key={0}
              imageSrc={doctors[0].imageSrc}
              name={doctors[0].name}
              qualification={doctors[0].qualification}
              description={doctors[0].description}
            />
          ) : (
            doctors.map((doctor, index) => (
              <DoctorCardSingle
                key={index}
                imageSrc={doctor.imageSrc}
                name={doctor.name}
                qualification={doctor.qualification}
                description={doctor.description}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default WeaningTeam;
