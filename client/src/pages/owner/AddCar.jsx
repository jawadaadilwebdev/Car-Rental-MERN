import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability and car specifications"
      />
      <form
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
        onSubmit={onSubmitHandler}
      >
        <div className="flex items-center w-full gap-2">
          <label htmlFor="car-image" className="flex flex-col gap-2">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt="Car"
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload Image of the Car</p>
        </div>
        {/* Car Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="brand" className="mb-2">
              Brand
            </label>
            <input type="text" placeholder="e.g. BMW , Mercedes , Audi ...." required className="mt-0.5 border border-border rounded-md py-2 px-3 outline-none" value={car.brand} onChange={(e) => setCar({ ...car, brand: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Model
            </label>
            <input type="text" placeholder="e.g. X3, C-Class, A4 ...." required className="mt-0.5 border border-border rounded-md py-2 px-3 outline-none" value={car.model} onChange={(e) => setCar({ ...car, model: e.target.value })} />
          </div>
        </div>
        {/* Car Year , Price , Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Year
            </label>
            <input type="number" placeholder="e.g. 2020, 2021, 2022 ...." required className="mt-0.5 border border-border rounded-md py-2 px-3 outline-none" value={car.year} onChange={(e) => setCar({ ...car, year: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Daily Price ({currency})
            </label>
            <input type="number" placeholder="e.g. 50, 100, 150 ....    " required className="mt-0.5 border border-border rounded-md py-2 px-3 outline-none" value={car.pricePerDay} onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })} />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Category
            </label>
            <select className="px-3 py-2 mt-1 border border-border rounded-md outline-none" value={car.category} onChange={(e) => setCar({ ...car, category: e.target.value })}>
              <option value="">Select a Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>
        {/* Car transmission, Fuel type ,seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Transmission
            </label>
            <select className="px-3 py-2 mt-1 border border-border rounded-md outline-none" value={car.transmission} onChange={(e) => setCar({ ...car, transmission: e.target.value })}>
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Fuel Type  
            </label>  
            <select className="px-3 py-2 mt-1 border border-border rounded-md outline-none" value={car.fuelType} onChange={(e) => setCar({ ...car, fuelType: e.target.value })}>
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Gas">Gas</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Seating Capacity
            </label>
            <input type="number" placeholder="e.g. 4, 5, 6 ...." required className="mt-0.5 border border-border rounded-md py-2 px-3 outline-none" value={car.seatingCapacity} onChange={(e) => setCar({ ...car, seatingCapacity: e.target.value })} />
          </div>
        </div>
        {/* Car Location*/}
        <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
             Location  
            </label>  
            <select className="px-3 py-2 mt-1 border border-border rounded-md outline-none" value={car.location} onChange={(e) => setCar({ ...car, location: e.target.value })}>
              <option value="">Select Location</option>
              <option value="Newyork">Newyork</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>  
            </select>
          </div>
          {/* Car Description */}
          <div className="flex flex-col w-full">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <textarea
              id="description"
              placeholder="e.g. This is a well-maintained car with low mileage and excellent fuel efficiency."
              className="px-3 py-2 mt-1 border border-border rounded-md outline-none"
              value={car.description}
              rows={5}
              onChange={(e) => setCar({ ...car, description: e.target.value })}
            ></textarea>
        </div>
     <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} alt="" />
          List Your Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
