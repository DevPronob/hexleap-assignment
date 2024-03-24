import React from 'react'
import styles from '../SportsSection/SportsSection.module.css'
import player1 from '../../../public/Assets/player1.png'
import player2 from '../../../public/Assets/player2.png'
import player3 from '../../../public/Assets/player3.png'
import player4 from '../../../public/Assets/player4.png'
import Card from '../Card/Card'
import AdSection from '../AdSection/AdSection'
function SportsSection() {
    const playerData = [
        {
            id:1,
            name: "Sacramento River Cats",
            img: player1,
            events: "48",
            sport: "baseball"
        },
        {
            id:2,
            name: "Las Vegas Aviators",
            img: player2,
            events: "28",
            sport: "baseball"
        },
        {
            id:3,
            name: "new jersey devils",
            img: player3,
            events: "15",
            sport: "ice hockey"
        },
        {
            id:4,
            name: "Las Vegas Aviators",
            img: player4,
            events: "28",
            sport: "baseball"
        },
    ]
    return (
        <div className={styles.sportsSectionContainer}>
            <h3>Sports</h3>
            <div className={styles.cardContainer}>
                <div className={styles.cardMainCOntainer}>
                {playerData.map(item => (
                        <Card key={item.id} playerData={item} />
                    ))}
                </div>
                <div>
                    <AdSection></AdSection>
                </div>
            </div>


           <div className={styles.buttonContainer}>
           <button className={styles.button} type="button">See More</button>
           </div>





        </div>
    )
}

export default SportsSection