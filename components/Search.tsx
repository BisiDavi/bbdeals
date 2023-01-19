import Button from "@/components/Button";

export default function Search() {
  return (
    <form className="container rounded-full bg-white relative h-30 shadow">
      <input
        placeholder="Enter Product Name"
        className="placeholder:text-gray-500 w-full"
      />
      <Button
        text="Search"
        className="px-8 py-2 bg-orange-900 rounded-full absolute right-20 top-5"
      />
    </form>
  );
}
