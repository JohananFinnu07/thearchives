import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Sparkles, ChefHat, Star } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { destinations } from "@/data/destinations";
import { recipes } from "@/data/recipes";

/* Slugify */
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  /* ⌘K / Ctrl+K */
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

  const handleSelect = (route: string) => {
    setOpen(false);
    navigate(route);
  };

  /* Flatten products */
  const famousProducts = destinations.flatMap((d) =>
    d.products
      .filter((p) => p.type === "famous")
      .map((p) => ({
        name: p.name,
        route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
      })),
  );

  const hiddenProducts = destinations.flatMap((d) =>
    d.products
      .filter((p) => p.type === "underrated")
      .map((p) => ({
        name: p.name,
        route: `/hidden-gems/${d.id}/${slugify(p.name)}`,
      })),
  );

  return (
    <>
      {/* Search Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-6 py-2 text-sm text-muted-foreground transition hover:bg-muted shadow-sm hover:shadow-md"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-2 rounded border px-1.5 py-0.5 text-[10px]">⌘K</kbd>
      </motion.button>

      {/* Dialog */}
      <AnimatePresence>
        {open && (
          <CommandDialog open={open} onOpenChange={setOpen}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-background/95 backdrop-blur-xl rounded-xl max-h-[80vh] flex flex-col"
            >
              <CommandInput placeholder="Search destinations, products, or recipes..." />

              <CommandList className="max-h-[60vh] overflow-y-auto">
                {/* Default / Filtered automatically by cmdk */}

                <CommandEmpty>No results found.</CommandEmpty>

                {/* Destinations */}
                <CommandGroup heading="Destinations">
                  {destinations.map((dest) => (
                    <CommandItem
                      key={dest.id}
                      value={dest.name}
                      onSelect={() => handleSelect(`/destination/${dest.id}`)}
                    >
                      <MapPin className="h-4 w-4 text-green-600 mr-2" />
                      {dest.name}
                    </CommandItem>
                  ))}
                </CommandGroup>

                {/* Famous */}
                <CommandGroup heading="Famous Products">
                  {famousProducts.map((item) => (
                    <CommandItem
                      key={item.route}
                      value={item.name}
                      onSelect={() => handleSelect(item.route)}
                    >
                      <Star className="h-4 w-4 text-green-600 mr-2" />
                      {item.name}
                    </CommandItem>
                  ))}
                </CommandGroup>

                {/* Hidden */}
                <CommandGroup heading="Hidden Gems">
                  {hiddenProducts.map((item) => (
                    <CommandItem
                      key={item.route}
                      value={item.name}
                      onSelect={() => handleSelect(item.route)}
                    >
                      <Sparkles className="h-4 w-4 text-orange-500 mr-2" />
                      {item.name}
                    </CommandItem>
                  ))}
                </CommandGroup>

                {/* Recipes */}
                <CommandGroup heading="Recipes">
                  {recipes.map((recipe) => (
                    <CommandItem
                      key={recipe.name}
                      value={`${recipe.name} ${recipe.destination}`}
                      onSelect={() =>
                        handleSelect(`/recipes/${slugify(recipe.name)}`)
                      }
                    >
                      <ChefHat className="h-4 w-4 text-orange-500 mr-2" />
                      {recipe.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </motion.div>
          </CommandDialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSearch;
