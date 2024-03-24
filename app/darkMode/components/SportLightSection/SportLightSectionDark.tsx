import Image from 'next/image'
import React from 'react'
import rightArrow from '../../../../public/Assets/rightArrow.png'
import leftArrow from '.../../../../public/Assets/leftArrow.png'
import img1 from '../../../../public/Assets/img1.png'
import img2 from '../../../../public/Assets/img2.png'
import img3 from '../../../../public/Assets/img3.png'
import Card2 from '../Card2/Card2'
import styles from '../SportLightSection/SportLightSection.module.css'

const SportLightSectionDark = () => {
    const items =[
        {
            id:1,
            name:"Las Vegas Aviators",
            date:"Oct 15",
            time:"4:30 PM",
            day:"Sun",
            text:"Las Vegas Ballpark, Las Vegas, Nevada",
            buttonText:"Take Flight Collection",
            img:img1
        },
        {
            id:2,
            name:"Sacramento River Cats",
            date:"Oct 15",
            time:"4:30 PM",
            day:"Sun",
            text:"Sutter Health Park, Sacramento, California",
            buttonText:"Orange Collection",
            img:img2
        },
        {
            id:3,
            name:"Las Vegas Aviators",
            date:"Oct 15",
            time:"4:30 PM",
            day:"Sun",
            text:"Las Vegas Ballpark, Las Vegas, Nevada",
            buttonText:"Take Flight Collection",
            img:img3
        },
    ]
    return (
        <div className={styles.sportLightContainer}>
            <div className={styles.textContainer}>
                <h2 className={styles.collectionHeader}>Collection Spotlight</h2>
                <p className={styles.collectionText}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className={styles.innerContainer}>
                    <div className={styles.arrowImg}>
                    <Image  src={rightArrow} alt="Player 1" width={20} height={20} />
                    </div>
                    <div className={styles.collectionCardContainer}>
                    {items.map(item => (
                        <Card2 key={item.id} item={item} />
                    ))}
                    </div>
                    <div className={styles.arrowImg}>
                    <Image  src={rightArrow} alt="Player 1" width={20} height={20} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SportLightSectionDark