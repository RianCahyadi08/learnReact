import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button/Button";
import Counter from "../components/Fragments/CounterCart";
import { useState } from "react";
import Rupiah from "../components/Elements/Formats/Rupiah";

const products = [
  {
    id: 1,
    name: "Ice Cream",
    image: "images/ice-cream.jpg",
    price: "20000",
    description:
      "This is a brief description of the product. It highlights the key features and benefits to entice the customer to make a purchase",
  },
  {
    id: 2,
    name: "Nuggets",
    image: "images/nuggets.jpg",
    price: "30000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea, placeat reiciendis vitae quasi amet. Voluptatem beatae quae expedita qui doloribus, sint minus architecto delectus aperiam magni numquam alias mollitia.",
  },
  {
    id: 3,
    name: "Tomato",
    image: "images/tomato.jpg",
    price: "10000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea, placeat reiciendis vitae quasi amet. Voluptatem beatae quae expedita qui doloribus, sint minus architecto delectus aperiam magni numquam alias mollitia.",
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/";
};

const ProductPage = (props) => {
  const [carts, setCarts] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (carts.find(cart => cart.id === id)) {
      setCarts(carts.map(cart => cart.id === id ? {...cart, qty: cart.qty + 1} : cart));
    } else {
      setCarts([
       ...carts,
        {
          id: id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex justify-end p-4 bg-blue-500 text-white">
        <b className="mr-4">{email}</b>
        {/* <span className="px-4">11</span> */}
        {/* <Counter /> */}
        <Button
          type="button"
          onClick={handleLogout}
          className="text-white"
          name="Logout"
        />
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.HeaderImage imageProduct={product.image} />
              <CardProducts.Content
                nameProduct={product.name}
                descriptionProduct={product.description}
                priceProduct={product.price}
                nameButton="Add to Cart"
                onClick={handleAddToCart}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>
        <div className="basis-1/2">
          <div className="title-cart mt-5 font-semibold text-3xl text-blue-500">Cart</div>
          {/* <ul className="list-none">
            {carts.map((cart, index) => {
              console.log(cart);
              return (
                <>
                  <li>Id: {cart.id}</li>
                  <li>Qty: {cart.qty}</li>
                </>
              );
            })}
          </ul> */}
          <table className="table-auto text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart, index) => {
                const product = products.find((product) => product.id === cart.id);
                return (
                  <>
                    <tr>
                      <td>{product.name}</td>
                      <td><Rupiah number={product.price} /></td>
                      <td>{cart.qty}</td>
                      <td><Rupiah number={cart.qty * product.price}></Rupiah></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
