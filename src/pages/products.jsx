import CardProducts from "../components/Fragments/CardProducts";

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

const ProductPage = (props) => {
  return (
    <>
      {products.map((product) => (
        <CardProducts>
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
