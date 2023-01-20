import { useState } from "react";

import Product from "@/components/Product";
import ProductList from "@/components/ProductList";
import ProductGridHeader from "@/components/ProductGridHeader";
import type { productType } from "@/types";

interface Props {
  products: productType[];
}

export default function ProductGrid({ products }: Props) {
  const [view, setView] = useState("grid");

  return (
    <div className="w-full">
      <ProductGridHeader view={view} setView={setView} />
      {view === "grid" ? (
        <div className="grid grid-cols-4 gap-6 mt-4">
          {products.map((product, index) => (
            <Product key={`${product.title}-${index}`} product={product} />
          ))}
        </div>
      ) : (
        <div className="list mt-4 flex flex-col">
          {products.map((product, index) => (
            <ProductList key={`${product.title}-${index}`} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
