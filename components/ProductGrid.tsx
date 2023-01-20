import { useState } from "react";

import Product from "@/components/Product";
import ProductGridHeader from "@/components/ProductGridHeader";
import productsContent from "@/json/products.json";

export default function ProductGrid() {
  const [view, setView] = useState("grid");

  return (
    <div>
      <ProductGridHeader setView={setView} />
      <div className="grid grid-cols-4 gap-6 mt-4">
        {productsContent.products.map((product, index) => (
          <Product key={`${product.title}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
