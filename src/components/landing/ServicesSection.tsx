import { siteConfig } from "@/data/siteConfig";
import { Clock, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {

  const {services, palette } = siteConfig;

  return (
    <section
      id="services"
      className="py-12 md:py-20"
      style={{ backgroundColor: palette.bg }}
    >
      <div className="max-w-5xl mx-auto px-5">

        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: palette.primary }}
        >
          Clases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm flex flex-col gap-3"
              style={{
                backgroundColor: `${palette.accent}14`, // card surface
              }}
            >
              {/* Title */}
              <h3
                className="text-lg font-bold"
                style={{ color: palette.primary }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm"
                style={{ color: `${palette.primary}CC` }}
              >
                {s.description}
              </p>

              {/* Meta */}
              <div
                className="flex items-center gap-4 mt-auto pt-3"
                style={{
                  borderTop: `1px solid ${palette.accent}33`,
                }}
              >
                <span
                  className="flex items-center gap-1 text-sm"
                  style={{ color: `${palette.primary}AA` }}
                >
                  <Clock className="w-4 h-4" />
                  {s.duration}
                </span>
              </div>

              {/* CTA */}
              <Button
                asChild
                className="w-full mt-3"
                size="sm"
                style={{
                  backgroundColor: palette.primary,
                  color: palette.bg,
                }}
              >
                <a
                  href={`https://wa.me/${siteConfig.profile.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Hola ${siteConfig.profile.name}, me gustaría Consultar: ${s.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Reservar por WhatsApp
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
