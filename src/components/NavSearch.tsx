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
        matches.push({
          title: dest.name,
          subtitle: "Destination",
          route: "/destinations",
        });
      }

      // Product match → redirect to hidden gem by destination.id
      dest.products.forEach((product) => {
        if (product.name.toLowerCase().includes(lower)) {
          matches.push({
            title: product.name,
            subtitle: `Hidden Gem • ${dest.name}`,
            route: `/hidden-gems/${dest.id}`,
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
          placeholder="Search destinations or hidden gems..."
          value={search}
          onValueChange={setSearch}
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {results.length > 0 && (
            <CommandGroup heading="Results">
              {results.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleSelect(item.route)}
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.subtitle}
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
