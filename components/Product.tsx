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
    <div className="shadow rounded-lg">
      <Image src={product.img} height={200} width={200} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.dealer}</p>
      <p>{product.discount}</p>
      <div className="group flex justify-between">
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
