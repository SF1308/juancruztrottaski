import { siteConfig } from "@/data/siteConfig";
import { Star } from "lucide-react";

import image from "@/assets/ski3.jpg";

const TrustBadges = () => {
  const { profile } = siteConfig;

  // Idioma aislado: viene de siteConfig como { flag, label } explícitos.
  const languages = profile.languages ?? [];

  // El resto de badges (highlights + certificaciones) ya no incluye idiomas.
  const badges = [
    ...profile.certifications
  ].filter(Boolean);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="relative overflow-hidden rounded-[2rem]">
          {/* Background image */}
          <img
            src={image}
            alt="Ski instructor"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Experiencias personalizadas en la montaña
              </h2>

              <p className="mt-3 text-white/80">
                Clases adaptadas a tu nivel, objetivos y estilo de esquí.
              </p>
            </div>

            {/* Idiomas: fila propia, separada de las badges */}
            {languages.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang.label}
                    className="
                      flex items-center gap-1.5
                      rounded-full
                      px-3 py-1.5
                      bg-white/15
                      border border-white/25
                      text-white
                    "
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="text-xs font-semibold tracking-wide">
                      {lang.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Credenciales: cada una es su propio bloque (ícono + texto),
                sin fondo/borde, pero con espacio propio entre sí para que
                no se lea como un bloque de texto apretado */}
            {badges.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 max-w-2xl">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 text-white text-sm md:text-base font-medium"
                  >
                    <Star className="w-3.5 h-3.5 shrink-0 text-white/60" />
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
