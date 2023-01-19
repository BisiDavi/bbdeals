import menuContent from "@/json/menu.json";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function Nav() {
  return (
    <nav className="w-full bg-black">
      <div className="container flex mx-auto justify-between items-center">
        <Logo />
        <div className="group text-white flex space-x-4">
          <ul className="space-x-6 flex">
            {menuContent.map((item) => (
              <li key={item.menu}>{item.menu}</li>
            ))}
          </ul>
          <Button text="Request Product" />
          <Button text="Register" />
        </div>
      </div>
    </nav>
  );
}
