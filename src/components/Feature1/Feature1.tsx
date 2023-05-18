import React from 'react';
import styles from './Feature1.module.css';

const Feature1: React.FC = () => {
  return (
    <section id="feature1" className={styles.feature1}>
      <h2 className={styles.feature1Title}>Welcome to the MycoNet community!</h2>
      <p className={styles.feature1Description}>
                As artificial intelligence (AI) continues to advance and permeate various aspects of our lives, it is
                becoming increasingly clear that it is every persons responsibility, whether we know it or not, to take
                an active role in shaping its development in an ethical and responsible direction. With AI having the
                potential to transform society for the better but also pose serious risks if not developed and used
                responsibly, it is critical that individuals from all walks of life engage in discussions and actions
                that help ensure its benefits are realized while minimizing potential harms. In this context, it is
                important to recognize that ethical AI development is not solely the responsibility of tech companies and
                policymakers but rather requires a collective effort from individuals, organizations, and communities at
                large. By actively engaging in discussions around AI ethics and contributing to its responsible
                development, we can help create a future in which AI is a force for good and benefits society.
              </p>
    </section>
  );
};

export default Feature1;
