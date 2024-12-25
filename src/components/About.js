import React from 'react';
import styles from './About'; // Исправлен путь и формат импорта

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>about</h3>
          <p className={styles.subtitle}>This is some text inside of a div block.</p>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <img src="img/about1.jpg" alt="img" />
            <h4>ABOUT one</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
          </div>
          <div className={styles.card}>
            <img src="img/about2.jpg" alt="img" />
            <h4>ABOUT two</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
