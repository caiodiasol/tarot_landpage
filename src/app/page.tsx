import { HomeEbookCTA } from "@/components/sections/home/ebook-cta";
import { HomeGallery } from "@/components/sections/home/gallery";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeLeituraAnualCTA } from "@/components/sections/home/leitura-anual-cta";
import { HomeServices } from "@/components/sections/home/services";
import { HomeTestimonials } from "@/components/sections/home/testimonials";

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
