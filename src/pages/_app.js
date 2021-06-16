import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../../lib/gtag'
import '../styles/globals.css';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/MyApp.module.css';

const MyApp = ({ Component, pageProps }) => {
  const [showLinks, setShowLinks] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.openMenu}><i className={showLinks ? ["fas fa-bars", styles.pointer].join(' ') : ["fas fa-times", styles.pointer].join(' ')} onClick={() => setShowLinks(!showLinks)}></i></div>
        <ul className={showLinks ? [styles.navbarContactBox, styles.hidden].join(' ') : styles.navbarContactBox}>
            <Link href="/"><a><li className={styles.navbarContact} onClick={() => setShowLinks(!showLinks)} >Home</li></a></Link>
            <Link href="/projects"><a><li className={styles.navbarContact} onClick={() => setShowLinks(!showLinks)} >Projects</li></a></Link>
            <Link href="/skills"><a><li className={styles.navbarContact} onClick={() => setShowLinks(!showLinks)} >Skills</li></a></Link>
        </ul>
      </nav>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp