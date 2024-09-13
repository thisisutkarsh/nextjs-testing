// 'use client';
// import { LactationWebinarTimerData, weaningTimerData } from '../../shared/data';
// import { usePathname } from 'next/navigation';
// import SeatCounter from '../atoms/SeatCounter';

// function CountDownWeaning() {
//   const pathname = usePathname();
//   const month = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   let nextWeaningWorkShopDate = null;
//   let nextLactationWorkShopDate = null;

//   if (pathname === '/solids-food-start-workshop') {
//     nextWeaningWorkShopDate = weaningTimerData.endDate;
//     if (new Date() >= nextWeaningWorkShopDate) {
//       nextWeaningWorkShopDate.setUTCDate(nextWeaningWorkShopDate.getUTCDate() + 7);
//     }
//   } else if (pathname === '/lactation-webinar') {
//     nextLactationWorkShopDate = LactationWebinarTimerData.endDate;
//     if (new Date() >= nextLactationWorkShopDate) {
//       nextLactationWorkShopDate.setUTCDate(nextLactationWorkShopDate.getUTCDate() + 7);
//     }
//   }

//   return (
//     <div className="md:hidden">
//       <div className="text-center text-sm text-white">
//         {pathname === '/solids-food-start-workshop' && nextWeaningWorkShopDate && (
//           <h2 className="blink text-black">
//             <strong>
//               Next Session {month[nextWeaningWorkShopDate.getUTCMonth()]} {nextWeaningWorkShopDate.getUTCDate()}, 5PM
//               <br />
//               <SeatCounter />{' '}
//             </strong>
//           </h2>
//         )}
//         {pathname === '/lactation-webinar' && nextLactationWorkShopDate && (
//           <h2 className="blink ">
//             <strong>
//               {' '}
//               Next Session {
//                 month[nextLactationWorkShopDate.getUTCMonth()]
//               } {nextLactationWorkShopDate.getUTCDate()} ,
//               <br /> Saturday 2:30PM
//             </strong>
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CountDownWeaning;
