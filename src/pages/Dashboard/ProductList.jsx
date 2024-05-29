import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const ProductList = () => {
  const [products] = useProduct();
  return (
    <div className="w-full border-2  font-workSans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <p>Note: * You can edit product by clicking the product name.</p>
        <table id="" className="table table-auto w-full">
          <thead>
            <tr className="border text-slate-900 text-center bg-[#75b5a0] user-heading">
              <th className="border">SL</th>
              <th className="border">Name</th>
              <th className="border">Image</th>
              <th className="border">Details</th>
              <th className="border">Category</th>
              <th className="border w-24">Price</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products?.map((item, index) => (
              <tr key={item._id} className="user-body">
                <td className="border ">{index + 1}</td>
                <td className="border text-left hover:text-[#75b5a0]">
                  <Link to={`/dashboard/updateProduct/${item._id}`}>
                    {item?.name}
                  </Link>
                </td>
                <td className="border">
                  <div className="size-20 rounded-full border ">
                    <img
                      className="size-20 rounded-full"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                </td>
                <td className="border text-justify ">{item?.details}</td>
                <td className="border ">{item?.category}</td>
                <td className="border font-bold">{`${"$ " + item?.price}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
