import { siteConfig } from "@/data/siteConfig";
import { Award, Globe, Star } from "lucide-react";

import image from "@/assets/ski3.jpg";

const TrustBadges = () => {
  const { profile } = siteConfig;

  const badges = [
    profile.languages?.length > 0 &&
      `Clases en ${profile.languages.join(" · ")}`,
    ...profile.highlights,
    ...profile.certifications.slice(0, 2),
  ].filter(Boolean);

  const icons = [Globe, Star, Award];

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

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge, i) => {
                const Icon = icons[i % icons.length];

                return (
                  <div
                    key={i}
                    className="
                      flex items-center gap-2
                      rounded-full
                      px-4 py-2
                      backdrop-blur-md
                      bg-white/10
                      border border-white/20
                      text-white
                    "
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
