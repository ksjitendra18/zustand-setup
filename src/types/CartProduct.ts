import Product from "./Product";

type CartProduct = Product & {
  quantity: number;
};

export default CartProduct;
