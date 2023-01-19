import menuContent from "@/json/menu.json";

export default function Nav() {
  return (
    <nav>
      <ul className="space-x-4">
        {menuContent.map((item) => (
          <li key={item.menu}>{item.menu}</li>
        ))}
      </ul>
    </nav>
  );
}
