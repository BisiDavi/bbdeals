import categoryContent from "@/json/products.json";

export default function Categories() {
  return (
    <aside className="w-1/4">
      <h2 className="text-xl my-2">Categories</h2>
      <ul className="shadow py-4 px-6 rounded-xl my-4">
        {categoryContent.categories.map((item) => (
          <li key={item.category} className="my-4 border-b last:border-b-0">
            {item.category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
