import heroImage from "@/assets/hero.jpg";
import { siteConfig } from "@/data/siteConfig";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const { profile, hero, palette } = siteConfig;

  const handlePrimary = () => {
    if (hero.ctaPrimary.action === "whatsapp") {
      window.open(`https://wa.me/${profile.contact.whatsapp.replace(/\+/g, "")}`, "_blank");
    }
  };

  const handleSecondary = () => {
    if (hero.ctaSecondary.action === "scroll") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
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

      {/* Overlay usando palette.bg */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${palette.bg}E6, ${palette.bg}99, transparent)`,
        }}
      />

      <div className="relative z-10 w-full px-5 pb-10 pt-20 max-w-5xl mx-auto">
        <div
          className="flex items-center gap-2 text-sm mb-3"
          style={{ color: palette.accent }}
        >
          <MapPin className="w-4 h-4" />
          <span>{profile.location}</span>
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-2"
          style={{ color: palette.primary }}
        >
          {profile.name}
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-1"
          style={{ color: palette.primary }}
        >
          {profile.title}
        </p>

        <p
          className="text-base mb-8 max-w-md"
          style={{ color: `${palette.primary}CC` }}
        >
          {hero.subheadline}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {profile.experience?.years && (
            <Badge
              variant="secondary"
              style={{
                color: palette.primary,
                backgroundColor: `${palette.primary}22`,
                borderColor: `${palette.primary}44`,
              }}
            >
              +{profile.experience.years} años de experiencia
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

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handlePrimary}
            className="w-full sm:w-auto px-8 py-4 font-bold text-lg rounded-2xl shadow-lg transition-all active:scale-[0.98]"
            style={{
              backgroundColor: palette.primary,
              color: palette.bg,
            }}
          >
            {hero.ctaPrimary.label}
          </button>

          <button
            onClick={handleSecondary}
            className="w-full sm:w-auto px-8 py-4 font-semibold text-lg rounded-2xl backdrop-blur-sm border transition-all active:scale-[0.98]"
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
    </section>
  );
};

export default HeroSection;
