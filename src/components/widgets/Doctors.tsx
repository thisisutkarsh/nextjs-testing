'use client';
import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import HeaderWidget from '../common/HeaderWidget';
import '../../assets/styles/carousel.css';
import { DoctorsData } from '../../shared/types';
import { AiFillCaretDown } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import { fetchExperts } from '../../utils/fetchExperts';
import { toast } from 'react-toastify';

const HeaderAnimationWrapper = dynamic(() => import('../../components/common/HeaderAnimationWrapper'), {
  ssr: false,
});

const Doctors: React.FC<DoctorsData> = ({ header, teams }) => {
  const [visibleDoctors, setVisibleDoctors] = useState(6);
  const [reorderedTeams, setReorderedTeams] = useState(teams); // Start with static data order
  const [preferredLanguages, setPreferredLanguages] = useState<{ [id: number]: string[] }>({});

  const showMoreDoctors = () => {
    setVisibleDoctors((prev) => prev + 6);
  };

  const getExperts = async () => {
    try {
      const apiData = await fetchExperts();
      reorderStaticData(apiData);
      extractPreferredLanguages(apiData);
    } catch (error) {
      toast.error('Error fetching experts.');
    }
  };

  // Reorder static teams based on the API response ids
  const reorderStaticData = (apiDoctors: any[]) => {
    const apiDoctorIds = apiDoctors.map((doc) => doc.id);

    // Sort the static teams array based on the order of ids from the API
    const reordered = teams.slice().sort((a, b) => {
      const aIndex = apiDoctorIds.indexOf(a.id);
      const bIndex = apiDoctorIds.indexOf(b.id);

      // If id is found in the API response, prioritize it, otherwise keep the order unchanged
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      } else if (aIndex !== -1) {
        return -1; // Prioritize the one found in the API
      } else if (bIndex !== -1) {
        return 1; // Prioritize the one found in the API
      }
      return 0; // Keep the order unchanged for items not found in the API
    });

    setReorderedTeams(reordered);
  };

  // Extract preferred languages from API and set state
  const extractPreferredLanguages = (apiDoctors: any[]) => {
    const languageData: { [id: number]: string[] } = {};
    apiDoctors.forEach((doc) => {
      const langs = Object.keys(doc.preferred_languages).filter((lang) => doc.preferred_languages[lang] === true);
      languageData[doc.id] = langs;
    });
    setPreferredLanguages(languageData);
  };

  useEffect(() => {
    getExperts();
  }, []);

  return (
    <section id="doctors">
      <div className="max-w-8xl mx-auto bg-primary-50 px-1 pb-2 pt-6 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pb-4 lg:pt-16">
        {header && (
          <HeaderAnimationWrapper>
            <HeaderWidget header={header} />
          </HeaderAnimationWrapper>
        )}
        <div className="flex flex-row flex-wrap justify-center">
          {reorderedTeams.slice(0, visibleDoctors).map((doctor, index) => {
            const docLanguages = doctor.id ? preferredLanguages[doctor.id] || [] : [];
            return (
              <div key={index.toString()} className="pb-2 pr-2">
                <DoctorCard
                  title={doctor.title}
                  name={doctor.name}
                  avatar={doctor.avatar}
                  desc={doctor.desc}
                  rating={doctor.rating}
                  whatsappLink={doctor.whatsappLink}
                  exp={doctor.exp}
                  languages={docLanguages}
                />
              </div>
            );
          })}
        </div>

        {visibleDoctors < reorderedTeams.length && (
          <div className="flex justify-center pt-8 md:pb-4">
            <button className="font-bold text-[#1D3860]" onClick={showMoreDoctors}>
              <span
                className="flex items-center px-2 text-base sm:text-lg md:text-xl"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              >
                See More... <AiFillCaretDown />{' '}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
