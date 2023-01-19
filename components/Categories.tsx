import Image from "next/image";
import categoryContent from "@/json/products.json";

export default function Categories() {
  return (
    <aside className="w-1/4">
      <h2 className="text-xl my-2">Categories</h2>
      <ul className="shadow py-2 px-4 rounded-xl my-4">
        {categoryContent.categories.map((item) => (
          <li
            key={item.category}
            className=" flex px-6 items-center space-x-4 border-b last:border-b-0 h-12 hover:bg-gray-100"
          >
            <Image src={item.img} alt={item.category} height={30} width={30} />
            <p className="font-medium text-gray-500">{item.category}</p>
          </li>
        ))}
      </ul>
      <ul className="flex items-center space-x-4">
        {categoryContent.group.map((item) => (
          <li key={item.text} className="flex flex-col space-y-4">
            <Image
              src={item.img}
              alt={item.img}
              height={200}
              width={200}
              className="rounded-full"
            />
            <p className="font-bold text-center text-gray-500">{item.text}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/aside-banner.webp"
        alt="aside banner"
        height={500}
        width={300}
        className="mt-10 w-full"
      />
    </aside>
  );
}
