"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import { FlagES, FlagGB } from "./Flags";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const { locale, setLocale } = useLocaleSwitcher();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          {t("logo")}
        </Link>
        <ul className={styles.ul}>
          <li className={styles.li}><Link href="#profile" className={styles.a}>{t("links.profile")}</Link></li>
          <li className={styles.li}><Link href="#stack" className={styles.a}>{t("links.stack")}</Link></li>
          <li className={styles.li}><Link href="#experience" className={styles.a}>{t("links.experience")}</Link></li>
          <li className={styles.li}><Link href="#projects" className={styles.a}>{t("links.projects")}</Link></li>
          <li className={styles.li}><Link href="#education" className={styles.a}>{t("links.education")}</Link></li>
          <li className={styles.li}><Link href="#contact" className={styles.a}>{t("links.contact")}</Link></li>
        </ul>
        <div className={styles.langSwitcher}>
          <button
            type="button"
            className={styles.flagButton}
            aria-label="Español"
            aria-pressed={locale === "es"}
            data-active={locale === "es"}
            onClick={() => setLocale("es")}
          >
            <FlagES />
          </button>
          <button
            type="button"
            className={styles.flagButton}
            aria-label="English"
            aria-pressed={locale === "en"}
            data-active={locale === "en"}
            onClick={() => setLocale("en")}
          >
            <FlagGB />
          </button>
        </div>
      </nav>
      <hr></hr>
    </header>
  );
};

export default Navbar;
