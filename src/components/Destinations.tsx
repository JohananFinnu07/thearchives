import { useState, useMemo } from "react";
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
import { cn } from "@/lib/utils";

interface NavSearchProps {
  isScrolled: boolean;
}

const NavSearch = ({ isScrolled }: NavSearchProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 🔎 Build Search Index from destinations data
  const searchResults = useMemo(() => {
    if (!search) return { destinations: [], products: [] };

    const lower = search.toLowerCase();

    const matchedDestinations = destinations.filter((dest) =>
      dest.name.toLowerCase().includes(lower),
    );

    const matchedProducts = destinations.flatMap((dest) =>
      dest.products
        .filter((product) => product.name.toLowerCase().includes(lower))
        .map((product) => ({
          ...product,
          destinationName: dest.name,
        })),
    );

    return {
      destinations: matchedDestinations,
      products: matchedProducts,
    };
  }, [search]);

  const handleSelect = (query: string) => {
    setOpen(false);
    setSearch("");
    navigate(`/destinations?q=${query}`);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "hidden items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all duration-300 md:flex",
          isScrolled
            ? "border-border bg-muted/50 text-muted-foreground hover:bg-muted"
            : "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground",
        )}
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search destinations or products...</span>
      </button>

      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search destinations, products..."
          value={search}
          onValueChange={setSearch}
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* DESTINATIONS */}
          {searchResults.destinations.length > 0 && (
            <CommandGroup heading="Destinations">
              {searchResults.destinations.map((dest) => (
                <CommandItem
                  key={dest.id}
                  onSelect={() => handleSelect(dest.name)}
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
          )}

          {/* PRODUCTS */}
          {searchResults.products.length > 0 && (
            <CommandGroup heading="Products">
              {searchResults.products.map((product) => (
                <CommandItem
                  key={`${product.name}-${product.destinationName}`}
                  onSelect={() => handleSelect(product.name)}
                  className="cursor-pointer"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      From {product.destinationName}
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
