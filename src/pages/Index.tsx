import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import HiddenGems from '@/components/HiddenGems';
import ODOPDiscovery from '@/components/ODOPDiscovery';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SubmitGemForm from '@/components/SubmitGemForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <HiddenGems />
        <ODOPDiscovery />
        <About />
      </main>
      <Footer />
      <SubmitGemForm />
    </div>
  );
};

export default Index;
