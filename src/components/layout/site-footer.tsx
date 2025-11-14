import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/atendimentos", label: "Atendimentos" },
  { href: "/loja", label: "Loja" },
  { href: "/contato", label: "Contato" },
];

const SOCIAL_LINKS = [
  {
    href: "https://wa.me/5531995737940",
    label: "WhatsApp",
    icon: "/images/icons/whats.png",
  },
  {
    href: "https://www.instagram.com/tarotraissa/",
    label: "Instagram",
    icon: "/images/icons/instagram.png",
  },
  {
    href: "https://www.tiktok.com/@tarotraissa",
    label: "TikTok",
    icon: "/images/icons/tiktok.png",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between">
        {/* Coluna esquerda - descrição */}
        <div className="max-w-sm space-y-3 text-center md:text-left">
          <p className="text-lg font-semibold text-primary">Tarot Raissa</p>
          <p className="text-sm text-muted-foreground">
            Espaço de leituras de Tarot e terapias com atenção, acolhimento e intuição. Cada atendimento é pensado para promover cura, autoconhecimento e fortalecer sua caminhada.
          </p>
        </div>

        {/* Coluna direita - navegação e ícones */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Navegação */}
          <nav className="flex flex-col items-center gap-3 md:flex-row md:justify-end md:gap-8">
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

          {/* Ícones sociais centralizados abaixo */}
          <div className="flex justify-center gap-8 mt-2 md:mt-2">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex hover:scale-105 transition-transform"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={36}
                  height={36}
                  className="object-contain opacity-85 hover:opacity-100 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Linha inferior */}
      <div className="border-t border-border/50 bg-background/70">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raissa Tarot. Todos os direitos reservados.</p>
          <p className="font-medium">
            Atualize com telefone, e-mail e redes sociais no próximo passo.
          </p>
        </Container>
      </div>
    </footer>
  );
}
