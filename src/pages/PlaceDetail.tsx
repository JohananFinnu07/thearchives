import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Compass } from "lucide-react";

import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { andhraPlaces } from "@/data/states/andhraPlaces";
import { slugify } from "@/lib/slugify";

const PlaceDetail = () => {
  const { state, destinationSlug, placeSlug } = useParams<{
    state: string;
    destinationSlug: string;
    placeSlug: string;
  }>();

  const place = andhraPlaces.find(
    (p) =>
      slugify(p.slug) === placeSlug &&
      slugify(p.destination) === destinationSlug &&
      p.state === state,
  );

  const prefix = (path: string) => (state ? `/${state}${path}` : path);

  if (!place) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="pt-32 text-center">
          <h1 className="text-3xl font-serif">Place Not Found</h1>

          <Link
            to={prefix("/")}
            className="text-primary underline mt-4 inline-block"
          >
            Return Home
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    place.mapsQuery + ", Andhra Pradesh, India",
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Link
                  to={prefix(`/destination/${destinationSlug}`)}
                  state={{ scrollTo: "explore" }}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {place.destination}
                </Link>

                <h1 className="font-serif text-5xl font-semibold">
                  {place.name}
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  {place.description}
                </p>

                {/* META */}
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {place.distance}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Best Time: {place.bestTime}
                  </div>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full"
                >
                  <Compass className="w-4 h-4" />
                  Navigate
                </a>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-[450px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-border max-w-5xl mx-auto" />

        {/* CONTENT */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* HIGHLIGHTS */}
              <div>
                <div className="bg-card rounded-2xl p-8 border border-border sticky top-24 shadow-sm">
                  <h2 className="font-serif text-2xl mb-6">Highlights</h2>

                  <ul className="space-y-3 text-muted-foreground">
                    {place.highlights.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ABOUT */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="font-serif text-3xl mb-6">About This Place</h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {place.about}
                  </p>
                </div>

                {/* TRAVEL TIPS */}
                <div>
                  <h2 className="font-serif text-3xl mb-6">Travel Tips</h2>

                  <div className="relative border-l border-border pl-12 space-y-8">
                    {place.travelTips.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                      >
                        <span className="absolute -left-[30px] top-2 w-3 h-3 rounded-full bg-primary"></span>

                        <p className="text-lg text-muted-foreground">{tip}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
