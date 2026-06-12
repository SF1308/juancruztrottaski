import { siteConfig } from "@/data/siteConfig";
import { MessageCircle, ExternalLink } from "lucide-react";

const FinalCTA = () => {
  const { booking, hero } = siteConfig;

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
          ¿Listo para esquiar?
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Reserva ahora y disfruta la montaña
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={booking.school.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold text-lg rounded-2xl shadow-lg hover:brightness-95 transition-all active:scale-[0.98]"
          >
            <ExternalLink className="w-5 h-5" />
            Reservar vía escuela
          </a>
          <a
            href={`https://wa.me/${hero.whatsapp.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/15 text-primary-foreground font-bold text-lg rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
