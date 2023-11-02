import { Minus, Plus, X } from "lucide-react";
import React from "react";
import CartProduct from "../types/CartProduct";

interface CartItemCardProps {
  product: CartProduct;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ product }) => {
  const onIncreaseQuantity = (productId: number) => {};

  const onDecreaseQuantity = (productId: number) => {};

  const onRemoveItem = (productId: number) => {};

  return (
    <div className="flex  hover:shadow-lg  transition-all ease-in duration-150 basis-1/3 flex-1  flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
      <div className="flex flex-col items-center">
        <img
          className=" w-[225px] h-[225px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="my-5">
          <h3 className="text-center  font-bold">{product.title}</h3>
          <h3 className="text-center mt-3 font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h3>
          <h3 className="text-center mt-3 font-medium">
            Quantity: {product.quantity}
          </h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mb-2">
        <button
          onClick={() => onIncreaseQuantity(product.id)}
          title="Increase quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <Plus />
        </button>
        <button
          onClick={() => onDecreaseQuantity(product.id)}
          title="Decrease Quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <Minus />
        </button>
        <button
          onClick={() => onRemoveItem(product.id)}
          title="Remove item from cart"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
