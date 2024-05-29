import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import { LiaStarSolid } from "react-icons/lia";

const Testimonials = () => {
  return (
    <div className="lg:py-16 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-start mb-12 lg:p-0 p-4">
        <h1 className="text-[28px] lg:text-[32px] font-[700]">
          What customers say about <br /> GREEMIND?
        </h1>
      </div>
      {/* 2 Card */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 p-4 lg:p-0">
        {/* Card-1 */}
        <div className="flex flex-col  bg-[#C1DCDC] h-[334px] w-full lg:w-[60%] rounded-lg">
          <p className="text-[18px] font-[500] text-[#686767] p-6 text-justify">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="flex flex-row items-start justify-between lg:-mt-0 -mt-[55px]">
            {/* left */}
            <div className="flex flex-row items-start">
              <img className="h-[205px] lg:mb-0" src={client1} alt="" />
              <div className="flex flex-col mt-16">
                <h1 className="text-[18px] font-[700]">John Doe</h1>
                <p className="text-[12px] font-[500] text-[#969696]">
                  YouTuber
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-row items-center gap-2 mt-16 mr-16">
              <LiaStarSolid />
              <p>4.5</p>
            </div>
          </div>
        </div>
        {/* Card-2 */}
        <div className="lg:-mr-48 flex flex-col  bg-[#C1DCDC] h-[334px] w-full lg:w-[40%] rounded-lg">
          <p className="text-[18px] font-[500] text-[#686767] p-6 text-justify">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="flex flex-row items-start justify-between -mt-[55px]">
            {/* left */}
            <div className="flex flex-row items-start ">
              <img className="h-[205px]" src={client2} alt="" />
              <div className="flex flex-col mt-16">
                <h1 className="text-[18px] font-[700]">John Doe</h1>
                <p className="text-[12px] font-[500] text-[#969696]">
                  YouTuber
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-row items-center gap-2 mt-16 mr-16">
              <LiaStarSolid />
              <p>4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
