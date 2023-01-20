import Image from "next/image";
import { PropsWithChildren } from "react";

export default function Banner({ children }: PropsWithChildren) {
  return (
    <div className="w-full relative">
      <Image
        src="/banner.webp"
        alt="find bullions at best prices online"
        height={970}
        width={1400}
        className="w-full"
      />
      {children}
    </div>
  );
}
