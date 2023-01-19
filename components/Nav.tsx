import Link from "next/link";

import Logo from "@/components/Logo";
import Button from "@/components/Button";
import menuContent from "@/json/menu.json";

export default function Nav() {
  return (
    <nav className="w-full bg-black">
      <div className="container flex mx-auto justify-between items-center">
        <Logo />
        <div className="group text-white flex items-center space-x-6">
          <ul className="space-x-6 flex">
            {menuContent.map((item) => (
              <li key={item.menu} className="hover:text-red-500">
                {item.link && <Link href={item.link}>{item.menu}</Link>}
              </li>
            ))}
          </ul>
          <Button
            text="Request Product"
            className="bg-white text-black px-5 py-2 rounded-full hover:opacity-80"
          />
          <Button
            text="Register"
            className="bg-orange-500 text-white px-5 py-2 rounded-full hover:opacity-80"
          />
        </div>
      </div>
    </nav>
  );
}
