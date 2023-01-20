import Image from "next/image";
import Button from "@/components/Button";
import type { ProductProps } from "@/types";

export default function ProductList({ product }: ProductProps) {
  return (
    <div className="flex items-center bg-white w-full px-4 py-4 my-2 justify-between shadow border hover:bg-gray-50 rounded-lg">
      <Image src={product.img} height={120} width={120} alt={product.title} />
      <div className="">
        <h4 className="text-center font-bold">{product.title}</h4>
        <h4 className="text-center font-semibold ">{product.size}</h4>
        <p className="text-center font-normal mt-4">{product.dealer}</p>
        <p className="font-medium text-center text-lightOrange font-semibold">
          {product.discount}
        </p>
      </div>
      <div className="group flex w-1/3 h-12 mt-4  justify-between">
        <Button
          text="Compare"
          className="bg-lightOrange py-3 text-white rounded-full w-32"
        />
        <Button
          text="Observe"
          className="bg-darkGray py-3 text-white rounded-full w-32"
        />
      </div>
    </div>
  );
}
