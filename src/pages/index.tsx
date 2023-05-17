import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import StakeButton from '../components/StakeButton';
import AutomaticScroll from '../components/AutomaticScroll';
import Features3 from '../components/Features3'; // Import the Features3 component


const HomePage: React.FC = () => {
  const points: string[] = [
    '1. Supporting and contributing to the overall development and security of the Bittensor Network by running reliable Validators on all subnets maintained and designed for near 100% up time with future plans to run all machines off of 100% green power.',
    '2. Creating a strong and vibrant AI community that will leverage the power of collective intelligence and foster a culture of positivity with an ethical and responsible approach to AI development built on a foundation of shared values, including a commitment to education, open-mindedness, and open communication. By coming together to share knowledge, ideas, and experiences, individuals and organizations within the community can work towards a common goal of advancing AI in a way that benefits society as a whole.',
    '3. Developing our own creative AI projects and API’s that will benefit humanity in an ethical way.',
    '4.	Supporting other AI projects and communities that share in our vision of an ethical and responsible AI development and making Partnerships that will utilize access to the Network for the Good of Humanity.',
    '5.	Having a regular podcast that will dive into interesting and mind opening AI topics that educate, engage in honest and open discussions around the ethical and societal implications of AI and to go into depth of what MycoNet is doing and plans to do within the Bittensor Neural Network.',
    '6.	Continue to grow, flow, adapt and pivot with the fast pace of AI development.'
  ];

  const interval: number = 5000; 
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <Head>
        <title>Myco-Net | Decentralized AI Development Community</title>
      </Head>
        <header>
          <StakeButton />
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
                <h2>Welcome to MycoNet</h2>
                <p id="textContent">We believe that by building a decentralized AI network, we can create a world where AI is used for the greater good.  Our Team consists of passionate Bittensor OG’s from many different backgrounds who are deeply committed to upholding a sense of responsibility in guiding the development of AI towards a direction that benefits humanity as a whole. We share a dedication to work towards a future where AI is used responsibly and ethically. Our goal is to create a counterbalance to the large, censored, and centralized AI development efforts of companies such as Google, OpenAI, Microsoft, Facebook, et al. We are building “AI for Humanity.” </p>
              </div>
            </section>

            <section className="hero">
              <div className="trigger">
              <Image src="/images/tree.png" alt="Tree" width={1024} height={1024} priority />

              </div>
            </section>
            <section className="features" id="features">
              <div className="feature1">
                <h2>Welcome to the MycoNet community!</h2>
                <p>As artificial intelligence (AI) continues to advance and permeate various aspects of our lives, it is becoming increasingly clear that it is every persons responsibility, whether we know it or not, to take an active role in shaping its development in an ethical and responsible direction. With AI having the potential to transform society for the better, but also pose serious risks if not developed and used responsibly, it is critical that individuals from all walks of life engage in discussions and actions that help ensure its benefits are realized while minimizing potential harms. In this context, it is important to recognize that ethical AI development is not solely the responsibility of tech companies and policymakers, but rather requires a collective effort from individuals, organizations, and communities at large. By actively engaging in discussions around AI ethics and contributing to its responsible development, we can help create a future in which AI is a force for good and benefits society. </p>

                </div>
              <div className="feature2">
                <h2>MycoNets approach to adhere to this vision includes:</h2>
                <AutomaticScroll points={points} interval={interval} />
              </div>
              <div className="feature3"> 
              <Features3 /> 
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
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2023 Myco-Net. All rights reserved.</p>
            </div>
          </footer>      
        </div>
        <script src="interactivity.js" async></script>
    </div>
  
    );
  };
export default HomePage;