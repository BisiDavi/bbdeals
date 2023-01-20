import AdBanner from "@/components/AdBanner";
import AllFavourites from "@/components/AllFavourites";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FooterText from "@/components/FooterText";
import ProductGrid from "@/components/ProductGrid";
import ProductView from "@/components/ProductView";
import Layout from "@/layout";

export default function Home() {
  return (
    <Layout title="Welcome, find bullions at best prices">
      <Banner />
      <AdBanner url="/ad-banner-1.webp" />
      <ProductView>
        <Categories />
        <ProductGrid />
      </ProductView>
      <AdBanner url="/ad-banner-2.webp" className="container mx-auto" />
      <AllFavourites />
      <FooterText />
    </Layout>
  );
}
