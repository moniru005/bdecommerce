import { FiSearch } from "react-icons/fi";
import image from "../../assets/images/rect-shape.png";
import vector1 from "../../assets/images/vector1.png";
import vector2 from "../../assets/images/vector2.png";
import plant from "../../assets/images/plant.png";

const Banner = () => {
  return (
    <div className="banner mb-10">
      <div className="bg-[#C1DCDC] max-w-6xl lg:h-[512px] mx-auto rounded-xl flex lg:flex-row flex-col lg:justify-between lg:px-12 px-4">
        {/* column1 */}
        <div className="">
          <h1 className="lg:text-[64px] text-[30px] font-[800] flex flex-col text-[#1E1E1E]">
            <span> Buy your</span>
            <span className="lg:-mt-8">dream plants</span>
          </h1>

          <div className="text-[#1E1E1E] flex flex-row items-center lg:gap-8 mt-6">
            <p className="flex flex-col">
              <span className="text-[32px] font-[500]">50+</span>
              <span className="text-[18px] font-[500]">Plant Spices</span>
            </p>
            <div className="border-r-[1px] h-10 border-r-[#1E1E1E]"></div>
            <p className="flex flex-col">
              <span className="text-[32px] font-[500]">100+</span>
              <span className="text-[18px] font-[500]">Customers</span>
            </p>
          </div>

          <div className="relative border lg:w-96 w-full mt-6">
            <input
              className="p-2 rounded-lg lg:w-96 w-full"
              type="search"
              placeholder="What are you looking for?"
            />
            <button className="absolute top-1 right-1 bg-[#C1DCDC] p-2 rounded">
              <FiSearch />
            </button>
          </div>
        </div>
        {/* column-2 */}
        <div className="flex items-end relative">
          <img
            className="lg:w-[450px] lg:h-[400px] lg:-mb-[22px]"
            src={image}
            alt=""
          />
          <img
            className="lg:w-[200-px] lg:h-[170px] absolute lg:bottom-24 lg:-left-48"
            src={vector1}
            alt=""
          />
          <img
            className="lg:w-[113px] lg:h-[180px] absolute top-2 right-0"
            src={vector2}
            alt=""
          />
          <img
            className="lg:w-[411px] lg:h-[513px] absolute -top-[1px] right-0"
            src={plant}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
