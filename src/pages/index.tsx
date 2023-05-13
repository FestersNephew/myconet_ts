import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="https://kit.fontawesome.com/79e3956dbb.js" crossOrigin="anonymous" async></script>
      </Head>
      <body>
        <header>
          <h1>Myco-Net</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#features">About</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </nav>
        </header>

        <div className="container">
          <main>
            <section className="textbox">
              <div className="textContainer">
                <h2>Follow us</h2>
                <p id="textContent">At MycoNet, we believe that by building a decentralized AI network, we can create a world where AI is used for the greater good. Our goal is to create a counterbalance to the large, censored, and centralized AI development efforts of companies such as Google, OpenAI, Microsoft, Facebook, et al. We are building “AI for Humanity.</p>
              </div>
            </section>

            <section className="hero">
              <div className="trigger">
                <Image src="/images/tree.png" alt="Tree" width={1024} height={1024} />
              </div>
            </section>
            <section className="features" id="features">
              <div className="feature1">
                <h2>Welcome to the MycoNet community!</h2>
                <p>Our Team consists of passionate Bittensor OGs from many different backgrounds who are deeply committed to upholding a sense of responsibility in guiding the development of AI towards a direction that benefits humanity as a whole. As Artificial Intelligence continues to advance and permeate various aspects of our lives, it is becoming increasingly clear that it is every persons responsibility, whether we know it or not, to take an active role in shaping its development in an ethical and responsible direction.
                  We believe that owning TAO goes much deeper than profiting from a simple APR yield. It quite literally is an ownership in the development and direction of a decentralized AI! By delegating your TAO to MycoNet, it is an easy way to join and contribute to a community that understands this very important responsibility we humans have, moving into the future with developing a decentralized AI for Humanity and to create a counterbalance to the large, censored, and centralized AI development efforts of companies such as Google, OpenAI, Microsoft, and Facebook. We seek to attract delegators and developers who share our passion and vision, and who are committed to advancing AI for the benefit of all.
                  We are developing a unique NFT Platform that will give pride of ownership,reward loyal delegators with APR rakeback and provide other utility and be the first of its kind in the Bittensor Network. There may be possibilities for referral rewards, staking incentives and more (Details TBA).</p>
              </div>
              <div className="feature2">
                <h2>MycoNets approach to adhere to this vision includes:</h2>
                <p>Supporting and contributing to the overall development and security of the Bittensor Network by running reliable Validators on all subnets maintained and designed for near 100% up time with future plans to run all machines off of 100% green power.
                  Creating a strong and vibrant AI community that will leverage the power of collective intelligence and foster a culture of positivity with an ethical and responsible approach to AI development built on a foundation of shared values, including a commitment to education, open-mindedness, and open communication. By coming together to share knowledge, ideas, and experiences, individuals and organizations within the community can work towards a common goal of advancing AI in a way that benefits society as a whole.
                  Developing our own creative AI projects and APIs that will benefit humanity in an ethical way.
                  Supporting other AI projects and communities that share in our vision of an ethical and responsible AI development and making Partnerships that will utilize access to the Network for the Good of Humanity.
                  Having a regular podcast that will dive into interesting and mind opening AI topics that educate, engage in honest and open discussions around the ethical and societal implications of AI and to go into depth of what MycoNet is doing and plans to do within the Bittensor Neural Network.
                  Continue to grow, flow, adapt and pivot with the fast pace of AI development. 
                  We would love to have you in the community! 
                  MycoNet Delegation HotKey: 5Dkv87qjGGF42SNhDAep6WZp65E29c2vUPUfDBGDNevENCMs</p>
              </div>
            </section>
          </main>

          <footer id="footer">
            <div className="footer-content">
              <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@myco-net.com</p>
              </div>
              <div className="social-media">
                <h3>Follow us on social media:</h3>
                <ul>
                  <li><a href="#"><i className="fa-brands fa-twitter fa-spin"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2023 Myco-Net. All rights reserved.</p>
            </div>
          </footer>
          
        </div>

        <script src="interactivity.js" async></script>
        
      </body>
    </div>
  
    );
  };
export default HomePage;