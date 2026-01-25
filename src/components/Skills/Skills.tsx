import Image from 'next/image';
import LogoTopLeft from '../../assets/logos/logo-hero-top-left.svg';
import { SKILLS } from '../../data/constants';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.bgOverlay} ${styles.bgTopLeft}`}>
        <Image src={LogoTopLeft} alt="" role="presentation" fill priority />
      </div>
      <SectionHeader title="Technical Skills" />

      <div className={styles.skillsContainer}>
        <div>
          <h3 className={styles.subHeading}>Frontend Development</h3>
          <div className={styles.skillList}>
            {SKILLS.frontend.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillIconWrapper}>
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <span>💻</span>
                  )}
                </div>
                <div className={styles.skillDetails}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.progressBarBg}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.subHeading}>Backend & Database</h3>
          <div className={styles.skillList}>
            {SKILLS.backend.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillIconWrapper}>
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <span>⚙️</span>
                  )}
                </div>
                <div className={styles.skillDetails}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.progressBarBg}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
