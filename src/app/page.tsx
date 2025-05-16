import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CardsSection from '../components/CardSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
      <title>Welcome to Ophira</title>
      </Head>
      <div
  className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat text-white"
  style={{ backgroundImage: "url('/images/background.png')" }}
>
  <div className="absolute inset-0 bg-primary/60 z-0"></div> {/* Overlay */}
  <div className="relative z-10">
    <Header />
    <Hero />
    <CardsSection />
    <Footer />
  </div>
</div>
    </>
  );
}

