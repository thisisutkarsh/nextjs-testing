import Image from 'next/image';
import { IdentifyPreviewAccessProps } from '../../shared/types';

// import motherImg from '../../assets/images/mother.jpg'
const IdentifyPreviewAccess: React.FC<IdentifyPreviewAccessProps> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  subtitle7,
  image,
}) => {
  // const { title, subtitle1, subtitle2, subtitle3, image } = aboutData;
  return (
    <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto -mb-12 max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 pt-16 md:grid-cols-2 md:pt-20">
          {image && (
            <div className="md:col-span-1/2 relative col-span-1 m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md"
                placeholder="blur"
                width={400}
                height={400}
              />
            </div>
          )}
          <div className="mx-auto max-w-4xl pb-10 text-center md:text-left">
            {title && (
              <h1 className=" font-heading leading-tighter mb-6 text-center text-2xl font-bold tracking-normal md:text-center ">
                {title}
              </h1>
            )}
            <ul className={`${subtitle1 ? '' : 'list-disc'}  text-left`}>
              {subtitle1 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle1}</li>
              )}

              {subtitle2 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle2}</li>
              )}

              {subtitle3 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle3}</li>
              )}

              {subtitle4 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle4}</li>
              )}

              {subtitle5 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle5}</li>
              )}

              {subtitle6 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle6}</li>
              )}

              {subtitle7 && (
                <li className="mx-auto max-w-3xl text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle7}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentifyPreviewAccess;
