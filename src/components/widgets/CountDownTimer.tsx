'use client';
import React, { useState } from 'react';
import Countdown, { zeroPad, CountdownRendererFn } from 'react-countdown';
import { usePathname } from 'next/navigation';
import '../../components/widgets/Weaning.css';

interface TimerProps {
  timer: {
    endDate: Date;
  };
}

const CountdownTimer: React.FC<TimerProps> = ({ timer }) => {
  let { endDate } = timer;
  const pathname = usePathname();
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    if (pathname === '/care-plans') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <>
              <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
                <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                  <h5 className="text-center text-sm font-bold  md:text-base">
                    FLAT 20% OFF - CODE: <span className="">MOTHER</span>
                  </h5>

                  <div className="mx-auto flex justify-center">
                    <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                      Ends In :
                    </div>
                    {Number(zeroPad(days)) > 0 && (
                      <div className="text-center">
                        <span className="font-bold text-secondary">{zeroPad(days)}</span>
                        <span className="px-[4px]">:</span>
                        <div className="text-[12px] ">Day</div>
                      </div>
                    )}
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Hour</div>
                    </div>
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Min</div>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                      <div className="text-[12px] ">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
    if (pathname === '/get-care-plan') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <>
              <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
                <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                  <h5 className="text-center text-sm font-bold  md:text-base">
                    FLAT 20% OFF - CODE: <span className="">MOTHER</span>
                  </h5>

                  <div className="mx-auto flex justify-center">
                    <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                      Ends In :
                    </div>
                    {Number(zeroPad(days)) > 0 && (
                      <div className="text-center">
                        <span className="font-bold text-secondary">{zeroPad(days)}</span>
                        <span className="px-[4px]">:</span>
                        <div className="text-[12px] ">Day</div>
                      </div>
                    )}
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Hour</div>
                    </div>
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Min</div>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                      <div className="text-[12px] ">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
    if (pathname === '/baby-care-plan') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <>
              <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
                <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                  <h5 className="text-center text-sm font-bold  md:text-base">
                    FLAT 20% OFF - CODE: <span className="">MOTHER</span>
                  </h5>

                  <div className="mx-auto flex justify-center">
                    <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                      Ends In :
                    </div>
                    {Number(zeroPad(days)) > 0 && (
                      <div className="text-center">
                        <span className="font-bold text-secondary">{zeroPad(days)}</span>
                        <span className="px-[4px]">:</span>
                        <div className="text-[12px] ">Day</div>
                      </div>
                    )}
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Hour</div>
                    </div>
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Min</div>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                      <div className="text-[12px] ">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
    if (pathname === '/solids-food-start-workshop') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
              <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                <div className="">
                  <h5 className="text-center text-sm font-bold text-white md:text-base">
                    FLAT 50% OFF - CODE: <span className="text-secondary">SOLIDS50</span>
                  </h5>

                  {/* <div className="mx-auto flex justify-center px-3 md:px-4">
                <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                  Ends In :
                </div>

                {Number(zeroPad(days)) > 0 && (
                  <div className="text-center">
                    <span className="font-bold text-secondary">{zeroPad(days)}</span>
                    <span className="px-[4px]">:</span>
                    <div className="text-[12px] ">Day</div>
                  </div>
                )}

                <div className="text-center">
                  <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                  <span className="px-[4px]">:</span>
                  <div className="text-[12px] ">Hour</div>
                </div>
                <div className="text-center">
                  <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                  <span className="px-[4px]">:</span>
                  <div className="text-[12px]">Min</div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                  <div className="text-[12px] ">Sec</div>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    if (pathname === '/basic-chat-care-plan') {
      return (
        <>
          <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
            <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
              <div className="mx-auto flex justify-center">
                <div className="flex items-center pr-2 text-center text-sm font-bold text-white dark:text-white md:text-[16px] md:text-base">
                  {pathname === '/basic-chat-care-plan' && 'Ends In :'}{' '}
                </div>
                {Number(zeroPad(days)) > 0 && (
                  <div className="text-center">
                    <span className="font-bold text-secondary">{zeroPad(days)}</span>
                    <span className="px-[4px]">:</span>
                    <div className="text-[12px] ">Day</div>
                  </div>
                )}
                <div className="text-center">
                  <span className="text-sm font-bold  text-secondary md:text-base"> {zeroPad(hours + days * 24)}</span>
                  <span className="px-[4px]">:</span>
                  <div className="text-[12px] ">Hour</div>
                </div>

                <div className="text-center">
                  <span className=" text-sm font-bold  text-secondary md:text-base">{zeroPad(minutes)}</span>
                  <span className="px-[4px]">:</span>
                  <div className="text-[12px]">Min</div>
                </div>

                <div className="text-center">
                  <span className=" text-sm font-bold  text-secondary md:text-base">{zeroPad(seconds)}</span>
                  <div className="text-[12px] ">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (pathname === '/care-plan-month-end-sale') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
              <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                <div className="">
                  <h5 className="text-center text-sm font-bold text-white md:text-base">
                    FLAT 50% OFF - CODE: <span className="text-secondary">CARE</span>
                  </h5>

                  <div className="mx-auto flex justify-center px-3 md:px-4">
                    <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                      Ends In :
                    </div>

                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(days)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px] ">Day</div>
                    </div>

                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px] ">Hour</div>
                    </div>
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Min</div>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                      <div className="text-[12px] ">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    if (pathname === '/prime-care-plus') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <div className="sticky top-[46px] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[70px] md:backdrop-blur-sm ">
              <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                <div className="">
                  <div className="mx-auto flex justify-center px-3 md:px-4">
                    <div className="flex items-center pr-2 text-center font-medium text-white dark:text-white ">
                      Special Plan Expires In:
                    </div>

                    {Number(zeroPad(days)) > 0 && (
                      <div className="text-center">
                        <span className="font-bold text-secondary">{zeroPad(days)}</span>
                        <span className="px-[4px]">:</span>
                        <div className="text-[12px] ">Day</div>
                      </div>
                    )}

                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px] ">Hour</div>
                    </div>
                    <div className="text-center">
                      <span className=" font-bold text-secondary">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                      <div className="text-[12px]">Min</div>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-secondary">{zeroPad(seconds)}</span>
                      <div className="text-[12px] ">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    if (pathname === '/breastfeeding-training-program') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <>
              <div className=" sticky top-[0] z-30 mx-auto w-full flex-none bg-gradient-to-r from-blue-900 to-blue-950 text-center text-white sm:top-[0px] md:backdrop-blur-sm ">
                <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                  {/* <h5 className=" blink mx-2 text-center text-sm font-bold md:text-base">
                    <span className="font-bold ">n</span>
                  </h5> */}

                  <div className="blink mx-auto flex justify-center gap-x-2 font-semibold text-white">
                    <div className="flex items-center pr-2 text-center ">Price Revising In :</div>
                    {Number(zeroPad(days)) > 0 && (
                      <div>
                        <div className="rounded-md bg-white p-1 px-2 text-center font-bold text-black">
                          <span className=" ">{zeroPad(days)}</span>
                        </div>
                        <p className="text-sm font-normal text-white">Days</p>
                      </div>
                    )}
                    <div>
                      <div className="rounded-md bg-white p-1 px-2 text-center font-bold text-black">
                        <span className="  ">{zeroPad(hours)}</span>
                      </div>
                      <p className="text-sm font-normal text-white">Hrs</p>
                    </div>

                    <div>
                      <div className="rounded-md bg-white p-1 px-2 text-center font-bold text-black">
                        <span className="  ">{zeroPad(minutes)}</span>
                      </div>
                      <p className="text-sm font-normal text-white">Min</p>
                    </div>

                    <div>
                      <div className="rounded-md bg-white p-1 px-2 text-center font-bold text-black">
                        <span className=" ">{zeroPad(seconds)}</span>
                      </div>
                      <p className="text-sm font-normal text-white">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
    if (pathname === '/baby-nutrition-training-program') {
      if (completed) {
        return <></>;
      }

      return (
        <>
          {!completed && (
            <>
              <div className=" sticky top-[0] z-30 mx-auto w-full flex-none bg-tertiary text-center text-white sm:top-[0px] md:backdrop-blur-sm ">
                <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-3 py-3 md:px-4 md:py-3.5">
                  <h5 className="blink mx-2 text-center text-sm font-bold md:text-base">
                    <span className="font-bold ">FLAT 20% OFF</span>
                    <span className=" font-bold">- CODE: GET20</span>
                  </h5>

                  <div className="mx-auto flex justify-center  font-semibold text-white">
                    <div className="flex items-center pr-2 text-center  ">Ends In :</div>
                    {Number(zeroPad(days)) > 0 && (
                      <div className="text-center">
                        <span className=" ">{zeroPad(days)}</span>
                        <span className="px-[4px]">:</span>
                      </div>
                    )}
                    <div className="text-center">
                      <span className="  ">{zeroPad(hours)}</span>
                      <span className="px-[4px]">:</span>
                    </div>
                    <div className="text-center">
                      <span className="  ">{zeroPad(minutes)}</span>
                      <span className="px-[4px]">:</span>
                    </div>
                    <div className="text-center">
                      <span className=" ">{zeroPad(seconds)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
  };
  return (
    <>
      <Countdown date={endDate} renderer={renderer} />
    </>
  );
};

export default CountdownTimer;
