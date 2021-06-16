import React from 'react';
import Head from 'next/head'; 
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';


export default function Projects({projects}) {

    return (
        <div className={styles.container}>
                    <Head>
                        <title Web title>Projects</title>
                        <meta name="title" />
                        <meta name="keywords"/>
                        <meta name="robots"/>
                        <meta http-equiv="Content-Type" />
                        <meta name="language"/>
                    </Head>
                    <div className={styles.projectsPurpleTopBackground} />
                    <h1 className={styles.projectsTitle}>Projects</h1>
                    <p className={styles.projectsSubtitle}>作品集</p>
                    <div className={styles.projectsListWrapper}>
                            <div className={styles.projectsItemImage}>
                                <a href="https://mealdb2.vercel.app/project/mealdb">
                                <Image width="1000" height="400" alt="Mealdb" src="/assets/images/mealdb.PNG" />
                                <p className={styles.projectsItemTitle}>Mealdb</p>
                                </a>
                            </div>
                            <div className={styles.projectsItemImage}>
                            
                                <a href="https://mealdb2.vercel.app/project/mealdb-fetchAPI" target="_blank" rel="noreferrer">
                                <Image width="1000" height="400" alt="Mealdb-fetchAPI" src="/assets/images/mealdb-fetchAPI.PNG" />
                                <p className={styles.projectsItemTitle}>Mealdb-fetchAPI</p>
                                </a>
                            </div>
                            </div>
                            
                                   
                    
                </div>
                
    )
}