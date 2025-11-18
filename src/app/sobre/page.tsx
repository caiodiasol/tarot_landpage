import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const timeline = [
  {
    year: "2006",
    title: "Início da jornada",
    description:
      "Desde criança, Raissa já se conectava ao Tarot. Em 2006, deu início aos atendimentos para outras pessoas, transformando o que antes era apenas estudo e adoração, em um caminho de propósito e entrega.",
  },
  {
    year: "2014",
    title: "Aprofundamento e estudos",
    description:
      "Ao longo dos anos, Raissa se dedicou a expandir seus conhecimentos em espiritualidade e terapias energéticas, fortalecendo a intuição e aprimorando a escuta sensível que guia suas leituras até hoje.",
  },
  {
    year: "2020",
    title: "Atendimentos online",
    description:
      "Durante a pandemia, Raissa iniciou os atendimentos online, expandindo seu trabalho para acolher pessoas de diferentes lugares do Brasil e do mundo. O formato digital se manteve desde então, com a mesma presença, sensibilidade e conexão das leituras presenciais.",
  },
  {
    year: "2023",
    title: "Novos ciclos e projetos",
    description:
      "Além das leituras, Raissa passou a compartilhar conteúdos autorais e projetos especiais, levando o Tarot como ferramenta de consciência, expansão e transformação pessoal para novos espaços e formatos.",
  },
];

export default function AboutPage() {
  return (
    <main className="pb-20 pt-24">
      <Container className="space-y-20">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <FadeIn className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Sobre a taróloga</span>
            <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
              Raissa - uma trajetória dedicada ao estudo dos oráculos e da espiritualidade
            </h1>
            <p className="text-pretty text-base text-muted-foreground sm:text-lg">
              Com mais de 15 anos de experiência com o Tarot e a espiritualidade, Raissa conduz as leituras guiadas por sabedoria, intuição e cuidado, criando um espaço de acolhimento para quem busca clareza, equilíbrio e reconexão com o seu propósito.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/atendimentos">Marque sua consulta</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-6 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/10 bg-primary/20">
                <Image
                  src="/images/perfil/perfil_raissa.jpg"
                  alt="Taróloga realizando leitura de cartas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <FadeIn className="rounded-3xl border border-primary/20 bg-background/80 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">Propósito e abordagem</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Cada leitura é um convite ao autoconhecimento. Raissa integra o Tarot e práticas terapêuticas para trazer clareza, orientação e cura emocional, sempre com escuta atenta e acolhedora, respeitando o momento de cada pessoa.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Durante as leituras, o Tarot é utilizado como ferramenta de reflexão e expansão de consciência, abrindo caminhos para decisões mais alinhadas e uma vida com mais presença e propósito.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">A jornada por trás das cartas</h2>
              
              <p className="mt-4 text-base text-muted-foreground">
                Guiada pela espiritualidade desde cedo, Raissa cresceu em um ambiente onde o Tarot era presença viva, uma herança passada de mãe para filha. 
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                O encanto pelas cartas surgiu ainda na infância e, com o tempo, se transformou em uma prática de escuta sensível e transformação interior. Sua conexão com o Tarot carrega a força da ancestralidade e o propósito de curar, especialmente as dores do feminino. 
             </p>
             <p className="mt-4 text-base text-muted-foreground">
                Hoje, cada leitura reflete essa caminhada, unindo intuição e sabedoria para iluminar caminhos e despertar novas percepções sobre a própria jornada.
             </p>
          </FadeIn>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Linha do tempo</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-primary/15 bg-background/80 p-6 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{item.year}</span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
