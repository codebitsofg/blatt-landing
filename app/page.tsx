import { FeaturedStories } from "./_components/featured-stories";
import { Hero } from "./_components/hero";
import {
  ContextSection,
  HowItWorks,
  LanguagesSection,
  LibraryPreview,
  PracticeSection,
  SiteFooter,
  StartCta,
  StatsBand,
  StoriesSection,
  Testimonials,
  UnderstandingSection,
} from "./_components/sections";
import { SiteNav } from "./_components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <StatsBand />
      <LanguagesSection />
      <ContextSection />
      <StoriesSection />
      <UnderstandingSection />
      <PracticeSection />
      <HowItWorks />
      <FeaturedStories />
      <Testimonials />
      <LibraryPreview />
      <StartCta />
      <SiteFooter />
    </>
  );
}
