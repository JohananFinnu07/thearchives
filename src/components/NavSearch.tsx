import { useState, useMemo, useEffect } from "react";
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

/* 🔹 Normalize text for safe searching */
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/* 🔹 Central slugify */
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  /* ⌘K / Ctrl+K shortcut */
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

  /* 🔎 Search Results */
  const results = useMemo(() => {
    if (!search.trim()) return [];

    const lower = normalize(search);

    const matches: {
      title: string;
      subtitle: string;
      route: string;
      type: "destination" | "hidden" | "famous" | "recipe";
      scrollTo?: string;
    }[] = [];

    destinations.forEach((dest) => {
      /* Destination match */
      if (normalize(dest.name).includes(lower)) {
        matches.push({
          title: dest.name,
          subtitle: "Destination",
          route: `/destination/${dest.id}`,
          type: "destination",
        });
      }

      /* Product match */
      dest.products.forEach((product) => {
        if (normalize(product.name).includes(lower)) {
          const productSlug = slugify(product.name);
          const isUnderrated = product.type === "underrated";

          matches.push({
            title: product.name,
            subtitle: isUnderrated
              ? `Hidden Gem • ${dest.name}`
              : `Famous Product • ${dest.name}`,
            route: isUnderrated
              ? `/hidden-gems/${dest.id}/${productSlug}`
              : `/hidden-gems/${dest.id}/${productSlug}`,
            type: isUnderrated ? "hidden" : "famous",
            scrollTo: isUnderrated ? undefined : "famous",
          });
        }
      });
    });

    /* Recipe match */
    recipes.forEach((recipe) => {
      const nameMatch = normalize(recipe.name).includes(lower);
      const ingredientMatch = recipe.ingredients?.some((ing) =>
        normalize(ing).includes(lower),
      );
      const destinationMatch = normalize(recipe.destination).includes(lower);

      if (nameMatch || ingredientMatch || destinationMatch) {
        matches.push({
          title: recipe.name,
          subtitle: `Recipe • ${recipe.destination}`,
          route: `/recipes/${slugify(recipe.name)}`,
          type: "recipe",
        });
      }
    });

    return matches;
  }, [search]);

  const handleSelect = (route: string, scrollTo?: string) => {
    setOpen(false);
    setSearch("");

    if (scrollTo) {
      navigate(route, { state: { scrollTo } });
    } else {
      navigate(route);
    }
  };

  return (
    <>
      {/* Search Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-6 py-2 text-sm text-muted-foreground transition hover:bg-muted shadow-sm hover:shadow-md"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <motion.kbd
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="ml-2 rounded border px-1.5 py-0.5 text-[10px]"
        >
          ⌘K
        </motion.kbd>
      </motion.button>

      {/* Search Dialog */}
      <AnimatePresence>
        {open && (
          <CommandDialog open={open} onOpenChange={setOpen}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-background/80 backdrop-blur-xl rounded-xl"
            >
              <CommandInput
                placeholder="Search destinations, famous products, hidden gems, or recipes..."
                value={search}
                onValueChange={setSearch}
              />

              <CommandList>
                {/* Default Suggestions */}
                {!search.trim() && (
                  <>
                    <CommandGroup heading="Featured Destinations">
                      {destinations.slice(0, 2).map((dest) => (
                        <CommandItem
                          key={dest.id}
                          onSelect={() =>
                            handleSelect(`/destination/${dest.id}`)
                          }
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <div>
                              <p className="font-medium">{dest.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Destination
                              </p>
                            </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>

                    <CommandGroup heading="Famous Products">
                      {destinations
                        .flatMap((dest) =>
                          dest.products
                            .filter((p) => p.type === "famous")
                            .slice(0, 1)
                            .map((product) => ({
                              product,
                              destinationId: dest.id,
                            })),
                        )
                        .slice(0, 2)
                        .map(({ product, destinationId }) => (
                          <CommandItem
                            key={product.name}
                            onSelect={() =>
                              handleSelect(
                                `/destination/${destinationId}`,
                                "famous",
                              )
                            }
                            className="cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <Star className="h-4 w-4 text-green-600" />
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  Famous Product
                                </p>
                              </div>
                            </div>
                          </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandGroup heading="Hidden Gems">
                      {destinations
                        .flatMap((dest) =>
                          dest.products
                            .filter((p) => p.type === "underrated")
                            .slice(0, 1)
                            .map((product) => ({
                              product,
                              destinationId: dest.id,
                            })),
                        )
                        .slice(0, 2)
                        .map(({ product, destinationId }) => (
                          <CommandItem
                            key={product.name}
                            onSelect={() =>
                              handleSelect(
                                `/hidden-gems/${destinationId}/${slugify(
                                  product.name,
                                )}`,
                              )
                            }
                            className="cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <Sparkles className="h-4 w-4 text-orange-500" />
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  Hidden Gem
                                </p>
                              </div>
                            </div>
                          </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandGroup heading="Popular Recipes">
                      {recipes.slice(0, 2).map((recipe) => (
                        <CommandItem
                          key={recipe.name}
                          onSelect={() =>
                            handleSelect(`/recipes/${slugify(recipe.name)}`)
                          }
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <ChefHat className="h-4 w-4 text-orange-500" />
                            <div>
                              <p className="font-medium">{recipe.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {recipe.destination}
                              </p>
                            </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}

                {/* Search Results */}
                {search.trim() && results.length === 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}

                {search.trim() && results.length > 0 && (
                  <CommandGroup heading="Results">
                    {results.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <CommandItem
                          onSelect={() =>
                            handleSelect(item.route, item.scrollTo)
                          }
                          className="cursor-pointer rounded-md hover:bg-primary/10 transition"
                        >
                          <div className="flex items-center gap-3">
                            {item.type === "destination" && (
                              <MapPin className="h-4 w-4 text-green-600" />
                            )}
                            {item.type === "hidden" && (
                              <Sparkles className="h-4 w-4 text-orange-500" />
                            )}
                            {item.type === "famous" && (
                              <Star className="h-4 w-4 text-green-600" />
                            )}
                            {item.type === "recipe" && (
                              <ChefHat className="h-4 w-4 text-orange-500" />
                            )}

                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </CommandItem>
                      </motion.div>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </motion.div>
          </CommandDialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSearch;
