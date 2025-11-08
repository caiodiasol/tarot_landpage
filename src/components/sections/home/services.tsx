import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Tarot Terapêutico",
    description:
      "Leitura aprofundada com foco em autoconhecimento, desbloqueios emocionais e direcionamento prático para seus próximos passos.",
  },
  {
    title: "Mentoria Espiritual",
    description:
      "Sessões individuais que alinham intuição, oráculos e práticas integrativas para fortalecer sua jornada espiritual.",
  },
  {
    title: "Cerimônias Personalizadas",
    description:
      "Rituais de abertura de caminhos, harmonização energética e celebrações especiais com a assinatura da taróloga.",
  },
];

export function HomeServices() {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Cuidado holístico para iluminar decisões com serenidade
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cada atendimento é conduzido com escuta ativa, sigilo e acolhimento, unindo técnicas ancestrais a uma visão moderna do Tarot.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                  Personalize com detalhes reais das terapias
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
