import Image from 'next/image';

const CalenderCardWeaning = () => {
  return (
    <section className=" mx-auto -mb-12 max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h2 className="font-heading mb-4 text-center text-3xl font-bold tracking-normal text-black  dark:text-white md:text-5xl">
        Unsure about how this would help you?
      </h2>
      <div className="m-3 flex transform items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800 md:mx-auto md:my-0 md:w-6/12">
        <div className="flex h-[300px] flex-col items-center justify-center rounded-t-xl p-5 text-white">
          <div>
            <p className="text-lg text-black dark:text-white">
              Book a free call with our <strong>subscriber and motherhood expert</strong> Nikita on how the weaning
              workshop could help resolve all your queries.
            </p>
          </div>

          <div className="mt-8 flex w-full sm:w-[60%]">
            <a
              className="w-full rounded-[2rem] bg-[#293BDB] py-4 text-center text-[1.2rem] tracking-wide text-white"
              href="https://calendly.com/nikita-sharma-3"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalenderCardWeaning;
