import React from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-success font-bold" : "hover:text-success"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          className={({ isActive }) =>
            isActive ? "text-success font-bold" : ""
          }
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-plants"
          className={({ isActive }) =>
            isActive ? "text-success font-bold" : ""
          }
        >
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-plants"
          className={({ isActive }) =>
            isActive ? "text-success font-bold" : ""
          }
        >
          My Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="navbar px-4 md:px-8 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold text-success flex gap-2 items-center"
          >
            <span className="text-2xl">🌿</span> LeafLog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2">
            {link}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to="/auth/login">
            <button className="btn btn-ghost btn-sm border-none hover:bg-success/10">
              Login
            </button>
          </Link>
          <Link to="/auth/register">
            <button className="btn btn-success btn-sm text-white px-6">
              Register
            </button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
