import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="/img/under-construction.png" width={500}></img>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/nayash">
            Visit my GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  var src = `This is Asutosh here, a seasoned Software Engineer with a decade of experience in 
  consultancy, FinTech, EdTech, Ecommerce industries. I have worked in all kinds of environments: huge MNCs with lot of processes to start-ups with "do today or die now" motto and delivered many products and features to production.  \nAreas 
  of expertise (in decreasing order of proficiency/time spent working) are: Android, Machine Learning, Spring Boot, ReactJs, and .Net (sigh! in a different life).
  I have worked with Java, Kotlin, Python, Javascript programming languages.  \nThe thoughts expressed on this website are my own and doesn't necessarily reflect the views of any of the organisations I'm affiliated with.  \nI
  hope you enjoy the ideas expressed here. Click [here](/blog) to visit articles.`

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal blog of Asutosh Nayak">
      <div style={{ display: "flex", justifyContent: "center", padding: "20px"}}>
        <img src="https://github.com/nayash.png" alt="Me" width={200} />
      </div>
      <main>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <h4>Howdy Readers!</h4>
        </div>
        <div style={{ display: "flex", flexDirection: "row",
        justifyContent: "center", marginLeft: "10%",
        marginRight: "10%", lineHeight: "4vh", fontSize: "18px"}}>
          <ReactMarkdown children={src} rehypePlugins={[rehypeRaw]} />
        </div>
      </main>
    </Layout>
  );
}
