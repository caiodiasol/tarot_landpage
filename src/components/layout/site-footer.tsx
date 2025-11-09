import Link from "next/link";

import { Container } from "@/components/ui/container";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/loja", label: "Loja" },
  { href: "/contato", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-lg font-semibold text-primary">Raissa Tarot</p>
          <p className="text-sm text-muted-foreground">
            Espaço de terapias integrativas e leituras de Tarot com acolhimento, intuição e propósito.
            Personalize estas informações com a identidade da taróloga.
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-2 md:flex-row md:justify-end md:gap-8">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-border/50 bg-background/70">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raissa Tarot. Todos os direitos reservados.</p>
          <p className="font-medium">Atualize com telefone, email e redes sociais no próximo passo.</p>
        </Container>
      </div>
    </footer>
  );
}
