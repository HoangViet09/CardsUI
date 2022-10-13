import React from "react";
import styles from "./CardsInfo.module.css";

export default function CardsInfo() {
  return (
    <div className={styles.cardsInfoArea}>
      <div className={styles.cardsRepresent}>
        <div className={styles.cardsRepresentContent}>
          <span>10_♣️</span>
        </div>
        <div className={styles.cardsRepresentContent}>
          <span>10_♥️</span>
        </div>
        <div className={styles.cardsRepresentContent}>
          <span>10_♥️</span>
        </div>
      </div>
      <div className={styles.cardsPoint}>Point: 15000</div>
      <div className={styles.cardsUserName}>Nguyễn Hoàng Việt</div>
      <div className={styles.cardsTotalScore}>Poin of 3 cards: 30</div>
    </div>
  );
}
