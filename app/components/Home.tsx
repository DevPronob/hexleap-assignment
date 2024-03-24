import React from 'react'
import SportsSection from './SportsSection/SportsSection'
import styles from '../components/Home.module.css'
import SportLightSection from './SportLightSection/SportLightSection'
function Home() {
  return (
    <div className={styles.homeContainer}>
        <SportsSection></SportsSection>
        <SportLightSection></SportLightSection>

    </div>
  )
}

export default Home