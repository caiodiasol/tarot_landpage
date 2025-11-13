import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Vanessa V.",
    quote:
      "Quando joguei tarot pela primeira vez com a Raissa, estava em um momento de muitas dúvidas e decisões importantes a tomar. A leitura me trouxe uma clareza muito interessante e me ajudou a conduzir melhor as minhas questões. Recomendo muito essa experiência para quem busca orientação ou simplesmente quer entender melhor o momento que está vivendo.",
  },
  {
    name: "Camila M.",
    quote:
      "Eu amei muito a minha experiência! Foi super leve e enriquecedora. Senti que estava abrindo um livro da minha própria vida, absolutamente TUDO fez sentido ou deu sentido para as coisas que ainda estavam nebulosas na minha cabeça. Vai ser muito importante começar o ano após essas reflexões e com certeza começarei muito mais leve e decidida.",
  },
  {
    name: "Gleyce P.",
    quote:
      "Minha primeira consulta com a Raissa foi em um momento muito difícil da minha vida. A leitura foi surpreendentemente assertiva. Na época, tudo parecia distante, mas aos poucos as coisas começaram a acontecer exatamente como ela descreveu. A forma como ela conduz a leitura é impressionante: direta, cuidadosa e muito cirúrgica. Recomendo muito, especialmente para quem busca clareza e direcionamento.",
  },
];

export function HomeTestimonials() {
  return (
    <section className="pb-20">
      <Container className="space-y-12">
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Experiências reais</span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Depoimentos de quem já viveu essa transformação:
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <figure className="flex h-full flex-col rounded-3xl border border-primary/20 bg-background/80 p-6 shadow-sm">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-primary">
                  {testimonial.name}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
