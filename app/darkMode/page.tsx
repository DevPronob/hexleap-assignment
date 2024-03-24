import React from 'react'

import styles from '../darkMode/darkMode.module.css'
import SportsSectionDark from './components/SportsSection/SportsSectionDark'
import SportLightSectionDark from './components/SportLightSection/SportLightSectionDark'

function darkMode() {
  return (
    <div className={styles.darkMode}>
       <SportsSectionDark></SportsSectionDark>
       <SportLightSectionDark></SportLightSectionDark>
    </div>
  )
}

export default darkMode