import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import CartIcon from "./CartIcon";
import SearchComponent from "./SearchComponent";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { hasGrantedAnyScopeGoogle } from "@react-oauth/google";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOriginal, setShowOriginal] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowOriginal(!showOriginal);
  };
  const responseMessage = (response) => {
    console.log(response);
  }
  const errorMessage = (error) => {
    console.log(error);
  }
  return (
    <header className="header sticky top-0 z-50 bg-white shadow-md flex items-center justify-between px-5 py-2 md:py-0 py-02">
      <h1 className="w-3/12">
        <Link href="/#hero">
          {" "}
          <h1 className="font-bold text-2xl lg:text-3xl border-red-500 border-opacity-0 hover:border-opacity-100 text-red-500 duration-200 cursor-pointer">
            FlavorFleet
          </h1>{" "}
        </Link>
      </h1>
      <nav className="nav font-semibold text-lg">
        <ul
          className={`md:flex  items-center flex-col md:flex-row gap-4 ${
            isOpen
              ? "absolute z-50 top-16 -mt-1 right-0 bg-slate-100 w-full"
              : "hidden"
          }`}
        >
          <li className="p-4 active:border-red-500 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <a
              className={({ isActive }) =>
                isActive
                  ? "border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200"
                  : ""
              }
              href="/#hero"
            >
              Home
            </a>
          </li>
          <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <a
              className={({ isActive }) =>
                isActive
                  ? "border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200"
                  : ""
              }
              href="/#menu"
            >
              Menu
            </a>
          </li>
          <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <a
              className={({ isActive }) =>
                isActive
                  ? "border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200"
                  : ""
              }
              href="/#dishes"
            >
              Dishes
            </a>
          </li>
          <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200"
                  : ""
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
          
          <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200"
                  : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <NavLink className="md:hidden  ">
              <SearchComponent />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 hidden  md:flex justify-end">
        <SearchComponent />
        <a href="">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-search fa-w-16 fa-9x h-8 p-1 hover:text-red-500 duration-200 lg:mt-1"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
      <NavLink className="relative mt-2 lg:-ml-48 lg:mt-0" to="/cart">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="shopping-cart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x h-8 p-1 hover:text-red-500 duration-200"
        >
          <path
            fill="currentColor"
            d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
            className=""
          ></path>
        </svg>
        <CartIcon />
        <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </li>
      </NavLink>

      <button
        className="group inline-flex md:hidden w-11 h-11 text-slate-800  bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
        aria-pressed="false"
        onClick={handleToggle}
      >
        <span className="sr-only">Menu</span>

        {showOriginal ? (
          <svg
            className="w-5 h-5 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        ) : (
          <svg
            className="w-5 h-5 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] -rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
          </svg>
        )}
      </button>
    </header>
  );
}
