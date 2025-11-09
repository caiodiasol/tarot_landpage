import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Tarot Terapêutico",
    description:
      "Sessão focada em clarear decisões afetivas, profissionais e espirituais. Inclui plano de ação e acompanhamento por 7 dias via mensagem.",
    duration: "60 min",
    format: "Online ou presencial",
  },
  {
    title: "Tarot de Relacionamento",
    description:
      "Leitura dedicada a casais ou vínculos familiares, trabalhando comunicação, reconciliação e alinhamento de expectativas.",
    duration: "75 min",
    format: "Online (videochamada)",
  },
  {
    title: "Mentoria Intuitiva",
    description:
      "Programa em 4 encontros para despertar sua leitura pessoal do Tarot, com exercícios, estudos de caso e suporte entre sessões.",
    duration: "4 encontros quinzenais",
    format: "Online",
  },
  {
    title: "Numerologia Alquímica",
    description:
      "Mapa numerológico completo com foco em ciclos pessoais, propósito e planejamento anual. Entrega em PDF + encontro explicativo.",
    duration: "Encontro de 90 min",
    format: "Online ou presencial",
  },
];

const steps = [
  {
    title: "Primeiro contato",
    detail:
      "Você envia suas dúvidas pelo formulário ou WhatsApp. Respondemos em até 24 horas com datas disponíveis e orientações de preparo.",
  },
  {
    title: "Confirmação",
    detail:
      "Após definir o serviço ideal, enviamos link seguro na InfinityPay e checklist personalizado para você chegar confiante ao encontro.",
  },
  {
    title: "Sessão e suporte",
    detail:
      "Conduzimos a leitura ou mentorias com acolhimento. Depois, você recebe materiais extras, resumo das cartas e acompanhamento opcional.",
  },
];

export default function AtendimentoPage() {
  return (
    <main className="pb-24 pt-24">
      <Container className="space-y-20">
        <section className="space-y-6 text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Atendimento</span>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Terapias e leituras personalizadas para iluminar sua jornada
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Escolha o formato que melhor conversa com o seu momento. Todos os atendimentos são conduzidos pela Raissa com sigilo, ética e direcionamento prático.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/5511975088928" target="_blank" rel="noreferrer">
                Falar pelo WhatsApp
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contato">Enviar formulário</Link>
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
                  <div>
                    <dt>Duração</dt>
                    <dd className="text-base normal-case tracking-normal text-foreground">{service.duration}</dd>
                  </div>
                  <div>
                    <dt>Formato</dt>
                    <dd className="text-base normal-case tracking-normal text-foreground">{service.format}</dd>
                  </div>
                </dl>
                <div className="mt-auto pt-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://wa.me/5511975088928" target="_blank" rel="noreferrer">
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
              Cada atendimento é um processo de co-criação. Acompanhamos você antes, durante e depois para que as mensagens recebidas possam ser aplicadas com confiança.
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
            <h3 className="text-lg font-semibold text-primary-foreground">O que levar para a sessão presencial?</h3>
            <p>
              Traga perguntas-chave, use roupas confortáveis e, se quiser, objetos pessoais (cristais, amuletos) para potencializar sua experiência. O espaço é climatizado, silencioso e preparado energeticamente antes de cada atendimento.
            </p>
            <p className="text-xs text-primary-foreground/80">
              Endereço: Rua Exemplo, 123 — Liberdade, São Paulo/SP. Informe-nos com antecedência sobre necessidades especiais de acessibilidade.
            </p>
          </FadeIn>
        </section>

        <section className="space-y-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Vamos cuidar do seu momento com dedicação e presença
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground">
              Se ainda estiver em dúvida sobre qual serviço escolher, fale conosco. Juntas(os) definimos o atendimento ideal para responder às suas perguntas.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/5511975088928" target="_blank" rel="noreferrer">
                Conversar no WhatsApp
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contato">Quero enviar formulário</Link>
            </Button>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
