import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Tarot Terapêutico",
    description:
      "Nessa leitura, trago um direcionamento completo para todas as áreas das sua vida. De forma profunda e detalhada, apresento previsões e revelações valiosas para os próximos 3 meses, te ajudando a tomar decisões com mais clareza e confiança e respondendo e esclarecendo todas as suas dúvidas.",
    duration: "Até 1h30min",
    price: "R$ 180,00",
    format: "Online ao vivo por vídeo chamada ou áudio e foto no whatsapp",
    whatsappMessage: "Oi Raissa, gostaria de agendar uma leitura de Tarot Terapêutico.",
  },
  {
    title: "Tarot Livre",
    description:
      "Nessa leitura você terá uma hora para fazer perguntas ao Tarot, esclarecendo todas as dúvidas que estiver sentindo no momento.",
    duration: "Até 1 hora",
    price: "R$ 150,00",
    format: "Online ao vivo por vídeo chamada ou áudio e foto no whatsapp",
    whatsappMessage: "Oi Raissa, gostaria de agendar uma leitura de Tarot Livre.",
  },
  {
    title: "Tarot do Amor",
    description:
      "Uma leitura profunda que explora os sentimentos, pensamentos e desejos do casal, esclarecendo o presente da relação e as possibilidades e caminhos que o futuro pode seguir.",
    price: "R$ 110,00",
    format: "Enviado por whatsapp em até 2 dias úteis",
    whatsappMessage: "Oi Raissa, gostaria de agendar uma leitura de Tarot do Amor.",
  },
  {
    title: "Perguntas Objetivas",
    description:
      "Leitura rápida para responder uma dúvida específica.",
    price: " 1 pergunta - R$ 35,00 | 3 perguntas - R$ 85,00",
    format: "Enviado por whatsapp em até 1 dia útil",
    whatsappMessage: "Oi Raissa, gostaria de fazer uma leitura de Perguntas Objetivas.",
  },
];

const WHATSAPP_NUMBER = "5531995737940";

function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

const steps = [
  {
    title: "Primeiro contato",
    detail:
      "Escolha a leitura que deseja e entre em contato pelo WhatsApp para definir o melhor dia e horário para você.",
  },
  {
    title: "Pagamento e confirmação",
    detail:
      "O agendamento só é confirmado mediante pagamento, que pode ser feito via Pix ou cartão de crédito (com acréscimo das taxas da maquininha). Após a confirmação, você recebe o link do Google Meet para atendimentos por vídeo. Para leituras via WhatsApp, basta aguardar o envio dentro do prazo estimado da leitura escolhida.",
  },
  {
    title: "Atendimento e acompanhamento",
    detail:
      "Durante nosso encontro, a leitura é conduzida com atenção, carinho e cuidado, sempre focando nas suas questões. Depois da leitura, se surgir qualquer dúvida, estou à disposição para ajudar.Para quem escolhe atendimentos por chamada de vídeo, a leitura pode ser gravada e enviada para que você possa assistir novamente quando desejar.",
  },
];

export default function AtendimentoPage() {
  return (
    <main className="pb-24 pt-24">
      <Container className="space-y-20">
        <section className="space-y-6 text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Atendimentos</span>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Leituras personalizadas para iluminar seu caminho e trazer clareza ao seu momento
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Escolha o atendimento que reflete suas necessidades atuais e explore caminhos de compreensão e crescimento. Todos os atendimentos são guiados com sigilo, ética, atenção e cuidado.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20gostaria%20de%20marcar%20uma%20leitura%20de%20Tarot." target="_blank" rel="noreferrer">
                Falar pelo WhatsApp
              </Link>
            </Button>
          </FadeIn>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                <header className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{service.title}</h2>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </header>
                <dl className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                  {service.duration ? (
                    <div>
                      <dt>Duração</dt>
                      <dd className="text-base normal-case tracking-normal text-foreground">{service.duration}</dd>
                    </div>
                  ) : null}
                  {service.price ? (
                    <div className="min-w-[160px]">
                      <dt>Investimento</dt>
                      <dd className="text-base normal-case tracking-normal text-foreground">
                        {service.title === "Perguntas Objetivas" ? (
                          <div className="space-y-1">
                            <div>1 pergunta — R$ 35,00</div>
                            <div>3 perguntas — R$ 85,00</div>
                          </div>
                        ) : (
                          service.price
                        )}
                      </dd>
                    </div>
                  ) : null}
                  {service.format ? (
                    <div
                      className={`min-w-[160px] ${["Tarot do Amor", "Perguntas Objetivas"].includes(service.title) ? "basis-full" : ""}`}
                    >
                      <dt>Formato</dt>
                      <dd className="text-base normal-case tracking-normal text-foreground">{service.format}</dd>
                    </div>
                  ) : null}
                </dl>
                <div className="mt-auto pt-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={getWhatsAppLink(service.whatsappMessage)} target="_blank" rel="noreferrer">
                      Agendar este atendimento
                    </Link>
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </section>

        <section className="grid gap-8 rounded-3xl border border-primary/20 bg-background/80 p-10 shadow-sm lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Como funcionam os encontros</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Cada atendimento é pensado para se adequar ao seu momento, oferecendo clareza, orientação e acolhimento. Você escolhe a leitura que deseja e seguimos juntas em cada etapa para que a experiência seja segura, prática e transformadora.
            </p>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Etapa {index + 1} — {step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="grid gap-4 rounded-3xl border border-primary/15 bg-primary/40 p-6 text-sm text-primary-foreground shadow-sm">
            <h3 className="text-lg font-semibold text-primary-foreground text-center">Política de Atendimento</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Agendamentos devem ser feitos pelo WhatsApp.
              </li>
              <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Pagamento via Pix ou cartão de crédito (com pequeno acréscimo de taxas) no momento do agendamento para reserva do horário.
              </li>
              <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Leituras são realizadas de segunda a sexta-feira, nos horários combinados durante o agendamento.
              </li>
              <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
              Não realizo atendimentos ou respondo questões relacionadas a diagnóstico de doenças, jogos e apostas, morte e crimes.
              </li>
            </ul>
          </FadeIn>
        </section>

        <section className="space-y-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Vamos cuidar do seu momento com dedicação e presença
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground">
              Se ainda estiver em dúvida sobre qual leitura escolher, entre em contato. Juntas vamos definir o atendimento ideal para te ajudar na sua caminhada.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20gostaria%20de%20marcar%20uma%20leitura%20de%20Tarot." target="_blank" rel="noreferrer">
                Conversar no WhatsApp
              </Link>
            </Button>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
