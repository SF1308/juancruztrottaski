import HeroSection from "@/components/landing/HeroSection";
import TrustBadges from "@/components/landing/TrustBadges";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import GallerySection from "@/components/landing/GallerySection";
import ReviewGallerySlider from "@/components/landing/ReviewGallerySlider";
import BookingSection from "@/components/landing/BookingSection";
import ContactSection from "@/components/landing/ContactSection";
import FinalCTA from "@/components/landing/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/siteConfig";

const Index = () => {
  const { profile, hero } = siteConfig;

  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <TrustBadges />
        <AboutSection />
        {/* <GallerySection /> */}
        <ReviewGallerySlider reviews={siteConfig.reviews} />
        <ServicesSection />
        {/* <BookingSection /> */}
        <ContactSection />
        {/* <FinalCTA /> */}
        <footer className="py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
          <div className="flex flex-col gap-2 items-center text-xs opacity-70 hover:opacity-100 transition-opacity">
            <p>¿Querés hacer tu propia página?</p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/+5492944290047?text=Hola%20estoy%20interesado%20en%20crear%20una%20página%20para%20mi%20negocio"
                target="_blank"
                className="underline hover:text-accent decoration-accent/30"
              >
                Contactame por WhatsApp
              </a>
              <span>•</span>
              <a
                href="https://ski-form.vercel.app/"
                target="_blank"
                className="underline hover:text-accent decoration-accent/30"
              >
                Formulario de creación
              </a>
            </div>
          </div>
        </footer>
      </main>
      <WhatsAppButton />
    </>
  );
};

export default Index;
