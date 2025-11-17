import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomeLeituraAnualCTA() {
  return (
    <section id="leitura-anual" className="py-24">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background px-6 py-12 sm:p-14">
          <div className="absolute top-6 hidden text-center rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary md:block">
            Conteúdo exclusivo
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,1fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  LEITURA DE TAROT ANUAL - Descubra o que 2026 reserva para você mês a mês
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Uma leitura completa que mostra as energias, desafios e aprendizados de cada mês. Você vai descobrir seu arcano pessoal pela numerologia, os pontos de atenção do ciclo e as orientações mensais sobre energia geral, amor, finanças, trabalho, desafios, conselhos e a sabedoria das ervas.
                </p>
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 px-4 py-6 shadow-lg lg:hidden">
                <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20quero%20comprar%20minha%20leitura%20de%20Tarot%20anual%20de%202026" target="_blank" rel="noreferrer">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-background/80">
                    <Image
                      src="/tarot_anual.jpg"
                      alt="Capa da Leitura de Tarot Anual 2026"
                      fill
                      sizes="(max-width: 1023px) 90vw, 360px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <ul className="grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                    Menos ansiedade para o seu ano
                </li>
                <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                    Mais clareza para tomar decisões
                </li>
                <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                    Equilíbrio para viver seu ano com mais leveza
                </li>
              </ul>
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-base font-semibold text-foreground">
                  R$ 317,00 no pix ou até 3x sem juros no cartão de crédito.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-xs sm:max-w-none sm:w-auto"
                >
                  <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20quero%20comprar%20minha%20leitura%20de%20Tarot%20anual%20de%202026" target="_blank" rel="noreferrer">
                    Comprar agora
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-full">
              <div className="hidden h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 py-12 shadow-lg lg:flex lg:items-center lg:justify-center">
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-background/80">
                  <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20quero%20comprar%20minha%20leitura%20de%20Tarot%20anual%20de%202026" target="_blank" rel="noreferrer">
                    <Image
                      src="/tarot_anual.jpg"
                      alt="Capa da Leitura de Tarot Anual 2026"
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

