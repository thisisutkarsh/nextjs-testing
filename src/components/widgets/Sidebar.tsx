'use client';
import { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { usePathname, useRouter } from 'next/navigation';
import { headerData } from '../../shared/data';
import doctor from '../../assets/images/doctors-image.webp';
import './Sidebar.css';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState('-left-72');
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;
  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const router = useRouter();
  const pathname = usePathname();

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
        <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {showSidebar === 'left-0' && (
          <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={closeSidebar}></div>
        )}

        <div
          className={`fixed top-10 h-screen overflow-x-hidden bg-gray-100 dark:bg-slate-900 md:left-0 md:hidden  ${showSidebar} z-40 w-72 flex-row flex-nowrap overflow-y-auto py-4 shadow-xl transition-all duration-300`}
          // className={`fixed left-0 top-0 z-40 h-screen w-[80vw] overflow-x-hidden transition-transform duration-300 lg:w-0 ${
          //   toggleSidebar ? 'translate-x-0' : '-translate-x-full'
          // }`}
        >
          <div className="min-h-full flex-col flex-nowrap items-stretch overflow-y-auto px-0 pb-[20px]">
            <div>
              <Image src={doctor} width={300} height={100} alt="doctors" />
            </div>
            <div className="flex px-2 pt-5">
              {actions && actions.length > 0 && (
                <div>
                  {actions.map(({ label, href, type }, index) => (
                    <Link key={`item-action-${index}`} href={href as string} prefetch={false}>
                      {' '}
                      <h1
                        className={`btn  w-full border-primary-500 bg-primary-500  px-11 py-3 text-sm font-semibold text-white  shadow-none transition-all  duration-200  ease-in-out hover:border-primary-400 hover:bg-transparent hover:text-primary-400 focus:ring-primary-400
                          ${type === 'ghost' ? 'btn-ghost' : type === 'primary' ? 'btn-primary' : ''}`}
                        onClick={() => {
                          setShowSidebar('-left-72');
                        }}
                      >
                        {label}
                      </h1>
                    </Link>
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
                  links.map(({ label, href, icon: Icon, links, image: image }, index) => {
                    let hrefValue;

                    if (href === '/care-plans' && pathname === `/`) {
                      hrefValue = `#pricing`;
                    } else {
                      hrefValue = href;
                    }
                    return (
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
                              {Icon && (
                                <Icon
                                  size={20}
                                  className={`pl-auto flex text-gray-900 transition-transform ${
                                    isDropdownOpen[index] ? 'rotate-90' : ''
                                  }`}
                                />
                              )}
                            </div>
                            <ul className={`${isDropdownOpen[index] ? 'block' : 'hidden'} rounded pl-8 drop-shadow-xl`}>
                              {links.map(({ label: label2, href: href2, image: image2 }, index2) => (
                                <li key={`item-link-${index2}`}>
                                  <Link href={href2 as string} prefetch={false}>
                                    <div
                                      className="whitespace-no-wrap flex py-2 text-sm first:rounded-t last:rounded-b dark:hover:bg-gray-700"
                                      onClick={() => {
                                        setShowSidebar('-left-72');
                                      }}
                                    >
                                      {image2 && (
                                        <Image
                                          src={image2.src}
                                          alt={image2.alt}
                                          width={30}
                                          height={30}
                                          className="mr-1"
                                        />
                                      )}
                                      {label2}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            <hr />
                          </>
                        ) : (
                          <>
                            <Link href={hrefValue as string} prefetch={false}>
                              <div
                                className="flex items-center px-3 py-5 text-base text-gray-900 transition duration-150 ease-in-out hover:text-gray-800 dark:text-slate-200 dark:hover:text-white"
                                onClick={() => {
                                  setShowSidebar('-left-72');
                                }}
                              >
                                {image && (
                                  <Image src={image.src} alt={image.alt} width={30} height={30} className="mr-2" />
                                )}
                                {label}
                              </div>
                            </Link>

                            <hr />
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
