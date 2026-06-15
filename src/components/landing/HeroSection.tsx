import heroImage from "@/assets/hero.jpg";
import { siteConfig } from "@/data/siteConfig";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const { profile, hero, palette } = siteConfig;

  const handlePrimary = () => {
    if (hero.ctaPrimary.action === "whatsapp") {
      window.open(
        `https://wa.me/${profile.contact.whatsapp.replace(/\+/g, "")}`,
        "_blank"
      );
    }
  };

  const handleSecondary = () => {
    if (hero.ctaSecondary.action === "scroll") {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[100dvh] flex items-end"
      style={{ backgroundColor: palette.bg }}
    >
      <img
        src={heroImage}
        alt={`${profile.name} skiing in ${profile.location}`}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Overlay mejorado para contraste */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to top,
            ${palette.bg},
            ${palette.bg}EE,
            ${palette.bg}AA,
            transparent
          )`,
        }}
      />

      <div className="relative z-10 w-full min-h-[100dvh] px-5 py-10 max-w-5xl mx-auto flex flex-col justify-between">
        {/* Bloque superior */}
        <div>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ color: palette.primary }}
          >
            {profile.name}
          </h1>
          {/* Title */}
          <p
            className="text-lg md:text-xl font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 max-w-sm leading-relaxed"
            style={{ color: palette.primary }}
          >
            {profile.title}
          </p>

          {/* Location */}
         <div
            className="flex items-center gap-2 text-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            style={{ color: palette.accent }}
          >
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>
          {/* Experience */}
          <div className="flex flex-wrap gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {profile.experience?.years && (
              <Badge
                variant="secondary"
                style={{
                  color: palette.primary,
                  backgroundColor: `${palette.primary}22`,
                  borderColor: `${palette.primary}44`,
                }}
              >
                {profile.experience.years} años de experiencia
              </Badge>
            )}

            {profile.experience?.instructorLevel && (
              <Badge
                variant="secondary"
                style={{
                  color: palette.primary,
                  backgroundColor: `${palette.primary}22`,
                  borderColor: `${palette.primary}44`,
                }}
              >
                {profile.experience.instructorLevel}
              </Badge>
            )}
          </div>
        </div>

        {/* Bloque inferior */}
        <div>
          <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <button
              onClick={handlePrimary}
              className="w-full sm:w-auto px-8 py-4 font-bold text-lg rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]"
              style={{
                backgroundColor: palette.primary,
                color: palette.bg,
              }}
            >
              {hero.ctaPrimary.label}
            </button>

            <button
              onClick={handleSecondary}
              className="w-full sm:w-auto px-8 py-4 font-semibold text-lg rounded-2xl backdrop-blur-sm border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
              style={{
                backgroundColor: `${palette.accent}22`,
                color: palette.accent,
                borderColor: `${palette.accent}44`,
              }}
            >
              {hero.ctaSecondary.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
