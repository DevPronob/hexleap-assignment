import Image from 'next/image';
import React from 'react'
import { StaticImageData } from 'next/image';
import styles from '../Card/Card.module.css'
interface PlayerData {
    id: number;
    name: string;
    img: StaticImageData; 
    events: string;
    sport: string;
  }
  
  
  interface CardProps {
    playerData: PlayerData;
  }

const Card = (props: CardProps) => {
    const { id, name, img, events, sport } = props.playerData;
    const UpperCaseFirstWord =(name:string) =>{
        const Res = name.charAt(0).toUpperCase()+name.slice(1)
        return Res;
    }
  return (
    <div>
        <div className={styles.cardInnterContainer}>
        <Image src={img} alt="Player 1" width={300} height={285} />
        <h4>{name}</h4>
        <div className={styles.cardContent}>
            <div>
                <p className={styles.cardTitle}>total events</p>
                <p className={styles.cardTitleContent}>{events} Events</p>
            </div>
            <div>
            <p className={styles.cardTitle}>sport</p>
                <p className={styles.cardTitleContent}>{UpperCaseFirstWord(sport)} Events</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card