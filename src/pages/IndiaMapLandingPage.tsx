import IndiaMap from "@/components/IndiaMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="text-center pt-10 md:pt-16 pb-6 px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Explore <span className="text-primary">India</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Hover over any state to see its name. Click to explore details.
        </p>
      </header>

      {/* Map */}
      <main className="px-4 pb-16">
        <IndiaMap />
      </main>

      <footer className="text-center pb-8 text-xs text-muted-foreground">
        Interactive Map of India — All 28 States &amp; 8 Union Territories
      </footer>
    </div>
  );
};

export default Index;
