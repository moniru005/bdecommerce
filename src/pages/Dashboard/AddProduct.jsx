import Swal from "sweetalert2";
// import useReview from "../../hooks/useReview";
import { Helmet } from "react-helmet-async";
import useCurrentDate from "../../hooks/useCurrentDate";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import ProductList from "./ProductList";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useProduct from "../../hooks/useProduct";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const [, , refetch] = useProduct();
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
      const productInfo = {
        name: data.name,
        category: data.category,
        brand: data.brand,
        details: data.details,
        price: data.price,
        rating: rating,
        image: image.data.display_url,
        date: currentDate,
      };
      console.log(productInfo);

      axiosPublic.post("/products", productInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Product Successfully Added`,
            showCancelButton: false,
            timer: 1000,
          });
          reset();
          navigate("/dashboard/addProduct");
          refetch();
        }
      });
    }
  };

  return (
    <div className="border rounded-t-md w-full mb-4 flex flex-col lg:flex-row font-workSans ">
      <Helmet>
        <title>Add Product</title>
      </Helmet>

      <div className=" w-full ">
        <div className="border-b-2  mb-4 rounded-t-md py-4 bg-gradient-to-r from-[#75b5a0] to-[#c7e0d8] w-full px-2">
          <h3 className="text-3xl text-white flex flex-col text-center">
            <span className="">Add Product</span>
          </h3>
          <p className="text-center">
            <small>Adding the Product using in this form</small>
          </p>
        </div>
        <div className=" rounded-lg p-6">
          {/* form */}
          <div className=" w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-4">
                {/* row-1 */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Product Name */}
                  <div className="w-full">
                    <label className=" w-full pl-1">Product Name</label>
                    <input
                      {...register("name", { required: true, maxLength: 100 })}
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Product Name"
                    />
                    {errors?.name && (
                      <span className="text-red-100">
                        Product Name is Required
                      </span>
                    )}
                  </div>
                </div>

                {/* row-2 */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  {/* Category */}
                  <div className="lg:w-1/2 w-full">
                    <label className="w-full pl-1 ">Category</label>
                    <input
                      type="text"
                      {...register("category", {
                        required: true,
                        maxLength: 20,
                      })}
                      name="category"
                      placeholder="Category"
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    />
                    {errors?.category && (
                      <span className="text-red-100">Category is Required</span>
                    )}
                  </div>
                  {/* Brand */}
                  <div className="lg:w-1/2 w-full">
                    <label className="w-full pl-1 ">Brand</label>
                    <input
                      type="text"
                      {...register("brand", {
                        required: true,
                        maxLength: 20,
                      })}
                      name="brand"
                      placeholder="Brand Name"
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    />
                    {errors?.brand && (
                      <span className="text-red-100">Brand is Required</span>
                    )}
                  </div>
                </div>
                {/* row-3 */}
                <div>
                  {/* Description */}
                  <div className="w-full">
                    <label className="w-full pl-1 ">Product Details</label>
                    <textarea
                      {...register("details", {
                        required: true,
                        maxLength: 200,
                        minLength: 20,
                      })}
                      name="details"
                      rows="10"
                      placeholder="Product Details"
                      className="w-full h-24 p-4 rounded-lg border-gray-400 bg-white border"
                    ></textarea>
                    {errors?.details && (
                      <span className="text-red-100">
                        Product details is Required
                      </span>
                    )}
                  </div>
                </div>
                {/* row-4 */}
                <div>
                  {/* Price */}
                  <div className="w-full">
                    <label className="w-full pl-1 ">Price</label>
                    <input
                      type="number"
                      {...register("price", {
                        required: true,
                      })}
                      name="price"
                      placeholder="Price"
                      className="w-full h-14 p-4 rounded-lg border-gray-400 bg-white border"
                    />
                    {errors?.price && (
                      <span className="text-red-100">
                        Product Price is Required
                      </span>
                    )}
                  </div>
                </div>

                {/* row-5 */}
                <div className="flex flex-col lg:flex-row items-start gap-4">
                  {/* Product Rating */}
                  <div className="w-full flex flex-col gap-7">
                    <label className="w-4/12 pl-1 ">Product Rating</label>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                      isRequired
                    />
                  </div>
                  {/* Photo */}
                  <div className="w-full">
                    <label className="">Product Image</label>
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
                className="btn w-full mt-6 bg-[#75b5a0] hover:bg-[#99cfbd]  text-white uppercase font-light text-lg"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>

          {/* Data Table */}
          <div className="mt-10">
            <hr className="border-b-2 border-b-light-blue-600" />
            {/* <ProductList /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
