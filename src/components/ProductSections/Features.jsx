import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import ProductCard from "./ProductCard";

const Features = () => {
  const [products] = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const productsPerPage = 8;

  const filteredProducts = products.filter((product) => {
    return searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      : true;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //  search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 lg:justify-between justify-center  w-full items-center mb-12 p-4">
        <div className="lg:w-7/12   w-full items-center">
          <h1 className="text-[32px] font-[700]">Feature Products</h1>
          <p className="text-[18px] font-[500] text-[#969696]">
            Order now and appreciate the enjoying our products
          </p>
        </div>
        <div className="lg:w-5/12 w-full">
          <input
            className="p-4 rounded-lg border w-full"
            type="search"
            name=""
            id=""
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
          />
        </div>
      </div>
      {/* 4 columns */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 p-2 lg:p-0">
        {/* column-1 */}
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${
              index + 1 === currentPage
                ? "bg-[#C1DCDC] text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Features;
