import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { IssueTrackerSection } from '@/sections/IssueTrackerSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { StatsBannerSection } from '@/sections/StatsBannerSection';
import { KnowledgeSection } from '@/sections/KnowledgeSection';
import { IntegrationsSection } from '@/sections/IntegrationsSection';
import { StatsSection } from '@/sections/StatsSection';
import { FooterCTASection } from '@/sections/FooterCTASection';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <IssueTrackerSection />
        <FeaturesSection />
        <StatsBannerSection />
        <KnowledgeSection />
        <IntegrationsSection />
        <StatsSection />
        <FooterCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
