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
import Cart from "../components/Fragments/Cart";

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
      {console.log(products)}
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
        <Cart
          products={products}
          totalPrice={totalPrice}
          carts={carts}
          handleRemoveCart={handleRemoveCart}
          handleCheckout={handleCheckout}
        />
      </div>

      {/* <div className="flex justify-center">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductPage;
