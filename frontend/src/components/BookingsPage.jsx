// import React, { useEffect, useState } from 'react'
// import AccountNav from '../AccountNav'
// import axios from 'axios'
// import PlaceImg from '../PlaceImg';
// import { Link } from 'react-router-dom';
// import BookingDates from '../BookingDates';

// function BookingsPage() {
//     const [bookings, setBookings] = useState([]);
//     useEffect(() => {
//         axios.get('/bookings').then(response => {
//             setBookings(response.data);
//         });
//     }, []);
//     return (
//         <div>
//             <AccountNav />
//             <div>
//                 {bookings.length <= 0 && (
//                     <div className='text-center mt-60'>
//                         <h1 className='text-7xl font-bold '> You don't have any bookings yet </h1>
//                     </div>
//                 )}

//                 {bookings.length > 0 && bookings.map(booking => (
//                     <Link to={`/account/bookings/${booking._id}`} className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mb-3'>
//                         <div className='aspect-square w-48 overflow-hidden flex-shrink-0'>
//                             <PlaceImg place={booking.place} className="w-full h-full object-cover" />
//                         </div>
//                         <div className='py-3 pr-3 grow'>
//                             <h2 className='text-2xl font-medium'>{booking.place.title}</h2>

//                             <div className='text-xl'>
//                                <BookingDates booking={booking} className="my-2 text-gray-500"/>
//                                 <div className='flex gap-1'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
//                                     </svg>
//                                     <span className='text-2xl'> Total Price: ${booking.price}</span>

//                                 </div>

//                             </div>

//                         </div>

//                     </Link>
//                 ))}

//             </div>

//         </div>
//     )
// }

// export default BookingsPage
import React, { useEffect, useState } from 'react'
import AccountNav from '../AccountNav'
import axios from 'axios'
import PlaceImg from '../PlaceImg';
import { Link } from 'react-router-dom';
import BookingDates from '../BookingDates';

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        });
    }, []);
    return (
        <div>
            <AccountNav />
            <div>
                {bookings.length <= 0 && (
                    <div className="text-center mt-60">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                            You don't have any bookings yet
                        </h1>
                    </div>
                )}

                {bookings.length > 0 &&
                    bookings.map((booking) => (
                        <Link
                             key={booking._id}
                            to={`/account/bookings/${booking._id}`}
                            className="flex flex-col sm:flex-row sm:gap-6 bg-gray-200 rounded-2xl overflow-hidden mb-6 w-[90%] sm:w-full mx-auto"
                        >
                            {/* Image section */}
                            <div className="w-full sm:w-48 flex justify-center items-center p-4 sm:p-0">
                                <div className="aspect-square w-40 sm:w-full overflow-hidden rounded-xl">
                                    <PlaceImg
                                        place={booking.place}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="px-4 pb-4 sm:py-4 sm:pr-4 sm:pl-0 grow text-center sm:text-left">
                                <h2 className="text-xl sm:text-2xl font-semibold">
                                    {booking.place.title}
                                </h2>

                                <BookingDates
                                    booking={booking}
                                    className="my-2 text-sm text-gray-500"
                                />

                                <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium">
                                        Total Price: ${booking.price}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>

        </div>
    )
}

export default BookingsPage
