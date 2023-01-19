import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import footerLink from "@/json/menu.json";

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
      <div className="footer-bottom py-10 bg-darkGray">
        <div className="container mx-auto text-white">
          <h2 className="text-4xl my-2">Best Bullion Deals</h2>
          <div className="group my-4 flex justify-between mt-8">
            <ul className="flex items-center space-x-20">
              {footerLink.footer.map((item) => (
                <li key={item.link}>
                  <Link href={item.link} className="text-xl hover:text-red-500">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="button-group space-x-6">
              <Button
                text="Request a Product"
                className="bg-lightOrange px-4 py-2 rounded-full w-48"
              />
              <Button
                text="Subscribe"
                className="bg-white rounded-full px-4 py-2 text-black w-48"
              />
            </div>
          </div>
          <hr className="my-14" />
        </div>
        <p className="text-md text-white text-center">
          copyright© 2022. Best Bullion Deals All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
