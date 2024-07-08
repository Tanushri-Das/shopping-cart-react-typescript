import { CartContext } from "@/Contexts/CartContext/CartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCart;
