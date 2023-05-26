import React from 'react';
import { Link } from 'react-router-dom';
import Background from '@/components/Background/Background';

const IndexPage: React.FC = () => {
  return (
    <div className="container">
      <Background />
      <div className="content">
        <Link to="/about" className="link">
          <h1>Take responsibility. Shape ethical AI. Create a better future.</h1>
        </Link>
        <p>Our decentralized AI network aims to harness the power of artificial intelligence for the greater good. With a diverse team dedicated to responsible and ethical AI development, we strive to create a future where AI benefits humanity as a whole and serves as a counterbalance to centralized efforts by major tech companies. Join us in shaping an AI-driven world that prioritizes humanitys well-being.</p>
      </div>
    </div>
  );
};

export default IndexPage;
