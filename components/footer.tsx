import Link from "next/link";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#233316] rounded-t-[50px] text-white">
      <div className="w-full px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Title */}
            <h2 className="text-4xl font-semibold mb-6">Donde encontrarnos?</h2>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Address and Map */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>Ruta nacional 158 km 2</p>
                    <p>Villa Nueva, Córdoba, Argentina</p>
                  </div>
                </div>
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-[#7dd87d] hover:underline inline-flex items-center gap-2"
                >
                  Google maps
                  <span className="text-lg">→</span>
                </Link>
              </div>

              {/* Right Column - Contact Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+5493536578207" className="hover:text-[#7dd87d]">
                    +54 9 353 6578-207
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:boieroagropecuariasas@gmail.com"
                    className="hover:text-[#7dd87d] break-all"
                  >
                    boieroagropecuariasas@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="hover:text-[#7dd87d]"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="grid grid-cols-2 gap-4 max-w-xs mt-4">
              <div>
                <p className="font-medium">Lunes-Viernes</p>
                <p className="text-gray-300">9am a 17pm</p>
              </div>
              <div>
                <p className="font-medium">Sábado</p>
                <p className="text-gray-300">9am a 13pm</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm">
                <span className="font-medium">boiero agropecuaria sas®</span>
                <span className="text-gray-400 ml-2">
                  Todos los derechos reservados - 2025
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
