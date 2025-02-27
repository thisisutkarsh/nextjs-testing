import { IconCheck, IconMinus } from '@tabler/icons-react';
import { comparisonData } from '../../shared/data';
import HeaderWidget from '../common/HeaderWidget';

const Comparison = () => {
  const { header, compare } = comparisonData;

  return (
    <section id="comparison">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="relative ml-[-1em] flex overflow-x-auto md:pb-12">
          {compare.map(({ title, items, btn }, index) => (
            <div
              key={`column-content-${index}`}
              className="relative mx-auto w-full max-w-3xl select-none border-r border-solid border-gray-300 px-4 py-4 first-of-type:sticky first-of-type:left-0 first-of-type:z-10 first-of-type:w-[54%]  first-of-type:bg-white first-of-type:pl-6 last-of-type:border-none dark:border-slate-500 first-of-type:dark:bg-slate-900 md:px-5 md:first-of-type:w-full md:first-of-type:pl-5 lg:first-of-type:min-w-fit"
            >
              <h3
                className={`mb-4 border-b border-solid border-gray-300 pb-4 text-lg font-medium uppercase leading-6 text-gray-900 dark:border-slate-500 dark:text-white ${
                  index === 0 ? 'text-left' : 'text-center'
                }`}
              >
                {title}
              </h3>
              {items &&
                items.map(({ title: title2 }, index2) => (
                  <div
                    key={`column-content-${index2}`}
                    className={`pb-[30px] leading-7 text-gray-600 dark:text-slate-400 ${
                      index === 0 ? 'text-left' : 'text-center'
                    }`}
                  >
                    {(title2 as boolean) === true ? (
                      <IconCheck className="pt mt-2 w-full" />
                    ) : (title2 as boolean) === false ? (
                      <IconMinus className="mt-2 w-full" />
                    ) : index !== 0 ? (
                      <p className="mt-2">{title2}</p>
                    ) : (
                      <h4 className="mt-2 text-lg">{title2}</h4>
                    )}
                  </div>
                ))}
              {index !== 0 && (
                <div className="mt-8 flex w-full uppercase sm:w-auto">
                  {btn && (
                    <button type={btn.type} className="btn btn-primary sm:mb-0">
                      {btn.title}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
