import Button from "../Elements/Button/Button";
import { useState } from "react";
import Rupiah from "../Elements/Formats/Rupiah";
import Dollar from "../Elements/Formats/Dollar";

const handleAddToCart = () => {
  // const [carts, setCarts] = useState([{
  //   name: 'basreng',
  //   price: 20000,
  //   quantity: 1,
  //   total: 20000,
  // }]);
  console.log("Add to cart");
}

const CardProducts = (props) => {
  return (
    <>
      <div className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg mt-5 mb-15">
        <div className="flex flex-col md:flex-row">{props.children}</div>
      </div>
    </>
  );
};

const HeaderImage = (props) => {
  return (
    <>
      <div className="md:w-1/2">
        <img
          src={props.imageProduct}
          alt={props.imageProduct}
          className="rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold text-gray-900">
          {props.nameProduct.substring(0, 25)}
        </h1>
        <p className="mt-4 text-gray-700">{props.descriptionProduct.substring(0, 150)}</p>

        <div className="mt-4">
          <span className="text-xl font-semibold text-gray-900">
            {/* <Rupiah number={props.priceProduct}/> */}
            <Dollar number={props.priceProduct} />
          </span>
        </div>

        <div className="mt-6">
          {/* <button type="button" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300" onClick={props.onClick}>
            {props.nameButton}
          </button> */}
          <Button
            type='button'
            className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300'
            name={props.nameButton}
            onClick={() => props.onClick(props.id)}
          />
        </div>
      </div>
    </>
  );
};

CardProducts.HeaderImage = HeaderImage;
CardProducts.Content = Content;

export default CardProducts;
