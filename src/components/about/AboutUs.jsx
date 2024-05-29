import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
const AboutUs = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-[32px] font-[700]">About us</h1>
          <p className="text-[18px] font-[500] text-[#969696]">
            Order now and appreciate the enjoying our products
          </p>
        </div>
        {/* 3 columns */}
        <div className="flex lg:flex-row flex-col items-center gap-12 p-4">
          {/* column-1 */}
          <div className="flex flex-col items-center justify-center w-96">
            <div className="bg-[#C1DCDC] rounded-full p-6 w-[96px] h-[96px]">
              <img className="" src={icon1} alt="" />
            </div>
            <h2 className="text-[18px] font-[700] py-4">Large Assortment</h2>
            <p className="text-[18px] font-[500] text-[#969696] text-center">
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
          {/* column-2 */}
          <div className="flex flex-col items-center justify-center w-96">
            <div className="bg-[#C1DCDC] rounded-full p-6 w-[96px] h-[96px]">
              <img className="" src={icon2} alt="" />
            </div>
            <h2 className="text-[18px] font-[700] py-4">
              Fast & Free Shipping
            </h2>
            <p className="text-[18px] font-[500] text-[#969696] text-center">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          {/* column-3 */}
          <div className="flex flex-col items-center justify-center w-96">
            <div className="bg-[#C1DCDC] rounded-full p-6 w-[96px] h-[96px]">
              <img className="" src={icon3} alt="" />
            </div>
            <h2 className="text-[18px] font-[700] py-4">24/7 Support</h2>
            <p className="text-[18px] font-[500] text-[#969696] text-center">
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
