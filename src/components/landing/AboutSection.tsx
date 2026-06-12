import profileImage from "@/assets/profile.jpg";
import { siteConfig } from "@/data/siteConfig";

const AboutSection = () => {
  const { about, profile, palette } = siteConfig;

  return (
  <section
      id="about"
      className="py-12 md:py-20"
      style={{ backgroundColor: palette.bg }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col gap-6">

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: palette.primary }}
          >
            Sobre mí
          </h2>

          {/* Image + Bio */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center">

            {/* Image */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0">
              <img
                src={profileImage}
                alt={`Foto de ${profile.name}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>

            {/* Bio */}
            <p
              className="leading-relaxed max-w-lg"
              style={{ color: `${palette.primary}CC` }}
            >
              {about.bio}
            </p>
          </div>

          {/* Experience */}
          {about.experience && about.experience.length > 0 && (
            <div className="mt-4">

              {/* Title */}
              <h3
                className="text-sm font-medium mb-2"
                style={{ color: palette.primary }}
              >
                Experiencia internacional
              </h3>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {about.experience.map((exp, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{
                      backgroundColor: `${palette.accent}22`,
                      color: palette.accent,
                    }}
                  >
                    <span>{exp.flag}</span>
                    <span>{exp.name}</span>
                  </span>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
