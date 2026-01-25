import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// Components
import { Sidebar, SidebarNavItem } from '@/components/Sidebar';
import { NAVS } from '@/data/constants';
import styles from './layout.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Achmad Ahlar Ridha - Web Developer Portfolio',
  description:
    'Portfolio of Achmad Ahlar Ridha - Front End Web Developer specializing in React, Next.js, and modern JavaScript frameworks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sectionIds = [];
  const navs = [];

  for (const nav of NAVS) {
    sectionIds.push(nav.id);

    navs.push(
      <SidebarNavItem
        key={nav.id}
        id={nav.id}
        icon={nav.icon}
        title={nav.label}
      >
        {nav.label}
      </SidebarNavItem>,
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.container}>
          <Sidebar sectionIds={sectionIds}>{navs}</Sidebar>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
