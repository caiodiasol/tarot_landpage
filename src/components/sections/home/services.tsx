import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Para expandir sua visão",
    description:
      "Leituras que trazem novas perspectivas e te ajudam a enxergar a vida sob um ângulo mais amplo e consciente.",
  },
  {
    title: "Para restaurar o equilíbrio",
    description:
      "Um espaço para compreender o que está em desequilíbrio e te ajudar a reconectar mente, corpo e emoção.",
  },
  {
    title: "Para caminhar com confiança",
    description:
      "Quando o caminho aparece com dúvidas, o Tarot traz luz e compreensão, te ajudando a seguir com coragem e confiança, cada vez mais alinhada ao seu propósito.",
  },
];

export function HomeServices() {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
          Um olhar sensível e profundo para ajudar a iluminar suas decisões
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cada leitura é conduzida com presença e sensibilidade, unindo o conhecimento do Tarot a uma escuta acolhedora, que respeita sua verdade e seu momento, sem julgamentos.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
