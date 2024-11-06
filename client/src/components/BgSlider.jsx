import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSetsliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSetsliderPosition(event.target.value);
  };

  return (
    <section className="mb-10 md:py-16 mx-2 ">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent p-4 mb-14 sm:mt-20">
        Remove Background with High <br />
        Quality Image in seconds
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0 )` }}
          alt="image"
        />
        {/* forgraound image  */}
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%  )` }}
          alt="image"
          className="absolute top-0 left-0 h-full w-full"
        />
        {/* Slider  */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 slider"
        />
      </div>
    </section>
  );
};

export default BgSlider;
