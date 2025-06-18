import { About } from "@/components/about";
import { ProductCarousel } from "@/components/product-carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

export default function Home() {
  const categories = [
    { id: "leguminosas", name: "Cultivos otoñales - leguminosas" },
    { id: "gramineas", name: "Cultivos otoñales - gramineas" },
  ];
  const categories2 = [{ id: "estivales", name: "Cultivos estivales" }];
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
      title: "Melilotus alba",
      description:
        "Excelente cobertura vegetal y fuente de proteína para alimentación animal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "leguminosas",
    },
    {
      id: 5,
      title: "Avena",
      description: "Cereal resistente y nutritivo para forraje y grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 6,
      title: "Cebada",
      description: "Ideal para pastoreo temprano y cobertura invernal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 7,
      title: "Centeno",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 8,
      title: "Rye grass",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 9,
      title: "Triticale",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 10,
      title: "Agropiro",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
    {
      id: 11,
      title: "Festuca",
      description: "Excelente opción para forraje y producción de grano.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "gramineas",
    },
  ];
  const products2 = [
    {
      id: 1,
      title: "Maíz doble propósito",
      description:
        "Forraje de alta calidad, ideal para la nutrición del ganado y la mejora del suelo.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 2,
      title: "Sorgo Forrajero Sudan",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 3,
      title: "Sorgo Silero Fotosensitivo",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 4,
      title: "Sorgo Silero Doble Propósito",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 5,
      title: "Moha Colorada Gigante",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 6,
      title: "Mijo Amarillo",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 7,
      title: "Maíz de Guinea",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 8,
      title: "Grama Rhodes",
      description:
        "Leguminosa versátil, perfecta para rotación de cultivos y fijación de nitrógeno.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
    {
      id: 9,
      title: "Panicum Coloratum",
      description:
        "Excelente cobertura vegetal y fuente de proteína para alimentación animal.",
      imageUrl: "/semillas_de_girasol.jpg",
      category: "estivales", // Changed from "leguminosas" to "estivales"
    },
  ];
  return (
    <div className="bg-[#fffbef]">
      <Header />
      <div id="inicio">
        <Hero />
      </div>

      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="bg-[#E6F8D8] rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <div id="productos1" className="py-2">
            <ProductCarousel
              products={products}
              categories={categories}
              title="Nuestros productos"
              id="productos1"
              showHeader={true}
            />
          </div>
          <div id="productos2" className="py-2">
            <ProductCarousel
              products={products2}
              categories={categories2}
              title="Nuestros productos"
              id="productos2"
              showHeader={false}
            />
          </div>
        </div>
      </div>

      <div id="about" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="bg-[#E6F8D8] rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <About />
        </div>
      </div>

      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}
