import React from 'react';
import styles from './Feature3.module.css'; // Example CSS module for styling
import StakeButton from '../StakeButton/StakeButton';

const Feature3: React.FC = () => {
    return (
      <section className={styles.feature3}>
        <div className={styles.featureContent}>
          <h2>We believe that owning TAO goes much deeper...</h2>
          <p>
            By delegating your TAO to MycoNet, it is an easy way to join and contribute to a community that understands this very important responsibility we humans have, moving into the future with developing a decentralized AI for Humanity. We seek to attract delegators and developers who share our passion and vision and who are committed to advancing AI for the benefit of all.
          </p>
  
          <h3>How will delegators benefit from delegating to MycoNet?</h3>
          <ul>
            <li>MycoNets dedication to scaling with the Bittensor Network ensures reliable and secure validators with near 100% uptime. We plan on maintaining validators on multiple subnets to maximize our delegators incentive return.</li>
            <li>We are developing a unique NFT platform that will be the first of its kind in the Bittensor Network. It will give pride of ownership, reward loyal delegators with a competitive APR rakeback program that utilizes a unique NFT mechanism to reward loyalty and the amount of TAO delegated. There may also be possibilities for referral rewards, staking incentives, and more (Details TBA).</li>
          </ul>
  
          <h3>Interested in Delegating and becoming a part of the MycoNet community?</h3>
          <p>Here is how:</p>
          <div className={styles.validatorInfo}>
            <div>
              <h4>Subnetwork 3 Finney</h4>
              <p>Validator UID: 423</p>
            </div>
            <div>
              <h4>Subnetwork 1: Prompt Network</h4>
              <p>Validator UID: 146</p>
            </div>
            <div>
              <h4>Delegator Hot Key Address</h4>
              <p>5Dkv87qjGGF42SNhDAep6WZp65E29c2vUPUfDBGDNevENCMs</p>
            </div>
            <StakeButton />
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature3;
  