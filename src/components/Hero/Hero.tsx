import Image from 'next/image';
import LogoBottomRight from '../../assets/logos/logo-hero-bottom-right.svg';
import LogoTopLeft from '../../assets/logos/logo-hero-top-left.svg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`${styles.section} ${styles.hero}`}>
      <div className={`${styles.bgOverlay} ${styles.bgBottomRight}`}>
        <Image
          src={LogoBottomRight}
          alt=""
          role="presentation"
          fill
          priority
          fetchPriority="high"
        />
      </div>
      <div className={`${styles.bgOverlay} ${styles.bgTopLeft}`}>
        <Image
          src={LogoTopLeft}
          alt=""
          role="presentation"
          fill
          priority
          fetchPriority="high"
        />
      </div>
      <div className={styles.heroContent}>
        <span className={styles.greeting}>👋 Hello, I'm</span>
        <h1 className={styles.heroTitle}>Achmad Ahlar Ridha (Aar)</h1>
        <h2 className={styles.heroSubtitle}>
          Building digital experiences with{' '}
          <span className={styles.accent}>Code</span> &{' '}
          <span className={styles.accent}>Creativity</span>.
        </h2>
        <p className={styles.heroText}>
          I'm a web developer specializing in Front End Development while
          maintaining strong Back End capabilities. Crafting robust web
          applications with modern technologies.
        </p>
        <div className={styles.heroActions}>
          <a href="#portfolio" className={styles.primaryBtn}>
            View Work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
