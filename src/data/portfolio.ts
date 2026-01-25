import type { StaticImageData } from "next/image";
import imgUjian from "@/assets/projects/aplikasi-ujian.webp";
import imgBeasiswa from "@/assets/projects/beasiswa-sfd.webp";
import imgBintang from "@/assets/projects/bintang7.webp";
import imgEiger from "@/assets/projects/eigeradventure.webp";
import imgEigerCms from "@/assets/projects/eigeradventure-cms.webp";
import imgModuitAdvisor from "@/assets/projects/moduit-advisor-beta.webp";
import imgModuitAdvisorLogin from "@/assets/projects/moduit-advisor-beta-login.webp";
import imgModuitEquityLogin from "@/assets/projects/moduit-equity-login.webp";
import imgModuitEquityPM from "@/assets/projects/moduit-equity-pm.webp";
import imgModuitReksa from "@/assets/projects/moduit-reksa.webp";
import imgModuitBeyond from "@/assets/projects/moduit-reksa-beyond.webp";
import imgMultimedia from "@/assets/projects/multibank.webp";
import imgPeat from "@/assets/projects/people-for-peat.webp";
import imgSisca from "@/assets/projects/sisca.webp";
import imgSiukat from "@/assets/projects/siukat.webp";
import imgVerif from "@/assets/projects/verif-akademik.webp";

export interface PortfolioItem {
  title: string;
  category: string;
  tech: string[];
  images: StaticImageData[];
  link?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "People for Peat",
    category: "Non-Profit",
    tech: ["Next.js", "React"],
    images: [imgPeat],
    link: "https://web.archive.org/web/20250713132121/https://peopleforpeat.org/",
  },
  {
    title: "Moduit Reksa",
    category: "Fintech",
    tech: ["React"],
    images: [imgModuitReksa, imgModuitBeyond],
    link: "https://reksa.moduit.id/",
  },
  {
    title: "Moduit Advisor Beta",
    category: "Fintech Dashboard",
    tech: ["Next.js"],
    images: [imgModuitAdvisor, imgModuitAdvisorLogin],
    link: "https://advisor-beta.moduit.id/",
  },
  {
    title: "Moduit Equity",
    category: "Fintech Dashboard",
    tech: ["React"],
    images: [imgModuitEquityLogin, imgModuitEquityPM],
  },
  {
    title: "Bintang Toedjoe",
    category: "Corporate",
    tech: ["Next.js"],
    images: [imgBintang],
    link: "https://bintang7.com/",
  },
  {
    title: "Eiger Adventure",
    category: "E-commerce",
    tech: ["Next.js", "React"],
    images: [imgEiger],
    link: "https://eigeradventure.com/",
  },
  {
    title: "Eiger Atom CMS",
    category: "Internal Tool",
    tech: ["Vue.js"],
    images: [imgEigerCms],
  },
  {
    title: "Beasiswa SFD",
    category: "Web App",
    tech: ["React"],
    images: [imgBeasiswa],
  },
  {
    title: "Multi Bank",
    category: "Finance",
    tech: ["React", "Node.js"],
    images: [imgMultimedia],
  },
  {
    title: "Aplikasi Ujian",
    category: "Education",
    tech: ["React", "MySQL"],
    images: [imgUjian],
  },
  {
    title: "SISCA",
    category: "System",
    tech: ["Laravel"],
    images: [imgSisca],
  },
  {
    title: "Verifikasi Akademik",
    category: "Education",
    tech: ["React", "Express", "MySQL"],
    images: [imgVerif],
  },
  {
    title: "SIUKAT",
    category: "Management",
    tech: ["React", "MySQL"],
    images: [imgSiukat],
  },
];
