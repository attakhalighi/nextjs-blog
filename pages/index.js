import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>One of the founders, analysts and developers of popular Iranian blogging service; Persianblog.ir (formerly Persianblog.com) which eventually turned into the biggest community for Iranian in the Internet. In 2008, the service scored more than 500,000 blogs and was visited 6 million times per month from all over the world.
I spend most of my time on developing web based applications, managing teams and developing new start-ups. You can contact me on <a href="https://twitter.com/atakhalighi">Twitter</a>!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout >
  )
}