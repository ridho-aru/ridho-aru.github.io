import Image from 'next/image';
import LogoBottomRight from '../../assets/logos/logo-hero-bottom-right.svg';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={`${styles.bgOverlay} ${styles.bgBottomRight}`}>
        <Image src={LogoBottomRight} alt="" role="presentation" fill priority />
      </div>
      <SectionHeader title="Featured Projects" />

      <div className={styles.portfolioGrid}>
        {PORTFOLIO_ITEMS.map((item, index) => (
          <ProjectCard
            key={`portfolio-items-${item.title}-${index}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
