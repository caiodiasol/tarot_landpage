import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomeEbookCTA() {
  return (
    <section id="ebook" className="py-24">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background px-6 py-12 sm:p-14">
          <div className="absolute right-6 top-6 hidden rotate-3 rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary md:block">
            Conteúdo exclusivo
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(280px,1fr)] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                E-book &ldquo;Rotas pelo Tarot&rdquo; — um guia prático para mergulhar na jornada intuitiva
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Estruturado em capítulos que combinam fundamentos do Tarot, tiragens terapêuticas e exercícios de reconexão interna. Ideal para quem deseja começar a ler cartas ou aprofundar seus rituais diários.
              </p>
              <ul className="grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  7 tiragens guiadas para temas como amor, carreira e propósito.
                </li>
                <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  Meditações e afirmações para antes e depois das leituras.
                </li>
                <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  Acesso a playlists, materiais extras e indicação de decks favoritos da Raissa.
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="https://pay.infinitypay.com/seu-link-aqui" target="_blank" rel="noreferrer">
                    Comprar agora — R$ 89
                  </Link>
                </Button>
                <span className="text-sm font-medium text-muted-foreground">
                  Link de pagamento gerenciado na InfinityPay (substitua pelo link oficial).
                </span>
              </div>
            </div>
            <div className="relative h-full">
              <div className="hidden h-full min-h-[320px] w-full rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/30 to-transparent p-6 text-primary-foreground shadow-xl lg:flex lg:flex-col lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-foreground/80">Prévia do conteúdo</p>
                  <h3 className="mt-4 text-2xl font-semibold text-primary-foreground">Capítulo 03 • Tiragens terapêuticas</h3>
                </div>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Personalize este espaço com uma prévia real do e-book, um mockup 3D ou depoimentos de quem já adquiriu o material.
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">ENTREGA DIGITAL • ACESSO IMEDIATO</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
