import { ThemeProvider } from "next-themes";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import About from "@/components/portfolio/About";
import ProjectsHighlights from "@/components/portfolio/ProjectsHighlights";
import Testimonials from "@/components/portfolio/Testimonials";
import Pricing from "@/components/portfolio/Pricing";
import HireMe from "@/components/portfolio/HireMe";
import Contact from "@/components/portfolio/Contact";
import Stats from "@/components/portfolio/Stats";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <ProjectsHighlights />
          <Testimonials />
          <Pricing />
          <Stats />
          <HireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
