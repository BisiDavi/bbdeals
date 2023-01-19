import Image from "next/image";

import favouriteContent from "@/json/products.json";

export default function AllFavourites() {
  return (
    <div className="container flex flex-col mx-auto my-4 mb-8">
      <h2 className="text-center text-2xl font-medium">All Time Favourites</h2>
      <ul className="flex items-center w-full">
        {favouriteContent.favourites.map((item, index) => (
          <li key={`${item.text}-${index}`} className=" w-full">
            <Image src={item.img} alt={item.text} height={150} width={150} />
            <p className="font-medium mt-4">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
