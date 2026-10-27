
import React from 'react';
import Title from './Title';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
  };

  return (
    <section className="px-6 py-20 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        

        <Title
    title="Never Miss a Deal!"
    subtitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts."
  />

        <form
          onSubmit={handleSubmit}
          className="flex h-12 w-full max-w-2xl items-center justify-between md:h-13"
        >
          <input
            className="h-full w-full rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 outline-none"
            type="email"
            placeholder="Enter your email address"
            required
          />

          <button
            type="submit"
            className="h-full cursor-pointer rounded-r-md bg-primary px-8 text-white transition-all hover:bg-primary-dull md:px-12"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
