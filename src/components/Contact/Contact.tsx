import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactCard}>
          <h2>Let&apos;s Work Together</h2>
          <p>
            I&apos;m currently available for full-time or part-time job
            opportunities. If you have a project that needs some creative touch,
            let&apos;s chat.
          </p>
          <a href="mailto:aar.frontline@gmail.com" className={styles.emailLink}>
            aar.frontline@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
