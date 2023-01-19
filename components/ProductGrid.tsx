import Button from "@/components/Button";
import Product from "@/components/Product";
import productsContent from "@/json/products.json";

export default function ProductGrid() {
  return (
    <div>
      <h2 className="font-normal text-3xl">Top Products</h2>
      <div className="group flex mt-4 justify-between items-center">
        <div className="left space-x-2">
          <Button
            text="Trending"
            className="py-4 rounded-lg text-white w-36 bg-lightOrange"
          />
          <Button
            text="Near to Spot"
            className="py-4 rounded-lg w-40 bg-gray-200"
          />
          <Button
            text="Newly Launched"
            className="py-4 rounded-lg w-40 bg-gray-200"
          />
        </div>
        <ul className="right flex space-x-4">
          <li>Detailed View</li>
          <li>Grids View</li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {productsContent.products.map((product, index) => (
          <Product key={`${product.title}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
