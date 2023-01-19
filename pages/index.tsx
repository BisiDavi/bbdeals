import AdBanner from "@/components/AdBanner";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import ProductView from "@/components/ProductView";
import Search from "@/components/Search";
import Layout from "@/layout";

export default function Home() {
  return (
    <Layout title="Welcome, find bullions at best prices">
      <section>
        <Banner />
        <Search />
        <AdBanner url="/ad-banner-1.webp" />
        <ProductView>
          <Categories />
          <ProductGrid />
        </ProductView>
        <AdBanner url="/ad-banner-2.webp" />
      </section>
    </Layout>
  );
}
