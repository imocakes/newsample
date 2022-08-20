import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Angelaine Tuazon Delos Santos, I am 21 years old and turning 22. My birthday is on August 17. 
        I live in Sto. Domingo Mexico, Pampanga. My hobbies are watching movies, reading books and playing games. 
        My favorite food is ice cream.</p>

        <p>
        I took Computer Engineering as my course because I am weak in those aspects especially on computers and 
        I want to improve my skills and knowledge. 
        And also I’m really interested in computers and electronics.
        </p>

        <p>
        I see myself as either working in an IT company/industry doing programming or 
        networking and maybe I’ll have my own computer shop or electronic business.
        </p>

        <p>
        I expect to learn a lot about developing software by utilizing different programming languages and technologies.
        Especially CSS, because I know that I am not that good in styling and I am really interested in designing a website.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}