import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

import Search from "@/components/Search";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function Banner({ setQuery }: Props) {
  return (
    <div className="w-full relative">
      <Image
        src="/banner.webp"
        alt="find bullions at best prices online"
        height={970}
        width={1400}
        className="w-full"
      />
      <Search setQuery={setQuery} />
    </div>
  );
}
