"use client";

import styles from "./Hero.module.css";
import { useTranslations } from "use-intl";


const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>
            {t("eyebrow")}
          </p>
          <h1 className={styles.heroTitle}>
            {t("title")} <span>{t("titleHighlight")}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {t("subtitle")}
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroFile}>
            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>{t("experienceLabel")}</span>
              <strong className={styles.heroFileText}>{t("experienceValue")}</strong>
            </div>

            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>{t("focusLabel")}</span>
              <strong className={styles.heroFileText}>{t("focusValue")}</strong>
            </div>

            <div className={styles.statGroup}>
              <span className={styles.heroFileLabel}>{t("statusLabel")}</span>
              <strong className={styles.heroFileStatus}>
                {t("statusValue")}
              </strong>
            </div>
          </div>
        </div>{" "}
      </div>
      <hr></hr>
    </section>
  );
};

export default Hero;
