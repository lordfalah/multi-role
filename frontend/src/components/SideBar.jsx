import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Grid from "../icon/Grid";
import Logout from "../icon/Logout";
import { logout } from "../redux/auth/AuthApi";
import { reset } from "../redux/auth/AuthSlice";
import Users from "../icon/Users";
import Box from "../icon/Box";
import Search from "../icon/Search";

const SideBar = () => {
  const { user, isError, isLoading } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      dispatch(reset());
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div
        className={`transition-colors duration-200 ease-in-out ${
          isOpen
            ? "fixed inset-0 bg-black/0 -z-50"
            : "fixed inset-0 bg-black/40 lg:bg-black/0 z-40 lg:-z-40"
        }`}
      ></div>
      <div id="view" className={`h-full flex flex-row sticky top-0 z-50`}>
        <button
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 z-50"
          onClick={() => setIsOpen((val) => !val)}
        >
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="sidebar"
          className={`bg-white min-h-screen md:block shadow-xl overflow-x-hidden transition-all duration-300 ease-in-out absolute lg:relative  ${
            isOpen ? "w-0" : "w-60 lg:w-60"
          }`}
        >
          <div className="space-y-6 md:space-y-10 mt-10 absolute left-0 px-3">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-teal-600">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              {user?.name}
              <span className="text-teal-600">.</span>
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                  {user?.email}
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  {user?.role}
                </p>
              </div>
            </div>
            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <Search className="stroke-2" />
              </button>
            </div>
            <div id="menu" className="flex flex-col gap-y-2">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => {
                  return `text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out whitespace-nowrap ${
                    isActive ? "bg-teal-500 text-white" : ""
                  }`;
                }}
              >
                <Grid />
                <span className="">Dashboard</span>
              </NavLink>
              <NavLink
                to="/dashboard/product"
                end
                className={({ isActive }) => {
                  return `text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out whitespace-nowrap ${
                    isActive ? "bg-teal-500 text-white" : ""
                  }`;
                }}
              >
                <Box />
                <span className="">Products</span>
              </NavLink>

              {user?.role === "admin" ? (
                <NavLink
                  to="/dashboard/users"
                  end
                  className={({ isActive }) => {
                    return `text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out whitespace-nowrap ${
                      isActive ? "bg-teal-500 text-white" : ""
                    }`;
                  }}
                >
                  <Users />
                  <span className="">Users</span>
                </NavLink>
              ) : null}

              <button
                onClick={onLogout}
                type="button"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out whitespace-nowrap text-left"
              >
                <Logout className="inline-block stroke-2" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
