import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button/Button";
import Counter from "../components/Fragments/CounterCart";
import { useState, useEffect } from "react";
import Rupiah from "../components/Elements/Formats/Rupiah";
import { getProducts } from "../services/product.service";
import Dollar from "../components/Elements/Formats/Dollar";
import { getUsername } from "../services/auth.service";

// const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const ProductPage = (props) => {
  const [carts, setCarts] = useState([
    // {
    //   id: 1,
    //   qty: 1,
    // },
  ]);

  const handleRemoveFromCart = (id) => {
    setCarts(carts.filter((cart) => cart.id !== id));
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
    setUsername(getUsername(token));
  }, []);

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
      <div className="flex justify-end p-4 bg-blue-500 text-white">
        <b className="mr-4">{username}</b>
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
        <div className="basis-1/2">
          <div className="title-cart mt-5 font-semibold text-3xl text-blue-500">
            Cart
          </div>
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
                          {/* <Rupiah number={product.price} /> */}
                          <Dollar number={product.price} />
                        </td>
                        <td>{cart.qty}</td>
                        <td>
                          {/* <Rupiah number={cart.qty * product.price}></Rupiah> */}
                          <Dollar number={product.price} />
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
                    {/* <Rupiah number={totalPrice}></Rupiah> */}
                    <Dollar number={totalPrice} />
                  </b>
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
