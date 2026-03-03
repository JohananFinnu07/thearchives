import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import IndiaLandingPage from "./pages/IndiaMapLandingPage";
import StateHomePage from "./pages/StateLandingPage";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationsPage from "./pages/DestinationsPage";
import HiddenGemsPage from "./pages/HiddenGemsPage";
import LocationHiddenGemsPage from "./pages/LocationHiddenGemsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GalleryPage from "./pages/GalleryPage";
import LocationGalleryPage from "./pages/LocationGalleryPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import SearchPage from "./components/NavSearch";
import RecipeDetailPage from "./pages/RecipeDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* India Landing */}
          <Route path="/" element={<IndiaLandingPage />} />

          {/* State Landing */}
          <Route path="/:state" element={<StateHomePage />} />

          {/* Destinations */}
          <Route path="/:state/destinations" element={<DestinationsPage />} />
          <Route
            path="/:state/destination/:slug"
            element={<DestinationDetail />}
          />

          {/* Hidden Gems */}
          <Route path="/:state/hidden-gems" element={<HiddenGemsPage />} />
          <Route
            path="/:state/hidden-gems/:slug"
            element={<LocationHiddenGemsPage />}
          />
          <Route
            path="/:state/hidden-gems/:slug/:productSlug"
            element={<ProductDetailPage />}
          />

          {/* Gallery */}
          <Route path="/:state/gallery" element={<GalleryPage />} />
          <Route
            path="/:state/gallery/:slug"
            element={<LocationGalleryPage />}
          />

          {/* Recipes */}
          <Route path="/:state/recipes/:slug" element={<RecipeDetailPage />} />

          {/* About (Global) */}
          <Route path="about" element={<AboutPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
