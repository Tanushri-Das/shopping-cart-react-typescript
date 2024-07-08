import ProductCard from "@/components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="m-12">
      <h2 className="text-3xl mb-8 text-center font-medium">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
