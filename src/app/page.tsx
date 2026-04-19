import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { ConsultativeFramework } from "@/components/consultative-framework";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <ConsultativeFramework />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
