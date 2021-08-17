import Head from 'next/head'
import Image from 'next/image'
import About from '../components/banner/about/about'
import Banner from '../components/banner/banner'
import Projects from '../components/banner/projects/project'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner/>
      <About/>
      <Projects/>
    </div>
  )
}
