import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Marina S.",
    quote:
      "A leitura com a Raissa transformou completamente a forma como eu encaro minhas escolhas. Foi acolhimento puro e clareza em cada carta.",
  },
  {
    name: "João A.",
    quote:
      "Saí da sessão com um plano prático e muita paz no coração. A condução dela é humana, direta e sempre respeitosa.",
  },
  {
    name: "Elisa M.",
    quote:
      "O e-book trouxe exercícios que ainda uso semanalmente. É um conteúdo rico, ideal para quem quer criar rituais significativos.",
  },
];

export function HomeTestimonials() {
  return (
    <section className="pb-20">
      <Container className="space-y-12">
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Experiências reais</span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Depoimentos de quem já vivenciou a jornada
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Traga para este espaço comentários e avaliações coletadas nas redes sociais ou plataformas de agendamento. São provas sociais essenciais para gerar confiança.
          </p>
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
