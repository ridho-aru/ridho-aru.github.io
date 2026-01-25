'use client';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Image from 'next/image';
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import profileImg from '@/assets/profile.webp';
import styles from './Sidebar.module.css';

// Context to share active state with children
const SidebarContext = createContext<{ activeSection: string }>({
  activeSection: 'home',
});

interface SidebarProps {
  sectionIds: string[];
  children: ReactNode;
}

export function Sidebar({ sectionIds, children }: SidebarProps) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Simple debounce
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const offset = 150;

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
              setActiveSection(id);
              break;
            }
          }
        }
      }, 50); // 50ms delay
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [sectionIds]);

  return (
    <SidebarContext.Provider value={{ activeSection }}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.profileWrapper}>
            <Image
              src={profileImg}
              alt="Achmad Ahlar Ridha"
              width={100}
              height={100}
              className={styles.profileImage}
              priority
            />
          </div>
          <div>
            <div className={styles.name}>Achmad Ahlar R.</div>
            <p className={styles.role}>Full Stack Developer</p>
          </div>
        </div>

        <nav className={styles.nav}>{children}</nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/ridho-aru/"
              target="_blank"
              rel="noreferrer"
              title="Archmad Ahlar Ridha's GitHub Profile"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/aar-ridho/"
              target="_blank"
              rel="noreferrer"
              title="Achmad Ahlar Ridha's LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} className={styles.socialIcon} />
            </a>
            <a
              href="https://www.instagram.com/_aru.ridho/"
              target="_blank"
              rel="noreferrer"
              title="Achmad Ahlar Ridha's Instagram Profile"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={20} className={styles.socialIcon} />
            </a>
          </div>
          <p className={styles.copyright}>
            2026 Achmad A.R. | Vibe Coded with Claude + Gemini
            <br />
            <span>
              Icons by <a href="https://icons8.com/">Icons8.com</a>,{' '}
              <a href="https://svgrepo.com/">svgrepo.com</a>.
            </span>
          </p>
        </div>
      </aside>
    </SidebarContext.Provider>
  );
}

interface SidebarNavItemProps {
  id: string;
  icon: ReactNode;
  children: ReactNode;
}

export function SidebarNavItem({ id, icon, children }: SidebarNavItemProps) {
  const { activeSection } = useContext(SidebarContext);
  const isActive = activeSection === id;

  return (
    <a
      href={`#${id}`}
      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
    >
      <span className={styles.navIcon}>{icon}</span>
      {children}
    </a>
  );
}
