import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';

const Cardetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const[car, setCar] = useState(null);
  useEffect(()=>{
    setCar(dummyCarData.find(car=>car._id===id))
  },[id])
  console.log(car)
  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer' onClick={()=>navigate(-1)}>
        <img src={assets.arrow_icon} className='rotate-180 opacity-65'/>
        Back to All Cars
        </button>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap'>
          
        </div>
    </div>
  ): <p>Loading....</p>
}

export default Cardetails