import React from 'react';
import styles from './Homepage.module.css';
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';


export default function Homepage() {
    return (
        <main className={styles.container}>
                <Head>
                <title>Portfolio</title>
                    <meta name="title"/>
                    <meta name="description" />
                    <meta name="keywords" />
                    <meta name="robots"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                </Head>
                <div className={styles.homepageWhiteBackground}>
                    <div className={styles.homepageImage}>
                    <Image width="162" height="184" src="/assets/images/ME.jpg" alt="" />
                    </div>
                    <h1 className={styles.homepageTitle}>Jun Kai Huang</h1>
                    <p className={styles.homepageSubtitle}>淡江大學  資訊工程學系</p>
                    <div className={styles.homepagePurpleBackground}>
                        <p className={styles.homepageText}>在大學之前沒有學習過有關於前端這相關技能和知識，當下在學習時可謂是感到相當吃力，<br></br>但是在長時間反覆學習與練習下，總算是抓到了一些要領。<br></br>現在我的技術仍不成熟，希望我能盡快熟悉這些作業環境。</p>
                        <div className={styles.homepageIconsWrapper}>
                            <div className={styles.homepageIcons}>
                                <Link href={`/projects`}><a>
                                <Image width="78" height="78" alt="wrench" src="/assets/images/research.png" />
                                <p className={styles.homepageIconsText}>Projects</p>
                                </a></Link>
                            </div>
                            <div className={styles.homepageIcons}>
                                <a href="https://github.com/Jun206" target="_blank" rel="noreferrer">
                                <Image width="79" height="78" alt="github" src="/assets/images/gh.svg" />
                                <p className={styles.homepageIconsText}>Github</p>
                                </a>
                            </div>
                            <div className={styles.homepageIcons}>
                                <Link href={`/skills`}><a>
                                <Image width="84" height="69" alt="cogs" src="/assets/images/skills.png" />
                                <p className={styles.homepageIconsText}>Skills</p>
                                </a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
