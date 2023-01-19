import Button from "@/components/Button";
import Image from "next/image";

interface Props {
  product: {
    img: string;
    title: string;
    size: string;
    dealer: string;
    discount: string;
  };
}

export default function Product({ product }: Props) {
  return (
    <div className="">
      <Image
        src={product.img}
        height={200}
        width={200}
        alt={product.title}
        className="mx-auto"
      />
      <div className="card bg-white shadow p-4 -mt-20 pt-24 rounded-lg border hover:bg-gray-50">
        <h4 className="text-center font-bold">{product.title}</h4>
        <h4 className="text-center font-semibold ">{product.size}</h4>
        <p className="text-center font-normal mt-4">{product.dealer}</p>
        <p className="font-medium text-center text-lightOrange font-semibold">
          {product.discount}
        </p>
        <div className="group flex mt-4 space-x-2 justify-between">
          <Button
            text="Compare"
            className="bg-lightOrange py-3 text-white rounded-full w-32 hover:opacity-80"
          />
          <Button
            text="Observe"
            className="bg-darkGray py-3 text-white rounded-full w-32 hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
