import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main_wrapper}>
        <section className={styles.home_container}>
          <div className={styles.hero_container}>
            <h1 className={styles.hero}>Hey</h1>
            <h2 className={styles.hero2}>I'm Braxton</h2>
            <p className={styles.hero_span}>Full Stack Web Developer</p>
          </div>
          <Link href="/portfolio">
            <div className={styles.view_project}>
              <a>View my projects</a>
            </div>
          </Link>
        </section>
        <section className={styles.skill_page}>
          <div className={styles.skill_header}>
            <div className={styles.card}>
              <div className={styles.content}>
                <p>
                  Experience with multiple front-end and back-end tools, driven
                  to be adept with the various skills needed in any environment.
                </p>
              </div>
            </div>
          </div>
          <ul className={styles.skill_grid}>
            <li>
              <span>Javascript</span>
              <span>Javascript</span>
            </li>
            <li>
              <span>React</span>
              <span>React</span>
            </li>
            <li>
              <span>CSS/SCSS</span>
              <span>CSS/SCSS</span>
            </li>
            <li>
              <span>HTML5</span>
              <span>HTML5</span>
            </li>
            <li>
              <span>NextJs</span>
              <span>NextJs</span>
            </li>
            <li>
              <span>NodeJs</span>
              <span>NodeJs</span>
            </li>
            <li>
              <span>Express</span>
              <span>Express</span>
            </li>
            <li>
              <span>MongoDB</span>
              <span>MongoDB</span>
            </li>
            <li>
              <span>Webpack</span>
              <span>Webpack</span>
            </li>
            <li>
              <span>Jest</span>
              <span>Jest</span>
            </li>
            <li>
              <span>Git</span>
              <span>Git</span>
            </li>
            <li>
              <span>Github</span>
              <span>Github</span>
            </li>
          </ul>
        </section>
        {/* Add skills section */}
      </main>
    </Layout>
  );
}
