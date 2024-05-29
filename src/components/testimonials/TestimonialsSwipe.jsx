import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import useReview from "../../hooks/useReview";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const TestimonialsSwipe = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <div className="max-w-6xl mx-auto lg:pt-0 pt-24">
      <div className=" max-w-6xl mx-auto flex flex-col items-center text-center  lg:p-0 p-4">
        <h1 className="text-[28px] lg:text-[32px] font-[700]">
          What customers say about <br /> GREEMIND?
        </h1>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-6 w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className=" py-10">
            <div className="flex flex-col  bg-[#C1DCDC] rounded-lg">
              <p className="text-[18px] font-[500] text-[#686767] p-6 text-justify">
                {review?.details}
              </p>
              <div className="p-4 flex flex-row justify-between items-center ">
                {/* left */}
                <div className="flex flex-row items-center gap-4 w-72">
                  <img
                    className="h-[100px] w-[100px]  lg:mb-0 rounded-full"
                    src={review?.photo}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[18px] font-[700]">{review?.name}</h1>
                    <p className="text-[12px] font-[500] text-[#969696]">
                      YouTuber
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className="flex flex-row items-center gap-2 lg:mr-16">
                  <p>Rating: </p>
                  <Link to={`/dashboard/updateReview/${review._id}`}>
                    <div className="flex flex-row items-center gap-1">
                      <div className="-mt-1">
                        <Rating
                          style={{ maxWidth: 120 }}
                          value={review?.rating}
                        />
                      </div>
                      <p>({review?.rating})</p>
                    </div>
                  </Link>
                  {console.log(review._id)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwipe;
