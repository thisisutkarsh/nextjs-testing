import Image from 'next/image';
import { FeatureItem } from '../../shared/types';

const CardDesign: React.FC<FeatureItem> = ({ title, image, icon, description, callToAction, subtitle }) => {
  return (
    <div className="mx-auto mb-6 rounded-xl bg-white shadow-lg dark:bg-slate-800">
      <div className=" h-auto p-2">
        {image && (
          <div className="flex justify-center rounded-xl border-2 border-purple-400 p-2">
            <Image src={image.src} width={50} height={50} quality={100} alt="icon" className="" />
          </div>
        )}
        <div className="pt-2 text-center">
          <p className="mb-2 text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
