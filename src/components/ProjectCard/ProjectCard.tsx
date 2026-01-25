'use client';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './ProjectCard.module.css';

export interface ProjectItem {
  title: string;
  category: string;
  tech: string[];
  images: StaticImageData[];
  link?: string;
}

export default function ProjectCard({ item }: { item: ProjectItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(
      (prev) => (prev - 1 + item.images.length) % item.images.length,
    );
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageHolder}>
        <Image
          src={item.images[currentSlide]}
          alt={item.title}
          fill
          className={styles.projectImage}
        />
        {item.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className={styles.sliderBtnLeft}
              aria-label="Previous image"
            >
              <IconChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className={styles.sliderBtnRight}
              aria-label="Next image"
            >
              <IconChevronRight size={18} />
            </button>
          </>
        )}
        <div
          className={`${styles.projectOverlay} ${!item.link ? styles.noLink : ''}`}
        >
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewBtn}
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className={styles.projectInfo}>
        <span className={styles.projectCategory}>{item.category}</span>
        <h3 className={styles.projectTitle}>{item.title}</h3>
        <div className={styles.projectTechStack}>
          {item.tech.map((t) => (
            <span key={t} className={styles.projectTech}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
