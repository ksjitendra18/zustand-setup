import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const cartCount = 0;

  return (
    <header className="relative h-[80px]  ">
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center py-2 px-3">
        <Link to="/" className="font-bold text-2xl px-3 md:px-0">
          Ecommerce App
        </Link>
        <nav
          className={` ${
            mobileNavActive ? "flex" : "hidden"
          } z-30  md:flex absolute md:static left-0 top-14 md:top-0 items-center w-full md:w-auto justify-center  bg-[#1f2023] text-white md:text-black md:bg-transparent`}
        >
          <ul
            className={`flex flex-col md:flex-row text-[20px] py-5 md:py-3 justify-center  items-center gap-5 `}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li className="md:ml-7  bg-orange-500 text-white px-6 py-2 rounded-md">
              <Link className="flex items-center" to="/cart">
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 py-[3px] px-[6px] text-orange-500 text-sm font-bold rounded-full bg-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => setMobileNavActive((prev) => !prev)}
          className={` ${
            mobileNavActive && "active"
          }px-3 hamburger  block md:hidden mt-1 cursor-pointer`}
        >
          <span className="bar block w-[30px] h-[4px] bg-black"></span>
          <span className="bar block w-[30px] mt-1 h-[4px] bg-black"></span>
          <span className="bar block w-[30px] mt-1 h-[4px] bg-black"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
