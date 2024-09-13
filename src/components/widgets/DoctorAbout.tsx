import Image from 'next/image';
import { IdentifyPreviewAccessProps } from '../../shared/types';

const About: React.FC<IdentifyPreviewAccessProps> = ({ title, subtitle1, subtitle2, image }) => {
  return (
    <div className="flex flex-col  pt-16 md:py-8 md:pt-20" id="doctors-about">
      <div className="mx-auto max-w-4xl text-center md:text-left">
        {title && <h1 className="font-heading leading-tighter text-3xl font-bold tracking-normal ">{title}</h1>}
      </div>

      <section className="mx-auto grid max-w-6xl  grid-cols-1 px-4 pt-6 dark:bg-slate-800 md:grid-cols-2">
        <div className="relative mx-auto px-4 md:pt-4 ">
          {image && (
            <div className="m-auto">
              <Image src={image.src} alt={image.alt} className="mx-auto rounded-md" width={400} height={400} />
            </div>
          )}
        </div>

        <div className="mx-auto flex max-w-3xl items-center px-4 py-6 md:px-0 md:py-0 ">
          {subtitle1 && <p className="font-base mb-8 text-lg dark:text-slate-400 md:text-xl">{subtitle1}</p>}
          {subtitle2 && <p className="font-base mb-8 text-lg  dark:text-slate-400  md:text-xl">{subtitle2}</p>}
        </div>
      </section>
    </div>
  );
};

export default About;
