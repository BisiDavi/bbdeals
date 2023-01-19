import Image from "next/image";
import Search from "@/components/Search";

export default function Banner() {
  return (
    <div className="w-full relative">
      <Image
        src="/banner.webp"
        alt="find bullions at best prices online"
        height={970}
        width={1400}
        className="w-full"
      />
      <Search />
    </div>
  );
}
