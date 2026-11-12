import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [bookings,setBookings]=useState([])
  const fetchOwnerBookings =async ()=>{
    setBookings(dummyMyBookingsData)
  }
  useEffect(()=>{
    fetchOwnerBookings();
  },[])
  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title="Manage Bookings"  subtitle="Track all customer bookings, approve or cancel requests, and manage booking statuses" />
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-border mt-6'>
        <table className='w-full text-sm border-collapse text-left text-gray-600'>
          <thead className=' text-gray-500'>
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index)=>(
              <tr className="border-t border border-border text-gray-500" key={index}>
                <td className='p-3 flex items-center gap-3'>
                  <img src={booking.car.image} alt={booking.car.name} className='h-12 w-12 aspect-square rounded-md object-cover'/>
                  <p className='font-medium max-md:hidden'>{booking.car.brand} {booking.car.model}</p>
                </td>
                <td className='p-3 max-md:hidden'>{booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}</td>
                <td className='p-3 font-medium'>{currency}{booking.price}</td>
                <td className='p-3 max-md:hidden'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>offline</span>
                </td>
                <td className='p-3'>
                  {booking.status === "pending" ? (
                    <select name="" id="">
                      <option value="pending" selected>Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  ): <span className={`px-3 py-1 rounded-full font-semibold text-xs ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{booking.status}</span>}
                </td>
              </tr>
            )

            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings