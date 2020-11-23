import React from 'react';

import Header from '../common/Header';

import PartnerLogo1 from '../../../public/svgs/partner-logo-1.svg';
import PartnerLogo2 from '../../../public/svgs/partner-logo-2.svg';
import PartnerLogo3 from '../../../public/svgs/partner-logo-3.svg';
import PartnerLogo4 from '../../../public/svgs/partner-logo-4.svg';
import PartnerLogo5 from '../../../public/svgs/partner-logo-5.svg';

import styles from './Partners.scss';

const Partners = () => {
  const title = `We decided to work with independent farmers, quality
  food producer, people producing organically…
  These are the independent businesses we work with.`;
  const partners = [];

  for (let i = 0; i < 20; i += 1) {
    switch (Math.floor(Math.random() * 5 + 1)) {
      case 1:
        partners.push(PartnerLogo1);
        break;
      case 2:
        partners.push(PartnerLogo2);
        break;
      case 3:
        partners.push(PartnerLogo3);
        break;
      case 4:
        partners.push(PartnerLogo4);
        break;
      default:
        partners.push(PartnerLogo5);
        break;
    }
  }

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/PartnersImage.jpg`} alt="" />
      <div className={styles.partnersWrapper}>
        <Header aboveText="Our Partners" title={title} />
        <div className={styles.partners}>
          {partners.map((Partner) => (
            <Partner />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
