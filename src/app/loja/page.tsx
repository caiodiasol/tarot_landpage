import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const chapters = [
  {
    title: "Cartas como espelho",
    description: "Entenda a jornada maior e menor, simbolismos e como interpretar arquétipos no dia a dia.",
  },
  {
    title: "Rituais de preparação",
    description: "Checklist energético, organização do altar e harmonização antes de cada leitura.",
  },
  {
    title: "Tiragens terapêuticas",
    description: "7 tiragens exclusivas para amor, carreira, propósito, cura ancestral e decisões importantes.",
  },
  {
    title: "Integração pós-consulta",
    description: "Ferramentas de journaling, meditações guiadas e acompanhamentos semanais.",
  },
];

const bonuses = [
  "Acesso a playlists meditativas e trilhas sonoras para leituras",
  "PDF interativo com campos para anotações de cada tiragem",
  "Checklist pré-consulta para você aplicar com seus consulentes",
  "Convite para a comunidade fechada de estudos mensais",
];

export default function StorePage() {
  return (
    <main className="pb-24 pt-24">
      <Container className="space-y-20">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_400px] lg:items-center">
          <FadeIn className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Loja Raissa Tarot</span>
            <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
              E-book &ldquo;Rotas pelo Tarot&rdquo; — o guia prático para leituras profundas e acolhedoras
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Produzido com a experiência de mais de 15 anos em terapias integrativas, o e-book traz fundamentos, rituais e tiragens exclusivas para você aprofundar seus atendimentos ou iniciar sua jornada com consistência.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="https://pay.infinitypay.com/seu-link-aqui" target="_blank" rel="noreferrer">
                  Comprar agora — R$ 89
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contato">Tire dúvidas com a equipe</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Pagamento seguro via InfinityPay. Após a confirmação, você recebe o link de download imediato e atualizações futuras.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-primary">O que você vai encontrar</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {chapters.map((item) => (
                <li key={item.title} className="rounded-2xl border border-primary/15 bg-background/80 p-4">
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        <section className="grid gap-8 rounded-3xl border border-primary/20 bg-background/80 p-10 shadow-sm">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Bônus especiais inclusos</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Pensando no seu desenvolvimento contínuo, acrescentamos materiais exclusivos para apoiar sua prática espiritual e terapêutica.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {bonuses.map((bonus) => (
                <li key={bonus} className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <p>{bonus}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        <section className="grid gap-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background p-10 shadow-sm lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Para quem é este e-book?</h2>
            <ul className="mt-6 grid gap-4 text-sm text-muted-foreground">
              <li>• Tarólogos e terapeutas que desejam elevar a entrega em atendimentos individuais.</li>
              <li>• Quem busca autonomia para interpretar mensagens espirituais com ética e responsabilidade.</li>
              <li>• Pessoas em transição de carreira, querendo dar os primeiros passos em oráculos com suporte seguro.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="https://pay.infinitypay.com/seu-link-aqui" target="_blank" rel="noreferrer">
                  Garantir meu acesso agora
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/atendimento">Agendar consulta com a Raissa</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="rounded-3xl border border-primary/15 bg-background/90 p-6 text-sm text-muted-foreground">
            <p>
              Atualize este espaço com depoimentos de quem já adquiriu o material, prints do ebook ou mockups de dispositivos mostrando o conteúdo. Isso reforça a confiança e incentiva a decisão.
            </p>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
