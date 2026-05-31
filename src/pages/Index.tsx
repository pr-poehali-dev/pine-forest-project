import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CatalogSection from '@/components/CatalogSection';
import Territory from '@/components/Territory';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CatalogSection />
        <Territory />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
