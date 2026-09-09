"use client";

import styles from "./Stack.module.css";
import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import { useTranslations } from "use-intl";

const Stack = () => {
  const t = useTranslations("Stack");
  return (
    <Section id="stack">
      <div className={styles.stackContent}>
        <SectionIndicator>{t("indicator")}</SectionIndicator>
        <div className={styles.stackContentText}>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("backendTitle")}</p>
            <p className={styles.stackText}>C# · .NET</p>
            <p className={styles.stackText}>Node.js</p>
            <p className={styles.stackText}>Microsoft SQL Server</p>
            <p className={styles.stackText}>PostgreSQL</p>
            <p className={styles.stackText}>Prisma</p>
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("frontendTitle")}</p>
            <p className={styles.stackText}>React</p>
            <p className={styles.stackText}>JavaScript ES6+</p>
            <p className={styles.stackText}>TypeScript</p>
            <p className={styles.stackText}>HTML5</p>
            <p className={styles.stackText}>CSS3</p>
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("cmsTitle")}</p>
            <p className={styles.stackText}>WordPress</p>
            <p className={styles.stackText}>Elementor · Divi</p>
            <p className={styles.stackText}>SEO</p>
            <p className={styles.stackText}>Zoho Forms</p>
            <p className={styles.stackText}>Catalyst</p>
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("toolsTitle")}</p>
            <p className={styles.stackText}>VS Code</p>
            <p className={styles.stackText}>Postman</p>
            <p className={styles.stackText}>Jira</p>
            <p className={styles.stackText}>Github</p>
            <p className={styles.stackText}>Postman</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stack;
