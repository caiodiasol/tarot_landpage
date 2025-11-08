"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pb-20 pt-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_minmax(280px,1fr)] lg:items-center">
        <div className="space-y-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Intuição • Acolhimento • Transformação
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Desperte novas perspectivas com leituras de Tarot e terapias integrativas.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-pretty text-base text-muted-foreground sm:text-lg">
              Sessões guiadas pela taróloga Raissa, unindo sensibilidade, experiência e constância para iluminar decisões em amor, carreira e espiritualidade.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/agendamento">Agende sua consulta</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#ebook">Conheça o e-book</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
          <motion.div
            initial={{ rotate: -4 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-3xl border border-primary/30 bg-card/50 p-6 shadow-2xl backdrop-blur"
          >
            <div className="grid gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10">
                <div className="flex h-full w-full items-center justify-center text-center text-sm font-medium text-primary-foreground/80">
                  Espaço reservado para carrossel de imagens ou vídeo de apresentação.
                </div>
              </div>
              <div className="grid gap-3 rounded-2xl border border-primary/20 bg-background/80 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">próximas sessões</p>
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 px-3 py-2">
                    <span className="font-medium text-primary">Leitura geral</span>
                    <span className="text-muted-foreground">22 Nov • 19h</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 px-3 py-2">
                    <span className="font-medium text-primary">Tarot terapêutico</span>
                    <span className="text-muted-foreground">23 Nov • 09h</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Personalize este bloco com agenda real, depoimentos ou destaques visuais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}
