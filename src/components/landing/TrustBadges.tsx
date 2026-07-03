import { siteConfig } from "@/data/siteConfig";
import { Award, Star } from "lucide-react";

import image from "@/assets/ski3.jpg";

const TrustBadges = () => {
  const { profile } = siteConfig;

  // Idioma aislado: viene de siteConfig como { flag, label } explícitos.
  const languages = profile.languages ?? [];

  // El resto de badges (highlights + certificaciones) ya no incluye idiomas.
  const badges = [
    ...profile.highlights,
    ...profile.certifications.slice(0, 2),
  ].filter(Boolean);

  const icons = [Star, Award];

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

            {/* Badges: grid responsivo en vez de flex-wrap para evitar
                la columna gigante cuando hay muchos items */}
            {badges.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {badges.map((badge, i) => {
                  const Icon = icons[i % icons.length];

                  return (
                    <div
                      key={i}
                      className="
                        flex items-center gap-2
                        rounded-xl
                        px-4 py-2.5
                        backdrop-blur-md
                        bg-white/10
                        border border-white/20
                        text-white
                      "
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-medium leading-snug">
                        {badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
