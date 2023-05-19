import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import Feature3 from '../components/Feature3/Feature3';
import Header from '../components/Header/Header';
import TextBoxSection from '../components/TextBoxSection/TextBoxSection';
import Footer from '../components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';


const HomePage: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
      </Head>
      <Header />
      <HeroSection />
      
      <div className="container">
        <main>
          <TextBoxSection />
          <div className="feature3-container">
            <Feature3 />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
