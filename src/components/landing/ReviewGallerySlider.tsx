import { Quote } from "lucide-react";

import ski1 from "@/assets/ski1.jpg";
import ski2 from "@/assets/ski2.jpg";
import ski3 from "@/assets/ski3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ReviewGalleryItem = {
  photo: string;
  alt?: string;
  name?: string;
  comment?: string;
  flag?: string;
};

type ReviewGallerySliderProps = {
  reviews?: ReviewGalleryItem[];
  title?: string;
};

const fallbackImages: ReviewGalleryItem[] = [
  {
    photo: ski1,
    alt: "Esquí en polvo fresco",
  },
  {
    photo: ski2,
    alt: "Clase de esquí con alumno",
  },
  {
    photo: ski3,
    alt: "Vista panorámica de la montaña",
  },
];

const ReviewGallerySlider = ({ reviews = [], title = "Testimonios y galería" }: ReviewGallerySliderProps) => {
  const hasReviews = reviews.some((item) => Boolean(item.comment?.trim()));
  const slides = hasReviews ? reviews : fallbackImages;

  return (
    <section id="reviews-gallery" className="py-12 md:py-20 bg-snow">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl md:text-base">
              {hasReviews
                ? "Comentarios reales con fotos de experiencias en la nieve."
                : "Galería de imágenes cuando no hay reviews disponibles."}
            </p>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: slides.length > 1, dragFree: false, containScroll: "trimSnaps" }}
          className="relative"
        >
          <div className="relative">
            <CarouselContent className="flex">
              {slides.map((item, index) => (
              <CarouselItem key={index} className="w-full md:w-[420px]">
                <div className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="overflow-hidden rounded-[1.75rem] bg-slate-50">
                    <img
                      src={item.photo}
                      alt={item.alt ?? item.name ?? "Imagen de experiencia"}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="p-6">
                    {item.comment ? (
                      <>
                        <Quote className="h-5 w-5 text-primary/80 mb-4" />
                        <p className="text-foreground font-medium leading-relaxed">{item.comment}</p>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                            <img
                              src={item.photo}
                              alt={item.name ? `${item.name} avatar` : item.alt ?? item.name ?? "Avatar"}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            {item.name ? <p className="font-semibold text-foreground">{item.name}</p> : null}
                            {item.flag ? <p className="text-sm text-muted-foreground">{item.flag}</p> : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.alt}</p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            {slides.length > 1 ? (
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 gap-2 md:flex">
                <CarouselPrevious className="h-10 w-10" />
                <CarouselNext className="h-10 w-10" />
              </div>
            ) : null}
        </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewGallerySlider;
