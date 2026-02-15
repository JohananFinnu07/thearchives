import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const data = [
  { title: "Araku Coffee", type: "Product", path: "/destinations/araku" },
  { title: "Wild Forest Honey", type: "Product", path: "/hidden-gems/honey" },
  {
    title: "Madagada Pottery",
    type: "Hidden Gem",
    path: "/hidden-gems/madagada",
  },
  { title: "Paderu Turmeric", type: "Product", path: "/hidden-gems/turmeric" },
];

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const filteredResults = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <div className="pt-28 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>

      {filteredResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredResults.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="p-4 border rounded-lg hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.type}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
