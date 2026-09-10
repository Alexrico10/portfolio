"use client";

import Divider from "../ui/Divider/Divider";
import styles from "./Footer.module.css";
import { useTranslations } from "use-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Divider />
      <div className={styles.footerContent}>
        <div className={styles.footerGroup}>
          <p className={styles.footerLabel}>{t("emailLabel")}</p>
          <a href="mailto:Alexrico_10@hotmail.com" className={styles.footerLink}>
            Alexrico_dev@hotmail.com
          </a>
        </div>

        <div className={styles.footerGroup}>
          <p className={styles.footerLabel}>{t("phoneLabel")}</p>
          <a href="tel:+34653215424" className={styles.footerLink}>
            653 215 424
          </a>
        </div>

        <div className={styles.footerGroup}>
          <p className={styles.footerLabel}>{t("locationLabel")}</p>
          <p className={styles.footerValue}>{t("locationValue")}</p>
        </div>

        <div className={styles.footerGroup}>
          <p className={styles.footerLabel}>{t("linksLabel")}</p>
          <a href="https://github.com/Alexrico10" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/alejandro-rico-jim%C3%A9nez-946500193/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LinkedIn ↗
          </a>
        </div>
      </div>

      <p className={styles.footerCopyright}>
        © {year} Alejandro Rico — {t("role")}
      </p>
    </footer>
  );
};

export default Footer;
