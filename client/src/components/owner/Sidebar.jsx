import React, { useState } from 'react';
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { useLocation, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState('');

  const updateImage = async () => {
    if (image) {
      user.image = URL.createObjectURL(image);
      setImage('');
    }
  };

  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-border text-sm'>
      <div className="group relative">
        <label htmlFor="image">
          <img 
            className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' 
            src={image ? URL.createObjectURL(image) : user?.image || 'https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'} 
            alt="Profile" 
          />
          <input 
            type="file" 
            id='image' 
            accept="image/*" 
            hidden 
            onChange={e => setImage(e.target.files[0])} 
          />
          <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
            <img src={assets.edit_icon} alt="Edit" />
          </div>
        </label>
      </div>

      {image && (
        <button 
          onClick={updateImage}
          className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'
        >
          Save <img src={assets.check_icon} width={13} alt="Save" />
        </button>
      )}

      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

      <div className='w-full'>
        {ownerMenuLinks.map((link, index) => (
          <NavLink 
            key={index} 
            to={link.path} 
            className={`flex items-center gap-2 relative w-full pl-4 py-3 first:mt-6 ${link.path === location.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
          >
            <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt='menu icon' />
            <span className='max-md:hidden'>{link.name}</span>
            <div className={`${link.path === location.pathname ? 'bg-primary' : ''} w-1.5 h-8 rounded-l right-0 absolute`}></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
