import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';

const Cardetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const[car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

const handleSubmit = (e)=>{
  e.preventDefault();
}

  useEffect(()=>{
    setCar(dummyCarData.find(car=>car._id===id))
  },[id])
  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer' onClick={()=>navigate(-1)}>
        <img src={assets.arrow_icon} className='rotate-180 opacity-65'/>
        Back to All Cars
        </button>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Left */}
          <div className='lg:col-span-2'>
            <img src={car?.image} alt={car?.name} className='w-full h-auto object-cover md:max-h-100 rounded-xl mb-6 shadow-md'/>
            <div className='space-y-6'>
              <div>
                <h1 className='text-3xl font-bold'>{car?.brand} {car?.model}</h1>
                <p>{car?.category} ● {car?.year}</p>
              </div>
              <hr className='border-border my-6'/>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {[
                  {icon:assets.users_icon , text:`${car?.seating_capacity} Seats`},
                  {icon:assets.fuel_icon , text:`${car?.fuel_type}`},
                  {icon:assets.car_icon , text:`${car?.transmission}`},
                  {icon:assets.location_icon , text:`${car?.location}`},
                ].map(({icon,text})=>(
                  <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg'>
                    <img src={icon} className='h-5 mb-2' alt="" />
                    {text}
                  </div>
                ))}
              </div>
              <div>
                <h1 className='text-xl font-medium mb-3'>Description</h1>
                <p className='text-gray-600'>{car?.description}</p>
              </div>
              <div>
                <h1 className='text-xl font-medium mb-3'>Features</h1>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  {["Air Conditioning","Power Steering","Power Windows","Anti-lock Braking System (ABS)","Airbags","Cruise Control","Bluetooth Connectivity","USB Ports","Navigation System","Rearview Camera"].map((feature)=>(
                    <li key={feature} className='flex items-center text-gray-600'><img src={assets.check_icon} alt="Check" className="h-4 mr-2" />{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right */}
          <form onSubmit={handleSubmit} className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500' action="">
            <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>{currency}{car?.pricePerDay}<span className='text-base text-gray-400 font-normal'> per day</span></p>
            <hr className='border-border my-6'/>
            <div className='flex flex-col gap-2'>
              <label className='block text-gray-700 font-medium mb-2' htmlFor="pickup-date">Pickup Date</label>
              <input type="date" required id="pickup-date" min={new Date().toISOString().split('T')[0]} className='border border-border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='block text-gray-700 font-medium mb-2' htmlFor="return-date">Return Date</label>
              <input type="date" required id="return-date" className='border border-border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>

            <button className='w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer'>Book Now</button>
            <p>No Credit Card Required to reserve</p>
          </form>
        </div>
    </div>
  ): <Loader/>
}

export default Cardetails