import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <Image
        src="/footer-banner.webp"
        height={400}
        width={1440}
        alt="footer banner"
        className="footerBanner w-full"
      />
    </footer>
  );
}
