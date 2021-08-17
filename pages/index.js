import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/about'
import Banner from '../components/banner/banner'
import Projects from '../components/projects/project'
import Technos from '../components/technos/technos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner/>
      <About/>
      <Projects/>
      <Technos/>
    </div>
  )
}
