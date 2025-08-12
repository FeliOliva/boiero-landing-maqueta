import { About } from "@/components/about";
import { ProductCarousel } from "@/components/product-carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

export default function Home() {
  const categories = [
    { id: "otoanales-anuales", name: "Otoñales - Anuales" },
    { id: "otoanales-perennes", name: "Otoñales - Perennes" },
  ];

  const categories2 = [
    { id: "estivales-anuales", name: "Estivales - Anuales" },
    { id: "estivales-perennes", name: "Estivales - Perennes" },
  ];

  const products = [
    // Otoñales - Anuales
    {
      id: 1,
      title: "Avena blanca",
      imageUrl: "/cultivos/1-avenablanca.jpg",
      category: "otoanales-anuales",
      description: "Forrajera invernal de rápido crecimiento y buena calidad.",
      densidad: "Densidad recomendada: 80 - 110 kg/ha",
    },
    {
      id: 2,
      title: "Avena strigosa",
      imageUrl: "/cultivos/2-avenastrigosa.jpg",
      category: "otoanales-anuales",
      description:
        "Muy rústica y adaptable y precoz, ideal para cobertura y pastoreo.",
      densidad: "Densidad recomendada: 35 - 50 kg/ha",
    },
    {
      id: 3,
      title: "Cebada forrajera",
      imageUrl: "/cultivos/3-cebadaforrajera.jpg",
      category: "otoanales-anuales",
      description:
        "Alta calidad de forraje, rápida implantación. Aptitud silera destacable por su contenido de grano.",
      densidad: "Densidad recomendada: 80 - 120 kg/ha",
    },
    {
      id: 4,
      title: "Centeno",
      imageUrl: "/cultivos/4-centeno.jpg",
      category: "otoanales-anuales",
      description: "Rústico. Muy resistente al frío y a suelos pobres.",
      densidad: "Densidad recomendada: 35 - 70 kg/ha",
    },
    {
      id: 5,
      title: "Triticale",
      imageUrl: "/cultivos/5-triticale.jpg",
      category: "otoanales-anuales",
      description:
        "Muy alta producción y gran rusticidad. Aptitud silera destacable por su volumen.",
      densidad: "Densidad recomendada: 70 - 110 kg/ha",
    },
    {
      id: 6,
      title: "Ryegrass anual",
      imageUrl: "/cultivos/6-ryegrassanual.jpg",
      category: "otoanales-anuales",
      description:
        "Alto valor nutritivo, excelente sanidad de hoja. Adaptado a pastoreo y corte. Se destaca en siembras tempranas.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 7,
      title: "Vicia villosa",
      imageUrl: "/cultivos/7-viciavillosa.jpg",
      category: "otoanales-anuales",
      description:
        "Cobertura invernal para control de malezas con excelente fijación de nitrógeno. Es importante inocular.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 8,
      title: "Vicia sativa",
      imageUrl: "/cultivos/8-viciasativa.jpg",
      category: "otoanales-anuales",
      description:
        "Forrajera de invierno de muy alta calidad. En mezcla con gramíneas se potencia la producción de forraje. Fijadora de N.",
      densidad: "Densidad recomendada: 15 - 25 kg/ha",
    },
    {
      id: 9,
      title: "Melilotus alba",
      imageUrl: "/cultivos/9-melilotusalba.jpg",
      category: "otoanales-anuales",
      description:
        "Leguminosa tolerante a suelos alcalinos. Buena fijadora de nitrógeno y alta calidad forrajera.",
      densidad: "Densidad recomendada: 8 - 12 kg/ha",
    },

    // Otoñales - Perennes
    {
      id: 10,
      title: "Agropiro alargado",
      imageUrl: "/cultivos/10-agropiroalargado.jpg",
      category: "otoanales-perennes",
      description:
        "Gramínea perenne, muy resistente a sequía y salinidad. Se lleva muy bien consociada con melilotus amarillo.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 11,
      title: "Festuca alta",
      imageUrl: "/cultivos/11-festucaalta.jpg",
      category: "otoanales-perennes",
      description: "Alta producción de forraje, tolerante al frío.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 12,
      title: "Cebadilla criolla",
      imageUrl: "/cultivos/12-cebadillacriolla.jpg",
      category: "otoanales-perennes",
      description:
        "Adaptable a diversos tipos de suelo. Destaca su gran rusticidad. Muy versátil para consociar.",
      densidad: "Densidad recomendada: 18 - 20 kg/ha",
    },
    {
      id: 13,
      title: "Melilotus amarillo",
      imageUrl: "/cultivos/13-melilotusamarillo.jpg",
      category: "otoanales-perennes",
      description:
        "Leguminosa bianual, extremadamente tolerante a suelos alcalinos o sueltos. Ideal para consociar con grama rhodes o agropiro.",
      densidad: "Densidad recomendada: 8 - 12 kg/ha",
    },
    {
      id: 14,
      title: "Trébol blanco",
      imageUrl: "/cultivos/14-trebolblanco.jpg",
      category: "otoanales-perennes",
      description:
        "Muy palatable y gran fijadora de nitrógeno. Se adapta a suelos muy húmedos con leves problemas de drenaje. Exigente en fertilidad.",
      densidad: "Densidad recomendada: 5 - 7 kg/ha",
    },
    {
      id: 15,
      title: "Trébol rojo",
      imageUrl: "/cultivos/15-trebolrojo.jpg",
      category: "otoanales-perennes",
      description:
        "Excelente calidad forrajera. Adaptable a suelos pesados, con deficiencia de fósforo y levemente ácidos.",
      densidad: "Densidad recomendada: 5 - 7 kg/ha",
    },
    {
      id: 16,
      title: "Lotus",
      imageUrl: "/cultivos/16-lotus.jpg",
      category: "otoanales-perennes",
      description:
        "Apto para suelos bajos y húmedos, ácidos y pobres en fósforo. Excelente calidad de forraje.",
      densidad: "Densidad recomendada: 4 - 6 kg/ha",
    },
    {
      id: 17,
      title: "Achicoria forrajera",
      imageUrl: "/cultivos/17-achicoriaforrajera.jpg",
      category: "otoanales-perennes",
      description: "Perenne, muy palatable y resistente al pastoreo.",
      densidad: "Densidad recomendada: 4 - 6 kg/ha",
    },
    {
      id: 18,
      title: "Alfalfa",
      imageUrl: "/cultivos/18-alfalfa.jpg",
      category: "otoanales-perennes",
      description: "Leguminosa perenne, de alta calidad y persistencia.",
      densidad: "Densidad recomendada: 12 - 20 kg/ha",
    },
  ];

  // Estivales
  const products2 = [
    {
      id: 19,
      title: "Moha",
      imageUrl: "/cultivos/19-moha.jpg",
      category: "estivales-anuales",
      description:
        "Ciclo corto, opción preferida para confección de heno. Alta respuesta a fertilización nitrogenada.",
      densidad: "Densidad recomendada: 20 - 25 kg/ha",
    },
    {
      id: 20,
      title: "Mijo amarillo",
      imageUrl: "/cultivos/20-mijo.jpg",
      category: "estivales-anuales",
      description:
        "Muy rústico y extremadamente rápido. Apto para corte, pastoreo, cosecha.",
      densidad: "Densidad recomendada: 20 - 25 kg/ha",
    },
    {
      id: 21,
      title: "Sorgo forrajero",
      imageUrl: "/cultivos/21-sorgoforrajero.jpg",
      category: "estivales-anuales",
      description:
        "Gran producción de forraje para pastoreo directo, destacable velocidad de implantación y rebrote.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 22,
      title: "Sorgo silero fotosensitivo",
      imageUrl: "/cultivos/22-sorgosilerofotosensitivo.jpg",
      category: "estivales-anuales",
      description:
        "Muy alto volumen de materia verde, ideal para ensilar. Azucarado. Ciclo largo con gran ventana para pastoreos.",
      densidad: "Densidad recomendada: 12 - 20 kg/ha",
    },
    {
      id: 23,
      title: "Sorgo forrajero DP",
      imageUrl: "/cultivos/23-sorgoforrajeroDP.jpg",
      category: "estivales-anuales",
      description:
        "Multipropósito: pastoreo con bajo rebrote, silo de planta entera o cosecha de grano.",
      densidad: "Densidad recomendada: 15 - 20 kg/ha",
    },
    {
      id: 24,
      title: "Sorgo granífero",
      imageUrl: "/cultivos/24-sorgogranifero.jpg",
      category: "estivales-anuales",
      description:
        "Ciclo intermedio para siembras tempranas y tardías. Alto tanino. Uso exclusivo para cosecha de grano.",
      densidad: "Densidad recomendada: 10 - 12 kg/ha",
    },
    {
      id: 25,
      title: "Sorgo de escoba - Guinea",
      imageUrl: "/cultivos/25-sorgodeescoba.jpg",
      category: "estivales-anuales",
      description:
        "Sorgo para suelos salinos. Uso forrajero con rebrote. Muy utilizado para rolar o incorporar en recuperación de suelos.",
      densidad: "Densidad recomendada: 18 - 20 kg/ha",
    },
    {
      id: 26,
      title: "Mijo perla - Brasilero",
      imageUrl: "/cultivos/26-mijoperlabrasilero.jpg",
      category: "estivales-anuales",
      description:
        "Muy resistente a sequía y baja fertilidad. Gran capacidad de rebrote. Menor velocidad de implantación que los sorgos.",
      densidad: "Densidad recomendada: 12 - 15 kg/ha",
    },
    {
      id: 27,
      title: "Maíz forrajero DP",
      imageUrl: "/cultivos/27-maizforrajeroDP.jpg",
      category: "estivales-anuales",
      description:
        "Versátil. Multipropósito. Pastoreo en verde, diferido, silo de planta entera o cosecha. Alta producción de forraje a muy bajo costo.",
      densidad: "Densidad recomendada: 65.000 - 75.000 sem/ha",
    },
    {
      id: 28,
      title: "Grama Rhodes",
      imageUrl: "/cultivos/28-gramarhodes.jpg",
      category: "estivales-perennes",
      description:
        "Producción concentrada en primavera - verano. Tolerante a suelos salinos. Se puede consociar con melilotus amarillo.",
      densidad: "Densidad recomendada: 6 - 8 kg/ha",
    },
    {
      id: 29,
      title: "Panicum coloratum",
      imageUrl: "/cultivos/29-panicumcoloratum.jpg",
      category: "estivales-perennes",
      description:
        "Alta producción de forraje en primavera - verano, con excelente calidad y tolerancia al frío.",
      densidad: "Densidad recomendada: 6 - 8 kg/ha",
    },
    {
      id: 30,
      title: "Gatton panic",
      imageUrl: "/cultivos/30-gattonpanic.jpg",
      category: "estivales-perennes",
      description:
        "Muy buena calidad forrajera y alta tasa de crecimiento en verano. Baja tolerancia al frío.",
      densidad: "Densidad recomendada: 5 - 7 kg/ha",
    },
    {
      id: 31,
      title: "Pasto Bermuda",
      imageUrl: "/cultivos/31-pastobermuda.jpg",
      category: "estivales-perennes",
      description:
        "Resistente al pisoteo y sequía, para uso exclusivo en parquización. Césped denso y altamente perenne.",
      densidad: "Densidad recomendada: 1 - 1,50 kg/100 m²",
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
