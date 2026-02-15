import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/hidden-gems" element={<HiddenGemsPage />} />
          <Route path="/hidden-gems/:id" element={<LocationHiddenGemsPage />} />
          <Route
            path="/hidden-gems/:locationId/:productName"
            element={<ProductDetailPage />}
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<LocationGalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route
            path="/destinations/:destinationId"
            element={<DestinationsPage />}
          />

          <Route path="/hidden-gems" element={<HiddenGemsPage />} />
          <Route
            path="/hidden-gems/:destinationId"
            element={<HiddenGemsPage />}
          />
          <Route
            path="/hidden-gems/:destinationId/:productSlug"
            element={<HiddenGemsPage />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
