import Button from "@/components/Button";
import Product from "@/components/Product";
import productsContent from "@/json/products.json";
import Image from "next/image";
import { useState } from "react";

export default function ProductGrid() {
  const [productCategory, setProductCategory] = useState("Trending");

  function onCategoryHandler(item: string) {
    setProductCategory(item);
  }

  const categories = ["Trending", "Near to Spot", "Newly Launched"];

  return (
    <div>
      <h2 className="font-normal text-3xl">Top Products</h2>
      <div className="group flex mt-4 justify-between items-center">
        <div className="left space-x-2">
          {categories.map((item) => {
            const style =
              productCategory === item
                ? "bg-lightOrange text-white"
                : "bg-gray-200 text-black";
            return (
              <Button
                key={item}
                text={item}
                className={`py-4 rounded-lg w-36 ${style}`}
                onClick={() => onCategoryHandler(item)}
              />
            );
          })}
        </div>
        <ul className="right flex space-x-4">
          <li className="flex items-center space-x-2">
            <Image src="/list.png" height={30} width={30} alt="list" />
            <p>Detailed View</p>
          </li>
          <li className="flex items-center space-x-2">
            <Image src="/list.png" height={30} width={30} alt="list" />
            <p>Grid View</p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {productsContent.products.map((product, index) => (
          <Product key={`${product.title}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
