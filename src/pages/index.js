import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/eighteen73">
            github.com/eighteen73
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for packages published by eighteen73"
    >
      <HomepageHeader />
      <main>
        <div className="row margin-top--lg">
          <div className="col col--6 col--offset-3 text--center text--lg">
            <p><strong>These docs are work-in-progress</strong></p>
            <p>
              All the published information is accurate and can be used for reference but 
              it is incomplete. We are in the process of a company rebrand 
              and this docs website will be properly launched to coincide with that
              at the beginning of 2023.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
