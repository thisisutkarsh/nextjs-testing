import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavigationStepper = () => {
  const currentPath = usePathname();
  const formattedPath = currentPath
    .slice(1)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return (
    <div>
      <ol className="flex w-full items-center space-x-2 rounded-lg border border-gray-100 bg-slate-50 p-3 text-center text-xs font-medium text-gray-500 shadow-sm rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base">
        <li className="flex items-center">
          <Link href={`/`} className="flex items-center gap-1">
            Home
            <svg
              className="ms-2 h-3 w-3 rtl:rotate-180 sm:ms-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href={`/care-plans`} className="flex items-center gap-1">
            Care Plans
            <svg
              className="ms-2 h-3 w-3 rtl:rotate-180 sm:ms-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </Link>
        </li>
        <li className="flex items-center text-blue-600 dark:text-blue-500">
          <Link href={`${currentPath}`} className="flex items-center gap-1">
            {formattedPath}
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default NavigationStepper;
