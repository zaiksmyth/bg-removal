import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <section>
      {/* Title  */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent p-5">
        Customer Testimonials
      </h1>
      <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8 ">
        {testimonialsData?.map((item, index) => (
          <div
            className="bg-white hover:scale-105 transition-all duration-700 rounded-xl p-6 shadow-md  m-auto max-w-lg"
            key={index}
          >
            <p className="text-4xl  text-gray-400 ">”</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <figure className="flex items-center gap-3 mt-5">
              <img
                className="w-9 rounded-full "
                src={item.image}
                alt={item.author}
              />
              <figcaption>
                <p>{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
