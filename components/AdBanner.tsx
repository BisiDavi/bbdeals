import Image from "next/image";

interface Props {
  url: string;
  className?: string;
}

export default function AdBanner({ url, className }: Props) {
  return (
    <div className={`my-8 w-full ${className}`}>
      <Image src={url} alt="ad banner" height={200} width={1440} />
    </div>
  );
}
