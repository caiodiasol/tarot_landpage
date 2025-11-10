import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const highlights = [
  "Aprenda a calcular o seu arcano pessoal de 2026.",
  "Conheça a sequência numérica dos arcanos maiores.",
  "Compreenda as energias do seu arcano anual em equilíbrio e desequilíbrio.",
];

export default function StorePage() {
  return (
    <main className="pb-24 pt-24">
      <Container className="space-y-20">
        <section className="grid gap-12">
          <FadeIn className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Loja Raissa Tarot</span>
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
                        src="/capa_ebook.jpg"
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
                  <h2 className="text-lg font-semibold text-primary mt-8">O que você vai encontrar</h2>
                  <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-background/80 p-4 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                  Comprar agora - R$ 19,90
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contato">Tire dúvidas com a equipe</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Pagamento seguro via InfinityPay. Após a confirmação, você recebe o link de download imediato e atualizações futuras.
            </p>
          </FadeIn>
        </section>
        <section className="grid gap-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background p-10 shadow-sm lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Para quem é este e-book?</h2>
            <ul className="mt-6 grid gap-4 text-sm text-muted-foreground">
              <li>• Tarólogos e terapeutas que desejam elevar a entrega em atendimentos individuais.</li>
              <li>• Quem busca autonomia para interpretar mensagens espirituais com ética e responsabilidade.</li>
              <li>• Pessoas em transição de carreira, querendo dar os primeiros passos em oráculos com suporte seguro.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="https://pay.hotmart.com/X102873405M" target="_blank" rel="noreferrer">
                  Garantir meu acesso agora
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/atendimentos">Agendar consulta com a Raissa</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="rounded-3xl border border-primary/15 bg-background/90 p-6 text-sm text-muted-foreground">
            <p>
              Atualize este espaço com depoimentos de quem já adquiriu o material, prints do ebook ou mockups de dispositivos mostrando o conteúdo. Isso reforça a confiança e incentiva a decisão.
            </p>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
