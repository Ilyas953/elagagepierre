import { Hero2, About, Temoignage, Contact, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Hero2 />
      <main>
        <About />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
