import { siteConfig } from "@/data/siteConfig";
import { Award, Globe, Star } from "lucide-react";

const TrustBadges = () => {
  const { profile, palette } = siteConfig;

  const badges = [
    profile.languages?.length > 0 &&
      `Clases en ${profile.languages.join(" y ")}`,

    ...profile.highlights,

    ...profile.certifications.slice(0, 2),
  ].filter(Boolean);

  const icons = [Globe, Star, Award];

  return (
    <section
      className="py-12 md:py-20"
      style={{ backgroundColor: palette.bg }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => {
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl shadow-sm"
                style={{
                  backgroundColor: `${palette.accent}14`, // superficie suave
                }}
              >
                {/* Icon container */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${palette.primary}1A`,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: palette.primary }}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-sm font-semibold leading-snug"
                  style={{ color: palette.primary }}
                >
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
