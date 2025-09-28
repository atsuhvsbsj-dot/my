import { motion } from "framer-motion";
import { Download, MessageCircle, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <>

<section 
  id="home" 
  className="min-h-screen flex items-center relative overflow-hidden bg-background"
> 
{/* Spline Background (only visible on md and above) */}
<div className="hidden md:block absolute inset-0 z-0 pointer-events-auto overflow-hidden">
  <div className="w-full h-full scale-[1.20] translate-x-[50px]">
    <Spline scene="https://prod.spline.design/hZIuJ3e8IciqiLrP/scene.splinecode" />
  </div>
</div>

{/* Light mode SVG background */}
<div
  className="block dark:hidden md:hidden absolute inset-0 z-0 bg-white"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23442837' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23550000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "repeat",
    backgroundSize: "100px 100px",
    backgroundPosition: "top left",
  }}
></div>

{/* Dark mode SVG background */}
<div
  className="hidden dark:block md:hidden absolute inset-0 z-0 bg-[#1a1a1a]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23550000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "repeat",
    backgroundSize: "100px 100px",
    backgroundPosition: "top left",
  }}
></div>



{/* Overlay that lets mouse pass through */}
<div className="absolute inset-0 z-10 pointer-events-none" />


  {/* ✅ Foreground Content — z-10 */}
<div className="container mx-auto px-4 py-20 relative z-20 pointer-events-none">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  // as="section"
  id="hero"
  itemScope
  itemType="https://schema.org/Person"
>
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
    itemProp="name"
  >
    Hi, I’m{" "}
    <span className="text-foreground font-extrabold">Shreya</span>
    <br />
    <span className="text-primary font-extrabold" itemProp="jobTitle">
      Frontend Developer
    </span>
    <br className="hidden sm:block" />
    <span className="sm:hidden"> </span>&{" "}
    <span className="text-secondary font-extrabold">Freelancer</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-medium"
    itemProp="description"
  >
    I build <strong className="text-primary font-semibold">fast</strong>, 
    <strong className="text-secondary font-semibold"> beautiful</strong>, and 
    <strong className="text-primary font-semibold"> scalable</strong> websites for startups and
    individuals. Let’s bring your ideas to life! ✨
  </motion.p>

  {/* Action Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
    className="flex flex-col sm:flex-row gap-4 mb-8"
  >
    <div className="pointer-events-auto">
      <Button
        className="btn-gradient hover-lift hover-glow font-semibold"
        size="lg"
        onClick={() => window.open("https://docs.google.com/document/d/14fe4fa38hTpc0UFlq_M2Wx7mQhMpSVpp/edit?usp=sharing&ouid=117596840770019124674&rtpof=true&sd=true", "_blank")}
        aria-label="View Resume of Shreya Singh"
      >
        <Download className="mr-2" size={20} />
        View Resume
      </Button>
    </div>
    <div className="pointer-events-auto">
      <Button
        variant="outline"
        className="btn-ghost hover-lift hover-glow font-semibold border-2"
        size="lg"
        onClick={() =>
          document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Hire Shreya Singh"
      >
        <MessageCircle className="mr-2" size={20} />
        Hire Me
      </Button>
    </div>
  </motion.div>

  {/* Social Links */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="flex gap-4"
    aria-label="Social media links"
  >
    <div className="pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="hover-scale hover-glow rounded-full bg-primary/10 hover:bg-primary/20"
        asChild
      >
        <a
          href="https://github.com/shreya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github size={24} />
        </a>
      </Button>
    </div>

    <div className="pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="hover-scale hover-glow rounded-full bg-secondary/10 hover:bg-secondary/20"
        asChild
      >
        <a
          href="https://www.linkedin.com/in/shreya-singh-a14868303"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={24} />
        </a>
      </Button>
    </div>

    <div className="pointer-events-auto">
      <Button
        variant="ghost"
        size="icon"
        className="hover-scale hover-glow rounded-full bg-primary/10 hover:bg-primary/20"
        asChild
      >
        <a
          href="https://wa.me/+918279948895"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Contact"
        >
          <Phone size={24} />
        </a>
      </Button>
    </div>
  </motion.div>
</motion.div>


        </div>
      </div>
      
    </section>
          {/* SVG Wave Divider */}
<div className="w-full overflow-hidden leading-[0] relative -mt-1">
  <svg
    className="w-full h-[50px] md:h-[60px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
  >
    <path
      fill="#457D84"
      d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"
    />
  </svg>
</div>

    </>
  );
};

export default Hero;