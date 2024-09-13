import dynamic from 'next/dynamic';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
const DivAnimationWrapper = dynamic(() => import('../../components/common/DivAnimationWrapper'), {
  ssr: false,
});
interface DoctorCardProps {
  avatar: StaticImageData | string;
  name: string;
  title: string;
  desc: string;
  rating: number;
  exp: number;
  whatsappLink: string;
  languages?: string[] | [];
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, title, desc, avatar, exp, rating, whatsappLink, languages }) => {
  const avatarSrc = typeof avatar === 'string' ? avatar : avatar.src;
  return (
    <DivAnimationWrapper>
      <div className=" h-[300px] w-[30vw] overflow-y-auto rounded-xl bg-[#F4F9FF] pb-2 shadow-md shadow-[#AFC1EF] md:h-[300px] md:max-h-[300px] md:w-[22vw]">
        <div className="flex items-center justify-center py-2">
          <div className="w-20 h-20 p-2 overflow-hidden bg-white rounded-full md:h-28 md:w-28">
            <Image src={avatarSrc} alt="Doctor's Image" className="object-contain" width={100} height={100} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-1 pb-3 md:h-[135px] ">
          <div className="text-sm font-bold text-center md:text-lg">{name}</div>
          <p className="mt-4 text-center text-[0.8rem] text-black dark:text-white md:text-[1rem]">{title}</p>
          {languages && languages?.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-center gap-x-1">
              <p className="font-semibold">Languages:</p>
              <p className="">{languages?.join(', ').toString()}</p>
            </div>
          ) : null}
        </div>
      </div>
    </DivAnimationWrapper>
  );
};

export default DoctorCard;
