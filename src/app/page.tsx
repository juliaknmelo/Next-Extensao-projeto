import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/secao-princi";
import AboutSection from "@/app/components/secao-sobre";
import ServicesSection from "@/app/components/secao-servicos";
import ContactSection from "@/app/components/secao-contato";
// import WorkWithUsSection from "@/app/components/secao-trabalhe"
import Footer from "@/app/components/footer";
import ScrollToTop from "@/app/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Chat from "@/components/chat";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        {/* <WorkWithUsSection /> */}
      </main>
      <Footer />
      <ScrollToTop />
      <Button className="w-12 h-12 flex items-center justify-center fixed bottom-6 right-20 p-1 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors z-50">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full h-full items-center justify-center">
            <MessageCircle className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full max-w-2xl shadow-xl h-full flex items-center justify-center">
            <Chat />
          </DropdownMenuContent>
        </DropdownMenu>
      </Button>
    </div>
  );
}
