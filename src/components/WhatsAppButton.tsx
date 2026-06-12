import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.profile.contact.whatsapp.replace(/\D/g, "")}?text=Hola%20${siteConfig.profile.name},%20me%20gustaría%20conocer%20más%20sobre%20tus%20clases%20de%20esquí`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
