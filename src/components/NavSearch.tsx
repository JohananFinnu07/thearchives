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

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

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

  /* Data Memoization (Kept same) */
  const filteredDestinations = useMemo(() => {
    if (!state) return allDestinations;
    return allDestinations.filter(
      (d) => d.state?.toLowerCase() === state.toLowerCase(),
    );
  }, [state]);

  const famousProducts = useMemo(() => {
    return filteredDestinations.flatMap((d) =>
      d.products
        .filter((p) => p.type === "famous")
        .map((p) => ({
          name: p.name,
          route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
        })),
    );
  }, [filteredDestinations]);

  const hiddenProducts = useMemo(() => {
    return filteredDestinations.flatMap((d) =>
      d.products
        .filter((p) => p.type === "underrated")
        .map((p) => ({
          name: p.name,
          route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
        })),
    );
  }, [filteredDestinations]);

  const filteredRecipes = useMemo(() => {
    if (!state) return recipes;
    return recipes.filter(
      (r) => r.state?.toLowerCase() === state.toLowerCase(),
    );
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
          {/* Sticky Search Input */}
          <div className="sticky top-0 z-10 bg-background border-b">
            <CommandInput
              placeholder="Search destinations, foods, recipes..."
              className="h-12 text-base"
            />
          </div>

          {/* Scrollable Results */}
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
