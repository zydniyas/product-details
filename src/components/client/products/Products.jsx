import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => setProducts(res.data.products));
  }, [category]);
  console.log(category);
  let content;
  if (loading) {
    content = (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="loader bg-white p-5 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  } else if (products) {
    content = (
      <div className=" bg-gray-100 dark:bg-gray-800">
        <div className="max-w-[250px] mr-auto p-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sort By:
          </label>
          <select
            id="lang"
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap justify-between gap-10 p-10 ">
          {products.map((product, i) => {
            return (
              <div
                key={i}
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-72 bg-white cursor-pointer shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.thumbnail}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {product.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <div>File not found</div>;
  }

  return content;
}

export default Products;
