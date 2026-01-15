import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import HiddenGems from '@/components/HiddenGems';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <HiddenGems />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
