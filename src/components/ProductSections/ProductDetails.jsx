import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { Rating } from "@smastrom/react-rating";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const ProductDetails = () => {
  const [products] = useProduct();
  const [likeCount, setLikeCount] = useState(10);
  const [dislikeCount, setDislikeCount] = useState(0);

  const categories = [{ name: "Description" }, { name: "Reviews" }];

  const { id } = useParams();
  const filterProduct = products.find((product) => product._id === id);

  // Handlers for like and dislike button clicks
  const handleLike = () => {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
    setDislikeCount((prevDislikeCount) => Math.max(prevDislikeCount - 1, 0));
  };

  const handleDislike = () => {
    setDislikeCount((prevDislikeCount) => prevDislikeCount + 1);
    setLikeCount((prevLikeCount) => Math.max(prevLikeCount - 1, 0));
  };

  return (
    <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-center lg:sticky top-8">
          {/* main image */}
          <div className=" p-4 flex items-center sm:h-[380px] rounded">
            <img
              src={filterProduct?.image}
              alt="Product"
              className="w-full max-h-full object-contain object-top"
            />
          </div>
          {/* others images */}
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 flex items-center rounded sm:h-[182px]">
              <img
                src="https://readymadeui.com/images/product12.webp"
                alt="Product"
                className="w-full max-h-full object-contain object-top"
              />
            </div>

            <div className="bg-gray-100 p-4 flex items-center rounded sm:h-[182px]">
              <img
                src="https://readymadeui.com/images/product9.webp"
                alt="Product"
                className="w-full max-h-full object-contain object-top"
              />
            </div>
          </div> */}
        </div>
        <div className="max-w-xl">
          {/* name and brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {filterProduct?.name}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{filterProduct?.brand}</p>
          </div>
          {/* reviews */}
          <div className="flex space-x-1 mt-4">
            <Rating style={{ maxWidth: 120 }} value={filterProduct?.rating} />

            <button
              type="button"
              className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 mr-1"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                  data-original="#000000"
                />
                <path
                  d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                  data-original="#000000"
                />
                <path
                  d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                  data-original="#000000"
                />
              </svg>
              {filterProduct?.rating} Reviews
            </button>
          </div>
          {/* price */}
          <div className="mt-4">
            <h3 className="text-gray-800 text-3xl font-bold">{`${
              "$ " + filterProduct?.price
            }`}</h3>
          </div>

          {/* <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">Choose a Size</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                SM
              </button>
              <button
                type="button"
                className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                MD
              </button>
              <button
                type="button"
                className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                LG
              </button>
              <button
                type="button"
                className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                XL
              </button>
            </div>
          </div> */}

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
            >
              Buy now
            </button>
            <button
              type="button"
              className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
            >
              Add to cart
            </button>
          </div>
          {/* tabs */}
          <div className="mt-8">
            <TabGroup className="">
              <TabList className="flex gap-4 border border-x-0 border-t-0 border-b-[#75b5a0]">
                {categories.map(({ name }) => (
                  <Tab
                    key={name}
                    className=" py-1 px-3 text-lg/6 font-semibold text-black focus:outline-none data-[selected]:bg-[#75b5a0]/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-[#75b5a0]/10 data-[focus]:outline-1 data-[focus]:outline-black"
                  >
                    {name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="p-4">
                <TabPanel>{filterProduct?.details}</TabPanel>
                <TabPanel>
                  <div className="flex flex-col gap-y-2">
                    <h1>Reviewer Name: </h1>
                    <div className="flex">
                      <div>
                        <Rating
                          style={{ maxWidth: 120 }}
                          value={filterProduct?.rating}
                        />
                      </div>
                      <div className="flex flex-row items-center gap-4">
                        <button
                          type="button"
                          className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
                        >
                          {filterProduct?.rating} Reviews
                        </button>

                        {/* like / dislike */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleLike}
                            className="px-2.5 py-1.5 bg-green-100 text-xs text-green-800 rounded-md flex items-center"
                          >
                            <AiOutlineLike />
                            {likeCount} Like
                          </button>
                          <button
                            onClick={handleDislike}
                            className="px-2.5 py-1.5 bg-red-100 text-xs text-red-800 rounded-md flex items-center"
                          >
                            <AiOutlineDislike />
                            {dislikeCount} Dislike
                          </button>
                        </div>
                      </div>
                    </div>

                    <p>Review Text</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
