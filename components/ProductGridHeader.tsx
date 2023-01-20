import Image from "next/image";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import Button from "@/components/Button";
import productsContent from "@/json/products.json";

interface Props {
  setView: Dispatch<SetStateAction<string>>;
}

export default function ProductGridHeader({ setView }: Props) {
  const [productCategory, setProductCategory] = useState("Trending");

  function onCategoryHandler(item: string) {
    setProductCategory(item);
  }
  return (
    <>
      <h2 className="font-normal text-3xl">Top Products</h2>
      <div className="group flex mt-4 justify-between items-center">
        <div className="left space-x-2">
          {productsContent.productCategories.map((item) => {
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
        <div className="right flex space-x-4">
          {productsContent.views.map((item) => (
            <Button
              key={item.text}
              icon={
                <Image
                  src={item.icon}
                  height={30}
                  width={30}
                  alt={item.text}
                  className="mr-1"
                />
              }
              text={item.text}
              className="flex items-center hover:bg-gray-100 px-4 hover:rounded-full py-2"
              onClick={() => setView(item.value)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
