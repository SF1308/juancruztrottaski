import ski1 from "@/assets/ski1.jpg";
import ski2 from "@/assets/ski2.jpg";
import ski3 from "@/assets/ski3.jpg";

const images = [
  { src: ski1, alt: "Esquí en polvo fresco" },
  { src: ski2, alt: "Clase de esquí con alumno" },
  { src: ski3, alt: "Vista panorámica de la montaña" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Galería
        </h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
