import { BsArrowRight } from "react-icons/bs";
import image1 from "../../assets/images/smartphone.jpg";
import image2 from "../../assets/images/purses.jpg";
import image3 from "../../assets/images/headphones-1.jpg";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const goTo = useNavigate();
  return (
    <div className="py-12">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-[32px] font-[700]">Categories</h1>
        <p className="text-[18px] font-[500] text-[#969696]">
          Find what you are looking for
        </p>
      </div>
      <div className="lg:h-[841px] lg:bg-[#C1DCDC] bg-none p-4">
        {/* 3-cards */}
        <div className="max-w-6xl mx-auto flex lg:flex-row flex-col gap-12 lg:-mt-12">
          {/* card1 */}
          <div className="h-[551px] w-96 flex flex-col gap-4 lg:order-1 order-1">
            <img className="h-[512px] rounded-xl" src={image1} alt="" />
            <h1 className="text-[18px] font-[700] text-center">Smart Phones</h1>
          </div>
          {/* card2 */}
          <div className="h-[551px] w-96 flex flex-col gap-4 lg:mt-24 lg:order-2 order-3">
            <img className="h-[512px] rounded-xl" src={image2} alt="" />
            <h1 className="text-[18px] font-[700] text-center">
              Fashion Accessories
            </h1>
            <p className="text-[18px] font-[500] text-[#969696] text-center">
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <div className="w-full flex flex-row justify-center">
              <button
                onClick={() => goTo("/shop")}
                className="flex flex-row items-center gap-2 bg-[#FFFFFF] rounded p-2 w-fit"
              >
                <span className="font-semibold">Explore</span>
                <BsArrowRight />
              </button>
            </div>
          </div>
          {/* card3 */}
          <div className="h-[551px] w-96 flex flex-col gap-4 lg:order-3 order-2">
            <img className="h-[512px] rounded-xl" src={image3} alt="" />
            <h1 className="text-[18px] font-[700] text-center">
              Electronic Gadgets
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
