import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Gallery from "@/components/gallery";
import Partners from "@/components/partners";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
