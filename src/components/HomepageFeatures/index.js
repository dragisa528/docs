import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'WordPress',
    description: (
      <>
        Learn how to build websites using our own stack, with the Nebula 
        framework and Pulsar theme. We also have and array of useful 
        plugins to help with common website requirements.
      </>
    ),
  },
  {
    title: 'Laravel',
    description: (
      <>
        We have a selection of packages that help add small but recurring 
        functionality to Laravel projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 col--offset-1')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
