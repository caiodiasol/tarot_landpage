"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <section className="py-20">
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
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: BASE_DURATION, ease: "linear", repeat: Infinity }}
          >
            {marqueeCards.map((card, index) => (
              <div
                key={`gallery-${index}`}
                className="relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 shadow-lg"
              >
                <Image
                  src={card.image}
                  alt={`Galeria de imagens ${index + 1}`}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
