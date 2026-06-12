import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, MessageCircle } from "lucide-react";

const BookingSection = () => {
  const { booking } = siteConfig;

  return (
    <section id="booking" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Reserva tu clase
          </h2>
          <p className="text-muted-foreground mb-3 max-w-md mx-auto">
            Las clases se gestionan a través de la escuela de esquí. Puedes solicitar al instructor directamente al hacer tu reserva.
          </p>
          <p className="text-sm font-semibold text-primary mb-8">
            {booking.school.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={booking.school.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-2xl shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
            >
              <ExternalLink className="w-5 h-5" />
              Reservar vía escuela
            </a>
            <a
              href={`https://wa.me/${booking.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(142,70%,40%)] text-primary-foreground font-bold text-lg rounded-2xl shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
