import { BsArrowRight } from "react-icons/bs";
import useProduct from "../../hooks/useProduct";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
// import image1 from "../../assets/images/artifitialplant.jpg";
// import image2 from "../../assets/images/artifitialplant2.jpg";
// import image3 from "../../assets/images/artifitialplant-3.jpg";

const BestSelling = () => {
  const [products] = useProduct();
  const goTo = useNavigate();
  return (
    <div className="pt-16 flex flex-col items-center">
      {/* 4 columns */}
      <div className="max-w-6xl flex flex-col lg:flex-row items-center  lg:justify-start gap-8 p-2 lg:p-0">
        {/* column-1 */}
        <div className="flex flex-col gap-4 lg:w-3/12 w-full lg:text-left text-center">
          <h2 className="text-[32px] font-[700]">Best selling Gadgets</h2>
          <p className="text-[#1E1E1E] text-[18px] font-[500]">
            Easiest way to enjoying life by buying your favorite gadgets{" "}
          </p>
          <div className="w-full flex flex-row lg:justify-start justify-center">
            <button
              onClick={() => goTo("/shop")}
              className="flex flex-row items-center gap-2 bg-[#C1DCDC] rounded p-2 w-fit"
            >
              <span className="font-semibold">See more</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
        {/* column-2 */}
        <div className="w-full lg:w-9/12 flex lg:flex-row">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 lg:p-0">
            {/* column-1 */}
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
