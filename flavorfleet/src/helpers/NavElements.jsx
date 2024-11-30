import { useState } from "react";

export default function NavElements() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav font-semibold text-lg">
      <ul
        className={`md:flex  items-center flex-col md:flex-row gap-4 ${
          isOpen
            ? "absolute z-50 top-16 -mt-1 right-0 bg-slate-100 w-full"
            : "hidden"
        }`}
      >
        <li className="p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer">
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
            Shopping Cart
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
      </ul>
    </nav>
  );
}
