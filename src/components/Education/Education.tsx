"use client";

import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import EducationItem from "../EducationItem/EducationItem";
import styles from "./Education.module.css";
import { useTranslations } from "use-intl";

const Education = () => {
  const t = useTranslations("Education");

  return (
    <Section id="education">
      <div className={styles.educationContainer}>
        <div>
          <SectionIndicator>{t("indicator")}</SectionIndicator>
        </div>
        <div className={styles.educationContainerRight}>
          <EducationItem
            courseName={t("course1.name")}
            courseLocation={t("course1.location")}
            courseDate={t("course1.date")}
          />
          <EducationItem
            courseName={t("course2.name")}
            courseLocation={t("course2.location")}
            courseDate={t("course2.date")}
          />
          <EducationItem
            courseName={t("course3.name")}
            courseLocation={t("course3.location")}
            courseDate={t("course3.date")}
          />
          <EducationItem
            courseName={t("course4.name")}
            courseLocation={t("course4.location")}
            courseDate={t("course4.date")}
          />
        </div>
      </div>
    </Section>
  );
};

export default Education;
