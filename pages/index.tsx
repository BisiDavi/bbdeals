import FuzzySearch from "fuzzy-search";
import { useState } from "react";

import AdBanner from "@/components/AdBanner";
import AllFavourites from "@/components/AllFavourites";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FooterText from "@/components/FooterText";
import ProductGrid from "@/components/ProductGrid";
import ProductView from "@/components/ProductView";
import Layout from "@/layout";
import productsContent from "@/json/products.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const searcher = new FuzzySearch(productsContent.products, ["title"]);
  const result = query ? searcher.search(query) : productsContent.products;

  return (
    <Layout title="Welcome, find bullions at best prices">
      <Banner setQuery={setQuery} />
      <AdBanner url="/ad-banner-1.webp" />
      <ProductView>
        <Categories />
        <ProductGrid products={result} />
      </ProductView>
      <AdBanner url="/ad-banner-2.webp" className="container mx-auto" />
      <AllFavourites />
      <FooterText />
    </Layout>
  );
}
