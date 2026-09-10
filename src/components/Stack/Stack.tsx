"use client";

import styles from "./Stack.module.css";
import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import { useTranslations } from "use-intl";



const Stack = () => {
  const t = useTranslations("Stack");

  const stackBackend = ["C# · .NET", "Node.js · NestJS", "Microsoft SQL Server", "PostgreSQL", "Prisma"]
  const stackFrontend = ["React · Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3"]
  const stackNoCode = ["WordPress", "Elementor · Divi", "SEO", "Zoho Forms", "Catalyst"]
  const stackTools = ["VS Code", "Postman", "Jira", "Github"]

  return (
    <Section id="stack">
      <div className={styles.stackContent}>
        <SectionIndicator>{t("indicator")}</SectionIndicator>
        <div className={styles.stackContentText}>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("backendTitle")}</p>
            {stackBackend.map((item) => (
              <p className={styles.stackText} key={item}>{item}</p>
            ))}
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("frontendTitle")}</p>
            {stackFrontend.map((item) => (
              <p className={styles.stackText} key={item}>{item}</p>
            ))}
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("cmsTitle")}</p>
            {stackNoCode.map((item) => (
              <p className={styles.stackText} key={item}>{item}</p>
            ))}
          </div>
          <div className={styles.stackGroup}>
            <p className={styles.stackGroupTitle}>{t("toolsTitle")}</p>
            {stackTools.map((item) => (
              <p className={styles.stackText} key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stack;
