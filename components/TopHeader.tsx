import headerContent from "@/json/header.json";

export default function TopHeader() {
  return (
    <div className="w-full bg-gray-600 py-3">
      <div className="container text-white mx-auto flex justify-between items-center">
        <ul className="space-x-8 flex">
          {headerContent.map((item) => {
            const elementColor =
              item.type === "down" ? "text-red-500" : "text-green-500";
            return (
              <li key={item.element}>
                {item.element}:<span className="ml-1 mr-2">{item.price}</span>{" "}
                <span className={elementColor}>{item.diff}</span>
              </li>
            );
          })}
        </ul>
        <a href="mailto:bbdg@gmail.com">bbdg@gmail.com</a>
      </div>
    </div>
  );
}
