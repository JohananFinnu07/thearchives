import { Destination } from "./types";
import { andhraDestinations } from "./states/andhra";
import { telanganaDestinations } from "./states/telangana";
import { puducherryDestinations } from "./states/pondi";

export const allDestinations: Destination[] = [
  ...andhraDestinations,
  ...telanganaDestinations,
  ...puducherryDestinations,
];

export const getDestinationBySlug = (
  slug: string,
  state: string,
): Destination | undefined => {
  return allDestinations.find(
    (dest) => dest.slug === slug && dest.state === state,
  );
};

export const getDestinationsByState = (state: string): Destination[] => {
  return allDestinations.filter((dest) => dest.state === state);
};
