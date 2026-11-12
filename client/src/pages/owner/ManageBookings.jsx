import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageBookings = () => {
  const [bookings,setBookings]=useState([])
  const fetchOwnerBookings =async ()=>{
    setBookings(dummyMyBookingsData)
  }
  useEffect(()=>{
    fetchOwnerBookings();
  },[])
  return (
    <div className='px-4 pt-10 md:px-10 w-full' >
      <Title title='Manege Bookings'  subTitle='Track all customer bookings, approve or cancel requests, and manage booking statuses'/>
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-border mt-6'>
              <table className='w-full text-sm border-collapse text-left text-gray-600'>
                <thead className=' text-gray-500'>
                  <tr>
                    <th className="p-3 font-medium">Car</th>
                    <th className="p-3 font-medium max-md:hidden">Date Range</th>
                    <th className="p-3 font-medium">Total</th>
                    <th className="p-3 font-medium max-md:hidden">Status</th>
                    <th className="p-3 font-medium">Actions</th>
                  </tr>
                </thead>
               
              </table>
            </div>
    </div>
  )
}

export default ManageBookings