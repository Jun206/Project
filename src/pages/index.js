import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Homepage from '../components/Homepage/Homepage';


export default function Home() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}
