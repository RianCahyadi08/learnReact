import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button/Button";

const products = [
  {
    id: "1",
    name: "Ice Cream",
    image: "images/ice-cream.jpg",
    price: "Rp. 20.000",
    description:
      "This is a brief description of the product. It highlights the key features and benefits to entice the customer to make a purchase",
  },
  {
    id: "2",
    name: "Nuggets",
    image: "images/nuggets.jpg",
    price: "Rp. 30.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea, placeat reiciendis vitae quasi amet. Voluptatem beatae quae expedita qui doloribus, sint minus architecto delectus aperiam magni numquam alias mollitia.",
  },
];

const email = localStorage.getItem('email');

const handleLogout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location.href = "/";
}

const ProductPage = (props) => {
  return (
    <>
      <div className="flex justify-end p-4 bg-blue-500 text-white">
        <b className="mr-4">{email}</b>
        <Button type='button' onClick={handleLogout} className='text-white' name='Logout' />
      </div>
      {products.map((product) => (
        <CardProducts key={product.id}>
          <CardProducts.HeaderImage imageProduct={product.image} />
          <CardProducts.Content
            nameProduct={product.name}
            descriptionProduct={product.description}
            priceProduct={product.price}
            nameButton="Add to Cart"
          />
        </CardProducts>
      ))}
    </>
  );
};

export default ProductPage;
