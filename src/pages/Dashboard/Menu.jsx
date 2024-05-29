import { Link, NavLink } from "react-router-dom";
// import { FaUserCheck, FaUsers } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const Menu = () => {
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  // const [isOpenReview, setIsOpenReview] = useState(false);

  return (
    <>
      <Link to="/dashboard/addProduct">
        <h2 className="text-start text-xl font-bold leading-10 border-b-2 border-light-blue-600">
          Dashboard Menu
        </h2>
      </Link>
      {/* Products */}
      <div className="">
        <NavLink
          to="/dashboard/addProduct"
          className={`flex items-center gap-2`}
        >
          <AiFillProduct className="text-2xl" />
          <button
            onClick={() => setIsOpenProduct(!isOpenProduct)}
            className="flex flex-row items-center gap-1"
          >
            <span> Products</span>
            <FaAngleDown className="text-white text-2xl" />
          </button>
        </NavLink>
        {isOpenProduct === true && (
          <>
            <NavLink
              to="/dashboard/addProduct"
              className={`flex items-center gap-2 mt-2`}
            >
              <BiTask className="text-[#75b5a0] text-2xl"></BiTask>
              <button className="w-full">Add Product</button>
            </NavLink>

            <NavLink
              to="/dashboard/productList"
              className={`flex items-center gap-2`}
            >
              <BiTask className="text-[#75b5a0] text-2xl"></BiTask>
              <button className="w-full">Product Lists</button>
            </NavLink>
          </>
        )}
      </div>
      {/* Review with submenu*/}
      {/* <div>
        <NavLink className={`flex items-center gap-2`}>
          <MdOutlineRateReview className="text-white text-2xl" />
          <button
            onClick={() => setIsOpenReview(!isOpenReview)}
            className="flex flex-row items-center gap-1"
          >
            <span> Review</span>
            <FaAngleDown className="text-[#ffffff] text-2xl" />
          </button>
        </NavLink>
        {isOpenReview === true && (
          <>
            <NavLink
              to="/dashboard/addReview"
              className={`flex items-center gap-2`}
            >
              <BiTask className="text-[#75b5a0] text-2xl"></BiTask>
              <button className="w-full">Add Review</button>
            </NavLink>

            <NavLink
              to="/dashboard/updateReview"
              className={`flex items-center gap-2`}
            >
              <BiTask className="text-[#75b5a0] text-2xl"></BiTask>
              <button className="w-full">Update Review</button>
            </NavLink>
          </>
        )}
      </div> */}

      {/* Review */}
      <div className="border rounded-md hover:bg-[#75b5a0]">
        <NavLink
          to="/dashboard/AddReview"
          className={`flex items-center gap-2`}
        >
          <MdOutlineRateReview className=" text-2xl" />
          <button className="flex flex-row items-center gap-1">
            <span> Review</span>
          </button>
        </NavLink>
      </div>

      {/* <div className="border rounded-md hover:bg-[#75b5a0]">
        <NavLink
          to="/dashboard/paymentHistory"
          className={`flex items-center gap-2`}
        >
          <FaMoneyCheckDollar className=" text-2xl" />
          <button className="w-full">Payment History</button>
        </NavLink>
      </div> */}
    </>
  );
};

export default Menu;
