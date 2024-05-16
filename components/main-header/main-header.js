"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          {/* <img src={logoImg.src} alt="a plate with food on it" /> */}
          <Image src={logoImg} alt="a plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? styles.active : undefined
                }
              >
                Brows Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path === "/community" ? styles.active : undefined}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
