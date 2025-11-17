import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const highlights = [
  "Aprenda a calcular o seu arcano pessoal de 2026",
  "Conheça a sequência numérica dos arcanos maiores",
  "Compreenda as energias do seu arcano anual em equilíbrio e desequilíbrio",
];

export default function StorePage() {
  return (
    <main className="pb-24 pt-24">
      <Container className="space-y-20">
        <section className="grid gap-12">
          <FadeIn className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Loja Raissa Tarot</span>
            <h1 className="text-balance text-2xl font-semibold text-foreground sm:text-4xl">
              LEITURA DE TAROT ANUAL - Descubra o que 2026 reserva pra você mês a mês
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Uma leitura completa que mostra as energias, desafios e aprendizados de cada mês. Você vai descobrir seu arcano pessoal pela numerologia, os pontos de atenção do ciclo e as orientações mensais sobre energia geral, amor, finanças, trabalho, desafios, conselhos e a sabedoria das ervas.
            </p>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[minmax(260px,1fr)_minmax(260px,1fr)] lg:items-start">
                <div className="flex items-center justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-primary/20 bg-background/80">
                    <Link href="#" target="_blank" rel="noreferrer">
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
                <div>
                  <h2 className="text-lg font-bold text-primary mt-8 text-center">O que você vai encontrar:</h2>
                  <ul className="mt-4 grid gap-6 text-base text-muted-foreground">
                    <li className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-background/80 p-4 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                      Menos ansiedade para o seu ano
                    </li>
                    <li className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-background/80 p-4 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                      Mais clareza para tomar decisões
                    </li>
                    <li className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-background/80 p-4 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                      Equilíbrio para viver seu ano com mais leveza
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3 text-center lg:text-left">
                    <p className="text-base font-semibold text-foreground text-center">
                      R$ 317,00 no pix ou até 3x sem juros no cartão de crédito.
                    </p>
                    <div className="flex justify-center lg:justify-center">
                      <Button asChild size="lg">
                        <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20quero%20comprar%20minha%20leitura%20de%20Tarot%20anual%20de%202026" target="_blank" rel="noreferrer">
                          Comprar agora
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-12">
          <FadeIn className="space-y-6">
            <h1 className="text-balance text-2xl font-semibold text-foreground sm:text-4xl">
              Ebook - O Seu Arcano de 2026
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Um manual exclusivo para interpretar o arcano do Tarot que regerá o seu próximo ano. Entenda como aproveitar essa energia de forma prática, leve e transformadora.
            </p>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[minmax(260px,1fr)_minmax(260px,1fr)] lg:items-start">
                <div className="flex items-center justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-primary/20 bg-background/80">
                    <Link
                      href="https://pay.hotmart.com/X102873405M"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/capa_ebook3.jpg"
                        alt="Capa do e-book O Seu Arcano de 2026"
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover"
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary mt-8 text-center">O que você vai encontrar:</h2>
                  <ul className="mt-4 grid gap-6 text-base text-muted-foreground">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-background/80 p-4 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-3 text-center lg:text-left">
                    <p className="text-base font-semibold text-foreground text-center">
                      R$ 19,90
                    </p>
                    <div className="flex justify-center lg:justify-center">
                      <Button asChild size="lg">
                        <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                          Comprar agora
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
