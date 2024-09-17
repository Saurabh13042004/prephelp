import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      position: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    },
    {
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      position: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    },
    {
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      position: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slider = React.useRef(null);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center">
      <h1 className="text-black md:text-4xl text-2xl text-center font-bold absolute top-5 mx-auto">
        Testimonials
      </h1>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <button
        className="p-1 h-14 w-14 bg-blue-600 hover:bg-blue-500 text-white font-semibold z-50 rounded-full"
        onClick={() => slider?.current?.slickPrev()}
      >
        Prev
      </button>
      <div className="mx-auto max-w-2xl lg:max-w-4xl px-4">
        <Slider ref={slider} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                className="mx-auto h-12"
                src={testimonial.logo}
                alt="company logo"
              />
              <blockquote className="mt-10 text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">{testimonial.position}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </Slider>
      </div>
      <button
        className="p-1 h-14 w-14 bg-blue-600 hover:bg-blue-500 text-white font-semibold z-50 rounded-full"
        onClick={() => slider?.current?.slickNext()}
      >
        Next
      </button>
    </section>
  );
};

export default Testimonial;
