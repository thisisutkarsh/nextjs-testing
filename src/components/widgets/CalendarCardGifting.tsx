import Image from 'next/image';
import DrNikita from '../../assets/images/gifting/dr nikita sharma.webp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CalenderCardGifting = () => {
  const pathname = usePathname();
  return (
    <section className=" mx-auto -mb-12 max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h2 className="font-heading mb-4 text-center text-3xl font-bold tracking-normal text-black  dark:text-white md:text-5xl">
        Still unsure if this is the right gift?
      </h2>
      <div className="m-3 flex transform flex-col items-center justify-center gap-10 overflow-hidden rounded-xl bg-white px-4 py-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800 md:mx-auto md:my-0 md:flex-row md:py-8">
        <div className="flex h-[300px] flex-col items-center justify-center rounded-t-xl p-5 text-white">
          <div>
            <p className="text-lg text-black dark:text-white">
              If you’re still unsure, schedule a free call with our existing{' '}
              <strong>subscriber and motherhood expert</strong> Nikita Sharma to understand how your
              {pathname === '/gifting' ? ' friends ' : ' partner'} can benefit from your gift.
            </p>
          </div>

          <div className="mt-8 flex w-full sm:w-[60%]">
            <Link
              className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
              href="https://calendly.com/nikita-sharma-3"
            >
              Book Free Call
            </Link>
          </div>
        </div>
        <Image
          src={DrNikita}
          alt="Doctor's Image"
          className="h-full w-full md:h-1/2 md:w-1/2"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};
export default CalenderCardGifting;
