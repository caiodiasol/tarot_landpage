import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const steps = [
  {
    title: "Escolha o formato",
    description:
      "Decida entre consulta online (videochamada) ou presencial no espaço sagrado da Raissa, localizado em São Paulo/SP.",
  },
  {
    title: "Compartilhe seu momento",
    description:
      "Envie, no formulário ou WhatsApp, um breve contexto sobre o que deseja orientar: amor, carreira, família, espiritualidade.",
  },
  {
    title: "Confirme o agendamento",
    description:
      "A equipe retorna com opções de agenda, instruções de preparo e link seguro de pagamento via InfinityPay.",
  },
];

export default function SchedulingPage() {
  return (
    <main className="pb-20 pt-24">
      <Container className="space-y-20">
        <section className="space-y-6 text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Agendamentos</span>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              Reserve seu encontro com acolhimento e clareza
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Todo atendimento é personalizado. Após enviar sua solicitação, ajustamos o horário e formato mais adequado, confirmando por e-mail ou WhatsApp.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                Falar pelo WhatsApp
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contato">Enviar formulário</Link>
            </Button>
          </FadeIn>
        </section>

        <section className="grid gap-8 rounded-3xl border border-primary/20 bg-background/80 p-10 shadow-sm">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Como funciona</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Estruturamos o atendimento em etapas para que você se sinta segura(o) em todo o processo — do primeiro contato ao pós-sessão.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Etapa {index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background to-background p-10 shadow-sm lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-foreground">Entre em contato comigo</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Use os canais abaixo para confirmar seu horário, solicitar orçamentos especiais ou tirar dúvidas sobre pacotes mensais. Os botões podem ser personalizados com seus links oficiais.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://pay.infinitypay.com/seu-link-aqui" target="_blank" rel="noreferrer">
                  Ir para a loja InfinityPay
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-primary/15 bg-background/80 p-6">
            <h3 className="text-lg font-semibold text-primary">Dúvidas frequentes</h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <li>• Consultas online acontecem via Google Meet ou Zoom.</li>
              <li>• Sessões duram em média 60 minutos, com gravação opcional.</li>
              <li>• Pagamento confirmado via InfinityPay garante a reserva.</li>
              <li>• Cancelamentos podem ser remarcados com 24h de antecedência.</li>
            </ul>
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}
