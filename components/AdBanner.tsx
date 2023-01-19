import Image from "next/image";

interface Props {
  url: string;
}

export default function AdBanner({ url }: Props) {
  return (
    <div className="my-4 w-full">
      <Image src={url} alt="ad banner" height={200} width={1440} />
    </div>
  );
}
