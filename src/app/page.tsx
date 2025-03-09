import Header from "@/components/Header";
import IntroSection from "./sections/intro-section";
import AboutSection from "./sections/about-section";
import ServicesSection from "./sections/service-section";
import ContactSection from "./sections/contact-section";

export default function Home() {
  return (
    <section className="w-full h-full bg-white">
      <Header></Header>
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <footer className="bg-primary-500 text-white text-center py-8">
        <p>&copy; RemmiRS 2025. Todos los derechos reservados</p>
      </footer>
    </section>
  );
}
