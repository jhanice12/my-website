import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index.tsx";
import Solutions from "./pages/Solutions";
import Strategy from "./pages/Strategy";
import Gamification from "./pages/Gamification";
import Platform from "./pages/Platform";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/strategy-consulting" element={<Strategy />} />
            <Route path="/gamification-engagement" element={<Gamification />} />
            <Route path="/platform-integration" element={<Platform />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
