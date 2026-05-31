import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogSection from '@/components/CatalogSection';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Page hero */}
        <div className="bg-pine pt-28 pb-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-sand/40" />
              <span className="text-sand/50 text-xs uppercase tracking-[0.25em] font-body">Каталог</span>
            </div>
            <h1 className="font-display text-white text-4xl xl:text-5xl font-semibold">
              Все объекты
            </h1>
            <p className="text-white/50 font-body font-light text-base mt-3 max-w-md">
              Выберите подходящий дом, коттедж или беседку для вашего отдыха в сосновом лесу.
            </p>
          </div>
        </div>
        <CatalogSection />
      </main>
      <Footer />
    </>
  );
}
