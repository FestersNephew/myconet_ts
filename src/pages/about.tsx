import React, { useRef } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import Feature3 from '../components/Feature3/Feature3';
import Header from '../components/Header/Header';
import TextBoxSection from '../components/TextBoxSection/TextBoxSection';
import Footer from '../components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';
import Background from '@/components/Background/Background';
import 'intersection-observer';


const AboutPage: React.FC = () => {
  useEffect(() => {}, []);

  const footerRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
      </Head>
      <Header />
      <Background />
      <div>
        <TextBoxSection />
      </div>
      <HeroSection />
        
      <div className="container">
        <main>
          <div className="feature3-container">
            <Feature3 />
          </div>
        </main>
        <div ref={footerRef} id="footer" /> {/* Empty div with ID "footer" */}

      </div>
      <Footer />

      {/* Additional content in the footer */}
    </div>
  );
};

export default AboutPage;
