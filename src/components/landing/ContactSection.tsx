import { siteConfig } from "@/data/siteConfig";
import { Mail, MessageCircle, Instagram } from "lucide-react";

const ContactSection = () => {
  const { profile  } = siteConfig;
  const { contact } = profile;

  return (
    <section id="contact" className="py-12 md:py-20 bg-snow">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Escribime
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <a
            href={`https://wa.me/${contact.whatsapp.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-2xl shadow-sm text-foreground font-medium hover:shadow-md transition-shadow"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            WhatsApp
          </a> */}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-2xl shadow-sm text-foreground font-medium hover:shadow-md transition-shadow"
          >
            <Mail className="w-5 h-5 text-primary" />
            {contact.email}
          </a>
          <a
            href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-2xl shadow-sm text-foreground font-medium hover:shadow-md transition-shadow"
          >
            <Instagram className="w-5 h-5 text-primary" />
            {contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
