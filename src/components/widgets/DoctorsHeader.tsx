import { useEffect, useRef, useState } from 'react';
import ToggleDarkMode from '../../components/atoms/ToggleDarkMode';
import Link from 'next/link';
import DrAditiLogo from '../../components/atoms/AditiLogo';
import ToggleMenu from '../atoms/ToggleMenu';
import { HeaderProps } from '../../shared/types';
// Define the prop types for the Header component
import { useRouter } from 'next/navigation';

const Header: React.FC<HeaderProps & { logo: React.ReactNode; logoHref: string }> = ({
  links,
  actions,
  isSticky,
  showToggleTheme,
  position,
  logo,
  logoHref,
}) => {
  const navbarRef = useRef<HTMLElement>(null);
  const updatedIsDropdownOpen = links ? links.map(() => false) : [];
  // const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);
  const router = useRouter(); 

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...prevValues];
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

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isToggleMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target as Element)) {
        setIsToggleMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isToggleMenuOpen]);



  return (
    <header
      ref={navbarRef}
      className={`top-0 z-40 mx-auto w-full flex-none bg-gray-100 dark:bg-slate-900 md:bg-gray-100/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 ${
        isSticky ? 'sticky' : 'relative'
      }`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl px-3 py-3 md:flex md:justify-between md:px-4">
        <div className="flex justify-between">
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>

          <Link
            className="flex items-center"
            href={logoHref}
            onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen))}
            prefetch={false}
          >
            {/* Replace DrAditiLogo and BabynamaDoctorLogo with the actual logo components */}
            {logo}
          </Link>
        </div>
        <nav
        className={`${
          isToggleMenuOpen ? 'block' : 'hidden'
        } h-auto md:w-full ${
          position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
        } w-auto overflow-y-auto text-gray-900 dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
        aria-label="Main navigation"
      >
        <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
          {links &&
            links.map(({ label, href, icon: Icon, links }, index) => (
              <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                {links && links.length ? (
                  <>
                    <button
                      className="flex items-center px-4 py-3 font-semibold transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                      onClick={() => {
                       
                          handleDropdownOnClick(index);
                     
                      }}
                    >
                      {label}
                    </button>
                    <ul
                      className={`${
                        isDropdownOpen[index] ? 'block' : 'hidden'
                      } rounded pl-4 font-semibold drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90`}
                    >
                      {links.map(({ label: label2, href: href2 }, index2) => (
                        <li key={`item-link-${index2}`}>
                          <button
                            className="whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                            onClick={() => {
                              if (isToggleMenuOpen) {
                                handleToggleMenuOnClick();
                              } else {
                                handleDropdownOnClick(index);
                              }
                              router.push(href2 as string);
                            }}
                            
                    
                          >
                            {label2}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <button
                    className="flex items-center px-4 py-3 font-semibold transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                    onClick={() => {
                      if (isToggleMenuOpen) {
                        handleToggleMenuOnClick();
                      } else {
                        handleDropdownOnClick(index);
                      }
                      router.push(href as string);
                    }}
                    
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
        </ul>
      </nav>
        <div
          className={`${
            isToggleMenuOpen ? 'block' : 'hidden'
          } left-0 w-full justify-end bg-transparent p-3 dark:bg-slate-900/90 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 dark:md:bg-slate-900`}
        >
          <div className="flex w-full items-center justify-between md:w-auto">
            {showToggleTheme && <ToggleDarkMode />}

            {actions && actions.length > 0 && (
              <div className="ml-4 flex w-max flex-wrap justify-end">
                {actions.map(({ label, href, type }, index) => (
                  <Link
                    key={`item-action-${index}`}
                    className={`btn w-fit px-5 py-2 text-sm font-semibold shadow-none sm:mb-0 md:px-6
                      ${type === 'ghost' ? 'btn-ghost' : type === 'primary' ? 'btn-primary' : ''}`}
                    href={href as string}
                    prefetch={false}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
