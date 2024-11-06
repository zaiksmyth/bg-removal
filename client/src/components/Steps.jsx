import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <section className="mx-4 lg:mx-44 py-20 xl:py-20 xl:pb-10">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br />
        Image in seconds
      </h1>

      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-20 justify-center ">
        <figure className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 ">
          <img src={assets.upload_icon} alt="" className="max-w-9" />
          <figcaption>
            <p className="text-xl font-medium ">Upload image</p>
            <p className="text-sm mt-2 text-neutral-500">
              this is a demo, will replace it later. <br /> This is a demo..
            </p>
          </figcaption>
        </figure>
        <figure className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 ">
          <img src={assets.remove_bg_icon} alt="" className="max-w-9" />
          <figcaption>
            <p className="text-xl font-medium ">Remove background</p>
            <p className="text-sm mt-2 text-neutral-500">
              this is a demo, will replace it later. <br /> This is a demo..
            </p>
          </figcaption>
        </figure>
        <figure className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 ">
          <img src={assets.download_icon} alt="" className="max-w-9" />
          <figcaption>
            <p className="text-xl font-medium ">Download image</p>
            <p className="text-sm mt-2 text-neutral-500">
              this is a demo, will replace it later. <br /> This is a demo..
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Steps;
