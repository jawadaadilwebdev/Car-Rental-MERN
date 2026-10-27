
import Title from "./Title";
import {assets} from "../assets/assets";

const Testimonial = () => {
  const testimonials = [
  {
    name: "Donald Jackman",
    location: "Peshawar, Pakistan",
    image: assets.testimonial_image_1,
    rating: 5,
    review:
      "I've rented cars from this service multiple times, and each experience has been seamless. The cars are well-maintained, and the booking process is straightforward.",
  },
  {
    name: "Richard Nelson",
    location: "Islamabad, Pakistan",
    image: assets.testimonial_image_2,
    rating: 4,
    review:
      "Excellent car rental service! The vehicle was clean and comfortable, and the entire booking process was quick and hassle-free. I'll definitely rent from them again.",
  },
  {
    name: "James Anderson",
    location: "Lahore, Pakistan",
    image: assets.testimonial_image_1,
    rating: 5,
    review:
      "The service was reliable from start to finish. The car was in excellent condition, and the team made pickup and return simple and convenient. Highly recommended!",
  },
];

  return (
    
<section className="px-6 py-28 md:px-12 lg:px-24">
  <Title
    title="What Our Customers Say"
    subtitle="Hear what our satisfied customers have to say about their experience with us."
  />

  <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex w-full flex-col items-center bg-white shadow-lg hover:-translate-y-1 rounded-lg border border-gray-300 p-6 sm:p-8 lg:p-10 transition-all duration-500"
      >
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={testimonial.image}
          alt={testimonial.name}
        />

        <h2 className="mt-2 text-center text-lg font-medium text-gray-900">
          {testimonial.name}
        </h2>

        <p className="text-center text-sm text-gray-500">
          {testimonial.location}
        </p>

        <div
  className="mt-3 flex items-center justify-center gap-1"
  aria-label={`${testimonial.rating} out of 5 stars`}
>
  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
    <svg
      key={starIndex}
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
        fill="#1F58D8"
      />
    </svg>
  ))}
</div>

        <p className="mt-3 text-center text-[15px] leading-relaxed text-gray-500">
          {testimonial.review}
        </p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Testimonial;
