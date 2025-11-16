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
              Preencha o formulário abaixo ou já chame no WhatsApp. Responderei o mais rápido possível.
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
              <p className="text-sm text-muted-foreground">
                ● Atendimento online via Google Meet ou áudio no Whatsapp.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: <span className="font-medium text-foreground">tarot.raissa@gmail.com</span></p>
              <p>WhatsApp: <span className="font-medium text-foreground">(31) 99573-7940</span></p>
              <p>Horário de atendimento: Segunda a sexta, mediante agendamento.</p>
            </div>
            <div className="space-y-3">
              <Button asChild size="lg">
                <Link href="https://wa.me/5531995737940?text=Oi%20Raissa%2C%20gostaria%20de%20marcar%20uma%20leitura%20de%20Tarot." target="_blank" rel="noreferrer">
                  Marque sua consulta no WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/atendimentos">Ver opções de atendimento</Link>
              </Button>
            </div>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
