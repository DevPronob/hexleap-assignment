import Image from 'next/image'
import React from 'react'
import ad from '../../../public/Assets/ad.png'
import styles from '../AdSection/AdSection.module.css'
const AdSection = () => {
  return (
    <div className={styles.adContainer}>
        <div className={styles.innerAdContainer}>
          <p className={styles.adContent2}>Ad</p>
        <Image src={ad} alt="Player 1" width={300} height={300} />
        <div className={styles.adContent}>
          <h2>Advertisement title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
    </div>
  )
}

export default AdSection