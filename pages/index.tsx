import AdBanner from "@/components/AdBanner";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Layout from "@/layout";

export default function Home() {
  return (
    <Layout title="Welcome, find bullions at best prices">
      <section>
        <Banner />
        <Search />
        <AdBanner url="/ad-banner-1.webp" />
        <AdBanner url="/ad-banner-2.webp" />
      </section>
    </Layout>
  );
}
