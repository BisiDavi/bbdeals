import Button from "@/components/Button";

export default function Search() {
  return (
    <form className="container mx-auto relative -mt-14 rounded-full">
      <input
        placeholder="Enter Product Name"
        className="placeholder:text-gray-400 text-2xl py-8 px-10 placeholder:text-2xl w-full border rounded-full shadow"
      />
      <Button
        text="Search"
        className="px-8 py-4 w-40 text-xl bg-lightOrange text-white rounded-full absolute right-8 top-5"
      />
    </form>
  );
}
