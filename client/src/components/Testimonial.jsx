import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const Testimonial = () => {
  // const testimonials = [
  //   {
  //     quote:
  //       "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  //     name: "Judith Black",
  //     position: "CEO of Workcation",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  //   },
  //   {
  //     quote:
  //       "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  //     name: "Judith Black",
  //     position: "CEO of Workcation",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  //   },
  //   {
  //     quote:
  //       "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  //     name: "Judith Black",
  //     position: "CEO of Workcation",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  //   },
  // ];

  const [testimonials, setTestimonials] = useState([]);

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

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_SERVER}/get-reviews-user`
      );
      // console.log(data.data.data);
      setTestimonials(data.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
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
          <div className="mx-auto w-full lg:max-w-4xl px-4">
            <Slider ref={slider} {...settings}>
              {testimonials.map((testimonial, index) => {
                const { review, name, position } = testimonial;
                return (
                  <div key={index} className="text-center px-4">
                    {/* Company Logo */}
                    {/* <img
            className="mx-auto h-12 mb-6"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt="company logo"
          /> */}

                    {/* Testimonial Review */}
                    <blockquote className="mt-4 text-base font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                      <p className="text-gray-700 italic">"{review}"</p>
                    </blockquote>

                    {/* Testimonial Author Information */}
                    <figcaption className="mt-10">
                      {/* Author Image */}
                      {/* <img
              className="mx-auto h-14 w-14 rounded-full object-cover"
              src={image}
              alt={name}
            /> */}

                      {/* Author Name and Position */}
                      <div className="mt-4 flex flex-col items-center space-y-1 text-base">
                        <div className="font-semibold text-gray-900">
                          {name}
                        </div>
                        <div className="text-gray-500 text-sm">{position}</div>
                      </div>
                    </figcaption>
                  </div>
                );
              })}
            </Slider>
          </div>

          <button
            className="p-1 h-14 w-14 bg-blue-600 hover:bg-blue-500 text-white font-semibold z-50 rounded-full"
            onClick={() => slider?.current?.slickNext()}
          >
            Next
          </button>
        </section>
      )}
    </>
  );
};

export default Testimonial;
