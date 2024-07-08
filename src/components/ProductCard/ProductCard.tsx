import React from "react";
import { Card, CardContent } from "../ui/card";
import { useCart } from "@/Contexts/CartContext/CartContext";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};
type ProductCardProps = {
  product: ProductProps;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: ProductProps) => {
    console.log(product.price);
    addToCart();
  };
  return (
    <Card className="">
      <CardContent>
        <div className="">
          <img src={product.img} className="w-64 h-64 mx-auto" alt="" />
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {product.name}
            </h2>
            <h2 className="text-xl font-medium mb-4 text-center">
              ${product.price}
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-lg text-white px-4 py-2 font-semibold rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
