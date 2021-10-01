import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Programmer</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm a junior programmer and an ambicious young woman wishes to develop 
          technology that facilities and helps people on a daily basis. Contact me on <a href="https://www.linkedin.com/in/luciamoita/">Linkdin</a>.)</p>
        
      </section>
    </Layout>
  )
}
