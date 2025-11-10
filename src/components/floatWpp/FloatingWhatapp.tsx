import Link from "next/link";
import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/5531995737940"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-105 hover:bg-green-400 sm:bottom-6 sm:right-6 md:h-14 md:w-14"
      aria-label="Falar no WhatsApp"
    >
      <Image
        src="/images/icons/whatsapp.png"
        alt="WhatsApp"
        fill
        sizes="(max-width: 767px) 48px, (max-width: 1023px) 56px, 64px"
        className="object-cover"
        priority
      />
    </Link>
  );
}