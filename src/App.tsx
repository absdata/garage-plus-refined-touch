
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/services/Maintenance";
import Transmission from "./pages/services/Transmission";
import Engine from "./pages/services/Engine";
import Tuning from "./pages/services/Tuning";
import ServiceDetail from "./pages/services/ServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/transmission" element={<Transmission />} />
          <Route path="/services/engine" element={<Engine />} />
          <Route path="/services/tuning" element={<Tuning />} />
          <Route path="/services/:category/:service" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
