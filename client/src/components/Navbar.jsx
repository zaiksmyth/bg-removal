import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <header>
      <nav className="flex mx-4 py-3 lg:mx-44 items-center justify-between ">
        <Link to="/">
          <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
        </Link>

        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full "
          >
            Get Started
            <img
              src={assets.arrow_icon}
              alt="arrow icon"
              aria-label="Button"
              className="w-3 sm:w-4"
            />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
