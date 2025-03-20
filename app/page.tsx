import { About } from "@/components/about";
import { ProductCarousel } from "@/components/product-carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

export default function Home() {
  const categories = [
    { id: "leguminosas", name: "Cultivos otoñales - leguminosas" },
    { id: "gramineas", name: "Cultivos otoñales - gramineas" },
    { id: "vendidos", name: "Más vendidos" },
  ];
  const categories2 = [
    { id: "estivales", name: "Cultivos estivales" },
    { id: "vendidos2", name: "Más vendidos" },
  ];
  const products = [
    {
      id: 1,
      title: "Alfalfa",
      description:
        "Forraje de alta calidad, ideal para la nutrición del ganado y la mejora del suelo.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "leguminosas",
    },
    {
      id: 2,
      title: "Vicia Villosa",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "leguminosas",
    },
    {
      id: 3,
      title: "Vicia Sativa",
      description:
        "Excelente cobertura vegetal y fuente de proteína para alimentación animal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "leguminosas",
    },
    {
      id: 4,
      title: "Avena",
      description: "Cereal resistente y nutritivo para forraje y grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 5,
      title: "Centeno",
      description: "Ideal para pastoreo temprano y cobertura invernal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 6,
      title: "Cebada",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 7,
      title: "Vendido",
      description: "Cereal resistente y nutritivo para forraje y grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "vendidos",
    },
    {
      id: 8,
      title: "Vendido 2",
      description: "Ideal para pastoreo temprano y cobertura invernal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "vendidos",
    },
    {
      id: 9,
      title: "Vendido 3",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "vendidos",
    },
  ];
  return (
    <div className="bg-[#fffbef]">
      <Header />
      <div id="inicio">
        <Hero />
      </div>

      {/* Contenedor con padding para crear espacio alrededor */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        {/* Contenedor con fondo verde y bordes redondeados */}
        <div className="bg-[#E6F8D8] rounded-3xl overflow-hidden max-w-7xl mx-auto">
          <div id="productos1" className="py-10">
            <ProductCarousel
              products={products}
              categories={categories}
              title="Nuestros productos"
              id="productos1"
              showHeader={true}
            />
          </div>
          <div id="productos2" className="py-10">
            <ProductCarousel
              products={products}
              categories={categories2}
              title="Nuestros productos"
              id="productos2"
              showHeader={false}
            />
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}
