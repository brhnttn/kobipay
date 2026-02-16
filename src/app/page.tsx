import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import ComparisonSection from '@/components/ComparisonSection';
import Calculator from '@/components/Calculator';
import SecuritySection from '@/components/SecuritySection';
import Footer from '@/components/Footer';
import SolutionSection from '@/components/SolutionSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <Header />
      <main>
        <Hero />
        {/* LogoCloud Buradan Kaldırıldı */}
        <StatsSection />
        <HowItWorks />
        <SolutionSection />
        <TrustSection />
        <Features />
        <ComparisonSection />
        <Calculator />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}