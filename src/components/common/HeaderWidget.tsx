import { HeaderWidgetProps } from '../../shared/types';

const HeaderWidget = ({ header, titleClassname }: HeaderWidgetProps) => {
  const { title, subtitle, highlight, position } = header;

  return (
    <div className="mb-4">
      {(title || subtitle || highlight) && (
        <div
          className={`mb-6 max-w-3xl text-center ${
            position === 'left' ? 'sm:text-left' : position === 'right' ? 'sm:text-right' : 'sm:text-center'
          } md:mx-auto md:mb-12`}
        >
          {highlight && (
            <h2
              style={{ textShadow: '-5px 5px 6px #FFF7DB' }}
              className={`font-heading mb-2 text-[1.5rem] font-bold tracking-tight text-black dark:text-white md:text-[1.7rem] lg:text-[2rem]`}
            >
              {highlight}
            </h2>
          )}
          {title && (
            <h2
              className={`font-heading mb-2 font-bold tracking-tight text-gray-900 dark:text-white ${titleClassname}`}
            >
              {title}
            </h2>
          )}
          {subtitle && <p className="mx-auto  max-w-3xl text-lg text-gray-600 dark:text-slate-400">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default HeaderWidget;
