import HeaderWidget from '../common/HeaderWidget';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { Item, FAQsProps } from '../../shared/types';
import dynamic from 'next/dynamic';
const DivAnimationWrapper = dynamic(() => import('../../components/common/DivAnimationWrapper'), {
  ssr: false,
});

const FAQs3: React.FC<FAQsProps> = ({ header, items, link }) => {
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="faqsThree">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-stretch justify-center">
          <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
            <div className="block h-full sm:flex sm:items-center sm:justify-between md:mt-10 md:block">
              {header && <HeaderWidget header={header} />}
              <div className="hidden h-fit w-full justify-center uppercase sm:w-auto sm:justify-start md:flex">
                {link && (
                  <a href={link.href} className="btn btn-primary mb-8 sm:mb-0 ">
                    {link.label}
                  </a>
                )}
              </div>
            </div>
            <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4">
              <DivAnimationWrapper>
                <Collapse
                  items={items as Item[]}
                  classCollapseItem="border border-[#A9B7E5] rounded-lg py-5 px-4 shadow-md shadow-[#A9B7E5]"
                  iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                  iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                />
              </DivAnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs3;
