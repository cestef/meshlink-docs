import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className='container'>
                <h1 className='hero__title' style={{ color: "white" }}>
                    {siteConfig.title}
                </h1>
                <p className='hero__subtitle' style={{ color: "white" }}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link className='button button--secondary button--lg' to='/docs/intro'>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

function HomePageFeatures() {
    return (
        <div className='container margin-top--lg margin-bottom--md'>
            <div className='row'>
                <div className={clsx("col col--4", styles.feature)}>
                    <h2>Easy to use</h2>
                    <p>
                        MeshLink is designed to be easy to use. Just toggle Bluetooth on and get
                        started right away.
                    </p>
                </div>
                <div className={clsx("col col--4", styles.feature)}>
                    <h2>Privacy compliant</h2>
                    <p>
                        None of your data is stored elsewhere. Everything is completely anonymous,
                        including your ID.
                    </p>
                </div>
                <div className={clsx("col col--4", styles.feature)}>
                    <h2>Open source</h2>
                    <p>
                        This project is open source and you can contribute to it on{" "}
                        <Link to='https://github.com/cestef/meshlink'>Github</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description='Description will go into a meta tag in <head />'
        >
            <HomepageHeader />
            <main>
                <HomePageFeatures />
            </main>
        </Layout>
    );
}
