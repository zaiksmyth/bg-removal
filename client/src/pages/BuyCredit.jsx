import { assets, plans } from "../assets/assets";
const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-10 mb-10  ">
      <button className="border border-gray-400 px-10 py-2 rounded-full text-center mb-6  text-gray-800 ">
        Our Plans
      </button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that&apos;s right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left ">
        {plans?.map((plan, index) => (
          <div
            className="bg-white drop-shadow-sm border hover:scale-105 duration-500 transition-all hover:border-blue-400 rounded-lg py-12 hover:shadow-2xl hover:shadow-blue-400/10 px-8 text-gray-700 "
            key={index}
          >
            <img width={40} src={assets.logo_icon} alt="logo" />
            <p className="mt-3 font-semibold ">{plan.id}</p>
            <p className="text-sm ">{plan.desc}</p>
            <p className="mt-6 ">
              <span className="text-3xl font-medium">${plan.price}</span>/
              {plan.credits} credits
            </p>

            <button className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:bg-gradient-to-r hover:from-blue-700  hover:to-blue-500">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
