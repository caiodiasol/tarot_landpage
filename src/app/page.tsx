import { HomeEbookCTA } from "@/components/sections/home/ebook-cta";
import { HomeGallery } from "@/components/sections/home/gallery";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeServices } from "@/components/sections/home/services";
import { HomeTestimonials } from "@/components/sections/home/testimonials";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeGallery />
      <HomeEbookCTA />
      <HomeTestimonials />
    </main>
  );
}
