import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Sparkles, ChefHat, Star } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { allDestinations } from "@/data/destinations";
import { recipes } from "@/data/recipes";
import { places } from "@/data/places";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* Remove duplicates helper */
const uniqueBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
  const map = new Map<string, T>();

  array.forEach((item) => {
    const value = String(item[key]).toLowerCase();
    if (!map.has(value)) {
      map.set(value, item);
    }
  });

  return Array.from(map.values());
};

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useParams<{ state?: string }>();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  /* Destinations */
  const filteredDestinations = useMemo(() => {
    if (!state) return allDestinations;

    return allDestinations.filter(
      (d) => d.state?.toLowerCase() === state.toLowerCase(),
    );
  }, [state]);

  /* Famous Products */
  const famousProducts = useMemo(() => {
    const items = filteredDestinations.flatMap((d) =>
      d.products
        .filter((p) => p.type === "famous")
        .map((p) => ({
          name: p.name,
          route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
        })),
    );

    return uniqueBy(items, "name");
  }, [filteredDestinations]);

  /* Hidden Gems */
  const hiddenProducts = useMemo(() => {
    const items = filteredDestinations.flatMap((d) =>
      d.products
        .filter((p) => p.type === "underrated")
        .map((p) => ({
          name: p.name,
          route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
        })),
    );

    return uniqueBy(items, "name");
  }, [filteredDestinations]);

  /* Recipes */
  const filteredRecipes = useMemo(() => {
    const list = !state
      ? recipes
      : recipes.filter((r) => r.state?.toLowerCase() === state.toLowerCase());

    return uniqueBy(list, "name");
  }, [state]);

  /* Places */
  const filteredPlaces = useMemo(() => {
    const list = !state
      ? places
      : places.filter((p) => p.state?.toLowerCase() === state.toLowerCase());

    return uniqueBy(list, "name");
  }, [state]);

  const handleSelect = (route: string) => {
    setOpen(false);
    navigate(state ? `/${state}${route}` : route);
  };

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-6 py-2 text-sm text-muted-foreground shadow-sm"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-2 hidden sm:inline rounded border px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </motion.button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col max-h-[85vh] md:max-h-[70vh] w-full max-w-lg overflow-hidden">
          {/* Search Input */}
          <div className="sticky top-0 z-10 bg-background border-b">
            <CommandInput
              placeholder="Search destinations, foods, recipes..."
              className="h-12 text-base"
            />
          </div>

          {/* Results */}
          <CommandList
            className="flex-1 overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            <CommandEmpty>No results found.</CommandEmpty>

            {/* Destinations */}
            {filteredDestinations.length > 0 && (
              <CommandGroup heading="Destinations">
                {filteredDestinations.map((dest) => (
                  <CommandItem
                    key={dest.id}
                    onSelect={() => handleSelect(`/destination/${dest.id}`)}
                    className="flex items-center gap-3 py-3 text-base"
                  >
                    <MapPin className="h-4 w-4 text-green-600" />
                    {dest.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Famous Products */}
            {famousProducts.length > 0 && (
              <CommandGroup heading="Famous Products">
                {famousProducts.map((item) => (
                  <CommandItem
                    key={item.route}
                    onSelect={() => handleSelect(item.route)}
                    className="flex items-center gap-3 py-3 text-base"
                  >
                    <Star className="h-4 w-4 text-green-600" />
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Hidden Gems */}
            {hiddenProducts.length > 0 && (
              <CommandGroup heading="Hidden Gems">
                {hiddenProducts.map((item) => (
                  <CommandItem
                    key={item.route}
                    onSelect={() => handleSelect(item.route)}
                    className="flex items-center gap-3 py-3 text-base"
                  >
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Places */}
            {filteredPlaces.length > 0 && (
              <CommandGroup heading="Places">
                {filteredPlaces.map((place) => (
                  <CommandItem
                    key={place.slug}
                    onSelect={() =>
                      handleSelect(
                        `/${slugify(place.destination)}/${place.slug}`,
                      )
                    }
                    className="flex items-center gap-3 py-3 text-base"
                  >
                    <MapPin className="h-4 w-4 text-blue-500" />
                    {place.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Recipes */}
            {filteredRecipes.length > 0 && (
              <CommandGroup heading="Recipes">
                {filteredRecipes.map((recipe) => (
                  <CommandItem
                    key={recipe.name}
                    onSelect={() =>
                      handleSelect(`/recipes/${slugify(recipe.name)}`)
                    }
                    className="flex items-center gap-3 py-3 text-base"
                  >
                    <ChefHat className="h-4 w-4 text-orange-500" />
                    {recipe.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
};

export default NavSearch;
