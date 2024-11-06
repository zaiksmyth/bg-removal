import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex flex-wrap  border-t border-gray-200 items-center justify-between pt-10 gap-4 lg:px-44 py-3 px-4">
      <img width={150} src={assets.logo} alt="logo" />
      <p className="flex-1 border-l border-gray-400  pl-4 text-sm text-gray-500 max-sm:hidden">
        &copy; Copyrigth Ps Parwez | All right reserved.
      </p>
      <div className="flex gap-1">
        <img
          className="cursor-pointer "
          src={assets.facebook_icon}
          width={40}
          alt="facebook icon"
        />
        <img
          className="cursor-pointer"
          src={assets.twitter_icon}
          width={40}
          alt="twitter icon"
        />
        <img
          src={assets.google_plus_icon}
          width={40}
          className="cursor-pointer"
          alt="google icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
