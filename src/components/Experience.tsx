import Image from "next/image";
import expImg from "@/assets/right-section-experience-image.webp";
import { EXPERIENCES } from "../data/constants";
import styles from "./Experience.module.css";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <SectionHeader title="Experience" />

      <div className={styles.experienceGrid}>
        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, index) => (
            <div
              key={`experience-${exp.role}-${index}`}
              className={styles.timelineItem}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineDate}>{exp.period}</div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={`experience-point-${exp.role}-${point}-${i}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={expImg}
            alt="Experience Illustration"
            className={styles.experienceImage}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
