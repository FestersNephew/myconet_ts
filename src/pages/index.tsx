import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import Feature1 from '../components/Feature1/Feature1';
import Feature2 from '../components/Feature2/Feature2';
import Feature3 from '../components/Feature3/Feature3';
import Header from '../components/Header/Header';
import TextBoxSection from '../components/TextBoxSection/TextBoxSection';
import Footer from '../components/Footer/Footer';


const HomePage: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
      </Head>
      <Header />
      <div
        className="background"
        style={{
          backgroundImage: `url("/images/tree.png")`, // Update the image path
          zIndex: 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container">
        <main>
          <TextBoxSection />
          <div className="feature-container">
            <Feature1 />
            <Feature2 />
          </div>
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
