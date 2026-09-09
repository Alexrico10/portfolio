"use client";

import Section from "../ui/Section/Section";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import styles from "./Education.module.css";
import { useTranslations } from "use-intl";


const Education = () => {
  const t = useTranslations("Education")
  const data = [
    {
      name: "Curso de Python — Programación",
      location: "Formación Tajamar, Madrid",
      date: "2025"
    },
    {
      name: "CFGS Desarrollo de Aplicaciones Web",
      location: "STUCOM Pelai (LinkiaFP), Madrid",
      date: "2024"
    },
    {
      name: "CFGS Desarrollo de Aplicaciones Multiplataforma",
      location: "FP Teide IV, Madrid",
      date: "2022"
    },
    {
      name: "CFGM Sistemas Microinformáticos y Redes",
      location: "IES Alonso de Avellaneda, Alcalá de Henares",
      date: "2020"
    },
  ]
  return (
    <Section id="education">
      <div className={styles.educationContainerLeft}>
        <SectionIndicator>{t("indicator")}</SectionIndicator>
        <div className={styles.educationContainerRight}>
          
        </div>
      </div>
    </Section>
  )
}

export default Education;