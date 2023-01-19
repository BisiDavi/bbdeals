import menuContent from "@/json/menu.json";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function Nav() {
  return (
    <nav className="w-full bg-black">
      <div className="container justify-between items-center">
        <Logo />
        <div className="group">
          <ul className="space-x-4">
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
