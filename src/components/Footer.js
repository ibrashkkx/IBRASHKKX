import React from 'react';
import styles from './Footer'; // Исправлен путь и формат импорта

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerDesc}>
        <div className={styles.container}>
          <div className={styles.footerDescContainer}>
            <div className={styles.footerAbout}>
              <h4>about velocity</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className={styles.footerLinks}>
              <h4>useful links</h4>
              <ul>
                <li><a href="#!">Phasellus gravida semper nisi</a></li>
                <li><a href="#!">Suspendisse nisl elit</a></li>
                <li><a href="#!">Dellentesque habitant morbi</a></li>
                <li><a href="#!">Etiam sollicitudin ipsum</a></li>
              </ul>
            </div>
            <div className={styles.footerSocial}>
              <h4>social</h4>
              <ul>
                <li>
                  <img src="/img/icon-tw.svg" alt="twitter" />
                  <a href="#!">Twitter</a>
                </li>
                <li>
                  <img src="/img/icon-fb.svg" alt="facebook" />
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <img src="/img/icon-pt.svg" alt="pinterest" />
                  <a href="#!">Pinterest</a>
                </li>
                <li>
                  <img src="/img/icon-google.svg" alt="google" />
                  <a href="#!">Google</a>
                </li>
                <li>
                  <img src="/img/icon-wb.svg" alt="webflow" />
                  <a href="#!">Webflow</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopy}>
        <div className={styles.container}>
          <p>Copyright Velocity Inc. Made in Webflow.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
