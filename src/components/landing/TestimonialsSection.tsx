import { siteConfig } from "@/data/siteConfig";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-snow">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {/* {siteConfig.testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm">
              <Quote className="w-6 h-6 text-primary/40 mb-3" />
              <p className="text-foreground font-medium mb-4 leading-relaxed">
                "{t.text}"
              </p>
              <p className="text-sm text-muted-foreground font-semibold">— {t.name}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
