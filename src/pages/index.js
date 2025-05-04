import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import BioSection from "../sections/BioSection";
import ContactForm from "../sections/ContactForm";
import { sanityClient } from "../sanity/client";
import Head from 'next/head';

export default function Home({ shoots }) {
  return (
    <> <Head>
    <title>Portafolio Alejandra González</title>
    <meta
      name="description"
      content="Descubre el portafolio profesional de modelaje de Alejandra González. Sesiones editoriales, estilo, bio y contacto."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>

    <div className="relative w-full">
      <Navbar />
      <Hero />
      <Portfolio shoots={shoots} />
      <BioSection />
      <ContactForm />
    
    </div>
    </>
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
