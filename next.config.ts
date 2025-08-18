/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // si quieres seguir exportando estáticamente
  images: {
    unoptimized: true, // desactiva la optimización de imágenes
  },
};

module.exports = nextConfig;
