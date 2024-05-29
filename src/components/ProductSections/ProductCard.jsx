import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, image, rating, details, price } = product;
  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="h-60 w-full">
        <a href={`/productDetails/${_id}`}>
          <img
            className="h-60 rounded-t-lg object-cover w-full"
            src={image}
            alt="product image"
          />
        </a>
      </div>

      {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span> */}

      <div className="mt-4 px-5 pb-5">
        <div className="h-48">
          {/* Name */}
          <Link to={`/productDetails/${_id}`}>
            <div className="h-10">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  {name.slice(0, 20)}
                </h5>
              </a>
            </div>
          </Link>

          {/* Review */}
          <div className=" flex items-center h-10">
            <span
              className={`mr-2 rounded bg-yellow-200 px-2.5 py-1 text-xs font-semibold`}
            >
              {!rating ? "0" : rating}
            </span>
            <Rating style={{ maxWidth: 120 }} value={rating} isRequired />
          </div>
          {/* details */}
          <div className="my-2 h-32">
            <p>{details}</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-10">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              {"$ " + price}
            </span>
          </p>
          <a
            href="#"
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
