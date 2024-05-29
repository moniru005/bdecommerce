import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#C1DCDC] py-8">
      {/* 4 column */}
      <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row gap-8 lg:justify-between lg:items-start">
        {/* column-1 */}
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="text-[20px] font-[400] uppercase">bdcommerce</h1>
          <p className="text-[18px] font-[500] text-[#707D7D]">
            We help you find <br /> your dream plant
          </p>
          {/* social */}
          <div className="flex flex-row gap-4">
            <button className="px-2 rounded-full size-10 border border-[#707D7D]">
              <FaFacebookF className="text-xl" />
            </button>
            <button className="px-2 rounded-full size-10 border border-[#707D7D]">
              <FaInstagram className="text-xl" />
            </button>
            <button className="px-2 rounded-full size-10 border border-[#707D7D]">
              <FaTwitter className="text-xl" />
            </button>
          </div>
          <p className="text-[18px] font-[500] text-[#707D7D] pt-12 lg:px-0 px-4 text-center lg:text-left">
            2023 all Right Reserved Term of use bdCommerce
          </p>
        </div>
        {/* column-2 */}
        <div className="space-y-4">
          <h1 className="capitalize text-[18px] font-[700]">information</h1>
          <div className="text-[18px] font-[500] text-[#707D7D] space-y-4">
            <p>About</p>
            <p>Product</p>
            <p>Blog</p>
          </div>
        </div>
        {/* column-3 */}
        <div className="space-y-4">
          <h1 className="capitalize text-[18px] font-[700]">Comapny</h1>
          <div className="text-[18px] font-[500] text-[#707D7D] space-y-4">
            <p>Community</p>
            <p>Career</p>
            <p>Our story</p>
          </div>
        </div>
        {/* column-4 */}
        <div className="space-y-4">
          <h1 className="capitalize text-[18px] font-[700]">Contact</h1>
          <div className="text-[18px] font-[500] text-[#707D7D] space-y-4">
            <p>Getting Started</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
