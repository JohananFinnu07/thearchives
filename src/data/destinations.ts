import { Destination } from "./types";
import { andhraDestinations } from "./states/andhra";
import { telanganaDestinations } from "./states/telangana";

export const allDestinations: Destination[] = [
  ...andhraDestinations,
  ...telanganaDestinations,
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
