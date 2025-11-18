"use client";

import { useMemo, useState, useEffect, useRef, startTransition } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";

const cards = [
  { image: "/carousel1.jpg" },
  { image: "/carousel22.jpg" },
  { image: "/carousel3.jpg" },
  { image: "/carousel44.jpg" },
  { image: "/carousel5.jpg" },
];

const BASE_DURATION = 20;

export function HomeGallery() {
  const marqueeCards = useMemo(() => [...cards, ...cards], []);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Lazy load: só inicia animação quando estiver próximo de ser visível
  useEffect(() => {
    // Limpa timer anterior se existir
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (isInView) {
      // Pequeno delay para não competir com o background no carregamento inicial
      timerRef.current = setTimeout(() => {
        startTransition(() => {
          setShouldAnimate(true);
        });
      }, 300);
    } else {
      // Pausa quando sai da viewport usando startTransition
      startTransition(() => {
        setShouldAnimate(false);
      });
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isInView]);

  return (
    <section className="py-20" ref={ref}>
      <Container className="space-y-12 overflow-hidden">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Um espaço para sentir, se perceber e se reencontrar
          </h2>
        </FadeIn>

        <div className="relative isolation-auto overflow-hidden rounded-3xl">
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background"
            aria-hidden="true"
          />

          <motion.div
            className="flex min-w-max gap-6"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
            }}
            animate={shouldAnimate ? { x: ["0%", "-50%"] } : { x: "0%" }}
            transition={{ duration: BASE_DURATION, ease: "linear", repeat: shouldAnimate ? Infinity : 0 }}
          >
            {marqueeCards.map((card, index) => (
              <div
                key={`gallery-${index}`}
                className="relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 shadow-lg"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={card.image}
                  alt={`Galeria de imagens ${index + 1}`}
                  fill
                  sizes="256px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
