'use client';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '../../components/atoms/Logo';
import { useRouter, usePathname } from 'next/navigation';
import ToggleDarkMode from '../../components/atoms/ToggleDarkMode';
import { IoMdClose } from 'react-icons/io';
import './Sidebar.css';
import { HeaderProps } from '../../shared/types';

interface AdminNavbarProps {
  showSidebar: string;
  setShowSidebar: React.Dispatch<React.SetStateAction<string>>;
}

const AdminNavbar: React.FC<AdminNavbarProps & HeaderProps & { logo: React.ReactNode; logoHref: string }> = ({
  showSidebar,
  setShowSidebar,
  links,
  actions,
  isSticky,
  showToggleTheme,
  position,
  logo,
  logoHref,
}) => {
  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const navbarRef = useRef<HTMLElement>(null);
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
    const handleClickOutsideNavbar = (event: MouseEvent) => {
      if (navbarRef.current) {
        if (!navbarRef.current.contains(event.target as Node)) {
          const updatedIsDropdownOpen = links?.map(() => false) || [];
          setIsDropdownOpen(updatedIsDropdownOpen);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutsideNavbar);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNavbar);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={` ${
        isSticky ? 'sticky' : 'relative'
      } top-0 z-40 mx-auto w-full flex-none bg-[#F0F8FF] dark:bg-slate-900  md:backdrop-blur-sm dark:md:bg-slate-900/90`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl px-3 py-1 md:flex md:justify-between md:px-4 md:py-3.5">
        <div className="flex justify-between">
          <div className=" hidden items-center">
            {showSidebar === '-left-72' ? (
              <RxHamburgerMenu onClick={() => setShowSidebar('left-0')} size={28} />
            ) : (
              <IoMdClose onClick={() => setShowSidebar('-left-72')} size={28} />
            )}
          </div>

          <Link className="flex items-center py-3" href={logoHref} prefetch={false}>
            {logo}
          </Link>
        </div>
        <nav
          className={` hidden h-auto md:block md:w-full ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } w-auto overflow-y-auto text-gray-900 dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col pt-8 text-lg md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            {links &&
              links.map(({ label, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-4 py-3 font-semibold transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                        onClick={() => handleDropdownOnClick(index)}
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
                                router.push(href2 as string);
                                const updatedIsDropdownOpen = links?.map(() => false) || [];
                                setIsDropdownOpen(updatedIsDropdownOpen);
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
          className={`hidden w-full justify-end bg-transparent p-3 dark:bg-slate-900/90 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 dark:md:bg-slate-900`}
        >
          <div className="flex w-full items-center justify-between md:w-auto">
            {showToggleTheme && <ToggleDarkMode />}

            {actions && actions.length > 0 && (
              <div className="ml-4 flex w-max flex-wrap justify-end">
                {actions.map(({ label, href, type }, index) => (
                  <button
                    key={`item-action-${index}`}
                    className={`btn w-fit px-5 py-2 text-sm font-semibold shadow-none sm:mb-0 md:px-6
                      ${type === 'ghost' ? 'btn-ghost' : type === 'primary' ? 'btn-primary' : ''}`}
                    onClick={() => {
                      router.push(href as string);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {showSidebar === 'left-0' && <hr className="dark:bg-slate-800" />}
    </nav>
  );
};

export default AdminNavbar;
