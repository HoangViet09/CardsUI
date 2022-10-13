import React from "react";
import styles from "./CardsControl.module.css";

export default function CardsControl() {
  return (
    <div className={styles.cardsControlArea}>
      <button className={styles.buttonDeck}>Deck Cards 40</button>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonShuffle}>Shuffle</button>
        <button className={styles.buttonDraw}>Draw</button>
        <button className={styles.buttonReveal}>Reveal</button>
      </div>
      <button className={styles.buttonReset}>Reset</button>
    </div>
  );
}
