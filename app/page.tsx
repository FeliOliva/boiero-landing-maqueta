import { About } from "@/components/about";
import { ProductCarousel } from "@/components/product-carousel";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Homebg } from "@/components/home-bg";

export default function Home() {
  const productsGroup1 = [
    {
      id: 1,
      title: "Producto 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
    {
      id: 2,
      title: "Producto 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
    {
      id: 3,
      title: "Producto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
  ];

  const productsGroup2 = [
    {
      id: 4,
      title: "Producto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
    {
      id: 5,
      title: "Producto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
    {
      id: 6,
      title: "Producto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat dolorum magni nam repellendus temporibus incidunt dicta repellat, quas distinctio. Cumque deserunt fuga eius animi beatae dolorem sequi saepe.",
      imageUrl: "/semillas_de_girasol.jpg",
    },
  ];

  return (
    <div>
      <Homebg />
      <About />
      <div id="products" className="py-10">
        <ProductCarousel
          products={productsGroup1}
          title="Productos Destacados"
          id="product1"
        />
        <ProductCarousel
          products={productsGroup2}
          title="Nuevos Productos"
          id="products2"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
