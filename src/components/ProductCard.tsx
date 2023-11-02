import { ShoppingCart } from "lucide-react";
import React from "react";
import Product from "../types/Product";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const onAddToCart = () => {
    toast.success("Added to cart", {});
  };
  return (
    <div className="flex hover:shadow-lg  transition-all ease-in duration-150 basis-1/4 flex-1  flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
      <div className="flex flex-col items-center">
        <img
          className=" w-[225px] h-[225px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="my-5">
          <h3 className="text-center  font-bold">{product.title}</h3>
          <h3 className="text-center mt-3 font-medium">${product.price}</h3>
        </div>
      </div>

      <div className="flex justify-end items-end">
        <button
          onClick={onAddToCart}
          title="Add to Cart"
          className="bg-orange-500 px-3 py-3 text-white rounded-full"
        >
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
