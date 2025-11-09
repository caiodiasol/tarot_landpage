import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <main className="pb-20 pt-24">
      <Container className="space-y-16">
        <section className="max-w-2xl">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Contato</span>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Vamos conversar?</h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Preencha o formulário ou chame pelo WhatsApp. Respondemos em até 24 horas com detalhes de agenda, formatos e investimento.
            </p>
          </FadeIn>
        </section>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_1fr] lg:items-start">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1} className="grid gap-6 rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-primary">Informações úteis</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                ● Atendimento presencial: Rua Exemplo, 123 — Bairro da Liberdade, São Paulo/SP.
              </p>
              <p className="text-sm text-muted-foreground">
                ● Atendimento online via Google Meet ou Zoom.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: <span className="font-medium text-foreground">contato@raissatarot.com</span></p>
              <p>WhatsApp: <span className="font-medium text-foreground">(11) 97508-8928</span></p>
              <p>Horário de atendimento: Segunda a sábado, das 10h às 20h.</p>
            </div>
            <div className="space-y-3">
              <Button asChild size="lg">
                <Link href="https://wa.me/5511975088928" target="_blank" rel="noreferrer">
                  Marque sua consulta no WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/atendimento">Ver opções de atendimento</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Personalize os dados com seus contatos oficiais. Itens adicionais como Instagram, Telegram ou endereço comercial podem ser adicionados aqui.
            </p>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
