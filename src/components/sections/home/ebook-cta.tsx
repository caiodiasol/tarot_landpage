import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomeEbookCTA() {
  return (
    <section id="ebook" className="py-24">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background px-6 py-12 sm:p-14">
          <div className="absolute top-6 hidden text-center rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary md:block">
            Conteúdo exclusivo
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,1fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  Ebook - O Seu Arcano de 2026
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Um manual exclusivo para interpretar o arcano do Tarot que regerá o seu próximo ano. Entenda como aproveitar essa energia de forma prática, leve e transformadora.
                </p>
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 px-4 py-6 shadow-lg lg:hidden">
                <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-background/80">
                    <Image
                      src="/capa_ebook3.jpg"
                      alt="Capa do e-book Rotas pelo Tarot"
                      fill
                      sizes="(max-width: 1023px) 90vw, 360px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <ul className="grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  Aprenda a calcular o seu arcano pessoal de 2026.
                </li>
                <li className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  Conheça a sequência numérica dos arcanos maiores.
                </li>
                <li className="flex items-center gap-2 before:flex-shrink-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
                  Compreenda as energias do seu arcano pessoal do ano e como elas se manifestam em equilíbrio e em desequilíbrio.
                </li>
              </ul>
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-xs sm:max-w-none sm:w-auto sm:self-start"
                >
                  <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                    Comprar agora - R$ 19,90
                  </Link>
                </Button>
                <span className="mt-2 text-sm font-medium text-muted-foreground sm:mt-6">
                  Link de pagamento gerenciado pela Hortmart.
                </span>
              </div>
            </div>
            <div className="relative h-full">
              <div className="hidden h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 py-12 shadow-lg lg:flex lg:items-center lg:justify-center">
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-background/80">
                  <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                    <Image
                      src="/capa_ebook3.jpg"
                      alt="Capa do e-book Rotas pelo Tarot"
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
