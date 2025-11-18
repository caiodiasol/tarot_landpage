import { HomeHero } from "@/components/sections/home/hero";
import { HomeServices } from "@/components/sections/home/services";
import dynamic from "next/dynamic";

// Lazy load componentes menos críticos para melhorar performance inicial
const HomeGallery = dynamic(() => import("@/components/sections/home/gallery").then(mod => ({ default: mod.HomeGallery })));

const HomeLeituraAnualCTA = dynamic(() => import("@/components/sections/home/leitura-anual-cta").then(mod => ({ default: mod.HomeLeituraAnualCTA })));

const HomeEbookCTA = dynamic(() => import("@/components/sections/home/ebook-cta").then(mod => ({ default: mod.HomeEbookCTA })));

const HomeTestimonials = dynamic(() => import("@/components/sections/home/testimonials").then(mod => ({ default: mod.HomeTestimonials })));

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeGallery />
      <HomeLeituraAnualCTA />
      <HomeEbookCTA />
      <HomeTestimonials />
    </main>
  );
}
