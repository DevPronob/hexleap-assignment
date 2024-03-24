import Image, { StaticImageData } from 'next/image';
import React from 'react'
import styles from '../Card2/Card2.module.css'
interface CollectionData {
    id: number;
    name: string;
    img: StaticImageData; 
    time: string;
    day: string;
    text: string;
    buttonText: string;
    date: string;
  }
  

 
  interface CardProps {
    item: CollectionData; // Change 'playerData' to 'item'
}
const Card2 =(props: CardProps)=> {
    const {  name,img ,time,id,day, text, buttonText,date} = props.item;
  return (
    <div className={styles.card2Container}>
         <Image src={img} alt="Player 1" width={230} height={400} />
         <div>
            <h3 className={styles.card2Title}>{name}</h3>
            <p className={styles.date}>{date} | {day} | {time}</p>
            <p className={styles.text}>{text}</p>
            <button className={styles.card2Button} type="button">{buttonText}</button>
         </div>
    </div>
  )
}

export default Card2