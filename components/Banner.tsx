import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full">
      <Image
        src="/banner.webp"
        alt="find bullions at best prices online"
        height={970}
        width={2000}
      />
    </div>
  );
}
