import Image from 'next/image';
import { WorkshopCardProps } from '../../shared/types';
function WorkshopCard({ bgColor, shadowColor, text, icon, imgAlt }: WorkshopCardProps) {
  return (
    <div className="h-full w-full">
      <div
        className="h-full rounded-[0.7rem] p-4"
        style={{
          boxShadow: `-4px 3px 0px #${shadowColor}`,
          backgroundColor: `#${bgColor}`,
          border: `1px solid #${shadowColor}`,
        }}
      >
        <div className="flex flex-col items-center gap-y-4">
          <Image src={icon} alt={imgAlt} className="h-12 w-12 xl:h-14 xl:w-14" />
          <p className="text-center text-sm font-[400] text-black">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
