import Button from "../Elements/Button/Button";
import Dollar from "../Elements/Formats/Dollar";

const Cart = (props) => {
  return (
    <>
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
            {props.products.length > 0 &&
              props.carts.map((cart, index) => {
                const product = props.products.find(
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
                  <Dollar number={props.totalPrice} />
                </b>
              </td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td>
                {props.carts.length > 0 && (
                  <Button
                    type="button"
                    onClick={props.handleRemoveCart}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-400 transition duration-300"
                    name="Remove"
                  ></Button>
                )}
              </td>
              <td>
                {props.carts.length > 0 && (
                  <Button
                    type="button"
                    onClick={props.handleCheckout}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-400 transition duration-300"
                    name="Checkout"
                  ></Button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
