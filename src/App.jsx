import { Footer, Header } from "./components";
import {
  Hero,
  Trust,
  About,
  Tabs,
  Testimonials,
  FAQ,
  Contacts,
} from "./components/screens";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Trust />
      <About />
      <Tabs />
      <Testimonials />
      <FAQ />
      <Contacts />
      <Footer />
    </main>
  );
}
