import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import Button from "@/components/Button";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function Search({ setQuery }: Props) {
  const [product, setProduct] = useState("");

  function onSubmit(e: any) {
    e.preventDefault();
    setQuery(product);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="container mx-auto relative -mt-14 rounded-full"
    >
      <input
        placeholder="Enter Product Name"
        className="placeholder:text-gray-400 text-2xl py-6 px-10 placeholder:text-2xl w-full border rounded-full shadow"
        onChange={(e) => setProduct(e.target.value)}
      />
      <Button
        text="Search"
        className="px-8 py-3 w-40 text-xl bg-lightOrange text-white rounded-full absolute right-8 top-4"
        type="submit"
      />
    </form>
  );
}
