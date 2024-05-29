import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import useCurrentDate from "../../hooks/useCurrentDate";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useNavigate, useParams } from "react-router-dom";
import useReview from "../../hooks/useReview";

const UpdateReview = () => {
  const axiosPublic = useAxiosPublic();
  const currentDate = useCurrentDate();
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  // get reviews from reviews api
  const [reviews, , refetch] = useReview();

  //filtered to match with user id
  const { id } = useParams();
  const findReview = reviews.find((review) => review._id === id);
  // console.log(findReview);

  useEffect(() => {
    if (findReview) {
      setRating(findReview.rating);
    }
  }, [findReview]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const date = currentDate;
    const photo = form.photo.value;

    // console.log(rating);

    const reviewInfo = {
      name: name,
      details: details,
      rating: rating,
      date: date,
      photo: photo,
    };

    try {
      const res = await axiosPublic.patch(
        `reviews/${findReview._id}`,
        reviewInfo
      );
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Review Successfully Updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: `No changes made to the review`,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error updating review:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Failed to update review`,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>Update Review</title>
      </Helmet>

      <div className=" w-full ">
        <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-[#75b5a0] to-[#c7e0d8] w-full px-2">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">Update Review</span>
          </h3>
          <p className="text-center">
            <small>Updating the Review using in this form</small>
          </p>
        </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className=" w-full">
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-y-4">
                {/* row-1 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Reviewer Name */}
                  <div className="w-full">
                    <label className=" w-full pl-1">Reviewer Name</label>
                    <input
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Reviewer Name"
                      required
                      defaultValue={findReview?.name}
                    />
                  </div>
                </div>

                {/* row-2 */}
                <div>
                  {/* Description */}
                  <div className="w-full">
                    <label className="w-full pl-1 ">Review Details</label>
                    <textarea
                      name="details"
                      rows="10"
                      placeholder="Review Details"
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      minLength={50}
                      required
                      defaultValue={findReview?.details}
                    ></textarea>
                  </div>
                </div>

                {/* row-3 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Review Rating */}
                  <div className="w-full">
                    <label className="w-4/12 pl-1 ">Review Rating</label>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                      isRequired
                    />
                  </div>
                  {/* Date */}
                  {/* <div className="w-full">
                    <label className="w-4/12 pl-1 ">Review Date</label>
                    <input
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      type="date"
                      name="date"
                      placeholder="Review Date"
                      defaultValue={findReview?.date}
                    />
                  </div> */}
                </div>
                {/* row-3 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Photo */}
                  <div className="w-full">
                    <label className=" w-full pl-1">Reviewer Photo</label>
                    <input
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      type="text"
                      name="photo"
                      id=""
                      placeholder="Reviewer Photo URL"
                      required
                      defaultValue={findReview?.photo}
                    />
                  </div>
                </div>
              </div>
              <input
                className="btn w-full mt-6 bg-[#75b5a0] hover:bg-[#99cfbd]   text-white uppercase font-light"
                type="submit"
                value="Update"
              />
            </form>
          </div>

          {/* Data Table */}
          <div className="mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            {/* <TaskList></TaskList> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
