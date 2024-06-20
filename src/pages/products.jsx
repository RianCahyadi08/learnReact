import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button/Button";
import Counter from "../components/Fragments/CounterCart";
import { useState, useEffect } from "react";
import Rupiah from "../components/Elements/Formats/Rupiah";
import { getProducts } from "../services/product.service";
import Dollar from "../components/Elements/Formats/Dollar";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Header from "../components/Fragments/Header";
import { getId } from "../hooks/useLogin";

// const email = localStorage.getItem("email");

const ProductPage = (props) => {
  const [carts, setCarts] = useState([
    // {
    //   id: 1,
    //   qty: 1,
    // },
  ]);

  const handleRemoveCart = () => {
    localStorage.removeItem("carts");
    alert("Successfully removed");
    window.location.href = "/products";
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const id = getId();

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

  const handleCheckout = () => {
    console.log("Checkout");
  };

  useEffect(() => {
    if (products.length > 0 && carts.length > 0) {
      const sum = carts.reduce((acc, item) => {
        const product = products.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (id) => {
    if (carts.find((cart) => cart.id === id)) {
      setCarts(
        carts.map((cart) =>
          cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart
        )
      );
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
      <Header username={username} id={id}></Header>
      <div className="flex flex-row">
        <div className="basis-3/4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.HeaderImage imageProduct={product.image} />
                <CardProducts.Content
                  nameProduct={product.title}
                  descriptionProduct={product.description}
                  priceProduct={product.price}
                  nameButton="Add to Cart"
                  onClick={handleAddToCart}
                  id={product.id}
                />
              </CardProducts>
            ))}
        </div>
        <div className="basis-1/4 fixed right-0 bottom-0 bg-gray-100 rounded-xl p-4">
          <div className="title-cart mt-5 font-semibold text-3xl text-blue-500">
            Cart
          </div>
          <table className="table-auto text-left border-separate">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                carts.map((cart, index) => {
                  const product = products.find(
                    (product) => product.id === cart.id
                  );
                  return (
                    <>
                      <tr>
                        <td>{product.title.substring(0, 20)}</td>
                        <td>
                          <Dollar number={product.price} />
                        </td>
                        <td>{cart.qty}</td>
                        <td>
                          <Dollar number={product.price * cart.qty} />
                        </td>
                      </tr>
                    </>
                  );
                })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    <Dollar number={totalPrice} />
                  </b>
                </td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td>
                  {carts.length > 0 && (
                    <Button
                      type="button"
                      onClick={handleRemoveCart}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-400 transition duration-300"
                      name="Remove"
                    ></Button>
                  )}
                </td>
                <td>
                  {carts.length > 0 && (
                    <Button
                      type="button"
                      onClick={handleCheckout}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-400 transition duration-300"
                      name="Checkout"
                    ></Button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductPage;
