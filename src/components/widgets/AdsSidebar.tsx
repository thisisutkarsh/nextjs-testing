'use client';
import { useEffect, useState } from 'react';
import AdsNavbar from './AdsNavbar';
import { useRouter } from 'next/navigation';
import doctor from '../../assets/images/doctors-image.webp';
import './Sidebar.css';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderProps } from '../../shared/types';

const AdsSidebar: React.FC<HeaderProps & { logo: React.ReactNode; logoHref: string }> = ({
  links = [],
  actions = [],
  isSticky = false,
  showToggleTheme = false,
  position = 'left',
  logo,
  logoHref,
}) => {
  const [showSidebar, setShowSidebar] = useState('-left-72');
  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const router = useRouter();

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };
  useEffect(() => {
    if (showSidebar === 'left-0') {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showSidebar]);

  const closeSidebar = () => {
    setShowSidebar('-left-72');
  };

  return (
    <>
      <div className={` ${isSticky ? 'sticky' : 'relative'} inset-0 z-50`}>
        <AdsNavbar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          links={links}
          actions={actions}
          isSticky={isSticky}
          showToggleTheme={showToggleTheme}
          position={position}
          logo={logo}
          logoHref={logoHref}
        />

        {showSidebar === 'left-0' && (
          <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={closeSidebar}></div>
        )}

        <div
          className={`fixed top-10 h-screen bg-gray-100 dark:bg-slate-900 md:left-0 md:hidden  ${showSidebar} z-10 w-72 flex-row flex-nowrap overflow-y-auto py-4 shadow-xl transition-all duration-300`}
        >
          <div className="min-h-full flex-col flex-nowrap items-stretch overflow-y-auto px-0 pb-[20px]">
            <div>
              <Image src={doctor} width={300} height={100} alt="doctors" />
            </div>
            <div className="flex px-2 pt-5">
              {actions && actions.length > 0 && (
                <div>
                  {actions.map(({ label, href, type }, index) => (
                    <button
                      key={`item-action-${index}`}
                      onClick={() => {
                        setShowSidebar('-left-72');
                        router.push(href as string);
                      }}
                    >
                      {' '}
                      <h1
                        className={`btn  w-full border-primary-500 bg-primary-500  px-11 py-3 text-sm font-semibold text-white  shadow-none transition-all  duration-200  ease-in-out hover:border-primary-400 hover:bg-transparent hover:text-primary-400 focus:ring-primary-400
                          ${type === 'ghost' ? 'btn-ghost' : type === 'primary' ? 'btn-primary' : ''}`}
                      >
                        {label}
                      </h1>
                    </button>
                  ))}
                </div>
              )}

              {/* <div className="ml-2 rounded-lg border-4 border-gray-200 dark:border-gray-800">
                {showToggleTheme && <ToggleDarkMode />}
              </div> */}
            </div>

            <div className="flex flex-col">
              <ul className="flex w-full flex-col pt-6">
                {links &&
                  links.map(({ label, href, icon: Icon, links, image: image }, index) => (
                    <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                      {links && links.length ? (
                        <>
                          <div
                            onClick={() => handleDropdownOnClick(index)}
                            className="flex justify-between  rounded-lg px-3 py-5 text-base text-gray-900  transition duration-150 ease-in-out hover:text-gray-800 dark:text-slate-200 dark:hover:text-white"
                          >
                            <button className="flex">
                              {image && (
                                <Image src={image.src} alt={image.alt} width={30} height={30} className="mr-2" />
                              )}
                              {label}
                            </button>
                            {/* {Icon && (
                              <Icon
                                size={20}
                                className={`pl-auto flex text-gray-900 transition-transform ${
                                  isDropdownOpen[index] ? 'rotate-90' : ''
                                }`}
                              />
                            )} */}
                          </div>
                          <ul className={`${isDropdownOpen[index] ? 'block' : 'hidden'} rounded pl-8 drop-shadow-xl`}>
                            {links.map(({ label: label2, href: href2, image: image2 }, index2) => (
                              <li key={`item-link-${index2}`}>
                                <button
                                  className="whitespace-no-wrap flex py-2 text-sm first:rounded-t last:rounded-b dark:hover:bg-gray-700"
                                  onClick={() => {
                                    setShowSidebar('-left-72');
                                    router.push(href2 as string);
                                  }}
                                >
                                  {image2 && (
                                    <Image src={image2.src} alt={image2.alt} width={30} height={30} className="mr-1" />
                                  )}
                                  {label2}
                                </button>
                              </li>
                            ))}
                          </ul>

                          <hr />
                        </>
                      ) : (
                        <>
                          <div
                            className="flex items-center px-3 py-5 text-base text-gray-900 transition duration-150 ease-in-out hover:text-gray-800 dark:text-slate-200 dark:hover:text-white"
                            onClick={() => {
                              setShowSidebar('-left-72');
                              router.push(href as string);
                            }}
                          >
                            {image && <Image src={image.src} alt={image.alt} width={30} height={30} className="mr-2" />}
                            {label}
                          </div>

                          <hr />
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsSidebar;
