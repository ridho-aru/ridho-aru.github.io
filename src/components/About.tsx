import Image from 'next/image';
import profileImg from '@/assets/profile-1.webp';
import styles from './About.module.css';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader title="About Me" />

      <div className={styles.aboutGrid}>
        <div>
          <p className={styles.textLg}>
            Passionate about creating intuitive and dynamic user experiences. My
            journey in web development started 2+ years ago, exploring the vast
            landscape of JavaScript libraries and frameworks.
          </p>
          <p className={styles.text}>
            While my expertise lies in Front End development using React and
            Modern JavaScript, I am equally comfortable diving into Back End
            technologies to build RESTful APIs and handle data exchange. I
            believe in writing clean, maintainable code that solves real-world
            problems.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Residence</span>
              <span className={styles.value}>Tangerang Selatan, Indonesia</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>aar.frontline@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutImageWrapper}>
          <Image
            src={profileImg}
            alt="Working portrait"
            className={styles.aboutImage}
            width={400}
            height={500}
            priority
          />
          <div className={styles.experienceBadge}>
            <span className={styles.years}>2+</span>
            <span className={styles.badgeText}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
