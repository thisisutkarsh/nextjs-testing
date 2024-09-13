import Image from 'next/image';
import salesInfoImage from '../../assets/images/salesPlan.webp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SalesCTA = () => {
  const pathname = usePathname();
  return (
    <section className=" mx-auto -mb-12 max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="m-3 flex transform flex-col items-center justify-center gap-10 overflow-hidden rounded-xl bg-pink-50 px-4 py-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800 md:mx-auto md:my-0 md:flex-row md:py-8">
        <Image src={salesInfoImage} alt="Sales Plane" className="" width={500} height={500} />
        <div className="flex flex-col items-center justify-center rounded-t-xl p-5 text-white">
          <h1 className="text-2xl font-bold text-black dark:text-white md:pt-10">
            Want to know the best plans for you ?
          </h1>

          <div className="mt-8 flex w-full">
            <Link
              className="btn btn-primary w-full text-base font-medium hover:cursor-pointer sm:mb-0 sm:text-lg md:text-xl"
              href={`${pathname}/#pricing`}
            >
              Yes, I Need Online Pediatrician Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SalesCTA;
