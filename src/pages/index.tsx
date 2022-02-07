import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton.component';
import { stripe } from '../services/stripe';

import styles from './home.styles.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amout: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for ${product.amout} mouth</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KPcKIKHFjzTvC3Ur8fxH8FP', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amout: (price.unit_amount / 100).toFixed(2),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //24hr
  }
}
