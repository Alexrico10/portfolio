"use client";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "../ui/Section/Section";
import styles from "./Projects.module.css";
import SectionIndicator from "../ui/SectionIndicator/SectionIndicator";
import { useTranslations } from 'use-intl';

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <Section id="projects">
      <SectionIndicator>{t("indicator")}</SectionIndicator>
      <div className={styles.projectsContainer}>
        <ProjectCard img="/portfolio-app.webp" title={t("project1.title")} description={t("project1.description")} />
        <ProjectCard img="/sinergia-app.webp" title={t("project2.title")} description={t("project2.description")} />
        <ProjectCard img="/sinergia-app.webp" title={t("project3.title")} description={t("project3.description")} />
      </div>
    </Section>
  )
};

export default Projects;