import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import Dollar from "../components/Elements/Formats/Dollar";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {Object.keys(product).length > 0 && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  className="w-full h-auto rounded-lg"
                  src={`${product.image}`}
                  alt={`${product.image}`}
                />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <h2 className="text-2xl font-bold mb-2">Category: {product.category}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-blue-500 font-bold mb-4">Rate: {product.rating.rate}/5 ({product.rating.count})</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    <Dollar number={product.price}></Dollar>
                  </span>
                </div>
                <div className="flex items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailProductPage;
