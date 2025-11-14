'use client';

import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 -left-24 h-full w-72 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute inset-y-0 -right-24 h-full w-72 rounded-full blur-3xl" aria-hidden="true" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <FadeIn className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Autoconhecimento • Consciência • Transformação • Equilíbrio 
          </span>

          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Uma jornada de descoberta e clareza através do Tarot
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
            Leituras guiadas pela taróloga Raissa, conduzidas com cuidado e olhar terapêutico, criando um espaço seguro para acolher suas questões com profundidade, refletir sobre seus processos, ressignificar experiências e acessar compreensões mais profundas sobre sua caminhada, oferecendo clareza para seus próximos passos, sempre respeitando seu tempo e seu momento.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/atendimentos">Agende sua consulta</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}