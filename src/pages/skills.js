import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';


  


export default function Skills({ skills })  {
    return (
        <div className={styles.container}>
            <Head>
                <title>Skills</title>
            </Head>
            <h1 className={styles.skillsTitle}>Skills</h1>
            <p className={styles.skillsSubtitle}>我學會的作業環境</p>
            <div className={styles.skillsPurpleBackground}>
                <div className={styles.skillsListWrapper}>
                <div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/html-5.svg" />
                                <p className={styles.skillsItemText}>HTML</p>
                                </a>
                            </div>
                            <div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/css.svg" />
                                <p className={styles.skillsItemText}>CSS</p>
                                </a>
                            </div>           
                            <div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/javascript.svg" />
                                <p className={styles.skillsItemText}>JavaScript</p>
                                </a>
                            </div><div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/C.png" />
                                <p className={styles.skillsItemText}>C</p>
                                </a>
                            </div><div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/C++.png" />
                                <p className={styles.skillsItemText}>C++</p>
                                </a>
                            </div><div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/gh.svg" />
                                <p className={styles.skillsItemText}>GitHub</p>
                                </a>
                            </div><div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/next-js.svg" />
                                <p className={styles.skillsItemText}>Next.JS</p>
                                </a>
                            </div><div className={styles.skillsItem}>
                                <a href="#">
                                <Image width="100" height="100" alt="" src="/assets/images/vercel.png" />
                                <p className={styles.skillsItemText}>Vercel</p>
                                </a>
                            </div>
                            </div>
                    </div>
                </div>
    )
}


