import marinaImage from "@/assets/testimonial-marina.jpg";
import davidImage from "@/assets/testimonial-david.jpg";
import carmenImage from "@/assets/testimonial-carmen.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I change my glasses with my outfits. Same monthly price as my gym membership.",
      author: "Marina, 32, Gràcia",
      image: marinaImage
    },
    {
      quote: "Broke my frames playing paddle. Got new ones same week. No extra cost.",
      author: "David, 28, Eixample", 
      image: davidImage
    },
    {
      quote: "My prescription changed after 6 months. Updated for free. This is the future.",
      author: "Carmen, 45, Sant Gervasi",
      image: carmenImage
    }
  ];

  return (
    <section className="py-24 liquid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Real Members, Real Freedom
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover-glass">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;