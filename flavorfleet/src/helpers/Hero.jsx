import { useState, useEffect } from "react";
import image1 from "../assets/images/header_img-DfvEA7zQ.png";
import image2 from "../assets/images/pexels-dana-tentis-118658-262959.jpg";
import image3 from "../assets/images/pexels-robinstickel-70497.jpg";
export default function Hero() {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 0,
      src: image1,
    },
    {
      id: 1,
      src: image2,
    },
    {
      id: 2,
      src: image3,
    },
  ];
  const handleSlider = (id) => {
    setIndex(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // setIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[80vh] " id="hero">
      <div className="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-0 text-white flex flex-col gap-6 justify-center items-center md:gap-10  -mt-10">
        <h1 className="text-3xl font-bold w-full md:text-4xl lg:text-8xl ">
          Order your favourite food here
        </h1>
        <p className="mx-2 w-100 lg:w-1/2 text-center lg:font-semibold">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="flex flex-col gap-3 md:flex-row ">
          <a
            href="#menu"
            className="bg-white rounded-lg px-28 py-3 lg:px-20 lg:py-4 text-red-500 font-semibold text-xl hover:bg-indigo-500 hover:text-white duration-200"
          >
            View Menu
          </a>
          <a
            href="#dishes"
            className="bg-white rounded-lg px-28 py-3 lg:px-20 lg:py-4 text-red-500 font-semibold text-xl  hover:bg-indigo-500 hover:text-white duration-200"
          >
            Get A Dish
          </a>
        </div>
      </div>
      <input
        className="hidden peer/slider1 checkbox"
        type="radio"
        checked={index === 0}
      />
      <input
        className="hidden peer/slider2 checkbox"
        type="radio"
        checked={index === 1}
      />
      <input
        className="hidden peer/slider3 checkbox"
        type="radio"
        checked={index === 2}
      />
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.id}
          className={`absolute -z-10 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === image.id ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10">
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          onClick={() => handleSlider(0)}
        ></label>
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          onClick={() => handleSlider(1)}
        ></label>
        <label
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
          onClick={() => handleSlider(2)}
        ></label>
      </div>{" "}
    </div>
  );
}
