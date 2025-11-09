"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const cards = [
  "Mesa de Tarot com cristais e velas",
  "Raissa acolhendo consulente",
  "Registro de anotações pós-sessão",
  "Ambiente preparado para leitura",
  "Oráculos complementares e baralhos",
];

const loopedCards = [...cards, ...cards];

export function HomeGallery() {
  return (
    <section className="py-20">
      <Container className="space-y-12 overflow-hidden">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Um espaço sensorial, pensado para sua experiência
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Substitua estas imagens pelos registros reais do ateliê: o carrossel pode ser integrado a partir de uma galeria ou CMS, mantendo o mesmo layout.
          </p>
        </FadeIn>

        <div className="relative isolation-auto overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute inset-0 z-10 from-background via-transparent to-background" aria-hidden="true" />

          <div className="flex min-w-max gap-6">
            <div className="flex min-w-max gap-6 animate-[marquee_30s_linear_infinite]">
              {loopedCards.map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/50 to-transparent p-6 text-sm text-primary-foreground shadow-lg"
                >
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Placeholder
                  </span>
                  <p className="mt-4 font-medium leading-relaxed text-primary-foreground">
                    {label}
                  </p>
                  <span className="absolute bottom-4 right-4 text-xs text-primary-foreground/70">
                    Atualize com imagem real
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
