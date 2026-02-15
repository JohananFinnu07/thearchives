import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ⌘K Shortcut
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
    if (!search.trim()) {
      return { destinations: [], products: [] };
    }

    const lower = search.toLowerCase();

    const matchedDestinations = destinations.filter((dest) =>
      dest.name.toLowerCase().includes(lower),
    );

    const matchedProducts = destinations.flatMap((dest) =>
      dest.products
        .filter((product) => product.name.toLowerCase().includes(lower))
        .map((product) => ({
          ...product,
          destinationId: dest.id,
        })),
    );

    return {
      destinations: matchedDestinations,
      products: matchedProducts,
    };
  }, [search]);

  const handleSelect = (scrollId: string) => {
    setOpen(false);
    setSearch("");

    navigate("/destinations", {
      state: { scrollTo: scrollId },
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="ml-2 rounded border px-1.5 py-0.5 text-[10px] text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search destinations or products..."
          value={search}
          onValueChange={setSearch}
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {results.destinations.length > 0 && (
            <CommandGroup heading="Destinations">
              {results.destinations.map((dest) => (
                <CommandItem
                  key={dest.id}
                  onSelect={() => handleSelect(dest.id)}
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
          )}

          {results.products.length > 0 && (
            <CommandGroup heading="Products">
              {results.products.map((product) => (
                <CommandItem
                  key={product.destinationId}
                  onSelect={() => handleSelect(product.destinationId)}
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      From {product.destinationId}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default NavSearch;
