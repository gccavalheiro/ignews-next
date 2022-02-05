import Head from 'next/head';

import styles from './home.styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.hero}>
          <p>👏<span>Hey, welcome</span></p>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications<br />
            <span>for $9.90 mouth</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
