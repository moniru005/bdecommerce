import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are Successfully Logged out",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navbar = (
    <>
      <div className="text-md flex flex-col lg:flex-row gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/fashion">Fashion</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}
      </div>
    </>
  );

  const loginButton = (
    <>
      <Link to="login">
        <FaRegUser className="" />
      </Link>
    </>
  );

  const logOutButton = (
    <>
      <Link to="login">
        <MdLogout onClick={handleLogOut} />
      </Link>
    </>
  );

  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto py-6">
      {/* Start */}
      <div className="nav navbar-start flex flex-row items-center gap-24">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span className=" text-xl font-bold uppercase">bdEcommerce</span>
          </a>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navbar}</ul>
      </div>
      {/* Center */}
      {/* <div className="navbar-center hidden lg:flex">
        
      </div> */}

      {/* End */}
      <div className="navbar-end pr-2 lg:pr-0 flex flex-row gap-8">
        <div>
          <LuShoppingCart className="text-xl" />
        </div>
        {/* login / logout button */}
        <div>
          {user ? (
            <>
              <div className="flex flex-row gap-2 items-center">
                <span>{user.displayName}</span>
                <span className="hidden lg:flex">{logOutButton}</span>
              </div>
            </>
          ) : (
            // Right Button (Login Button)
            <span className="hidden lg:flex">{loginButton}</span>
          )}
        </div>
        <div className="border-r-[1.5px] h-6 border-r-[#1E1E1E]"></div>
        <div>
          <HiOutlineMenuAlt3 className="text-xl" />
        </div>
      </div>

      {/*Dropdown Mobile Menu*/}
      <div className="dropdown">
        <div
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          {isOpen === true ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaAlignJustify className="text-lg"></FaAlignJustify>
          )}
        </div>
        <ul
          tabIndex={0}
          className={`${
            isOpen ? "" : "hidden"
          } menu menu-sm dropdown-content mt-6 -ml-40 w-56 z-[1] p-2 shadow bg-base-100 rounded-box  `}
        >
          {navbar}
          {/* <span className="ml-2 mt-2">{user ? logOutButton : loginButton}</span> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
