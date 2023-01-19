import Image from "next/image";
import categoryContent from "@/json/products.json";

export default function Categories() {
  return (
    <aside className="w-1/4">
      <h2 className="text-xl my-2">Categories</h2>
      <ul className="shadow py-4 px-6 rounded-xl my-4">
        {categoryContent.categories.map((item) => (
          <li
            key={item.category}
            className="my-4 flex items-center space-x-4 border-b last:border-b-0"
          >
            <Image src={item.img} alt={item.category} height={40} width={40} />
            <p className="font-medium text-gray-500">{item.category}</p>
          </li>
        ))}
      </ul>
      <ul className="flex items-center space-x-4">
        {categoryContent.group.map((item) => (
          <li key={item.text} className="flex flex-col space-y-4">
            <Image src={item.img} alt={item.img} height={100} width={100} />
            <p className="font-medium text-gray-500">{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
