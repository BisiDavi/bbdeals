import Button from "@/components/Button";
import Image from "next/image";

interface Props {
  product: {
    img: string;
    title: string;
    dealer: string;
    discount: string;
  };
}

export default function Product({ product }: Props) {
  return (
    <div className="shadow rounded-lg p-4 relative">
      <Image src={product.img} height={200} width={200} alt={product.title} className="absolute  -top-40" />
      <h4 className="text-center font-bold">{product.title}</h4>
      <p className="font-normal mt-4">{product.dealer}</p>
      <p className="font-medium text-center">{product.discount}</p>
      <div className="group flex mt-4 justify-between">
        <Button
          text="Compare"
          className="bg-orange-500 py-3 text-white rounded-full w-32"
        />
        <Button
          text="Observe"
          className="bg-black py-3 text-white rounded-full w-32"
        />
      </div>
    </div>
  );
}
