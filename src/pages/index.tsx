import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import Feature1 from '../components/Feature1/Feature1';
import Feature2 from '../components/Feature2/Feature2';
import Feature3 from '../components/Feature3/Feature3';
import Header from '../components/Header/Header';
import TextBoxSection from '../components/TextBoxSection/TextBoxSection';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';

const HomePage: React.FC = () => {
  const textboxContent = `We believe that by building a decentralized AI network, we can create a world where AI is used for the
  greater good. Our Team consists of passionate Bittensor OGs from many different backgrounds who are
  deeply committed to upholding a sense of responsibility in guiding the development of AI towards a
  direction that benefits humanity as a whole. We share a dedication to work towards a future where AI is
  used responsibly and ethically. Our goal is to create a counterbalance to the large, censored, and
  centralized AI development efforts of companies such as Google, OpenAI, Microsoft, Facebook, et al. We
  are building “AI for Humanity.”`;

  const interval: number = 5000;
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
      </Head>
      <Header />

      <div className="container">
        <main>
          <TextBoxSection textContent={textboxContent} />
          <HeroSection />
          <Feature1 />
          <Feature2 />
          <Feature3 /> 
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
