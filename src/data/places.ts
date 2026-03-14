// src/data/places.ts

import { Place } from "./types";
import { andhraPlaces } from "./states/andhraPlaces";
import { telanganaPlaces } from "./states/telanganaPlaces";

export const places: Place[] = [...andhraPlaces, ...telanganaPlaces];

/* ================= GET BY STATE ================= */

export const getPlacesByState = (state: string): Place[] => {
  return places.filter((place) => place.state === state);
};

/* ================= GET BY DESTINATION ================= */

export const getPlacesByDestination = (destination: string): Place[] => {
  return places.filter((place) => place.destination === destination);
};

/* ================= GET PLACE BY SLUG ================= */

export const getPlaceBySlug = (
  slug: string,
  state: string,
): Place | undefined => {
  return places.find((place) => place.slug === slug && place.state === state);
};
