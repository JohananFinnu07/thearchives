import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

interface Place {
  name: string;
  slug: string;
  image: string;
  description: string;
  distance: string;
}

interface Props {
  place: Place;
  state: string;
  destinationSlug: string;
}

const PlaceCard = ({ place, state, destinationSlug }: Props) => {
  return (
    <Link
      to={`/${state}/${destinationSlug}/${place.slug}`}
      className="group block h-full"
    >
      <article className="relative h-[360px] rounded-2xl overflow-hidden bg-card border shadow-sm hover:shadow-xl transition-all duration-500">
        {/* IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* DISTANCE BADGE */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs">
          <MapPin className="w-3 h-3 text-primary" />
          {place.distance}
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-1">
                {place.name}
              </h3>

              <p className="text-sm text-white/80 line-clamp-2">
                {place.description}
              </p>
            </div>

            {/* hover icon */}
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PlaceCard;
