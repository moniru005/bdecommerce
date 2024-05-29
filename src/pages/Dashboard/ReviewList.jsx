import { Helmet } from "react-helmet-async";
import useReview from "../../hooks/useReview";

const ReviewList = () => {
  const [reviews] = useReview();
  return (
    <div className="border-2  font-workSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">All Reviews</h2>
        <table id="" className="table table-auto w-full">
          <thead>
            <tr className="border text-slate-900 text-center bg-[#75b5a0] user-heading">
              <th className="border">SL</th>
              <th className="border">Photo</th>
              <th className="border">Name</th>
              <th className="border">Details</th>
              <th className="border">Date</th>
              <th className="border">Rating</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {reviews?.map((item, index) => (
              <tr key={item._id} className="user-body">
                <td className="border ">{index + 1}</td>
                <td className="border">
                  <div className="size-20 rounded-full border ">
                    <img
                      className="size-20 rounded-full"
                      src={item?.photo}
                      alt=""
                    />
                  </div>
                </td>
                <td className="border ">{item?.name}</td>
                <td className="border ">{item?.details}</td>
                <td className="border ">{item?.date}</td>
                <td className="border ">{item?.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Helmet></Helmet>
    </div>
  );
};

export default ReviewList;
