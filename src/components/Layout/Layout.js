import Head from "next/head";
import styles from './Layout.module.css';


const Layout = ({children, title="Irish Developer - Shane Keenan"}) =>{
    
    return (
        <div className={styles.container}>
            <Head>
                <title>{ title }</title>
                <link rel="#" href="#" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )   
}

export default Layout;