import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import BioSection from "../sections/BioSection";
import ContactForm from "../sections/ContactForm";
import { sanityClient } from "../sanity/client";

export default function Home({ shoots }) {
  return (
    <div className="relative w-full">
      <Navbar />
      <Hero />
      <Portfolio shoots={shoots} />
      <BioSection />
      <ContactForm />
    
    </div>
  );
}

// Obtener los shoots desde Sanity
export async function getStaticProps() {
  const query = `*[_type == "shoot"]{
    title,
    slug,
    cover
  }`;

  const shoots = await sanityClient.fetch(query);

  return {
    props: { shoots },
    revalidate: 60,
  };
}
