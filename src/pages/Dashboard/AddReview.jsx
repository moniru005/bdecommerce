import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import useReview from "../../hooks/useReview";
import { Helmet } from "react-helmet-async";
import useCurrentDate from "../../hooks/useCurrentDate";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReviewList from "./ReviewList";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddReview = () => {
  // const [, , refetch] = useReview();
  const axiosPublic = useAxiosPublic();
  const currentDate = useCurrentDate();
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // image upload to imagebb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    const image = res.data;

    if (res.data.success) {
      const reviewInfo = {
        name: data.name,
        details: data.details,
        rating: rating,
        photo: image.data.display_url,
        date: currentDate,
      };
      console.log(reviewInfo);

      axiosPublic.post("/reviews", reviewInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Review Successfully Added`,
            showCancelButton: false,
            timer: 1500,
          });
          reset();
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>Add Review</title>
      </Helmet>

      <div className=" w-full ">
        <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-[#75b5a0] to-[#c7e0d8] w-full px-2">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">Add Review</span>
          </h3>
          <p className="text-center">
            <small>Adding the Review using in this form</small>
          </p>
        </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className=" w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-4">
                {/* row-1 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Reviewer Name */}
                  <div className="w-full">
                    <label className=" w-full pl-1">Reviewer Name</label>
                    <input
                      {...register("name", { required: true, maxLength: 20 })}
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Reviewer Name"
                    />
                    {errors?.name && (
                      <span className="text-red-100">
                        Reviewer Name is Required
                      </span>
                    )}
                  </div>
                </div>

                {/* row-2 */}
                <div>
                  {/* Description */}
                  <div className="w-full">
                    <label className="w-full pl-1 ">Review Details</label>
                    <textarea
                      {...register("details", {
                        required: true,
                        maxLength: 200,
                        minLength: 30,
                      })}
                      name="details"
                      rows="10"
                      placeholder="Review Details"
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    ></textarea>
                    {errors?.details && (
                      <span className="text-red-100">
                        Reviewer details is Required
                      </span>
                    )}
                  </div>
                </div>

                {/* row-3 */}
                <div className="flex flex-col lg:flex-row items-start gap-4">
                  {/* Review Rating */}
                  <div className="w-full flex flex-col gap-7">
                    <label className="w-4/12 pl-1 ">Review Rating</label>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                      isRequired
                    />
                  </div>
                  {/* Photo */}
                  <div className="w-full">
                    <label className="">Reviewer Photo</label>
                    <input
                      {...register("image", {
                        required: "Please upload a file",
                      })}
                      type="file"
                      id="fileInput"
                      className="file-input w-full my-6 file-input-bordered text-black"
                    />
                    {errors.image && (
                      <p className="text-red-200">{errors.image.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <input
                className="btn w-full mt-6 bg-[#75b5a0] hover:bg-[#99cfbd]  text-white uppercase font-light"
                type="submit"
                value="Save New Review"
              />
            </form>
          </div>

          {/* Data Table */}
          <div className="mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            <ReviewList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
