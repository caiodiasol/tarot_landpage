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

export function HomeGallery() {
  return (
    <section className="overflow-hidden py-20">
      <Container className="space-y-12">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Um espaço sensorial, pensado para sua experiência
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Substitua estas imagens pelos registros reais do ateliê: o carrossel pode ser integrado a partir de uma galeria ou CMS, mantendo o mesmo layout.
          </p>
        </FadeIn>

        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background" aria-hidden="true" />

          <div className="flex gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {[0, 1].map((loop) => (
              <div
                key={loop}
                className="flex animate-[marquee_30s_linear_infinite] gap-6"
                style={{ animationDelay: loop === 1 ? "-15s" : undefined }}
              >
                {cards.map((label, index) => (
                  <div
                    key={`${label}-${index}-${loop}`}
                    className="relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/30 to-transparent p-6 text-sm text-primary-foreground shadow-lg"
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
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
