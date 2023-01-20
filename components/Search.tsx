import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import Button from "@/components/Button";

interface Props {
  query: string;
  search: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ query, search, setQuery, setSearch }: Props) {
  function onSubmit() {
    setSearch(true);
  }

  function resetQuery() {
    setQuery("");
    setSearch(false);
  }

  const searchText = search ? "Clear" : "Search";

  const searchFunc = (e: any) => {
    e.preventDefault();
    return search ? resetQuery() : onSubmit();
  };

  return (
    <form
      onSubmit={searchFunc}
      className="container mx-auto relative -mt-14 rounded-full"
    >
      <input
        placeholder="Enter Product Name"
        className="placeholder:text-gray-400 text-2xl py-6 px-10 placeholder:text-2xl w-full border rounded-full shadow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        text={searchText}
        className="px-8 py-3 w-40 text-xl bg-lightOrange text-white rounded-full absolute right-8 top-4"
        type="submit"
      />
    </form>
  );
}
