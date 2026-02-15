import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { destinations } from "@/data/destinations";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ⌘K shortcut
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

  const results = useMemo(() => {
    if (!search.trim()) return [];

    const lower = search.toLowerCase();
    const matches: {
      title: string;
      subtitle: string;
      route: string;
    }[] = [];

    destinations.forEach((dest) => {
      // Destination match
      if (dest.name.toLowerCase().includes(lower)) {
        const DestinationSlug = slugify(dest.id.toLowerCase());
        matches.push({
          title: dest.name,
          subtitle: "Destination",
          route: `/destination/${DestinationSlug}`,
        });
      }

      // Product match
      dest.products.forEach((product) => {
        if (product.name.toLowerCase().includes(lower)) {
          const productSlug = slugify(product.name);

          matches.push({
            title: product.name,
            subtitle: `Hidden Gem • ${dest.name}`,
            route: `/hidden-gems/${dest.id}/${productSlug}`,
          });
        }
      });
    });

    return matches;
  }, [search]);

  const handleSelect = (route: string) => {
    setOpen(false);
    setSearch("");
    navigate(route);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted shadow-sm hover:shadow-md"
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
                placeholder="Search destinations or hidden gems..."
                value={search}
                onValueChange={setSearch}
              />

              <CommandList>
                {/* 🔎 When user types and no matches */}
                {search.trim() && results.length === 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}

                {/* 🌿 When search is empty → show suggestions */}
                {!search.trim() && (
                  <>
                    <CommandGroup heading="Popular Destinations">
                      {destinations.slice(0, 4).map((dest) => (
                        <CommandItem
                          key={dest.id}
                          onSelect={() =>
                            handleSelect(`/destination/${slugify(dest.name)}`)
                          }
                          className="cursor-pointer"
                        >
                          <div>
                            <p className="font-medium">{dest.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {dest.tagline}
                            </p>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>

                    <CommandGroup heading="Featured Hidden Gems">
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
                        .slice(0, 4)
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
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Hidden Gem
                              </p>
                            </div>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </>
                )}

                {/* 🔎 When matches exist */}
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
                          onSelect={() => handleSelect(item.route)}
                          className="cursor-pointer rounded-md hover:bg-primary/10 transition"
                        >
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.subtitle}
                            </p>
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
