import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const timeline = [
  {
    year: "2008",
    title: "Início da jornada",
    description:
      "Primeiros contatos com o Tarot ainda na adolescência, fortalecendo a mediunidade guiada pela família e pela tradição ancestral.",
  },
  {
    year: "2014",
    title: "Formação e estudos",
    description:
      "Cursos em terapias integrativas, cromoterapia e constelação familiar ampliam o repertório para atendimentos completos.",
  },
  {
    year: "2018",
    title: "Atendimentos online",
    description:
      "Raissa expande o trabalho para acolher consulentes de todo o Brasil, mantendo a mesma qualidade e energia do espaço físico.",
  },
  {
    year: "2023",
    title: "E-book e mentorias",
    description:
      "Lança conteúdos autorais, mentorias em grupo e projetos especiais para quem deseja aprofundar a conexão com o Tarot.",
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
              Raissa Tarot — uma trajetória dedicada a traduzir sinais em clareza
            </h1>
            <p className="text-pretty text-base text-muted-foreground sm:text-lg">
              Mais de 15 anos de experiência com oráculos, terapias vibracionais e escuta compassiva. Raissa guia cada sessão com sensibilidade, respeito e responsabilidade ética, oferecendo direcionamentos que unem tradição, intuição e visão de futuro.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/atendimento">Marque sua consulta</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contato">Fale com a equipe</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-6 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/10 bg-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=640&q=80"
                  alt="Taróloga realizando leitura de cartas"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground">
                Substitua por foto oficial da taróloga
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <FadeIn className="rounded-3xl border border-primary/20 bg-background/80 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">Propósito & abordagem</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Cada consulta é um convite à autoconsciência. Raissa integra Tarot, numerologia e práticas terapêuticas para construir insights personalizados, oferecendo planos de ação que acolhem mente, corpo e espírito.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Atendimento sem julgamentos, com escuta ativa e sigilo absoluto.
              </li>
              <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Integração de oráculos, cristais, aromaterapia e rituais personalizados.
              </li>
              <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                Acompanhamento pós-sessão com materiais de apoio e recapitulação.
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">Formações & certificações</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Atualize este bloco com certificações reais, cursos e eventos nos quais a taróloga participou.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-muted-foreground">
              <p>• Especialização em Tarot Terapêutico — Escola Arcanos, 2013</p>
              <p>• Formação em Terapias Integrativas — Espaço Luz, 2016</p>
              <p>• Imersão em Oráculos Ancestrais — Centro Harmonia, 2019</p>
              <p>• Mentora convidada em retiros espirituais e círculos de mulheres desde 2021</p>
            </div>
          </FadeIn>
        </section>

        <section className="space-y-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Linha do tempo</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.05}>
                <div className="rounded-3xl border border-primary/15 bg-background/80 p-6 shadow-sm">
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
