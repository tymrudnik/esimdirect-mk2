import About from "@/components/Home/About"
import ContactForm from "@/components/Home/Contact"
import Hero from "@/components/Home/Hero"
import Services from "@/components/Home/Services"
import SupportedDevices from "@/components/Home/SupportedDevices"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <SupportedDevices />
      <About />
      <ContactForm />
    </main>
  )
}
