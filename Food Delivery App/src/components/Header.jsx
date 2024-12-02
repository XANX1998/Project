import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleChange = () => {
    setSideNav(!sideNav);
  };

  return (
    <div className="fixed z-50 bg-white w-full top-0 left-0">
      <div className="flex justify-between py-[20px] px-[25px] text-[20px] font-semibold border-b relative">
        
        <div>
          <p className="text-2xl">
            Eat/<span className="text-[#f1c40f]">Drink</span>
          </p>
        </div>

        
        <div>
          <ul className="hidden sm:flex cursor-pointer gap-4">
            <Link to="/">
              <li className="hover:text-[#f1c40f]">Home</li>
            </Link>
            <Link to="/aboutus">
              <li className="hover:text-[#f1c40f]">About Us</li>
            </Link>
            <Link to="/ourfood">
              <li className="hover:text-[#f1c40f]">Our Menu</li>
            </Link>
            <Link to="/signin">
              <li className="hover:text-[#f1c40f]">Sign IN</li>
            </Link>
          </ul>
        </div>

       
        {sideNav && (
          <div className="flex flex-col cursor-pointer w-[300px] fixed top-0 right-0 text-center h-[100vh] items-center justify-center bg-[#ecf0f1] z-50">
            <ImCross
              size={30}
              className="absolute top-5 right-5 cursor-pointer"
              onClick={handleChange}
            />
            <ul className="flex flex-col gap-6">
              <Link to="/" onClick={handleChange}>
                <li className="hover:text-[#f1c40f]">Home</li>
              </Link>
              <Link to="/aboutus" onClick={handleChange}>
                <li className="hover:text-[#f1c40f]">About Us</li>
              </Link>
              <Link to="/ourfood" onClick={handleChange}>
                <li className="hover:text-[#f1c40f]">Offers</li>
              </Link>
              <Link to="/signin" onClick={handleChange}>
                <li className="hover:text-[#f1c40f]">Sign IN</li>
              </Link>
            </ul>
          </div>
        )}

        <div className="flex gap-5">
          <GiHamburgerMenu
            size={30}
            className="cursor-pointer block sm:hidden"
            onClick={handleChange}
          />
          <FaCartShopping size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
