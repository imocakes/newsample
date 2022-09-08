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
        <h1>Angelaine T. Delos Santos</h1>
        <h3>Computer Engineer</h3>
        <p> As a Computer Engineer my ultimate goal is to learn and and widen my knowledge.
           My greatest strength is that I am adaptive and flexible. 
           </p>
      </section>

      <section className= {utilStyles.sectionDiv}>


      <section className= {utilStyles.rowColumn1}>
        <h3>Personal Information</h3>

        <b>Address</b>
        <p>Villa Sto. Domingo Mexico, Pampanga</p>
        <p><b>Phone</b></p>
        <p>09164572394</p>
        <p><b>Email</b></p>
        <p>angelainedelossantos@gmail.com</p>
      </section>


      <section className= {utilStyles.rowColumn2}>
        <h3>Experience</h3>
        <p>2022 - IT Technical Support/Assistant</p>
        <p>Department of Environment and Natural Resources</p>
        <p>Region III, DMGC</p>
        <p>•  Setting up of Desktop Computers and/or Laptops </p>
        <p>•  Reformatting</p>
        <p>•  Setting up Network by crimping UTP cable </p>
        <p>•  Fixing time issues on devices by changing CMOS battery</p>
        <p>•  System Inventory
        </p>
      </section>

      </section>



  
      
    </Layout>
  );
}