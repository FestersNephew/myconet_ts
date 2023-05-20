import React from 'react';
import styles from './Feature2.module.css';

const Feature2: React.FC = () => {
  const points: string[] = [
    '1. Supporting and contributing to the overall development and security of the Bittensor Network by running reliable Validators on all subnets maintained and designed for near 100% uptime with future plans to run all machines off of 100% green power.',
    '2. Creating a strong and vibrant AI community that will leverage the power of collective intelligence and foster a culture of positivity with an ethical and responsible approach to AI development built on a foundation of shared values, including a commitment to education, open-mindedness, and open communication. By coming together to share knowledge, ideas, and experiences, individuals and organizations within the community can work towards a common goal of advancing AI in a way that benefits society as a whole.',
    '3. Developing our own creative AI projects and APIs that will benefit humanity in an ethical way.',
    '4. Supporting other AI projects and communities that share in our vision of an ethical and responsible AI development and making Partnerships that will utilize access to the Network for the Good of Humanity.',
    '5. Having a regular podcast that will dive into interesting and mind-opening AI topics that educate, engage in honest and open discussions around the ethical and societal implications of AI and to go into depth of what MycoNet is doing and plans to do within the Bittensor Neural Network.',
    '6. Continue to grow, flow, adapt and pivot with the fast pace of AI development.',
  ];

  return (
    <div className={styles.container}>
      <section className={styles.feature2}>
        <h2 className={styles.feature2Title}>MycoNets approach to adhere to this vision includes:</h2>
        {points.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </section>
    </div>
  );
};

export default Feature2;
